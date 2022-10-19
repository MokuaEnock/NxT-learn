import React from "react";

function Main() {
  return (
    <>
      <main>
        <div id="container1">
          <span></span>
          <span>Develop Tech skills form the best source.</span>
          <span></span>
          <span>
            <button>Get Started</button>
            <button>Continue</button>
          </span>
        </div>
        <div id="container2"></div>
      </main>

      <section id="main_section">
        <div id="sect_container1">
          <div>
            <h2>From writing your first</h2>
            <code> Hello World </code>
            <h2>to creating a neural network.</h2>
          </div>

          <div>
            <h2>
              Fully committed to equiping learners with real World skills.
            </h2>
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
          <span>Our popular courses as voted by our students</span>
          <span>
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
