import styles from "./Item.module.scss";
import { Plate } from "types/Plate";
import TagsPlate from "components/TagsPlate";


export default function Item(props: Plate) {
  const { title, description,  photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>

      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <TagsPlate {...props} />
      </div>
    </div>
  );
}
