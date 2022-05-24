import React from "react";
import "./CompanyProfile.css";
import HalfBanner from "../common/HalfBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

export default function CompanyProfile() {
  return (
    <>
      <HalfBanner title="ABOUT US" />

      <Container className="image-text-preview-container">
        <Row>
          <Col sm={4} className="image-text-preview-col">
            <img
              src={require("../common/logo_with_text.png")}
              className="image-text-preview-img"
            ></img>
          </Col>
          <Col sm={8} className="image-text-preview-col">
            <p>
              Since 1995, Metalloy Consultant Services PLT has been principally
              engaged in providing technical know-how and applied engineering
              theory to manufacturing and education industries through
              organizing and conducting public and in-house technical training
              courses, technical learning tour, marketing and selling of
              technical publications.
              <br />
              <br />
              We are an exclusive technical training provider marketing a series
              of patented <strong>
                Manufacturing Insights Skills (MIS)
              </strong>{" "}
              training courses developed by our founder and panel of
              international technical consultants.
            </p>
            <br />

            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="vertical-align-mid">Business Registration</th>
                  <th className="vertical-align-mid">Registered No</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Registered company under Suruhanjaya Syarikat Malaysia (SSM)
                  </td>
                  <td>LLP0003449-LGN</td>
                </tr>
                <tr>
                  <td>
                    Registered training provider under Ministry of Finance (MoF)
                  </td>
                  <td>35702128315</td>
                </tr>
                <tr>
                  <td>
                    Registered training provider under Pembangunan Sumber
                    Manusia Berhad
                  </td>
                  <td>LLP0003449-LGN</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Container fluid className="training-course-preview-container">
        <CardGroup>
          <Card className="card-no-border">
            <Card.Body>
              <Card.Title>Vision</Card.Title>
              <Card.Text>
                To become a respected technical training provider for
                manufacturing & education industries.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-no-border">
            <Card.Body>
              <Card.Title>Mission</Card.Title>
              <Card.Text>
                To raise technical competency of future & existing technical
                employees for manufacturing quality & productivity improvement.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-no-border">
            <Card.Body>
              <Card.Title>Objective</Card.Title>
              <Card.Text>
                To assist technical staff to troubleshoot manufacturing issues
                in an effective and scientific manner.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-no-border">
            <Card.Body>
              <Card.Title>Core Values</Card.Title>
              <Card.Text>
                Customer Satisfaction
                <br />
                Commitment
                <br />
                Community
                <br />
                Creative
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>

      <Container className="image-text-preview-container">
        <Row>
          <h2 className="company-profile-title">OUR PRODUCT</h2>
          <br />
          <p>
            We will keep on develop, update, promote, organize & provide useful
            missing link study through our innovative Manufacturing Insights
            Skills Training Program for manufacturing process improvement. The
            program shall train technical staff to become multi-skills &
            multidiscipline workforce to assist them in improving quality,
            reducing rejects & increasing yield in the manufacturing line so as
            to minimize cost while maximizing profit for their operations. The
            program must be flexible and can be tailor-made to provide cost
            effective training and train what the industry & the trainees want.
          </p>
          <img
            src={require("./Philosophy_Behind_MIST.png")}
            className="company-profile-img"
          ></img>
          <p className="text-center mt-2">
            <i>The concept of Manufacturing Insights Skills Training</i>
          </p>
        </Row>
      </Container>

      <Container fluid className="training-course-preview-container">
        <h2 className="training-course-preview-title">OUR TRAINERS</h2> <br />
        {/* <CardGroup>
          <Card className="card-no-border">
            <Card.Img
              variant="top"
              src={require("../common/william_picture.jpeg")}
              className="training-course-img"
            />
            <Card.Body>
              <Card.Title>William Lee</Card.Title>
              <Card.Text>Technical Training Expert</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Profile
              </Button>
            </Card.Footer>
          </Card>
          <Card className="card-no-border">
            <Card.Img
              variant="top"
              src={require("../common/graham_picture.jpg")}
              className="training-course-img"
            />
            <Card.Body>
              <Card.Title>Dr. Graham Sussex</Card.Title>
              <Card.Text>Failure Analysis Expert</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Profile
              </Button>
            </Card.Footer>
          </Card>
          <Card className="card-no-border">
            <Card.Img
              variant="top"
              src={require("../common/morris_picture.jpg")}
              className="training-course-img"
            />
            <Card.Body>
              <Card.Title>Dr. Morris Murray</Card.Title>
              <Card.Text>Die Casting Expert</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Profile
              </Button>
            </Card.Footer>
          </Card>
          <Card className="card-no-border">
            <Card.Img
              variant="top"
              src={require("../common/matthew_picture.jpg")}
              className="training-course-img"
            />
            <Card.Body>
              <Card.Title>Dr. Matthew Dingle</Card.Title>
              <Card.Text>Metal Stamping Expert</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Profile
              </Button>
            </Card.Footer>
          </Card>
          <Card className="card-no-border">
            <Card.Img
              variant="top"
              src={require("../common/ray_picture.jpg")}
              className="training-course-img"
            />
            <Card.Body>
              <Card.Title>Ray Reynoldson</Card.Title>
              <Card.Text>Heat Treatment Expert</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="metalloy-btn" variant="primary">
                View Profile
              </Button>
            </Card.Footer>
          </Card>
        </CardGroup> */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="trainer-accordion">
              <img
                src={require("../common/william_picture.jpeg")}
                className="company-profile-trainer-img"
              />
              <p className="trainer-name">
                <strong>William K.W. Lee</strong> | Technical Training Expert
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="trainer-profile-text">
                Mr. William Lee is a qualified Materials & Manufacturing
                Engineer with an Honourable Bachelor Degree awarded by The
                Engineering Council of London (EC, UK). He has over 25 years
                working & teaching experience in materials and manufacturing
                industry. William possesses strong fundamentals knowledge in
                technical science & has special talent to communicate and
                explain to others the principle involved in various engineering
                fields. His ability to present and link the various engineering
                disciplines with real industrial use has made many of his course
                participants to appreciate the significant of technical details
                study for manufacturing improvement. Over the years, he has
                developed a series of patented Manufacturing Insights Skills
                (MIS) training programs for various manufacturing industries. He
                is now a full time contract speaker for a few training
                organizers as well as professional associations in ASEAN &
                Australia. William will bring a wealth of teaching experience to
                this program along with his strong industrial background as a
                former engineering practitioner in tooling, materials, heat
                treatment, moulding & metal stamping divisions. In addition,
                William is a versatile trilingual instructor who can instruct
                technical courses in English, Bahasa Malaysia or Mandarin (or a
                combination of the languages) to ensure full understanding of
                his presentation for his trainees from all levels.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="trainer-accordion">
              <img
                src={require("../common/graham_picture.jpg")}
                className="company-profile-trainer-img"
              />
              <p className="trainer-name">
                <strong>Dr. Graham Sussex</strong> | Failure Analysis Expert
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="trainer-profile-text">
                Dr. Graham Sussex has worked in corrosion and failure
                investigation since 1979, with 8 years at the Corrosion
                Prevention Centre in Manchester (UK), 8 years at ETRS,
                Melbourne, (an engineering testing and consulting company), 5
                years running courses for the Institute of Materials Engineering
                and, since 2001, contracting for half his time as technical
                specialist to the Australian Stainless steel Development
                Association mainly answering questions on their technical
                hotline. He is active in Australasian Corrosion Association and
                has frequently run courses and presented lectures on failure
                analysis and corrosion prevention in Australia and overseas. He
                has extensive experience in recognizing, eliminating and
                avoiding failures in the manufacturing, oil/gas, food and
                chemical industries, building and construction including
                reinforced concrete and coatings.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="trainer-accordion">
              <img
                src={require("../common/morris_picture.jpg")}
                className="company-profile-trainer-img"
              />
              <p className="trainer-name">
                <strong>Dr. Morris Murray</strong> | Die Casting Expert
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="trainer-profile-text">
                Dr. Morris Murray, is a world authority on die-casting. He is
                majoring in Materials Engineering & obtained his PhD from
                Melbourne University. As a Senior Principal Research Scientist
                at CSIRO (Australia), he led their die casting research for a
                number of years. He has carried out practical research for many
                OEM's and major manufacturers in such areas as alloy
                development, metal and casting quality, molten metal flow
                systems, thermal analysis and heat control of dies, proving
                hydraulic performances of casting machines and optimizing die
                spray, to name just a few. The benefits to the clients have been
                written up in joint papers and presented at NADCA conferences.
                Dr Murray himself has written over 100 technical papers and has
                a significant number of patents. His commitment and benefit to
                the industry was acknowledged when he was made a fellow and life
                member of the Australian Die Casting Association. He has also
                received awards from such bodies as the North American Die
                Casting Association (NADCA). Dr Murray has also presented a
                number of training courses on a variety of topics to both
                national and international companies.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="trainer-accordion">
              <img
                src={require("../common/matthew_picture.jpg")}
                className="company-profile-trainer-img"
              />
              <p className="trainer-name">
                <strong>Dr. Matthew Dingle</strong> | Metal Stamping Expert
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="trainer-profile-text">
                Dr. Matthew Dingle, PhD in Metallurgy and Materials Engineering,
                is currently director of a R&D company in Australia and a senior
                research associate in University. He has worked in Australia &
                Sweden in the automotive, marine and tooling industries and also
                spent several years as a university academician. He is an active
                researcher and has wide experience in tool design & simulation
                for sheet metal forming, high strength materials, numerical
                modeling and structural analysis. He is now based in Geelong,
                Australia providing die design, stamping simulation support
                services to the automotive industry. Dr. Dingle will bring a
                wealth of teaching experience along with his strong industrial
                background to instruct this sheet metal engineering course back
                with computer simulation program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="trainer-accordion">
              <img
                src={require("../common/ray_picture.jpg")}
                className="company-profile-trainer-img"
              />
              <p className="trainer-name">
                <strong>Ray Reynoldson</strong> | Heat Treatment Expert
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="trainer-profile-text">
                <strong>In Memory of Ray Reynoldson</strong>
                <br />
                Ray Reynoldson passed away on July 4, 2012. Ray has contributed
                a lot of his ideas, findings & experiences to some of our course
                notes development and on the growth of METALLOY. He has indeed
                inspired us to work hard in developing and promoting informative
                technical training courses for the benefit of technical
                employees and manufacturing industry. We will always remember
                his amazing intelligence and achievements. <br />
                <br />
                Ray Reynoldson - Australian, formerly worked as senior
                consultant for metal industry in Australia, USA & UK. A
                chartered Engineer in Metallurgy awarded by RMIT Australia. He
                has authored 35 technical papers in the area of heat treatment &
                has published by American Society of Metal (ASM) a book on heat
                treatment in fluidised bed technology. He was a fellow of the
                Institute of Engineers, Australia & first entered the heat
                treatment field in 1967 in UK. He was awarded the Claude A
                Steward Award in 1991 by Institute of Materials Engineering
                Australasia for recognition of the technical skill and
                innovation that he has shown in furnace development and the
                control of heat treatment processes during a career of over 30
                years in the heat treatment industry of Australia and Europe.
                Ray was active in Australasian Metal Industry and has frequently
                run courses & presented lectures on materials, heat treatment,
                surface engineering and metallurgy in Australia and overseas.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <Container className="image-text-preview-container">
        <Row>
          <h2 className="company-profile-title">OUR SERVICES</h2>
          <br />
          <p>
            We will strive to provide best customer service to satisfy customer
            needs. We will ensure our training fees, training environment,
            training manual, technical level, training pace, the scope, the
            duration, the medium & the methodology can be adjusted to suit
            customer's requirements in order & to receive a quality technical
            training service from us. <br />
            <br />
            We will focus on continuous improvement with innovative ideas to
            provide informative, effective & satisfactory technical training
            services and strive to establish mutually beneficial, long-term
            partnership with all customers.
          </p>
        </Row>
      </Container>

      <Container className="company-profile-carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./company_image_1.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>
                Training conducted at Makmal Komputer, ILP Ipoh on 9 and 10th
                March 2022.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./company_image_2.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <p>
                Training conducted at Makmal Komputer, ILP Ipoh on 9 and 10th
                March 2022.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./company_image_3.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <p>
                Training conducted at Makmal Komputer, ILP Ipoh on 9 and 10th
                March 2022.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
