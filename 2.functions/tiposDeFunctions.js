// Tipos de functions

// funções qu executam tarefas mas  não retornam valores.
function mostrarNome(){
    console.log('Matheus')
}

mostrarNome();

// funções que executam tarefas e retornam valores.

function somarMaisUm(valor){
     return valor + 1;
}
 
let resultado = somarMaisUm(valor);

console.log(resultado)