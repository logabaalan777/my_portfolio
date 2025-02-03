import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import pc from "../../../images/pc.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import cb from "../../../images/cb.png";
import ar from "../../../images/Arduino.png";
import pm from "../../../images/pm.png";
import chrome from "../../../images/chorme.svg";
import Mongo from "../../../images/MongoDB.png";
import sql from "../../../images/MySQL.png";
import jup from "../../../images/Jupyter.png";
import ana from "../../../images/Anaconda.png";
import can from "../../../images/Canva.png";
import ec from "../../../images/Ecide.png";
import goo from "../../../images/goocloud.png";

import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={vs} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pc} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={git} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={github} alt="" style={{ width: "85%", height: "85%", filter: "grayscale(1) invert(1)", }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={cb} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ar} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pm} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={chrome} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={Mongo} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={goo} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ec} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={can} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ana} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={jup} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={sql} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
