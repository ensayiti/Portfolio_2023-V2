import React, { useState, useRef } from "react";
import { Col, Row, OverlayTrigger, Tooltip, } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiLaravel,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import {
  SiLess,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
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
  const renderTolltipLaravel = (props) => (
    <Tooltip id="laravel" {...props}>
      Laravel
    </Tooltip>
  )
  const renderTolltipTailwind = (props) => (
    <Tooltip id="tailwindcss" {...props}>
      Tailwind
    </Tooltip>
  )
  const renderTolltipGit = (props) => (
    <Tooltip id="git" {...props}>
      Git
    </Tooltip>
  )
  const renderTolltipLess = (props) => (
    <Tooltip id="less" {...props}>
      LESS
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
        <DiJavascript1 />
      </Col>
      </OverlayTrigger>
      
      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipNode} id="nodejs">
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipNext} id="nodejs">
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipReact} id="react">
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipLaravel} id="laravel">
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipTailwind} id="tailwind">
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/>
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipGit} id="git">
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipLess} id="less">
      <Col xs={4} md={2} className="tech-icons">
        <SiLess />
      </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" delay={{ show: 200, hide: 400 }} overlay={renderTolltipBootstrap} id="bootstrap">
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
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
