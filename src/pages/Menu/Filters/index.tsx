import filters from './filters.json'; 
import styles from './Filters.module.scss';

type Ioption = typeof filters[0];

export default function Filters() {
    function selectedFilter(option: Ioption) {
        console.log(option);
    }
    return (
        <div className={styles.filters}>
        {filters.map((option) => (
            <button className={styles.filters__filter} key={option.id} onClick={() => selectedFilter(option)}>
                {option.label}
            </button>
        ))}
        </div>
    )
    }