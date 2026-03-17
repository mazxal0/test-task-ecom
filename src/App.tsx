import React, { useEffect, useState } from 'react';
import classnames from './App.module.css';
import {Item} from "./types";
import {GetAllItems} from "./lib";
import {ItemCard, SearchBar} from "./Components";

function App() {

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(GetAllItems())
  }, []);

  return (
    <div className={classnames.main}>
      <header className={classnames.header}>
        <h2>Test Task Ecom company</h2>
      </header>

      <div className={classnames.search_bar}>
        <SearchBar/>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {items.map((item) => (
          <ItemCard
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
  );
}

export default App;
