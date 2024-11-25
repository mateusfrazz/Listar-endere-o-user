"use strict";
//Criando um novo objeto com os parametros do tipo endereço 
const enderecoUser = {
    rua: "avenida paraiso",
    numero: 32,
    cidade: "são luis"
};
//Criando um novo objeto com os parametros do tipo Usuario
const User = {
    nome: "Mateus",
    idade: 24,
    endereco: enderecoUser, // Adicionando o objeto enderecoUser  
};
//Criando uma função para listar as informações do usuario e seu endereço
function listarEnderecoUser() {
    return `O usuário ${User.nome} mora na rua ${enderecoUser.rua} número ${enderecoUser.numero} em cidade ${enderecoUser.cidade}`;
}
console.log(listarEnderecoUser());
