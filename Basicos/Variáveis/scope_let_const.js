/*
    let e const são locais e só funcionam no escopo onde foram criadas.
*/

//LET
{
        
    // console.log('> existe x antes do bloco? ', x); 
    // retorna erro pq a variável n existe nesse contexto

    {
        // console.log('> existe x antes do bloco? ', x);
        //retorna um erro pq não consegue acessar o valor da variavel 
        //antes de sua inicialização
        
        let x = 0
        
        console.log('> existe x antes do bloco? ', x);
        //retorna o valor normalmente da variável
    }

    // console.log('> existe x depois do bloco? ', x);
    //retorna erro pq a variável let foi criada dentro de outro escopo
}

{
    let x = 1
    {
        x = 0
        //retorna o valor normalmente da variável
        console.log('> existe x antes do bloco? ', x);
    }

    //retorna o valor 0 pq mesmo sendo alterado em outro escopo, ela foi criada neste escopo
    console.log('> existe x depois do bloco? ', x);
}



// CONST
{
    let x = 1
    {
        const x = 0
        console.log('> existe x antes do bloco? ', x);
        // apesar do nome da variável ser o mesmo, elas estão em escopos diferentes
        // uma const n pode ter o valor alterado
    }

    console.log('> existe x depois do bloco? ', x);
    //retorna 1
}
