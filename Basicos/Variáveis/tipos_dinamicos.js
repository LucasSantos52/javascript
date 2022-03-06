/*
    Javascript é uma linguagem fracamente tipada

       > Fracamente Tipada
            - não é necessário informar o tipo de dado da variável
                ex.:
                    var info = 'Lucas'
                    info = 30

                a var info do exemplo a cima começa recebendo um valor do tipo
                string, e depois recebe um valor do tipo number sem problema

       > Fortemente tipada
            - necessário informar o tipo de dado
                ex.: 
                    string info = "Lucas"
                    info = 30

                retorna um erro pois não é possivel atribuir um tipo int
                para uma variável iniciada com tipo string
*/

var clima = ""
clima = 0
console.log(typeof clima);

let periodo = ""
periodo = 0
console.log(typeof periodo);

// Consts não podem ter o tipo de valor alterado