import React from "react";
import { useNavigate } from "react-router-dom";

function MainLanding() {
  let navigate = useNavigate();
  return (
    <main>
      <h1 id="main_head1">
        We’re still not sure how we got here, but we’re excited about where
        we’re going
      </h1>
      <p id="main_par1">
        <span className="mainSpan">
          <img
            src="./assets/david-clode-xNSCi_K179c-unsplash.jpg"
            alt="background"
          />
        </span>
        <span className="mainSpan">
          <img src="#" alt="background" />
        </span>
        <span className="mainSpan">
          <img src="#" alt="background" />
        </span>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Get Started
        </button>
      </p>
      <p id="main_par2">
        <span className="mainSpan1">Self paced</span>
        <span className="mainSpan1">Project based</span>
        <span className="mainSpan1">Beginner Friendly</span>
        <span className="mainSpan1">Free courses</span>
      </p>
    </main>
  );
}

export default MainLanding;
