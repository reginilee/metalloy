import React, { useEffect } from "react";
import "./MISTCourseOverview.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function SessionDetailPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content_with_description = [];

  for (var i = 0; i < props.content.length; i++) {
    content_with_description.push(
      <>
        <strong>{props.content[i]}</strong>
        <br />
        {props.content_description[i]}
        <br />
        <br />
      </>
    );
  }

  return (
    <>
      <Container fluid className="submodule-header">
        <Row xs={1} sm={2}>
          <Col className="submodule-title">
            <h1>
              {props.id}
              <br /> {props.title}
            </h1>
            <br />
            <Button className="metalloy-btn-light" variant="primary">
              Download Brochure
            </Button>
          </Col>

          <Col>
            <Card className="submodule-info-card">
              <Card.Img variant="top" src={props.preview_img} />
              <Card.Body>
                <Table borderless hover size="sm">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Duration</strong>
                      </td>
                      <td>{props.duration}</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Content</strong>
                      </td>
                      <td>
                        {props.content.map((object, i) => (
                          <>
                            {object}
                            <br />
                          </>
                        ))}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Instructor</strong>
                      </td>
                      <td>{props.instructor}</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Language</strong>
                      </td>
                      <td>{props.language}</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Price</strong>
                      </td>
                      <td>{props.price}</td>
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
            <ol>
              {props.benefits.map((object, i) => (
                <>
                  <li>{object}</li>
                </>
              ))}
            </ol>
          </Col>
          <Col></Col>
        </Row>

        <Row className="mt-5">
          <h2 className="company-profile-title" style={{ textAlign: "left" }}>
            SESSION OVERVIEW
          </h2>
          <p style={{ paddingLeft: "2rem" }}>{props.overview}</p>
        </Row>

        <Row className="mt-5">
          <h2 className="company-profile-title" style={{ textAlign: "left" }}>
            SESSION CONTENT
          </h2>
          <p style={{ paddingLeft: "2rem" }}>{content_with_description}</p>
        </Row>

        <Row className="mt-3">
          <h2 className="company-profile-title" style={{ textAlign: "left" }}>
            COURSE INSTRUCTOR
          </h2>
          <Col sm={3} className="mt-2 submodule-trainer-picture-col">
            <img
              src={require("../common/william_picture.jpeg")}
              className="submodule-trainer-picture"
            ></img>
          </Col>
          <Col className="mt-2">
            <p className="submodule-trainer-intro">
              William Lee - Malaysian, Materials Engineer with an honorable
              Bachelor Degree awarded by The Engineering Council of London (EC,
              UK). He has over 25 years working & teaching experience in
              manufacturing industry. William possesses strong fundamentals
              knowledge in technical science & has special talent to communicate
              and explain to others the principles involved in various
              engineering fields. His ability to present and link the various
              engineering disciplines with real industrial use has made many of
              his course participants to appreciate the significant of technical
              details study for manufacturing improvement. Over the years, he
              has developed a series of patented Manufacturing Insights (MIS)
              Training programs for various manufacturing industries. He is now
              a full time contract speaker for a few training organizers as well
              as professional associations in ASEAN & Australia. William will
              bring a wealth of teaching experience to this program along with
              his strong industrial background as a former engineering
              practitioner in tooling, materials, heat treatment, moulding &
              metal forming divisions. In addition, William is a versatile
              trilingual instructor who can instruct technical courses in
              English, Bahasa Malaysia or Mandarin (or a combination of the
              languages) to ensure full understanding of his presentation by his
              trainees from all levels.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <h2 className="company-profile-title" style={{ textAlign: "left" }}>
            TARGET PARTICIPANTS
          </h2>
          <p style={{ paddingLeft: "2rem" }}>
            Participating companies can be from metal stamping, forming &
            machining, plastic moulding, electronic, automotive, extrusion, die
            casting, moulds & dies, tool steels as well as heat treatment
            industry. Target audience can be those involved in activities
            related to tooling, parts or products manufacturing such as
            technical group personnel, production managers, supervisors, tooling
            engineers, tool makers, engineering specialists, quality controllers
            and R&D researchers, designers, machinists, technicians and heat
            treaters.
          </p>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2 className="company-profile-title" style={{ textAlign: "left" }}>
              ADMINISTRATIVE DETAILS
            </h2>
            <ol style={{ paddingLeft: "2rem" }}>
              <li>
                Should public training not be scheduled for this program we will
                consider opening an ad hoc public training class if you've
                minimum guaranteed participants to attend this program.
              </li>
              <li>
                We can bring this program to your premises as in-house training
                event for your in-house employees only. Interested participating
                company may contact us for an in-house training proposal.
              </li>
              <li>
                In-house training can be conducted on weekdays or weekends
                (including public holidays) to meet the scheduling needs of your
                targeted staff.
              </li>
              <li>
                For in-house training, a list of participants complete with
                their full name & designation must be presented to training
                provider one week prior commencement of each program. The total
                no. of training manual is supplied to the actual no. of turned
                out attendees only.
              </li>
              <li>
                Substitute is allowed to replace the earlier registered person
                if he / she is unable to attend the training program (both
                public and in-house training). Participating company must inform
                us the details of replacement person.
              </li>
              <li>
                All programs are of SBL (Skim Bantuan Latihan) type. Eligible
                company (Human Resources Development Fund contributor) must
                apply through themselves for the rebate of any eligible expenses
                (including training fees) from Human Resources Development
                Council. Training provider bears no responsibility for the
                approval of training grants or any form of rebates between
                participating company and HRDC.
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </>
  );
}
