import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function TrainerProfilePreview() {
  return (
    <>
      <Container className="image-text-preview-container">
        <Row>
          <Col sm={4} className="image-text-preview-col">
            <img
              src={require("../common/william_picture.jpeg")}
              className="image-text-preview-img"
            ></img>
          </Col>
          <Col sm={8} className="image-text-preview-col">
            <p>
              <strong>WILLIAM K. W. LEE</strong> is a qualified Materials and
              Manufacturing Engineer with an Honourable Bachelor Degree awarded
              by The Engineering Council of London (EC, UK). He has over 25
              years working and teaching experience in materials and
              manufacturing industry. William possesses strong fundamentals
              knowledge in technical science and has special talent to
              communicate and explain to others the principle involved in
              various engineering fields. His ability to present and link the
              various engineering disciplines with real industrial use has made
              many of his course participants to appreciate the significant of
              technical details study for manufacturing improvement.
            </p>

            <Button className="metalloy-btn mt-3" variant="primary">
              <Link to="/company_profile">Read Company Profile</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
