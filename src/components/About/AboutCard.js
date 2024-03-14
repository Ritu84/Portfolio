import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritu Sharma </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently in 3rd year of college, pursuing CE from GEC-Rajkot.
            <br />
            I love problem-solving and developing new things.<br></br>
            Designated as GDSC Lead of my college for the year 2023-24.
            <br />
            Specialist on Codeforces.  <a href="https://codeforces.com/profile/Ritu_1149" alt="error" >Codeforces</a>
            <br />
            GfG Institute Rank 1, solved over 500+ questions on this platform.<br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ritu Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
