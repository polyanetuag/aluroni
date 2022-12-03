import logo from "assets/logo.svg";
import styles from "./Item.module.scss";

export default function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={logo} alt="imagem" />
      </div>

      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>Nome do item</h2>
          <p>Descrição do item</p>
        </div>

        <div className={styles.item__tags}>
            <div className={styles.item__tipo}>MASSA</div>
            <div className={styles.item__porcao}>500g</div>
            <div className={styles.item__qtdpessoas}> Serve 2 pessoas</div>
            <div className={styles.item__valor}>R$ 20,00</div>

        </div>
      </div>
    </div>
  );
}
