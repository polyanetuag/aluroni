import menu from "data/menu.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";
import { Menu } from "types/Plate";

interface ItensProps {
  search: string;
  filter: number | null;
  ordination: string;
}

export default function Itens(props: ItensProps) {
  const [list, setList] = useState(menu);
  const { search, filter, ordination } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if(filter !== null) return filter === id;
    return true;
  }

  function order(newList: Menu) {
    switch (ordination) {
      case 'porcao': return newList.sort((a, b) => a.size > b.size ? 1 : -1);
      case 'qtd_pessoas': return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
      case 'preco': return newList.sort((a, b) => a.price > b.price ? 1 : -1);
      default: return newList;
  }
}

  useEffect(() => {
    const newList = menu.filter(item=> testSearch(item.title) && testFilter(item.category.id))
    setList(order(newList));
  }, [search, filter, ordination]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
