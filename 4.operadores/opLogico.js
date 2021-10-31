// Operadores lógicos

// Operador e(&&)

// O Operador && só retornará TRUE se o os dois operandos forem TRUE.

console.log(true && true);
//ou
console.log(true && false);

// veja um exemplo mais prático.

// Três condições são analisadas para um aluno ser aprovado em uma escola, são eles: media maior ou igua à 6, bom comportamento e frequência maior que 50%.

let media = 5;
let nota = media >= 6 ? true : false;
let bomComportamento = false;
let analiFrequencia = 50;
let frequencia = analiFrequencia > 50 ? true : false;

let aprovado = nota || bomComportamento || frequencia; 
 
console.log('Aluno aprovado '+aprovado);

// Operador ou (||)
// Retorna true  se pelo menos um dos operandos seja TRUE.

// Aproveitando o exemplo de cima da escola.
// E alterando alguns dos valores para o resultado false.


//console.log(nota || bomComportamento || frequencia);


// Operador NOT (!)
// Usado para fazer um negação.

let alunoReprovado = !aprovado;

console.log('Aluno reprovado: '+alunoReprovado);