import { Col, Container, Row } from "react-bootstrap"
import { MdEmail, MdLocalPhone } from "react-icons/md";

export default function ResumeHeader() {
    return (
        <Container fluid className="header">
            <Row className={"d-flex align-items-center"}>
                <Col md={6} className="text-start my-3">
                    <Container className="h3 fw-bold">
                        <span
                            style={{ letterSpacing: '.45rem' }}
                        >PRANAY B</span>&nbsp;
                        {/* <br /> */}
                        {/* <span className={"text-primary"}>BODDU</span> */}
                    </Container>
                </Col>
                <Col md={6} className="text-end my-3">
                    <Container className="display-info fw-bold">
                        Senior Principal Software Engineer
                    </Container>
                    <Container className="" id={"email"}>
                        <MdEmail height={24} className="me-2" />
                        <a href="mailto:bpranay05@gmail.com">
                            bpranay05@gmail.com
                        </a>
                    </Container>
                    <Container className="">
                        <MdLocalPhone height={24} className="me-2" />
                        <a href="tel:+919666651315">
                            +91 96666 51315
                        </a>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}