import styles from './Ordination.module.scss';
import options from './options.json';
import { useState } from 'react';
import classNames from 'classnames';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';


export default function Ordination() {
    const [open, setOpen] = useState(false);
    return (
        <button 
        className={styles.ordination} 
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        >
            <span>Ordenar por</span>
            { open ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/> }
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