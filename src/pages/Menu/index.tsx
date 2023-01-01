import styles from "./Menu.module.scss";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";
import Ordination from "./Ordination";
import Itens from "./Itens";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [ordination, setOrdination] = useState("");

  return (
    <section className={styles.menu}>
      <h3 className={styles.menu__title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Ordination ordination={ordination} setOrdination={setOrdination} />
      </div>
      <Itens search={search} filter={filter} ordination={ordination} />
    </section>
  );
}
