import { Button, Col, Container, Navbar, Row, Stack } from "react-bootstrap";
import { IconType } from "react-icons";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";
import Icon from "./Icon";

interface SocialLink {
    href: string;
    icon: IconType
    label: string;
    external?: boolean;
}
const socialLinks: SocialLink[] = [
    {
        href: "mailto:bpranay05@gmail.com",
        icon: MdEmail,
        label: "Email",
    },
    {
        href: "tel:+919666651315",
        icon: MdLocalPhone,
        label: "Phone",
    },
    {
        href: "https://www.linkedin.com/in/pranay-b-b130a235/",
        icon: FaLinkedin,
        label: "LinkedIn",
        external: true,
    },
    {
        href: "https://github.com/pranayboddu",
        icon: FaGithub,
        label: "GitHub",
        external: true,
    },
]

export default function ResumeHeader() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <Navbar fixed="top" expand="lg" style={{ backgroundColor: isDark ? '#4d4949' : '#f8f9fa' }}>
            <Container fluid className="d-flex justify-content-between align-items-center px-4">
                <Row>
                    <Col className="text-start my-3">
                        <Stack className="h3 fw-bold" style={{ letterSpacing: '.45rem' }}>
                            PRANAY B
                        </Stack>
                        <Stack className="h6 fw-light">
                            Senior Principal Software Engineer
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-end my-3">
                        <Stack direction="horizontal" gap={3} className="justify-content-end text-center">
                            {socialLinks.map(({ href, icon, label, external }, idx) => (
                                <a
                                    key={label + idx}
                                    className={`me-2 ${isDark ? 'text-light' : 'text-dark'}`}
                                    href={href}
                                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                >
                                    <Icon IconComponent={icon} /> <span>{label}</span>
                                </a>
                            ))}
                            <Button
                                variant={isDark ? 'light' : 'dark'}
                                onClick={toggleTheme}
                                className="ms-2"
                                title={`${isDark ? 'Light' : 'Dark'} theme`}
                            >
                                {isDark ? <FaSun /> : <FaMoon />}
                            </Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}