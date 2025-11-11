import React from "react";

function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__media">
        <img
          src="/me__about.JPEG"
          alt="Fernando segurando uma flor"
          className="about__img"
        />
      </div>

      <div className="about__content">
        <h1 id="about-title" className="about__title">
          About Me
        </h1>
        <p className="about__paragraph">
          Sou Fernando, tenho 30 anos, nascido em Mara Rosa, Goiás - Brasil, e
          atualmente moro em Portugal. Sou engenheiro ambiental e desenvolvedor
          web em transição. Fotografo flores por onde passo e transformo esses
          registros em pequenas histórias digitais — um modo de unir o olhar
          curioso da natureza com o mundo da tecnologia. Sou apaixonado por
          esportes e, nas horas vagas, tento ser atleta de CrossFit — já
          participei de quatro campeonatos, incluindo um em nível nacional, aqui
          em Portugal. Tenho um grande apreço por jogos eletrônicos: desde os 15
          anos, mergulho em universos de MMORPG, FPS e MOBA. Antes disso, os
          consoles marcaram minha infância — especialmente o Nintendo 64, que
          guardo com carinho na memória. Ultimamente, tenho buscado novos
          hábitos, como leitura e escrita, formas de me reconectar comigo mesmo
          e com o que me inspira.
        </p>
        <p className="about__paragraph">
          Este projeto é uma tentativa de unir arte, técnica e contemplação.
        </p>
      </div>
    </section>
  );
}

export default About;
