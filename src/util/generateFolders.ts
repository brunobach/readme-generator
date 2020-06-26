import fs from 'fs'
import path from 'path'

interface IsFolders {
    [uniqueKey: string]: any,
    depth?: any,
    parentFolder?: any,
    path?: any
    name?: string,
    folders?: string[],
    files?: string[],
    logged?: boolean,
    parsed?: boolean,
    marked?: boolean
} 


const searchPath: string = path.resolve(process.argv[2] || '.');
const key: string = searchPath;
const resolveWindow = path.resolve(searchPath).replace(/\\/g, '/')
const startFolder: string = resolveWindow.split('/')[resolveWindow.split('/').length - 1]
const startDepth: number = searchPath.split('/').length - 1;
let folders: IsFolders = {};
let depth: number = 0;
let exported: boolean = false;
let currentWorkingDirectory: string = process.cwd();
let outputFileName: string = 'structure.txt'
var markdownText: string = '';

const folderIgnoreList: string[] = [
    '.git',
    'node_modules'
];

const getFolders = (path: string) => {
    fs.readdir(path, (err, list) => {
        if (err) return console.log(err)
        list.map(item => {
            
            if (fs.lstatSync(path + '/' + item).isDirectory()
                && folderIgnoreList.indexOf(item) === -1) {
                let folderDepth = path.split('/').length;
                if (folderDepth > depth) {
                    depth = folderDepth;
                }
                let uniqueKey = path + '/' + item.replace(/\//g, '');
                folders[uniqueKey] = {
                    depth: folderDepth,
                    parentFolder: path,
                    path: path + '/' + item,
                    name: item,
                    folders: [],
                    files: [],
                    logged: false,
                    parsed: false,
                    marked: false
                };
                getFolders(path + '/' + item)
            }
        });
        getFilesInFolders();
    });
}
const getFilesInFolders = () => {
    for (let key in folders) {
        if (folders.hasOwnProperty(key)) {
            getFiles(folders[key].path, key);
        }
    }
}

const getFiles = (path: string, key: string) => {
    fs.readdir(path, function (err, list) {
        list.forEach(function (item) {
            if (!fs.lstatSync(path + '/' + item).isDirectory()) {
                if (folders[key].files.length === 0 || folders[key].files.indexOf(item) === -1) {
                    folders[key].files.push(item);
                }
            } else {
                if (folders[key].folders.indexOf(item) === -1) {
                    folders[key].folders.push(item);
                }
            }
        });
        folders[key].parsed = true;
        listFolders();
    });
}

const listFolders = () => {
    let allParsed = true;
    let numFolders = 0;
    for (var key in folders) {
        if (folders.hasOwnProperty(key)) {
            numFolders++;
            if (!folders[key].logged || !folders[key].parsed) {
                allParsed = false;
            }
            if (folders[key].parsed && !folders[key].logged) {
                folders[key].logged = true;
            }
        }
    }
    if (allParsed && !exported) {
        exported = true;
        generateMarkdown();
    }
}

const generateMarkdown = () => {
    addFolderName(key, 1);
    addNameConnection();
    try {
        fs.writeFileSync(currentWorkingDirectory + '/' + outputFileName, markdownText)
    } catch (e) {
        console.error(e);
    }
}

const addFolderName = (name: string, index: number) => {
    if (folders[name] !== undefined) {      
        if (folders[name].marked) {
           
            return;
        }
        var indent = (folders[name].depth - startDepth) * 4;
        markdownText += '';
        for (var i = 0; i < indent; i++) {
            markdownText += ' ';
            
        }
        if (index === 1) {
            markdownText += '📂 -- ' + startFolder + '\n';
            
        } else {
            markdownText += '📂 -- ' + folders[name].name + '\n';
        }
        folders[name].files.map((itemName: any) => {
            addFileName(itemName, indent)
        })

        folders[name].marked = true;
        folders[name].folders.map((itemName: string) => {
            let path = name + '/' + itemName;
            addFolderName(path, 2);
        });
        
    }
}

const addFileName = (name: any, indent: number) => {
    var indent = indent + 4;
    markdownText += '';
    for (var i = 0; i < indent; i++) {
        markdownText += ' ';
    }
    markdownText += '|-- ' + name + '\n';
}

const addNameConnection = () => {
    var lines = markdownText.split('\n');
    for (var i = 1; i < lines.length; i++) {
        var line1 = lines[i - 1];
        var line2 = lines[i];
        for (var j: any = 0; j < line2.length; j++) {
            var char1 = line1.charAt(j); 
            var char2 = line2.charAt(j);
            var foundSibling = false;
            for (var k = i; k < lines.length; k++) {
                var charBelow = lines[k].charAt(j);
                if (charBelow !== '|' && charBelow !== ' ') {
                    break;
                }
                if (charBelow === '|') {
                    foundSibling = true;
                }
            }
            if (foundSibling && char1 === '|' && char2 === ' ') {
                line2 = line2.replace(j, '|');
                lines[i] = line2;
            }
        }
    }
    markdownText = lines.join('\n');
    
}

export const main = (path: string) => {
    return new Promise(resolve => {
      resolve(getFolders(path))
    })
}
