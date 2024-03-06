import React from "react";
import Newcontent from "./Newcontent.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
import AddItem from "./AddItem.jsx";
import Searchitem from "./Searchitem.jsx";

const App = () => {
  // Parse the local storage value directly and handle potential null or non-array cases
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("shoppinglist"));
    return Array.isArray(storedItems) ? storedItems : [];
  });

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveitems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveitems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveitems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveitems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div>
      <Header title="GROCERIES ITEMS & LISTS" name="Farhan Quadri" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Searchitem search={search} setSearch={setSearch} />
      <Newcontent
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
};

export default App;
