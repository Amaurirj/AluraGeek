import { conectaApi } from "./conectaApi.js";

//construindo o card de produtos
const lista = document.querySelector("[data-lista]");

function constroiCard(nome, valor, imagem) {
  const produto = document.createElement("li");
  produto.className = "produtos__item";
  produto.innerHTML = `
    <div class="card" id="card__stormtrooper">
      <img src="${imagem}" alt="Imagem ${nome}" width="176" height="176">
      <div class="card__container__info">
        <p>${nome}</p>
        <div class="card__container__value">
          <p>R$ ${valor}</p>
          <img class="lixeira" src="/assets/lixo.png" alt="Ícone lixo">
        </div>
      </div>
    </div>
  `;

    const lixeira = produto.querySelector('.lixeira');
  lixeira.addEventListener('click', () => {  // evento de clique na lixeira
    const card = lixeira.closest('.card');
    card.remove();
    alert('Produto removido com sucesso!');
  });

  return produto;
}

async function listaProdutos() {
  const listaApi = await conectaApi.listaProdutos();
  listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem)));
}

listaProdutos();

