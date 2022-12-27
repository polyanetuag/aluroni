import MenuBoard from "components/MenuBoard";
import menu from "data/menu.json";
import styles from "./Home.module.scss";

export default function Home() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
        <MenuBoard />
        <h3 className={styles.titulo}>
            Recomendações da cozinha
        </h3>
        <div className={styles.recomendados}>
            {recommendedDishes.map(item => (
                <div key={item.id} className={styles.recomendado}>
                    <div className={styles.recomendado__imagem}>
                        <img src={item.photo} alt={item.title} />
                    </div>
                    <button className={styles.recomendado__botao}>
                        Ver mais
                    </button>
                </div>
            ))} 
        </div>
    </section>
  );
}
