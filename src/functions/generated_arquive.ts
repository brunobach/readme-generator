import fs, { writeFileSync } from 'fs';
import path from 'path';
import ejs from 'ejs';

import { infos } from './cli'

const layoutSrc = path.join(__dirname, '..', 'layouts', 'layout.md')
const distSrc = path.join(__dirname, '..', 'dist', 'README.md')

async function render() {
    try {
        await fs.mkdirSync('dist', {recursive: true})

        const html = await ejs
           .renderFile(layoutSrc, infos, {async: true}) 
           .then(output => output)

           await writeFileSync(distSrc, html, 'utf8')
    } catch (e) {
        console.log(e)
    }
}

export default render