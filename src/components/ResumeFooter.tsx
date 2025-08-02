import { Container, Col } from "react-bootstrap"

export default function ResumeFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <Container fluid className="bg-dark mt-5 align-items-center d-flex flex-column">
            <Col className="text-light text-center py-3">
                &copy; {currentYear} Pranay Boddu. All rights reserved.
            </Col>
        </Container>
    )
}