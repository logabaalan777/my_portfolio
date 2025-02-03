import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/belt.png";
import ci from "../../images/music.png";
import hd from "../../images/IMS.jpg";
import ac from "../../images/Activex.jpg";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Smart Blind Belt for Visually Challenged People
                    </h5>
                    <img src={nyc} alt={nyc} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/logabaalan777/Camera_With_Voice_Detection"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                        fontSize: 14
                      }}
                    >
                      A groundbreaking solution empowers visually impaired individuals with object detection and voice feedback, complemented by an SOS
                      feature connecting them to caregivers when needed. Here involved in camera part for the object detection. This revolutionizes mobility
                      and safety for the visually challenged, enhancing their quality of life significantly.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Python, Arduino, IoT
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Inventory Management System
                    </h5>
                    <img src={hd} alt={hd} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/KarthikeyanM3011/Inventory-Management-System"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                        fontSize: 13
                      }}
                    >
                      An Inventory Management System (IMS) optimizes operations by preventing overstocking, reducing holding costs,
                      and enhancing supply chain efficiency. It provides real-time insights for informed procurement and order fulfillment
                      decisions while improving customer satisfaction. Additionally, IMS aids in demand forecasting and risk mitigation,
                      preventing issues like obsolete stock and theft.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Java, JavaFX, MySQL
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Music Player System
                    </h5>
                    <img src={ci} alt={ci} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/logabaalan777/Music_Player_AI"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                        fontSize: 14
                      }}
                    >
                      I developed a music player system using the MERN stack, featuring a login page, sign-up page, and favorite artist selection.
                      The system includes a subscription page, music recommendation engine, and the capability to add music libraries to MongoDB.
                      This project enhances user experience by offering personalized music recommendations and seamless library management.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    MERN Stack
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      ActiveX.ai
                    </h5>
                    <img src={ac} alt={ac} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/darkdevily0412/ActiveX/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                        fontSize: 15
                      }}
                    >
                      This project automates the generation of ads and updates audience targeting based on current data, 
                      leveraging the power of the Gemini model, Streamlit for the user interface, and the Facebook Marketing API 
                      for ad management. The system is designed to streamline ad creation, improve consistency, reduce costs, and 
                      enhance targeting precision.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    streamlit, python, facebook API
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
