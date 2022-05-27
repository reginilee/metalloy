import React, { useEffect } from "react";
import "./MISTCourseOverview.css";
import HalfBanner from "../common/HalfBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

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
            <Accordion.Header>Module 1: Precision Engineering Series</Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>PE01: Failures of Tools & Dies and Precaution</td>
                    <td>
                      <Link to="/MIST/PE01">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/PE_Series/Metalloy_PE01_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>PE02: Hardening Quality & Tooling Performance</td>
                    <td>
                      <Link to="/MIST/PE02">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/PE_Series/Metalloy_PE02_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>PE03: Tool Steels Selection & Tooling Improvement</td>
                    <td>
                      <Link to="/MIST/PE03">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/PE_Series/Metalloy_PE03_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>PE04: Carbide Materials & Hard Surface Coatings</td>
                    <td>
                      <Link to="/MIST/PE04">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/PE_Series/Metalloy_PE04_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>PE05: Tooling Properties, Testing & Control</td>
                    <td>
                      <Link to="/MIST/PE05">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/PE_Series/Metalloy_PE05_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Module 2: Plastic Injection Moulding Series</Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM01: Fundamentals of Moulding Engineering</td>
                    <td>
                      <Link to="/MIST/IJM01">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM01_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM02: Injection Moulding Defects, Causes & Solutions</td>
                    <td>
                      <Link to="/MIST/IJM02">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM02_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM03: Plastic Materials, Properties & Moulding Characteristics</td>
                    <td>
                      <Link to="/MIST/IJM03">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM03_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM04: Engineering Mould Design for Quality Moulding</td>
                    <td>
                      <Link to="/MIST/IJM04">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM04_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM05: Mould Performance on Moulding Quality & Productivity</td>
                    <td>
                      <Link to="/MIST/IJM05">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM05_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM06: Injection Machine Understanding & Process Optimization</td>
                    <td>
                      <Link to="/MIST/IJM06">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM06_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM07: Product Design & Secondary Operations</td>
                    <td>
                      <Link to="/MIST/IJM07">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM07_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM08: Processing Control for High Quality & Profitable Moulding</td>
                    <td>
                      <Link to="/MIST/IJM08">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM08_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM09: Process Parameters Understanding & Machine Settings</td>
                    <td>
                      <Link to="/MIST/IJM09">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM09_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>IJM10: Practical Scientific Injection Moulding</td>
                    <td>
                      <Link to="/MIST/IJM10">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/IJM_Series/Metalloy_IJM10_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Module 3: Sheet Metal Stamping Series</Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>MS01: Sheet Metal Cutting & Process Control</td>
                    <td>
                      <Link to="/MIST/MS01">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/MS_Series/Metalloy_MS01_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>MS02: Sheet Metal Forming & Materials Characteristics</td>
                    <td>
                      <Link to="/MIST/MS02">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/MS_Series/Metalloy_MS02_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>MS03: Sheet Metal Bending & Stamping Design Guidelines</td>
                    <td>
                      <Link to="/MIST/MS03">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/MS_Series/Metalloy_MS03_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>MS04: Sheet Metal Surface and Thickness Strains Analysis</td>
                    <td>
                      <Link to="/MIST/MS04">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/MS_Series/Metalloy_MS04_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Module 4: Semiconductor Assembly Engineering Series</Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>SE01: Semiconductor Tooling Quality & Performance</td>
                    <td>
                      <Link to="/MIST/SE01">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/SE_Series/Metalloy_SE01_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>SE02: Leadframe Materials & Trim-and-Form Quality</td>
                    <td>
                      <Link to="/MIST/SE02">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/SE_Series/Metalloy_SE02_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>SE03: Encapsulation Materials & Transfer Moulding Control</td>
                    <td>
                      <Link to="/MIST/SE03">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/SE_Series/Metalloy_SE03_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>SE04: Hardening & Surface Coating for Semiconductor Tooling</td>
                    <td>
                      <Link to="/MIST/SE04">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/SE_Series/Metalloy_SE04_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>SE05: Microelectronic Package Defects Understanding and Prevention</td>
                    <td>
                      <Link to="/MIST/SE05">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/SE_Series/Metalloy_SE05_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Module 5: Die Casting Engineering</Accordion.Header>
            <Accordion.Body>
              <Table striped borderless hover size="md">
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>DC01: Die Casting Process, Defects & Die Life Improvement</td>
                    <td>
                      <Link to="/MIST/DC01">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/DC_Series/Metalloy_DC01_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>DC02: Thermal Control for Quality Die Casting</td>
                    <td>
                      <Link to="/MIST/DC02">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/DC_Series/Metalloy_DC02_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>DC03: Metal Flow Control for Quality Die Casting</td>
                    <td>
                      <Link to="/MIST/DC03">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/DC_Series/Metalloy_DC03_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>DC04: Die Performance Control for Quality Die Casting</td>
                    <td>
                      <Link to="/MIST/DC04">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/DC_Series/Metalloy_DC04_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
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
                    <td colspan={2}>CF01: Cold Forging Tool Materials and Tool Processing Control</td>
                    <td>
                      <Link to="/MIST/CF01">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/CF_Series/Metalloy_CF01_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>CF02: Troubleshooting Cold Forging Tool Failures</td>
                    <td>
                      <Link to="/MIST/CF02">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/CF_Series/Metalloy_CF02_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>CF03: Hardening Quality of Forging Tools</td>
                    <td>
                      <Link to="/MIST/CF03">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/CF_Series/Metalloy_CF03_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>HF01: Hot Forging Process, Materials & Die Life Control</td>
                    <td>
                      <Link to="/MIST/HF01">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/HF_Series/Metalloy_HF01_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>HF02: Engineering Materials for Hot Forging</td>
                    <td>
                      <Link to="/MIST/HF02">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/HF_Series/Metalloy_HF02_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>HF03: Hot Forging Die Quality & Performance</td>
                    <td>
                      <Link to="/MIST/HF03">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/HF_Series/Metalloy_HF03_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
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
                    <td colspan={2}>ME01: Metallurgy of Iron & Steel</td>
                    <td>
                      <Link to="/MIST/ME01">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/ME_Series/Metalloy_ME01_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>ME02: Steels & Its Heat Treatment</td>
                    <td>
                      <Link to="/MIST/ME02">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/ME_Series/Metalloy_ME02_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>ME03: Metallurgical Failures Understanding & Prevention</td>
                    <td>
                      <Link to="/MIST/ME03">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/ME_Series/Metalloy_ME03_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>ME04: Aluminum Alloys & Its Heat Treatment</td>
                    <td>
                      <Link to="/MIST/ME04">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/ME_Series/Metalloy_ME04_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td colspan={2}>ME05: Stainless Steels & Processing Control</td>
                    <td>
                      <Link to="/MIST/ME05">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Details
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="training-course-icon" />
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <a href={require("./session/ME_Series/Metalloy_ME05_Brochure.pdf")} target="_blank" rel="noreferrer">
                        <Button className="d-block d-sm-none metalloy-btn" variant="primary">
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>

                        <Button className="d-none d-sm-block metalloy-btn" variant="primary">
                          Brochure
                          <FontAwesomeIcon icon={faFileArrowDown} className="training-course-icon" />
                        </Button>
                      </a>
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
