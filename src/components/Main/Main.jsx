import React from "react";

function Main() {
  return (
    <>
      <section className="cover">
        <img className="cover__img" src="/cover.jpg" alt="" />
        <div className="cover__content">
          <h1 className="cover__content-title">Fiore is...</h1>
          <h2 className="cover__content-subtitle">
            the path, the flower, the feeling.
          </h2>
        </div>
      </section>
      <section className="purpose">
        <h1 className="purpose__title">Purpose</h1>
        <div className="purpose__container">
          <img
            className="purpose__img"
            src="/aboutflower1.JPEG"
            alt="handling flower"
          />
          <p className="purpose__paragraph">
            Fiore nasceu da necessidade de compartilhar com o mundo a minha
            forma de ver o caminho — através de fotos tiradas por mim. Cada
            imagem carrega um sentimento, um destino e uma lição. Fotografar se
            tornou um dos meus hobbies mais genuínos, algo do qual já não
            consigo me desvencilhar. E, alinhado aos meus estudos em
            programação, quero registrar tudo isso aqui — neste espaço que é, ao
            mesmo tempo, meu diário e meu jardim digital.
          </p>
        </div>
        <div className="purpose__container">
          <img className="purpose__img" src="/purpose__aiflower.jpg" alt="" />
          <p className="purpose__paragraph">
            Existem algoritmos inspirados na natureza das flores — como o Flower
            Pollination Algorithm, usado em computação para resolver problemas
            complexos de otimização. Ele imita o modo como as flores se
            polinizam e se espalham, buscando sempre o “melhor caminho” — uma
            bela metáfora para como seguimos tentando florescer em nossos
            próprios percursos.
          </p>
        </div>
      </section>
    </>
  );
}

export default Main;
