import styles from './Ordination.module.scss';
import options from './options.json';
import { useState } from 'react';
import classNames from 'classnames';

export default function Ordination() {
    const [open, setOpen] = useState(false);
    return (
        <button 
        className={styles.ordination} 
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        >
            <span>Ordenar por</span>
            <div className={classNames({
                [styles.ordination__options] : true,
                [styles["ordination__options--active"]] : open
            })}>
                {options.map((option) => (
                    <div className={styles.ordination__option} key={option.value}>{option.nome}</div>
                ))}
            </div>
        </button>
    )
}