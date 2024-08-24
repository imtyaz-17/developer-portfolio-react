import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skillup from "../../Assets/Projects/skill-up-academy.jpg";
import ecommerce from "../../Assets/Projects/laravelecom.jpg";
import bookshop from "../../Assets/Projects/bookshop.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillup}
              isBlog={false}
              title="E-learning Platform"
              description="Developed a complete e-learning platform featuring user authentication (via Email & Password, Google, GitHub), a courses page with sidebar navigation, and detailed course information. Implemented premium access with a secure checkout process, redirecting users to login for premium content."
              tech="<strong>Technologies:</strong> React, React Router DOM, Firebase, Chakra UI, react-to-pdf."
              ghLink="https://github.com/imtyaz-17/skill-up-academy-client"
              demoLink="https://skill-up-academy-17.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce Application"
              description="Developed a scalable e-commerce platform featuring user authentication via Laravel Breeze, product management, and order processing. Built an admin dashboard to manage products, categories, and orders, and implemented a secure payment system for seamless transactions."
              tech="<strong>Technologies:</strong> Laravel, PHP, MySQL, Bootstrap."
              ghLink="https://github.com/imtyaz-17/nexa-mart-ecommerce-laravel"
              demoLink="https://laravelecom.rf.gd/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookshop}
              isBlog={false}
              title="Books Shop Website"
              description="Created a user interface that enables users to sign in, sign up, browse books, search for specific titles, and purchase them. Also user can reviews and comments. Additionally, developed an admin panel for efficient platform management and control, ensuring smooth operation and user satisfaction."
              tech="<strong>Technologies:</strong> Java, Servlet, JSP, Hibernate, Bootstrap, MySQL"
              ghLink="https://github.com/imtyaz-17/Bookshop_Website_with_Java-Servlet_and_Hibernate"
              demoLink="https://github.com/imtyaz-17/Bookshop_Website_with_Java-Servlet_and_Hibernate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
