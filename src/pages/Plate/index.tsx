import styles from './Plate.module.scss';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import menu from 'data/menu.json';

export default function Plate() {
    const { state } = useLocation();
    const { plate } = state as { plate: typeof menu[0] };

  return (
    <>
    <button className={styles.voltar}>
        {'< Voltar'}
    </button>
    <section className={styles.container}>
       <h1 className={styles.titulo}>{plate.title}</h1>
         <div className={styles.imagem}>
              <img src={plate.photo} alt={plate.title} />
            </div>
            <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>{plate.description}</p>
                <div className={styles.tags}>
                    <div className={classNames({
                        [styles.tags__tipo]: true,
                        [styles[`tags__tipo__${plate.category.label.toLowerCase()}`]] : true
                    })}>
                        {plate.category.label}
                    </div>
                    <div className={styles.tags__porcao}>
                        {plate.size}g
                    </div>
                    <div className={styles.qtdpessoas}>
                        Serve {plate.serving} pessoa{plate.serving > 1 ? 's' : ''}
                    </div>
                    <div className={styles.tags__valor}>
                        R$ {plate.price.toFixed(2)}
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}
