import styles from './Ordination.module.scss';
import options from './options.json';

export default function Ordination() {
    return (
        <button className={styles.ordination}>
            <span>Ordenar por</span>
            <div className={styles.ordination__options}>
                {options.map((option) => (
                    <div className={styles.ordination__option} key={option.value}>{option.nome}</div>
                ))}
            </div>
        </button>
    )
}