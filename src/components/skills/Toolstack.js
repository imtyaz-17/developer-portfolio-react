import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiPhpstorm,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="tooltip-firebase" className="custom-tooltip">
            Firebase
          </Tooltip>
        }
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="tooltip-vscode" className="custom-tooltip">
            Visual Studio Code
          </Tooltip>
        }
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="tooltip-phpstorm" className="custom-tooltip">
            PhpStorm
          </Tooltip>
        }
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPhpstorm />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="tooltip-postman" className="custom-tooltip">
            Postman
          </Tooltip>
        }
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="tooltip-vercel" className="custom-tooltip">
            Vercel
          </Tooltip>
        }
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Toolstack;
