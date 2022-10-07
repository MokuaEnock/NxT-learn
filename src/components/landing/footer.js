import React from "react";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github-logo.png";

function Footer() {
  return (
    <footer>
      <div id="footer_cont1"></div>

      <div id="footer_cont2">
        <a href="https://github.com/MokuaEnock">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/enock-mokua-b7a37224b/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://twitter.com/254_enok">
          <img src={twitter} alt="twitter" />
        </a>

        <a href="https://www.instagram.com/enok_254/">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
      <div id="footer_cont3">
        <p>
          Report an <a href="https://github.com/MokuaEnock">issue</a>
        </p>
        <p>
          Suggest a <a href="https://github.com/MokuaEnock">feature</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
