import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dojs from "../../Assets/Projects/Learns/30daysofjavascript.png";
import reactlevel1 from "../../Assets/Projects/Learns/reactlevel1.png";


function Learns() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Learn <strong className="purple">Package</strong>
        </h1>
        <p style={{ color: "white" }}>
          Learn, exercise, gain knowledge.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dojs}
              isBlog={false}
              title="30 Days of Javascript"
              description=""
              ghLink="https://github.com/samsleepingatparty/30Days-of-Javascript"
              demoLink="https://sleepingatparty.xyz/javascript/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactlevel1}
              isBlog={false}
              title="ReactJS Level 1 Projects"
              description=""
              ghLink="https://github.com/samsleepingatparty/React-Lv1-Projects"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Learns;
