/*
    Scope
        - determina a visibilidade de algumas variaveis em JS

    Block statement
        - declaração de bloco
        - o bloco cria um novo escopo ( block-scoped )

        iniciando um bloco

        { o bloco inicia aqui

            aqui é um bloco onde podemos colocar qualquer codigo

        } o bloco termina aqui
 */

// var é local e global
// hoisting - inicia todas as vars atribuindo undefined antes de executar o codigo

console.log('> existe x antes do bloco? ', x);

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x);

/*
    > retorna undefined, mesmo o var sendo declarado depois dele pois o
    JS tem um comportamento de iniciar todas as vars do codigo antes de
    executar os comandos e atribir os valores, ou seja, a var x foi iniciada
    com um valor undefined e somente depois da atribuição do valor ela passa 
    a possuir o valor. oq acontece é basicamente:

    var x;      // aqui recebe undefined

    console.log('> existe x antes do bloco? ', x); // retorna undefined

    {
        x = 0   // recebe um valor
    }

    console.log('> existe x depois do bloco? ', x); //exibe o valor recebido
*/
