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

  console.log(item);

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

  let cartItems = cart.map((e, index) => {
    return (
      <li id="cart_card" key={index}>
        <h2 id="cart_title">{e.title}</h2>
        <span id="cart_details">{e.headline}</span>
        <span id="cart_instructors">
          <a href="#">Img</a>
          <a href="#">Img</a>
          <a href="#">Img</a>
          <a href="#">Img</a>
        </span>
        <span id="cart_requires">
          <p>Requirements</p>
        </span>
        <span id="cart_buttons">
          <button id="remove">Remove</button>
          <button id="start">Starts:OCT 17</button>
          <button id="enroll">Enroll</button>
        </span>
      </li>
    );
  });

  function displayCart(e) {
    e.preventDefault();
    let cart = document.querySelector("#items_cart");
    let list = document.querySelector("#course_list");
    let detail = document.querySelector("#course_detail");
    if (detail.style.display === "none") {
      cart.style.display = "none";
      detail.style.display = "flex";
    } else {
      detail.style.display = "none";
      cart.style.display = "grid";
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
          <ul id="items_cart" style={{ display: "none" }}>
            {cartItems}
          </ul>
        </div>
      </section>
      <UserFooter />
    </>
  );
}

export default UserHome;
