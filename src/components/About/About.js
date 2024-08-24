import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { AiFillGithub, AiFillInstagram, AiFillMail, AiFillMobile, AiFillPhone, AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import pdf from "../../Assets/Md_Imtyaz_Ahmed_resume.pdf";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "200px", marginTop: "40px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <div className="d-flex justify-content-center align-items-center mb-3 gap-2">
              <div className="contact-info icon-colour ">
                <span>
                  <AiFillMail className="" />
                </span>
                <h5>imtyazit17017@gmail.com</h5>
              </div>
              <div className="contact-info icon-colour">
                <span><AiFillPhone className="" /></span>
                <h5>+8801315781010</h5>
              </div>
            </div>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/imtyaz-17"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/imtyaz17/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        {/* <Skills /> */}

        {/* <Github /> */}
      </Container>
    </Container >
  );
}

export default About;
