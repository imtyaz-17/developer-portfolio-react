import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Md_Imtyaz_Ahmed_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const scale = width > 786 ? 1.7 : 0.6;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="">My <strong className="purple">Resume</strong></h1>
        <Row className="justify-content-center my-4">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "300px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* <Row className="resume d-flex justify-content-center">
          <Document file={pdf}>
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
