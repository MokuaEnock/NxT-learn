import React, { useState } from "react";
import UserAside from "./userAside";
import UserFooter from "./userFooter";

function UserHome({ courses }) {
  let [view, setView] = useState([]);
  let [cart, setCart] = useState([]);

  console.log(courses);

  /* create function to handleview button */
  let handleView = (index) => () => {
    let newItem = courses[index];
    return setView([newItem]);
  };

  /* function to add handle add to cart */
  let handlePath = (index) => () => {
    let newItem = courses[index];
    setCart([...cart, newItem]);
  };

  /* add items to the dom */
  let items = courses.map((i, index) => {
    return (
      <li className="course_card" key={i.course_id}>
        <span className="course_card_image"></span>
        <span className="course_card_rating">
          <p>{i.rating}</p>
          <p> {i.course_hours}</p>
        </span>
        <span className="course_card_title">{i.course_title}</span>
        <span className="course_card_detail">{i.course_description}</span>
        <span className="course_card_buttons">
          <button onClick={handlePath(index)}>Add to Path</button>
          <button onClick={handleView(index)}>View</button>
        </span>
      </li>
    );
  });

  /* create a unique list of cart items */
  const uniqueCart = [...new Set(cart)];
  let itemDescriptor = view.map((e) => {
    return (
      <li key={e.course_id}>
        <h2>{e.course_title}</h2>
      </li>
    );
  });

  /* log cart items */
  let cartItems = uniqueCart.map((e, index) => {
    return (
      <li id="cart_card" key={index}>
        <h2 id="cart_title">{e.course_title}</h2>
        <span id="cart_details">{e.headline}</span>
        <span id="cart_requires"></span>
        <span id="cart_buttons">
          <button id="remove">Remove</button>
          <button id="start">Starts: OCT 17</button>
          <button id="enroll">Enroll</button>
        </span>
      </li>
    );
  });

  /* ca */
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

          <button onClick={displayCart}>
            {uniqueCart.length} Courses Selected
          </button>
        </form>

        <div id="user_home_container">
          <ul id="course_list">{items}</ul>
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
