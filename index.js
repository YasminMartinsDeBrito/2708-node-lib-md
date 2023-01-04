import fs from 'fs';
import chalk from "chalk";

console.log(chalk.red('olá mundo'));
console.log(chalk.bgBlue('Yasmin Martins de Brito'));
console.log(chalk.green('Hellena Victoria'));

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'))
}
//async/await
async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    }catch(erro){
        trataErro(erro)
    }
}


//promisse con then()
//    function pegaArquivo(caminhoDoArquivo){
//        const encoding = 'utf-8';
//        fs.promises.readFile(caminhoDoArquivo, encoding)
//        .then((texto) => console.log(chalk.green(texto)))
//        .catch(trataErro)
//    }


//function pegaArquivo(caminhoDoArquivo){
//    const encoding = 'utf-8';
//    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//        if(erro){
//            trataErro(erro);
//        }
//        console.log(chalk.bgYellow(texto));
//   })
//
pegaArquivo('./arquivos/')
pegaArquivo('./arquivos/texto.md')