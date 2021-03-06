import readline from 'readline';
import path from 'path';
import fs from 'fs';
import boxen from 'boxen';

import {main} from '../util/generateFolders'


const config_boxen = {
    padding: 1,
    margin: 1,
    borderColor: 'green',
    backgroundColor: 'gray'
}
const success_msg = `/dist/README.md foi gerado com sucesso!.
Obrigado por usar o gerador de README.md 😍`

const srcFolders = path.join(__dirname, '..', '..')
const sendMessageConsole = () => process.stdout.write(boxen(success_msg, config_boxen))

export const infos = {
    project_name: '',
    project_subtitle: '',
    project_description: '',
    project_link: '',
    project_command: '',
    project_technologies: 'NODE',
    project_markdown: '',
    user_name: '',
    user_linkedin: '',
    user_github: ''
}

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function get_name() {
    return new Promise(resolve => {
        rl.question('🤔 > Qual o nome do Projeto no Github: ', resp => {
            infos.project_name = resp
            resolve(resp)
        })
    })
};

function get_linkProject() {
    return new Promise(resolve => {
        rl.question('🤔 > Qual o link do projeto Github: ', resp => {
            infos.project_link = resp
            resolve(resp)
        })
    })
};

function get_subtitle() {
    return new Promise(resolve => {
        rl.question('🤔 > Qual o subtitulo do projeto: ', resp => {
            infos.project_subtitle = resp
            resolve(resp)
        })
    })
};

function get_description() {
    return new Promise(resolve => {
        rl.question('🤔 > Qual A Descricao: ', resp => {
            infos.project_description = resp
            resolve(resp)
        })
    })
}
function get_cmd() {
    return new Promise(resolve => {
        rl.question('🤔 > Qual o cmd install: ', resp => {
            infos.project_command = resp
            resolve(resp)

        })
    })
}
function get_username() {
    return new Promise(resolve => {
        rl.question('🤔 > Seu nome: ', resp => {
            infos.user_name = resp
            resolve(resp)
        })
    })
}
function get_userLinkedin() {
    return new Promise(resolve => {
        rl.question('🤔 > Seu usuario Linkedin: ', resp => {
            infos.user_linkedin = resp
            resolve(resp)
        })
    })
}
function get_userGit() {
    return new Promise(resolve => {
        rl.question('🤔 > Seu usuario github: ', resp => {
            infos.user_github = resp
            resolve(resp)
        })
    })
}
function get_technologies() {
    return new Promise(resolve => {
        rl.question('🤔 > Qual as Tecnologias utilizadas: ', resp => {
            infos.project_technologies = resp
            resolve(resp)
        })
    })
}


function read_structure() {
    return new Promise((resolve, reject) =>{          //\
        try {                                        // \\
            const get_markdownText = fs.readFileSync(path.join(__dirname, '..', 'structure.txt')).toString()
            infos.project_markdown = get_markdownText    
            resolve()                             //       \\
        } catch (e) {                            //         \\
            reject(e)                           //           \\
        }                                      //             \\
    })                                        //git: brunobach \\
                                             // IN:  bruno-bach \\
}                                           //                   \\
                                           //                     \\
export const openCli = async () => {      //                       \\
        main(srcFolders)                 // Cria estrutura de pastas\\
        await get_username()            //      Nome do criador      \\
        await get_name()               //       Nome do projeto       \\
        await get_subtitle()          //     Subtitulo do projeto      \\
        await get_linkProject()      //       Link do projeto git       \\
        await get_userLinkedin()    //          Usuario Linkedin         \\
        await get_userGit()        //            Usuario GitHub           \\
        await get_technologies()   //            Nome do criador            \\
        await get_description()  //           Descricao do projeto          \\ 
        await get_cmd()         //             Comando de install            \\
        await read_structure() //        Leitura da estrutura de pastas       \\
        sendMessageConsole()  //           Envia a mensagem de sucesso         \\
}
