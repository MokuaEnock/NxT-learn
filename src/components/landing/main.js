import React from "react";
import { useNavigate } from "react-router-dom";
import bg1 from "../assets/david-clode-xNSCi_K179c-unsplash.jpg";
import bg2 from "../assets/emiliano-vittoriosi-IR-71TP2E8o-unsplash.jpg";
import bg3 from "../assets/pexels-eriks-abzinovs-3117225.jpg";

function MainLanding() {
  let navigate = useNavigate();
  return (
    <main>
      <h1 id="main_head1">
        We’re still not sure how we got here, but we’re excited about where
        we’re going
      </h1>
      <p id="main_par1">
        <span className="mainSpan" style={{ backgroundImage: `url(${bg3})` }}>
          <h3>60+</h3>
          <p>Real-world Projects</p>
        </span>
        <span className="mainSpan" style={{ backgroundImage: `url(${bg2})` }}>
          <h3>1000+</h3>
          <p>Free Courses</p>
        </span>
        <span className="mainSpan" style={{ backgroundImage: `url(${bg1})` }}>
          <h3>100+</h3>
          <p>Qualified Instructors</p>
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
