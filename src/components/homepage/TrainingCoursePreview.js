import React from "react";
import "./TrainingCoursePreview.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

export default function TrainingCoursePreview() {
  return (
    <>
      <Container fluid className="training-course-preview-container">
        <Row>
          <h2 className="training-course-preview-title">
            Manufacturing Insights Skills Training 制造工艺技能培训课程
          </h2>
          <p className="training-course-preview-subtitle">
            The missing link study for manufacturing quality and productivity
            improvement
          </p>
        </Row>
        <CardGroup className="mt-3">
          <Card className="card-no-border">
            <Card.Img variant="top" src={require("./Module_1_Image.jpg")} className="training-course-img" />
            <Card.Body>
              <Card.Title>Precision Engineering</Card.Title>
              <Card.Text className="training-course-module-title">
                PE01: Failures of Tools & Dies and Precaution
                <br />
                PE02: Hardening Quality & Tooling Performance
                <br />
                PE03: Tool Steels Selection & Tooling Improvement
                <br />
                PE04: Carbide Materials & Hard Surface Coatings
                <br />
                PE05: Tooling Properties, Testing & Control
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Module
              </Button>
            </Card.Footer>
          </Card>
          <Card className="card-no-border">
            <Card.Img variant="top" src={require("./Module_1_Image.jpg")} className="training-course-img" />
            <Card.Body>
              <Card.Title>Plastic Injection Moulding</Card.Title>
              <Card.Text className="training-course-module-title">
                IJM01: Fundamentals of Moulding Engineering
                <br />
                IJM02: Injection Moulding Defects, Causes & Solutions
                <br />
                IJM03: Plastic Materials, Properties & Moulding Characteristics
                <br />
                IJM04: Engineering Mould Design for Quality Moulding
                <br />
                IJM05: Mould Performance on Moulding Quality & Productivity
                <br />
                IJM06: Injection Machine Understanding & Process Optimization
                <br />
                IJM07: Product Design and Secondary Operations
                <br />
                IJM08: Processing Control for High Quality & Profitable Moulding
                <br />
                IJM09: Process Parameters Understanding & Machine Settings
                <br />
                IJM10: Practical Scientific Injection Moulding
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Module
              </Button>
            </Card.Footer>
          </Card>
          <Card className="card-no-border">
            <Card.Img variant="top" src={require("./Module_1_Image.jpg")} className="training-course-img" />
            <Card.Body>
              <Card.Title>Sheet Metal Stamping</Card.Title>
              <Card.Text className="training-course-module-title">
                MS01: Sheet Metal Cutting & Process Control
                <br />
                MS02: Sheet Metal Forming & Materials Formability
                <br />
                MS03: Sheet Metal Bending & Stamping Design Guidelines
                <br />
                MS04: Sheet Metal Surface and Thickness Strains Analysis
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Module
              </Button>
            </Card.Footer>
          </Card>
        </CardGroup>

        <CardGroup className="mt-3">
          <Card className="card-no-border">
            <Card.Img variant="top" src={require("./Module_1_Image.jpg")} className="training-course-img" />
            <Card.Body>
              <Card.Title>Semiconductor Assembly Engineering</Card.Title>
              <Card.Text className="training-course-module-title">
                SE01: Semiconductor Tooling Quality & Performance
                <br />
                SE02: Leadframe Materials and Trim & Form Quality
                <br />
                SE03: Encapsulation Materials and Transfer Moulding Control
                <br />
                SE04: Hardening & Surface Coatings for Semiconductor Tooling
                <br />
                SE05: Microelectronic Package Defects Understanding & Prevention
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Module
              </Button>
            </Card.Footer>
          </Card>
          <Card className="card-no-border">
            <Card.Img variant="top" src={require("./Module_1_Image.jpg")} className="training-course-img" />
            <Card.Body>
              <Card.Title>Die Casting Engineering</Card.Title>
              <Card.Text className="training-course-module-title">
                DC01: Die Casting Process, Defects & Die Life Improvement
                <br />
                DC02: Thermal Flow Control for Quality Die Casting
                <br />
                DC03: Metal Flow Control for Quality Die Casting
                <br />
                DC04: Die Performance Control for Quality Casting
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Module
              </Button>
            </Card.Footer>
          </Card>
          <Card className="card-no-border">
            <Card.Img variant="top" src={require("./Module_1_Image.jpg")} className="training-course-img" />
            <Card.Body>
              <Card.Title>Forging Technology</Card.Title>
              <Card.Text className="training-course-module-title">
                CF01: Cold Forging Tool Materials & Processing Control
                <br />
                CF02: Troubleshooting Cold Forging Tools Failures
                <br />
                CF03: Hardening Quality of Forging Tools
                <br />
                HF01: Hot Forging Process, Materials and Die Life Control
                <br />
                HF02: Engineering Materials for Hot Forging
                <br />
                HF03: Hot Forging Die Quality & Performance
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Module
              </Button>
            </Card.Footer>
          </Card>
        </CardGroup>

        <Row xs={1} sm={3} className="mt-3">
          <Col>
            <Card className="card-no-border">
              <Card.Img variant="top" src={require("./Module_1_Image.jpg")} className="training-course-img" />
              <Card.Body>
                <Card.Title>Materials Engineering</Card.Title>
                <Card.Text className="training-course-module-title">
                  ME01: Metallurgy of Iron & Steel
                  <br />
                  ME02: Steels & Its Heat Treatment
                  <br />
                  ME03: Metallurgical Failures Understanding & Prevention
                  <br />
                  ME04: Aluminium Alloys & Its Heat Treatment
                  <br />
                  ME05: Stainless Steels & Processing Control
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  className="metalloy-btn"
                  variant="primary"
                >
                  View Module
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
