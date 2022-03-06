/*
    Exercícios
*/

// 1 - Declare uma variável de nome weight
{
    let weight;
}

// 2 - Que tipo de dados é a variável acima?
{
    console.log(typeof weight); // Resposta: undefined
}

// 3 - Declare uma variável e atribua valores pra cada um dos dados:
/**
 * name: String
 * age: Number (int)
 * stars: Number (float)
 * isSubscribed: Boolean
 */
{
    let name = "Lucas"
    let age = 30;
    let stars = 4.8;
    let isSubscribed = true;
}
/*
// 4 - A variável student abaixo é de que tipo de dado?

    4.1 atribua a ela as mesmas propriedades e valores do exercicio 3

    4.2 mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        atenção, subistitua <name> <age> e <weight> pelos valores de cada
        propriedade do objeto
*/

    let student = {}; // tipo Object

    student = {
        name: "Lucas",
        age: 30,
        weight: 74.8,
        isSubscribed: true,
    }

    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} `);


// 5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente um Array vazio. 

    let students = [];


// 6 - Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4, (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
{
    students = [
        student
    ]
    console.log(students);
}

// 7 - coloque no console o valor da posição zero do Array acima
    console.log(students[0]);    

// 8 - Crie um novo student e coloque na posição 1 do array students
{
    const jhon = {
        name: "Jhon",
        age: 23,
        weight: 84.8,
        isSubscribed: true,
    }
    students = [
        student,
        jhon
    ]
    // students[1] = jhon

    console.log(students);
}

// 9 - sem rodar o código responda qual é a resposta do código abaixo e pq? após sua resposta, rode o código e veja se vc acertou
{
    console.log(a);
    var a = 1
    // R: undefined pq é o valor atribuido no momento da execução do log, pois a variável só foi iniciada pelo hoisting e não teve outro valor atribuido
}

// 10 - trocando o var pra let, oq vai acontecer na questão a cima?
{
    console.log(a);
    let a = 1
    // R: retorna erro pq a variável ainda não foi iniciada
}
