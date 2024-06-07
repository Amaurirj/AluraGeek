import { conectaApi } from "./conectaApi.js";

//Função para construir o produto inserindo o nome, valor e imagem no formulário
const formulario = document.querySelector("[data-formulario]");


async function criarProduto(evento) {
evento.preventDefault();

const nome = document.querySelector("[data-nome]").value;
const valor = document.querySelector("[data-valor]").value;
const imagem = document.querySelector("[data-imagem]").value;

await conectaApi.criaProduto(nome , valor , imagem);

}

//evento botão inserir o novo produto na lista
formulario.addEventListener("submit", evento => criarProduto(evento));


// Selecionando os campos do formulário
const nameInput = document.getElementById('campo__nome');
const valueInput = document.getElementById('campo__valor');
const imageInput = document.getElementById('campo__imagem');

function limparFormulario() {
  nameInput.value = '';
  valueInput.value = '';
  imageInput.value = '';
}

const limparButton = document.getElementById('limpar'); 
limparButton.addEventListener('click', limparFormulario); // evento de click para limpar o formulario