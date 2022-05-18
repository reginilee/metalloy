import React from "react";
import "./ContactUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function ContactUs() {
  return (
    <>
      <div className="contact-us-background">
        <Container className="contact-us-container">
          <Row xs={1} md={2}>
            <Col>
              <h2>Contact Us</h2>
              <br />
              <strong>
                <p>Metalloy Consultant Services PLT</p>
              </strong>
              Address:
              <p>
                No. 4, Jalan TK 2/3, Taman Kinrara Seksyen 2, Puchong 47180
                Selangor, Malaysia
              </p>
              Email:
              <p>training@metalloy.com.my</p>
              Number:
              <p>+603 80751529</p>
              Facebook:
              <p>Metalloy Consultant Services</p>
            </Col>

            <Col>
              <h2>Inquiry Form</h2>
              <br />
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Full name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Position" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Company" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="number" placeholder="Contact Number" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={5} placeholder="Message" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
