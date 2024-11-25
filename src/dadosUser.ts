//Definindo o tipo endereço e seus atributos 
type  Endereco ={
  rua: string;
  numero: number;
  cidade: string;
}

//Definindo o tipo usuario e seus atributos
type Usuario = {
    nome: string;
    idade: number;
    endereco: Endereco;
}

//Criando um novo objeto com os parametros do tipo endereço 
const enderecoUser: Endereco = {
    rua: "avenida paraiso", 
    numero: 32, 
    cidade:"são luis"
}

//Criando um novo objeto com os parametros do tipo Usuario
const User : Usuario = {
    nome: "Mateus",
    idade: 24,
    endereco: enderecoUser, // Adicionando o objeto enderecoUser  
}

//Criando uma função para listar as informações do usuario e seu endereço
function listarEnderecoUser () {
    return `O usuário ${User.nome} mora na rua ${enderecoUser.rua} número ${enderecoUser.numero} em cidade ${enderecoUser.cidade}`
}

console.log(listarEnderecoUser ());