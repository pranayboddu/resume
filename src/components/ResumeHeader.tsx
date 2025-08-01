import { Col, Container, Row } from "react-bootstrap"
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ResumeHeader() {
    return (
        <Container fluid className="header">
            <Row className={"d-flex align-items-center"}>
                <Col md={6} className="text-start my-3">
                    <Container className="h3 fw-bold" style={{ letterSpacing: '.45rem' }}>
                        PRANAY B
                    </Container>
                    <Container className="h6 fw-light">
                        Senior Principal Software Engineer
                    </Container>
                </Col>
                <Col md={6} className="text-end my-3">
                    <Container id={"email"}>
                        <MdEmail height={24} className="me-2" />
                        <a href="mailto:bpranay05@gmail.com">
                            bpranay05@gmail.com
                        </a>
                    </Container>
                    <Container>
                        <MdLocalPhone height={24} className="me-2" />
                        <a href="tel:+919666651315">
                            +91 96666 51315
                        </a>
                    </Container>
                    <Container>
                        <div className="text-muted">
                            <span>
                                <a href="https://www.linkedin.com/in/pranay-b- b130a235/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin height={24} className="me-2" />
                                </a>
                                <a href="https://github.com/pranayboddu" target="_blank" rel="noopener noreferrer">
                                    <FaGithub height={24} className="me-2" />
                                </a>
                            </span>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}