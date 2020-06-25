import { openCli, rl } from './functions/cli'
import render from './functions/generated_arquive'

const main =  async () => {
    await openCli()
    await render()
    rl.close()
}

main()