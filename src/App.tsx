import React, { useEffect, useState } from 'react';
import classnames from './App.module.css';
import {Item} from "./types";
import {GetAllItems} from "./lib";
import {ItemCard, SearchBar} from "./Components";
import {itemStore} from "./stores";
import Modal from "./Components/Modal/Modal";
import { observer } from 'mobx-react-lite';

function App() {
  const [originalItems, setOriginalItems] = useState<Item[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  const [searchBarText, setSearchBarText] = useState<string>("");

  useEffect(() => {
    const data = GetAllItems();
    setOriginalItems(data)
    setItems(data)
  }, []);

  return (
    <>
      {
        itemStore.is_open_modal &&
          <Modal/>
      }
      <div className={classnames.main}>
        <header className={classnames.header}>
          <h2>Test Task Ecom company</h2>
        </header>
        <div className={classnames.search_bar}>
          <SearchBar value={searchBarText} onChange={(value) => {
            setSearchBarText(value);

            const filtered = originalItems.filter(item =>
              item.title.toLowerCase().includes(value.toLowerCase())
            )

            setItems(filtered)
          }
          }/>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default observer(App);
