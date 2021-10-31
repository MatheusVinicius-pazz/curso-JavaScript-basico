// pode ser faita também comparações com valores ão boleanos.

// O resultado dependerá se os valores estiverem dentro dos valores considerados Falsy 
//São eles: 
//undefined
//null
//0
//false
// ' '
// NaN - not a number 
 
// Os demais são os chamados Truthy

console.log(false  || 'Matheus');


let corPersonalizada = '';
let corPadrao = 'Verde';
let corDePerfil = corPersonalizada || corPadrao;

console.log(corDePerfil);


