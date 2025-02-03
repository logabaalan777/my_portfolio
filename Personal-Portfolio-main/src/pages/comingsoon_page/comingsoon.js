import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashnode } from '@fortawesome/free-brands-svg-icons';
import blog from "../../images/blog.png";

export default function ComingSoon() {
    return (
        <section className="home-section">
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading">
                        My Recent <strong className="purple">Blog</strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here is a Blog I wrote recently.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={6} className="project-card">
                            <Card className="project-card-view">
                                <Card.Img variant="top" src={blog} alt="card-img" />
                                <Card.Body>
                                    <h1><Card.Title style={{ color: "gold" }}>Special Device for Visually Challenged using IOT</Card.Title></h1>
                                    <Card.Text style={{ textAlign: "justify" }}>
                                        This study describes a method to help visually challenged people perform daily tasks.
                                        The main purpose of this device is to help visually challenged people to a safe and convenient
                                        solution to overcome their obstacles. The project aims for flexibility, affordability, portability,
                                        simplicity in design, and practicality for the user. The proposed system uses the ultrasonic sensors
                                        which is used to identify the user’s problems, identify them by processing images, and set alarms via a
                                        Bluetooth-enabled audio output device. This approach allows users to discuss issues more easily and safely.
                                        The GPS for locating the person and sending the emergency SMS message for third person in any emergency situations.
                                    </Card.Text>
                                    <Button variant="primary" href="https://logabaalan.hashnode.dev/smart-blind-belt-for-visually-challenged-people" target="_blank">
                                        <FontAwesomeIcon icon={faHashnode} /> &nbsp; Hashnode
                                    </Button>
                                    {"\n"}
                                    {"\n"}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section >
    )
}
