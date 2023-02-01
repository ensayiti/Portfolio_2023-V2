import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Vacater from "../../Assets/Projects/Designs/Vacater.png";
import TheLenz from "../../Assets/Projects/Designs/TheLenz.png";
import Landing from "../../Assets/Projects/Designs/Landing.png";
import PortifyV1 from "../../Assets/Projects/Designs/PortifyV1.png";
import PortifyV2 from "../../Assets/Projects/Designs/PortifyV2.png";

function Designs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Designs</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few designs I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vacater}
              isBlog={false}
              title="Vacater"
              description=""
              ghLink="https://github.com/samsleepingatparty/travel-react"
              demoLink="https://precious-haupia-bbdf51.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TheLenz}
              isBlog={false}
              title="TheLenz"
              description=""
              ghLink="https://github.com/samsleepingatparty/thelenz-next"
              demoLink="https://thelenz-next.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Landing}
              isBlog={false}
              title="Music Landing Page"
              description=""
              ghLink="https://github.com/samsleepingatparty/music-app-react"
              demoLink="https://stellar-bonbon-d1ed72.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PortifyV1}
              isBlog={false}
              title="Portify V1"
              description=""
              ghLink="https://github.com/samsleepingatparty/portify-react"
              demoLink="https://charming-piroshki-e9de3c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PortifyV2}
              isBlog={false}
              title="Portify V2"
              description=""
              ghLink="https://github.com/samsleepingatparty/portify-v2"
              demoLink="https://statuesque-mooncake-6e968a.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Designs;
