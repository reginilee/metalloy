import React from "react";
import "./MISTCourseOverview.css";
import HalfBanner from "../common/HalfBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

export default function MISTCourseOverview() {
  return (
    <>
      <HalfBanner title="Manufacturing Insights Skills Training" />

      <Container className="image-text-preview-container">
        <Row>
          <h2 className="company-profile-title">COURSE OVERVIEW</h2>
          <br />
          <p>
            The objective of this patented MIS program is to raise technical
            competency of technical employees from local manufacturing industry
            for product quality & productivity improvement through understanding
            of vital manufacturing variables. At the end of the MIS training,
            participants will realize the importance of technical details study
            & the introduction of science & engineering procedures to their
            existing practices for a profitable manufacturing operation.
          </p>
        </Row>
      </Container>

      <Container className="training-course-module-container mb-5">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Module 1: Precision Engineering Series
            </Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr>
                    <td>PE01: Failures of Tools & Dies and Precaution</td>
                    <td>
                      <Link to="/MIST/PE01">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>PE02: Hardening Quality & Tooling Performance</td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>PE03: Tool Steels Selection & Tooling Improvement</td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>PE04: Carbide Materials & Hard Surface Coatings</td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>PE05: Tooling Properties, Testing & Control</td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Module 2: Plastic Injection Moulding Series
            </Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr>
                    <td>IJM01: Fundamentals of Moulding Engineering</td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      IJM02: Injection Moulding Defects, Causes & Solutions
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      IJM03: Plastic Materials, Properties & Moulding
                      Characteristics
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      IJM04: Engineering Mould Design for Quality Moulding
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      IJM05: Mould Performance on Moulding Quality &
                      Productivity
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      IJM06: Injection Machine Understanding & Process
                      Optimization
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>IJM07: Product Design & Secondary Operations</td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      IJM08: Processing Control for High Quality & Profitable
                      Moulding
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      IJM09: Process Parameters Understanding & Machine Settings
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>IJM10: Practical Scientific Injection Moulding</td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Module 3: Sheet Metal Stamping Series
            </Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr>
                    <td>MS01: SHEET METAL CUTTING & PROCESS CONTROL</td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      MS02: SHEET METAL FORMING and MATERIALS CHARACTERISTICS
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      MS03: SHEET METAL BENDING & STAMPING DESIGN GUIDELINES
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      MS04: SHEET METAL SURFACE AND THICKNESS STRAINS ANALYSIS
                    </td>
                    <td>
                      <Link to="/MIST">
                        <Button className="metalloy-btn" variant="primary">
                          View Courses
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
