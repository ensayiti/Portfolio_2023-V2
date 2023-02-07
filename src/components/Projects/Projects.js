import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import xai from "../../Assets/Projects/xAI.png";
import xquote from "../../Assets/Projects/xQuote.png";
import xjobdesc from "../../Assets/Projects/xJobDesc.png";
import xtodo from "../../Assets/Projects/xTodo.png";
import xweather from "../../Assets/Projects/xWeather.png"
import xai2 from "../../Assets/Projects/xAI-V2.png";
import ximage from "../../Assets/Projects/xImage.png";

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
              imgPath={xai2}
              isBlog={false}
              title="xAI-V2"
              description="xAI is a type of artificial intelligence-powered chat interface that allows users to interact with a website or application using natural language. It offers conversational UI for a seamless experience"
              ghLink="https://github.com/samsleepingatparty/xAI-V2"
              demoLink="https://ai.sleepingatparty.xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xai}
              isBlog={false}
              title="xAI"
              description="xAI is a type of artificial intelligence-powered chat interface that allows users to interact with a website or application using natural language. It offers conversational UI for a seamless experience"
              ghLink="https://github.com/samsleepingatparty/xAI"
              demoLink="https://x-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xquote}
              isBlog={false}
              title="xQuote"
              description="xQuote is a type of AI application that generates quotes based on user inputs or pre-defined parameters. It uses machine learning algorithms to produce unique quotes."
              ghLink="https://github.com/samsleepingatparty/xQuoteAI"
              demoLink="https://xquote-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xjobdesc}
              isBlog={false}
              title="xJobDesc"
              description="xJobDesc is a tool that uses artificial intelligence to automatically create job descriptions based on inputs such as job title, skills, responsibilities, and qualifications. It saves time and effort in creating accurate job postings."
              ghLink="https://github.com/samsleepingatparty/xJobDescAI"
              demoLink="https://xjobdesc-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xtodo}
              isBlog={false}
              title="xNotes"
              description="xNotes is a to-do web app with local storage allows users to create, manage and store task lists on their device. It saves the data locally for offline access and convenience."
              ghLink="https://github.com/samsleepingatparty/xNotes"
              demoLink="https://reliable-creponne-85deb3.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xweather}
              isBlog={false}
              title="xWeather"
              description="xWeather is a weather web application provides real-time weather information and forecasts for a specified location. It uses data from weather services to show current conditions, temperature, and other relevant weather information."
              ghLink="https://github.com/samsleepingatparty/xWeather"
              demoLink="https://sparkly-strudel-fdd8d1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ximage}
              isBlog={false}
              title="xImage"
              description="xImage is an artificial intelligence tool that creates unique images based on input parameters, such as keywords, sketches, or styles. It uses machine learning algorithms to produce high-quality, diverse images."
              ghLink="https://github.com/samsleepingatparty/xImage"
              demoLink="https://ximage.sleepingatparty/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
