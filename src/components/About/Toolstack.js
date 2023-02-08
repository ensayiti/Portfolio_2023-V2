import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiUbuntu,
  SiNetlify,
  SiVercel,
  SiFigma,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  // Tooltip
  const renderTolltipUbuntu = (props) => (
    <Tooltip id="ubuntu" {...props}>
      Linux - Ubuntu
    </Tooltip>
  )
  const renderTolltipVS = (props) => (
    <Tooltip id="vscode" {...props}>
      Microsoft Visual Studio Code
    </Tooltip>
  )
  const renderTolltipGit = (props) => (
    <Tooltip id="git" {...props}>
      Git
    </Tooltip>
  )
  const renderTolltipNetlify = (props) => (
    <Tooltip id="netlify" {...props}>
      Netlify
    </Tooltip>
  )
  const renderTolltipVercel = (props) => (
    <Tooltip id="vercel" {...props}>
      Vercel
    </Tooltip>
  )
  const renderTolltipFigma = (props) => (
    <Tooltip id="figma" {...props}>
      Figma
    </Tooltip>
  )


  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipUbuntu} id="ubuntu">
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu/>
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipVS} id="vscode">
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipGit} id="git">
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipNetlify} id="netlify">
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipVercel} id="vercel">
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipFigma} id="figma">
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      </OverlayTrigger>


    </Row>
  );
}

export default Toolstack;
