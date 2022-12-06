import menu from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface ItensProps {
  search: string;
  filter: number | null;
  ordination: string;
}

export default function Itens(props: ItensProps) {
  const [list, setList] = useState(menu);
  const { search, filter } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if(filter !== null) return filter === id;
    return true;
  }

  useEffect(() => {
    const newList = menu.filter(item=> testSearch(item.title) && testFilter(item.category.id))
    setList(newList);
  }, [search, filter]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
