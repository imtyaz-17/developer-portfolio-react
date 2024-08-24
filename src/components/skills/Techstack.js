import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiExpress,
  SiLaravel,
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h3 className="text-start m-3">Programming Languages :</h3>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-cpp" className="custom-tooltip">C++</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-java" className="custom-tooltip">Java</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-php" className="custom-tooltip">PHP</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-js" className="custom-tooltip">JavaScript</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </OverlayTrigger>
      <h3 className="text-start m-3">Frameworks & Libraries :</h3>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-laravel" className="custom-tooltip">Laravel</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiLaravel />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-react" className="custom-tooltip">React</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-express" className="custom-tooltip">Express</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-nodejs" className="custom-tooltip">Node.js</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-tailwind" className="custom-tooltip">Tailwind CSS</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-bootstrap" className="custom-tooltip">Bootstrap</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-springboot" className="custom-tooltip">Spring Boot</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiSpringboot />
        </Col>
      </OverlayTrigger>
      <h3 className="text-start">Databases :</h3>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-mysql" className="custom-tooltip">MySQL</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-postgresql" className="custom-tooltip">PostgreSQL</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-mongodb" className="custom-tooltip">MongoDB</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
        </Col>
      </OverlayTrigger>
      <h3 className="text-start m-3">Version Control :</h3>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-git" className="custom-tooltip">Git</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-github" className="custom-tooltip">GitHub</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-gitlab" className="custom-tooltip">GitLab</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiGitlab />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
