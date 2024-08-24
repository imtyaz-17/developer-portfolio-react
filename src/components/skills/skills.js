import React from 'react';
import Toolstack from './Toolstack';
import Techstack from './Techstack';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';

function Skills() {
    return (
        <>
            <Container fluid className="about-section">
                <Particle />
                <Container>
                    <h1 className="project-heading">
                        Professional <strong className="purple">Skills </strong>
                    </h1>

                    <Techstack />

                    <h1 className="project-heading">
                        <strong className="purple">Tools</strong> I use
                    </h1>
                    <Toolstack />
                </Container>
            </Container>

        </>
    );
}

export default Skills;
