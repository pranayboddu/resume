import { Container, Col } from "react-bootstrap"

export default function ResumeFooter() {
    return (
        <Container className="footer px-0 mt-4 mb-5 align-items-center d-flex flex-column">
            <Col>
                Thanks for your time.
                {/* Thanks for you time. Hope you got my latest Resume.<br/> If not, you can find at <a href={"https://stealth-grid.github.io/resume"}>https://stealth-grid.github.io/resume</a>. */}
            </Col>
        </Container>
    )
}