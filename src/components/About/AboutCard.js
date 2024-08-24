import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I am <span className="purple">Imtyaz Ahmed </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            {/* <br />
            I am currently employed as a software developer at Juspay. */}
            <br />
            I have completed a Bachelor of Science in Engineering (B.Sc. Engg.) in Information and Communication Technology (ICT) from MBSTU.
            <br />
            I'm a motivated and reliable software engineer always seeking new challenges to learn and grow. With a strong foundation in various programming languages and frameworks, I strive to leverage my skills and knowledge to make a positive impact in any role I undertake. My professional experience ranges from software development to research and development, where I've consistently demonstrated my ability to adapt, learn, and deliver reliable, high-quality solutions.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven to create impactful solutions that inspire change and elevate experiences"{" "}
          </p>
          <footer className="blockquote-footer">imtyaz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
