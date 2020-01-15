import React from "react";

function Footer(props) {
  return (
    <footer id="footer">
      <div>
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href="#welcome-section" className="btn contact-details">
              About
            </a>
          </li>
          <li>
            <a href="#roadmap" className="btn contact-details">
              Project
            </a>
          </li>
          <li>
            <a href="#projects" className="btn contact-details">
              Project
            </a>
          </li>
          <li>
            <a href="#footer" className="btn contact-details">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Let's work together...</h3>
        <h4>How do you take your coffee?</h4>
        <ul>
          <li>
            <i className="far fa-envelope" />
            &nbsp;
            <a
              href="mailto:phu.duongtan@gmail.com"
              className="btn contact-details"
            >
              phu.duongtan@gmail.com
            </a>
          </li>
          <li>
            <i className="fas fa-mobile-alt" />
            &nbsp;&nbsp;
            <a href="tel:096-873-5840" className="btn contact-details">
              0968.735.840
            </a>
          </li>
          <li>
            <i className="fab fa-skype" />
            &nbsp;
            <a href="skype:phu.duongtan?chat" className="btn contact-details">
              phu.duongtan
            </a>
          </li>
          <li>
            <i className="fab fa-facebook-square" />
            &nbsp;
            <a
              href="https://facebook.com/duongtanphu"
              target="_blank"
              className="btn contact-details"
            >
              facebook.com/duongtanphu
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
