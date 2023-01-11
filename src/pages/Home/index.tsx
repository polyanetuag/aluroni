import menu from "data/menu.json";
import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import nossaCasa from "assets/nossa_casa.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function redirectDetailsPlate(prato: typeof menu[0]) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }

  return (
    <section>
      <h3 className={stylesTheme.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirectDetailsPlate(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Aveiro Dias, 1234 <br /> <br /> São Paulo - SP
        </div>
      </div>
    </section>
  );
}
