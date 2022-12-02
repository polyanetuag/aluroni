import styles from './Ordination.module.scss';
import options from './options.json';
import { useState } from 'react';
import classNames from 'classnames';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';
interface OrdinationProps {
    ordination: string;
    setOrdination: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordination({ordination, setOrdination}: OrdinationProps) {
    const [open, setOpen] = useState(false);
    const nameOrdination = options.find(option => option.value === ordination)?.nome;

    return (
        <button 
        className={classNames({
            [styles.ordination]: true,
            [styles['ordination--active']]: ordination !== '',
        })} 
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        >
            <span>{nameOrdination || 'Ordenar por'}</span>
            { open ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/> }
            <div className={classNames({
                [styles.ordination__options] : true,
                [styles["ordination__options--active"]] : open
            })}>
                {options.map((option) => (
                    <div 
                    className={styles.ordination__option} 
                    key={option.value}
                    onClick={() => setOrdination(option.value)}
                    >{option.nome}</div>
                ))}
            </div>
        </button>
    )
}