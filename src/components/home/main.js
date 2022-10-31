import React from "react";
import arrow from "../assets/right-arrow.png";

function Main() {
  /*   useEffect(() => {
    fetch("https://api.github.com/users/MokuaEnock")
      .then((r) => r.json())
      .then((r) => console.log(r));
  }, []); */
  return (
    <>
      <main>
        <div id="container1">
          <span></span>
          <span>Develop Tech skills form the best source.</span>
          <span></span>
          <span>
            <button>
              Get Started <img src={arrow} alt="arrow" />
            </button>
            <button>Continue</button>
          </span>
        </div>
        <div id="container2"></div>
      </main>

      <section id="main_section">
        <div id="sect_container1">
          <div id="div1">
            <h2>From writing your first</h2>
            <code> Hello World </code>
            <h2>to creating a neural network.</h2>
          </div>

          <div id="div2">
            <p>Fully committed to equiping learners with real world skills.</p>
          </div>
        </div>
        <ul id="sect_container2">
          <li>
            <span id="image"></span>
            <span id="title"> </span>
            <span id="detail"></span>
          </li>
          <li>
            <span id="image"></span>
            <span id="title"> </span>
            <span id="detail"></span>
          </li>
          <li>
            <span id="image"></span>
            <span id="title"> </span>
            <span id="detail"></span>
          </li>
        </ul>
      </section>

      <section id="main_cards">
        <div id="main_container1">
          <span id="span1"> Our popular courses as voted by our students</span>
          <span id="span2">
            <p>View in demand courses on our site.</p>
            <button>View all courses</button>
          </span>
        </div>
        <ul id="main_container2">
          <li>
            <span id="instructors"></span>
            <span id="card_rating"></span>
            <span id="card_title"></span>
            <button>Enroll Course</button>
          </li>
          <li>
            <span id="instructors"></span>
            <span id="card_rating"></span>
            <span id="card_title"></span>
            <button>Enroll Course</button>
          </li>
          <li>
            <span id="instructors"></span>
            <span id="card_rating"></span>
            <span id="card_title"></span>
            <button>Enroll Course</button>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Main;
