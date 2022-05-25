import React, { useEffect } from "react";
import "./MISTCourseOverview.css";
import HalfBanner from "../common/HalfBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

export default function MISTCourseOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>PE01: Failures of Tools & Dies and Precaution</td>
                    <td>
                      <Link to="/MIST/PE01">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>PE02: Hardening Quality & Tooling Performance</td>
                    <td>
                      <Link to="/MIST/PE02">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>PE03: Tool Steels Selection & Tooling Improvement</td>
                    <td>
                      <Link to="/MIST/PE03">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>PE04: Carbide Materials & Hard Surface Coatings</td>
                    <td>
                      <Link to="/MIST/PE04">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>PE05: Tooling Properties, Testing & Control</td>
                    <td>
                      <Link to="/MIST/PE05">
                        <Button className="metalloy-btn" variant="primary">
                          View
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
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>IJM01: Fundamentals of Moulding Engineering</td>
                    <td>
                      <Link to="/MIST/IJM01">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      IJM02: Injection Moulding Defects, Causes & Solutions
                    </td>
                    <td>
                      <Link to="/MIST/IJM02">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      IJM03: Plastic Materials, Properties & Moulding
                      Characteristics
                    </td>
                    <td>
                      <Link to="/MIST/IJM03">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      IJM04: Engineering Mould Design for Quality Moulding
                    </td>
                    <td>
                      <Link to="/MIST/IJM04">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      IJM05: Mould Performance on Moulding Quality &
                      Productivity
                    </td>
                    <td>
                      <Link to="/MIST/IJM05">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      IJM06: Injection Machine Understanding & Process
                      Optimization
                    </td>
                    <td>
                      <Link to="/MIST/IJM06">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>IJM07: Product Design & Secondary Operations</td>
                    <td>
                      <Link to="/MIST/IJM07">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      IJM08: Processing Control for High Quality & Profitable
                      Moulding
                    </td>
                    <td>
                      <Link to="/MIST/IJM08">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      IJM09: Process Parameters Understanding & Machine Settings
                    </td>
                    <td>
                      <Link to="/MIST/IJM09">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>IJM10: Practical Scientific Injection Moulding</td>
                    <td>
                      <Link to="/MIST/IJM10">
                        <Button className="metalloy-btn" variant="primary">
                          View
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
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>MS01: Sheet Metal Cutting & Process Control</td>
                    <td>
                      <Link to="/MIST/MS01">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      MS02: Sheet Metal Forming & Materials Characteristics
                    </td>
                    <td>
                      <Link to="/MIST/MS02">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      MS03: Sheet Metal Bending & Stamping Design Guidelines
                    </td>
                    <td>
                      <Link to="/MIST/MS03">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      MS04: Sheet Metal Surface and Thickness Strains Analysis
                    </td>
                    <td>
                      <Link to="/MIST/MS04">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Module 4: Semiconductor Assembly Engineering Series
            </Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>SE01: Semiconductor Tooling Quality & Performance</td>
                    <td>
                      <Link to="/MIST/SE01">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>SE02: Leadframe Materials & Trim-and-Form Quality</td>
                    <td>
                      <Link to="/MIST/SE02">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      SE03: Encapsulation Materials & Transfer Moulding Control
                    </td>
                    <td>
                      <Link to="/MIST/SE03">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      SE04: Hardening & Surface Coating for Semiconductor
                      Tooling
                    </td>
                    <td>
                      <Link to="/MIST/SE04">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>
                      SE05: Microelectronic Package Defects Understanding and
                      Prevention
                    </td>
                    <td>
                      <Link to="/MIST/SE05">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Module 5: Die Casting Engineering
            </Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>MS01: Sheet Metal Cutting & Process Control</td>
                    <td>
                      <Link to="/MIST/MS01">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Module 6: Forging Technology</Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>MS01: Sheet Metal Cutting & Process Control</td>
                    <td>
                      <Link to="/MIST/MS01">
                        <Button className="metalloy-btn" variant="primary">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Module 7: Materials Engineering</Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td>MS01: Sheet Metal Cutting & Process Control</td>
                    <td>
                      <Link to="/MIST/MS01">
                        <Button className="metalloy-btn" variant="primary">
                          View
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
