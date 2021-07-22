import { Col, Container, Row } from "react-bootstrap"
import "../css/ResumeHeader.css";

export default function ResumeHeader(props: any) {
    return (<Container fluid className="header">
        <Row className={"d-flex align-items-center"}>
            <Col md={6} className="text-left my-3">
                <Container className="display-name h3 font-weight-bold">
                    <span className={"display-last-name"}>PRANAY</span>
                    <br />
                    <span className={"text-primary display-first-name"}>BODDU</span>
                </Container>
            </Col>
            <Col md={6} className="text-right my-3">
                <Container className="display-info font-weight-bold">
                    Principal Software Engineer
                </Container>
                <Container className="" id={"email"}>
                    <a href="mailto:bpranay05@gmail.com">
                        E .  bpranay05@gmail.com
                    </a>
                </Container>
                <Container className="">
                    <a href="tel:+919666651315">
                        P .  +91 96666 51315
                    </a>
                </Container>
            </Col>
        </Row>
    </Container>)
}