import React from "react";
import './ImageTextPreview.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function ImageTextPreview() {
  return (
    <>
      <Container className="image-text-preview-container">
        <Row>
          <Col sm={4} className="image-text-preview-col"><img src={require("../common/logo_with_text.png")} className="image-text-preview-img"></img></Col>
          <Col sm={8} className="image-text-preview-col"><p>Since 1995, Metalloy Consultant Services PLT has been principally engaged in providing technical know-how and applied engineering theory to manufacturing and education industries through organizing and conducting public and in-house technical training courses, technical learning tour, marketing and selling of technical publications.<br/><br/>We are an exclusive technical training provider marketing a series of patented <strong>Manufacturing Insights Skills (MIS)</strong> training courses developed by our founder and panel of international technical consultants.</p>
          
          <Button className="image-text-preview-btn mt-3" variant="primary">Read Company Profile</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
