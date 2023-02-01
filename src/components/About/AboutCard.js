import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Samuel Andika </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br />
            I am a Frontend Developer based in Jakarta Selatan and I have been working as freelance Frontend Developer since 2019.
            <br />
            <br />
            I've worked for clothing brands, music label, and others personal request.
            <br />
            I've been freelancing for the last 4 years, and right now I am looking forward to collaborate with you!
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "code ur a$$."{" "}
          </p>
          <footer className="blockquote-footer">XEM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
