import React from "react";
import "./FAQ.css";
import HalfBanner from "../common/HalfBanner";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

export default function FAQ() {
  return (
    <>
      <HalfBanner title="FAQ" />
      <Container fluid className="faq-container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Why is employee training necessary?
            </Accordion.Header>
            <Accordion.Body>
              Without training, your employees do not understand the process or
              the equipment around them. A company will be in a better position
              to succeed if their entire workforce is trained to perform their
              job effectively.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why is technical training important?
            </Accordion.Header>
            <Accordion.Body>
              The inclusion of technical training will ensure your technical
              staffers are not left out from your company human capital
              development plan. While non-technical training trains the
              employees in managing people, things or process but technical
              training will train them to become technically inclined who can
              create, design, improve, manufacture & troubleshoot products &
              productivity problems in a more efficient & predictable manner.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Do we need in-depth technical competency to solve manufacturing
              problems?
            </Accordion.Header>
            <Accordion.Body>
              Quality control inspection may be able to detect manufacturing
              defects. In order to avoid recurrence of similar defect, we need a
              broad technical knowledge to find out the root cause of the
              problem from the large number of manufacturing parameters & to
              understand how they interact and cause preceding & existing wrong
              doing. A highly trained knowledgeable technical workforce can
              suggest effective solution to overcome a production problem. It is
              better to solve the problem forever rather than to fix it
              temporary.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {" "}
              Why do we need to study other technical knowledge which is not in
              our scope of duty?
            </Accordion.Header>
            <Accordion.Body>
              Employee is often assigned to a specific task & tends to overlook
              other variables which are outside their responsibility. Often,
              many of these preceding and external parameters can give direct or
              indirect impact on the product quality & productivity issues.
              Technical personnel must first understand the associated
              parameters and how they affect the process in order to process
              with confidence. A highly trained multi-skilled & multi-discipline
              technical staff can tackle the quality & productivity problems in
              a more efficient & controllable manner. In view of the increasing
              competition and complication of manufacturing technology, it is
              necessary to develop knowledgeable workforce to transform our
              labour-based economy into knowledge-based economy.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              {" "}
              Is it necessary to train all technical staff?
            </Accordion.Header>
            <Accordion.Body>
              Virtually all technical employees (including engineers,
              supervisors and technicians) want to perform a good job, but most
              have never received the skills and confidence building tools
              necessary to do so. Human resources development is a long term
              capital investment program. Investing in continuous professional
              training demonstrates a commitment to your staff, enhances company
              loyalty and morale, as well as reduced staff turnover. A
              commitment to develop employee competence is also an impressive
              selling point for both your current and future customers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              {" "}
              What is the payback time to invest in technical training?
            </Accordion.Header>
            <Accordion.Body>
              Attending a short technical competency upgrading program will not
              yield immediate gain. The application of technical concepts,
              procedures & processes learnt from our MIS training series
              requires management and staff’s long term support & commitment in
              order to implement a new technical solution, to monitor, and to
              evaluate the testing results. Engaging a trainer for a day or two
              technical training services is not considered a training
              commitment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              {" "}
              Do you offer technical training that is specific to our process?
            </Accordion.Header>
            <Accordion.Body>
              Currently MIS training series offer more than 32 technical topics
              covering precision engineering, injection moulding, sheet metal
              stamping, die casting, forging, semiconductor assembly, and
              materials engineering to give the insight of manufacturing
              activities. We have more than 120 technical sub-topics for
              customers to select and can be customized to reinforce your
              particulars.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              {" "}
              Is it necessary to study the theoretical side of the
              manufacturing?
            </Accordion.Header>
            <Accordion.Body>
              Manufacturing should be regarded as a science but not a magic. A
              solid understanding in theory will introduce science & engineering
              procedures to the manufacturing process by removing the
              uncertainties and give a consistent and repeatable result.
              Versatile employee with a strong theory is able to explain logical
              reasoning on a manufacturing issue rather than depend on
              guesswork. Certainly in a real production world there are inherent
              variations & constraints found in the manufacturing process which
              can limit the theoretical perfection, but many have shown that
              higher quality levels can be attained by those willing to put
              engineering principles into the effort to improve quality. MIS
              offers applied engineering theory (not general theory) to give a
              solid understanding of how’s and why’s of many engineering
              practices & procedures. The training classes are taught by former
              industry practitioners. Each trainee is supplied with a
              comprehensive manual that will become a valuable reference tool.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              Do you organize public event for all MIST topics?
            </Accordion.Header>
            <Accordion.Body>
              We only select a few MIST topics to run as public training
              programs in a calendar year. Should public training not be
              scheduled for a non-selected topic, we will consider opening an ad
              hoc public training class if you’ve a minimum of five (5)
              guaranteed participants to enrol a topic at your choice.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              What is the benefit of in-house training?
            </Accordion.Header>
            <Accordion.Body>
              In-house training saves time, money, and meeting your targeted
              participants scheduling needs. We can run in-house training on
              weekdays or weekends without additional cost. Our trainer is
              capable to conduct training in Bahasa, English, and Mandarin or
              use combined languages to ensure full understanding for course
              participants from all levels.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              What if we train them and they leave the company after that?
            </Accordion.Header>
            <Accordion.Body>
              Train one employee and they may leave, train your entire workforce
              and you will always have competent employees to run your
              operation.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              Why technical training fee is more costly than non-technical?
            </Accordion.Header>
            <Accordion.Body>
              Compared to the hundreds of thousands of dollars that companies
              lose annually from manufacturing rejects as a direct result of
              their poorly skilled employees, the cost of training your
              technical workforce is significantly lower. Training fees are
              priced differently depend on credential of training provider, the
              practical usefulness of training topic, and trainer’s
              qualification.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
