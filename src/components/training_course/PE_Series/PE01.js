import React from "react";
import "../MISTCourseOverview.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function PE01() {
  return (
    <>
      <Container fluid className="submodule-header">
        <Row xs={1} sm={2}>
          <Col className="submodule-title">
            <h1>
              PE01:
              <br /> Failures of Tools & Dies and Precaution
            </h1>
            <br />
            <Button className="metalloy-btn-light" variant="primary">
              Download Brochure
            </Button>
          </Col>

          <Col>
            <Card className="submodule-info-card">
              <Card.Img
                variant="top"
                src={require("../../homepage/Module_1_Image.jpg")}
              />
              <Card.Body>
                <Table borderless hover size="sm">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Duration</strong>
                      </td>
                      <td>2 days</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Content</strong>
                      </td>
                      <td>
                        1. Failures Due To Design Faults
                        <br />
                        2. Failures Due To Tooling Materials
                        <br />
                        3. Failures Due To Machining Defects
                        <br />
                        4. Failures Due To Poor Heat Treatment
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Trainer</strong>
                      </td>
                      <td>William K.W. Lee</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Language</strong>
                      </td>
                      <td>English / Bahasa Melayu / 华文</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Price</strong>
                      </td>
                      <td>MYR 500.00</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 mb-5">
        <Row xs={1} sm={2}>
          <Col>
            <h2 className="company-profile-title" style={{ textAlign: "left" }}>
              SESSION BENEFITS
            </h2>
            <br />
            <ol>
              <li>Understand common tool failures & their causes.</li>
              <li>
                Prevent premature tools, moulds & dies failures by applying
                proper pre-, during and post treatments of various tools
                processing works.
              </li>
              <li>Learn various tooling performance improvement programs</li>
              <li>
                Learn how to cooperate with designers, tool makers, heat
                treaters, tooling materials suppliers, production & maintenance
                people for achieving better production economy.
              </li>
            </ol>
          </Col>
          <Col></Col>
        </Row>

        <Row className="mt-3">
          <h2 className="company-profile-title" style={{ textAlign: "left" }}>
            SESSION OVERVIEW
          </h2>
          <br />
          <p style={{ paddingLeft: "2rem" }}>
            The program is intended to improve understanding of various tool
            processing & their effects to the tooling materials properties and
            behavior so that proper pre-treatment, during treatment and
            post-treatment measures can be planned correctly. This lead to
            reduce risk of premature tool failure during tool making process and
            when places them into service condition. Participants will learn
            various influencing factors for tool life performance and
            metallurgical effects of various tools manufacturing processes. The
            program will emphasize on the proper design, handling & processing
            of tooling materials use in fabricating moulds, tools, dies, jigs &
            fixtures. Fundamental knowledge & practical data will be explained &
            given during the presentation. In addition, each topic will be
            followed by a video presentation. Contents of the video programs are
            designed by professionals and will allow course participants to
            witness samples from actual condition relevant to the teaching
            topic; this will help further reinforce understanding of the
            different subjects.
          </p>
        </Row>
      </Container>
    </>
  );
}
