import React from "react";
import { Col, Row, OverlayTrigger, Tooltip, } from "react-bootstrap";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiVuedotjs,
  SiMaterialui,
  SiChakraui,
  SiBootstrap,
} from "react-icons/si";


function Techstack() {
  // Tooltip
  const renderTolltipJS = (props) => (
    <Tooltip id="javascript" {...props}>
      Javascript
    </Tooltip>
  )
  const renderTolltipNode = (props) => (
    <Tooltip id="node" {...props}>
      Node.js
    </Tooltip>
  )
  const renderTolltipNext = (props) => (
    <Tooltip id="next" {...props}>
      Next.js
    </Tooltip>
  )
  const renderTolltipReact = (props) => (
    <Tooltip id="react" {...props}>
      React.js
    </Tooltip>
  )
  const renderTolltipVue = (props) => (
    <Tooltip id="vue" {...props}>
      Vue
    </Tooltip>
  )
  const renderTolltipTailwind = (props) => (
    <Tooltip id="tailwindcss" {...props}>
      Tailwind
    </Tooltip>
  )
  const renderTolltipMaterialUI = (props) => (
    <Tooltip id="tailwindcss" {...props}>
      Material-UI
    </Tooltip>
  )
  const renderTolltipChakraUI = (props) => (
    <Tooltip id="tailwindcss" {...props}>
      Chakra-UI
    </Tooltip>
  )
  const renderTolltipBootstrap = (props) => (
    <Tooltip id="bootstrap" {...props}>
      Bootstrap
    </Tooltip>
  )
  const renderTolltipSQL = (props) => (
    <Tooltip id="mysql" {...props}>
      MySQL
    </Tooltip>
  )


  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipJS} id="javascript">
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      </OverlayTrigger>
      
      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipNode} id="nodejs">
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipNext} id="nodejs">
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipReact} id="react">
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipVue} id="vue">
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipTailwind} id="tailwind">
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/>
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipMaterialUI} id="material">
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui/>
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipChakraUI} id="chakra">
      <Col xs={4} md={2} className="tech-icons">
        <SiChakraui/>
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipBootstrap} id="bootstrap">
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipSQL} id="mysql">
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
