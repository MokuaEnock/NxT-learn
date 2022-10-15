import React, { useState, useEffect } from "react";
import UserAside from "./userAside";
import UserFooter from "./userFooter";
function UserHome() {
  let [item, setItem] = useState([]);
  let [newItem, setNewItem] = useState([]);
  let [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/results")
      .then((r) => r.json())
      .then((r) => setItem(r));
  }, []);

  const handler = (index) => () => {
    let newItem = item[index];
    return setNewItem([newItem]);
  };

  let addnew = (index) => () => {
    let newItem = item[index];
    setCart([...cart, newItem]);
  };

  let itemList = item.map((e, index) => {
    return (
      <li id="course_card" key={index}>
        <h2>{e.title}</h2>
        <span>
          <button onClick={addnew(index)}>Add to Path</button>
          <button onClick={handler(index)}>View</button>
        </span>
      </li>
    );
  });

  let itemDescriptor = newItem.map((e) => {
    return (
      <li key={e.id}>
        <h2>{e.title}</h2>
      </li>
    );
  });

  function displayCart(e) {
    e.preventDefault();
    let list = document.querySelector("#course_list");
    let detail = document.querySelector("#course_detail");
    if (detail.style.display === "none") {
      detail.style.display = "flex";
    } else {
      detail.style.display = "none";
    }
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }

  return (
    <>
      <UserAside />
      <section id="userHome">
        <h2>Discover Courses.</h2>
        <form>
          <input type="text" placeholder="Search Courses" />

          <select placeholder="Select Language">
            <option>Select Language</option>
            <option value="python">Python</option>
            <option value="javascript">Javascript</option>
            <option value="html_css">HTML & CSS</option>
          </select>

          <select>
            <option>Select Framework or Module</option>
            <option value="pandas">Pandas</option>
            <option value="react">React</option>
            <option value="bootstrap">Bootstrap</option>
            <option value="svelte">Svelte</option>
          </select>

          <button onClick={displayCart}>{cart.length} Courses Selected</button>
        </form>
        <div id="user_home_container">
          <ul id="course_list">{itemList}</ul>
          <ul id="course_detail">{itemDescriptor}</ul>
        </div>
      </section>
      <UserFooter />
    </>
  );
}

export default UserHome;
