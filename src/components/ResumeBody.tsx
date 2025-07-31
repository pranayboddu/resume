import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap"
import { FaGolang, FaReact, FaNodeJs, FaDocker, FaPhp, FaJs, FaHtml5, FaCss3Alt, FaCode, FaGitAlt, FaChrome, FaBitbucket } from 'react-icons/fa6';
import { SiTypescript, SiRedux, SiMongodb, SiJquery, SiGraphql, SiDotnet, SiMysql, SiApachecordova, SiSocketdotio, SiLivechat, SiRecoil, SiJira } from 'react-icons/si';
import DetailSection, { IDetailSection } from './DetailSection';

// const productTextClass = "fw-medium text-muted";
const fontStyleClass = "fw-bold font-monospace m-0";

/**
 * Previous Employment Details
 */
const Career: IDetailSection = {
    title: "WORK EXPERIENCE",
    content: [
        {
            contentTitle: "Accion Labs Pvt Ltd - (Since Jun 2021)",
            details: (
                <ul>
                    <li>
                        <p className={fontStyleClass}>Ingram Micro (X4C) | Front-End Engineer</p>
                        <p>
                            Is a Micro-FrontEnd Application with Typescript & Recoil integrated to C# .Net Core with WebAPI as backend.
                            Ingram micro (Xvantage for Customers - X4C) is a B2B eCommerce platform that provides a comprehensive suite of tools and services to help businesses manage their online sales and operations efficiently.
                        </p>
                    </li>
                    <li>
                        <p className={fontStyleClass}>Freedom Central | Front-End Engineer</p>
                        <p>
                            React.JS Application with Typescript & Redux integrated to GoLang and NodeJS with WebAPI as backend, Integrated High Availablity MongoDB(Replica Set Configured with X.509 certification), Added support for Docker and Kubernetes deployment.
                        </p>
                    </li>
                    <li>
                        <p className={fontStyleClass}>Right to Bear Insurance | Lead Engineer</p>
                        <p>
                            Right to Bear Insurance is a comprehensive insurance platform that offers a wide range of self-liability insurance for the Response Gun Owners. Right to bear promote freedom and legal usage of firearms while ensuring responsible ownership and protection against potential liabilities. (React.JS Application with Typescript & Redux)
                        </p>
                    </li>
                    <li>
                        <p className={fontStyleClass}>Bravvox | Lead Engineer</p>
                        <p>
                            React.JS Application with Typescript & Redux. Bravvox is an online social media & social networking platform that allows users to connect with friends, family, and colleagues, share content, and engage in discussions. It provides a range of features such as user profiles, news feeds, messaging, and groups to facilitate communication and interaction among users.
                        </p>
                    </li>
                </ul>
            )
        },
        {
            contentTitle: "Hexagon Capability Center India - (Mar 2018 - Jun 2021)",
            details: (
                <ul>
                    <li>
                        <p className={fontStyleClass}>OnCall Mobile Server</p>
                        <p>
                            React.JS Application with Typescript & Redux integrated to DotNetCore 3.1 with WebAPI as backend, Integrated High Availablity MongoDB(Replica Set Configured with X.509 certification), RabbitMQ(Messaging Queue Integration), and Added support for Docker and Kubernetes deployment.
                        </p>
                    </li>
                    <li>
                        <p className={fontStyleClass}>OnCall Mobile</p>
                        <p>
                            React Native, with Redux and RealmJS. Added the following features support to the product - Firebase Messaging/RabbitMQ Messaging(MQTT), Background location tracking, Map Integration, RocketChat Messaging Integration, and many more.
                        </p>
                    </li>
                    <li>
                        <p className={fontStyleClass}>Mobile Responder</p>
                        <p>
                            React.JS Application with Typescript, Redux & Cordova. Intergraph Mobile Responder from Hexagon Safety & Infrastructure provides constant access to I/CAD (Intergraph Computer-Aided Dispatch), enabling field personnel to create events, view incident details, receive and acknowledge messages, update statuses, query databases, and more. Available as a native application for iOS, Android devices, Intergraph Mobile Responder performs better than browser-based solutions and incorporates native device capabilities, such as push notifications, Global Positioning System (GPS), and the camera operations.
                        </p>
                    </li>
                </ul>
            )
        },
        {
            contentTitle: "Neobric IT Solutions Pvt Ltd - (Jan 2015 - Mar 2018)",
            details: (
                <ul>
                    <li>
                        <p className={fontStyleClass}>Unycare</p>
                        <p>
                            (D2D and Unycare patient) - Worked on C# (Web services), Angular 2 & MySQL. Integrated Vidyo and Opentok with annotations feature which is helpful in video calling and annotating on the patient uploaded documents.
                        </p>
                    </li>
                    <li>
                        <p className={fontStyleClass}>Unycast</p>
                        <p>
                            (Insurance) - Worked on PHP (Laravel) & SQL developer along with JavaScript and jQuery. Unycast is an online event meeting application, desktop sharing, and video conferencing software that enables the users to meet with other users, customers, clients or colleagues in real time and broadcast their video to a larger audience in real time.
                        </p>
                    </li>
                    <li>
                        <p className={fontStyleClass}>KOOII</p>
                        <p>
                            (E-Commerce) - Worked on PHP(Laravel), MySQL, JavaScript (ES6). KOOII Dealership is an evolution in the product sales process. The only application of its kind. It connects buyers and sellers in a real time portal, allowing for a 1 to 1 preview of a product. It has features like Video chat, Text Chat, Geofencing, AWS CPU utilization, custom widgets and also the users have Mobile apps. It is a SaaS based application (Multi-Tenant Application), where users can create their own accounts and owners can manage accounts from provisioning app.
                        </p>
                    </li>
                </ul>
            )
        }
    ]
}

/**
 * Education Details
 */
const Education: IDetailSection = {
    title: "EDUCATION",
    content: [
        {
            contentTitle: "Master in Technology, Software Engineering",
            details: (
                <span>
                    Sreenidhi Institute of Science & Technology, Hyderabad
                    <br />
                    Years: 2012 - 2014, Percentage: <span className={"font-weight-bold"}>78%</span>
                </span>
            )
        },
        {
            contentTitle: "Bachelor in Technology, Computer Science Engineering",
            details: (
                <span>
                    Jawaharlal Nehru Technological University, Hyderabad
                    <br />
                    Years: 2008 - 2012, Percentage: <span className={"font-weight-bold"}>65.16%</span>
                </span>
            )
        },
        {
            contentTitle: "Standard XII / Intermediate.",
            details: (
                <span>
                    Sri Chaitanya Jr College
                    <br />
                    Years: 2006 - 2008, Percentage: <span className={"font-weight-bold"}>74.2%</span>
                </span>
            )
        },
        {
            contentTitle: "Schooling / SSC",
            details: (
                <span>
                    Brilliant Grammar High School
                    <br />
                    Year: 2006, Percentage: <span className={"font-weight-bold"}>72.5%</span>
                </span>
            )
        }
    ]
}


/**
 * Skill Set
 */
interface ISkill {
    name: string,
    icon?: React.ReactElement
}
const SkillsList: ISkill[] = [
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'NodeJS', icon: <FaNodeJs /> },
    { name: 'GO', icon: <FaGolang /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Recoil', icon: <SiRecoil /> },
    { name: 'HTML & CSS', icon: <><FaHtml5 /> <FaCss3Alt /></> },
    { name: 'C# ASP.NET', icon: <SiDotnet /> },
    { name: 'SignalR', icon: <SiLivechat /> },
    { name: 'WebSockets', icon: <SiSocketdotio /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'SQL Server', icon: <SiMysql /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'jQuery', icon: <SiJquery /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'GraphQL', icon: <SiGraphql /> },
    { name: 'Cordova', icon: <SiApachecordova /> },
];
const Skills: IDetailSection = {
    title: "SKILLS",
    rawContent: (
        <Row xs={2} sm={3} md={4} className={"mb-4 px-3"}>
            {SkillsList.map((skill, idx) => (
                <Col md={3} key={skill.name + idx} className={"font-weight-bold text-center mb-2"}>
                    <Button
                        variant="light"
                        className="w-100 d-flex align-items-center justify-content-start gap-2 shadow-sm fs-6 lh-base text-nowrap"
                        style={{ letterSpacing: '0.5px' }}
                    >
                        {skill.icon}
                        {skill.name}
                    </Button>
                </Col>
            ))}
        </Row>
    )
}

/**
 * Additional Skills
 */
const AdditiveSkills: IDetailSection = {
    title: "ADDITIVE SKILLS",
    content: [
        {
            contentTitle: "Cordova + ReactJS / Angular",
            details: (
                <>
                    <span>
                        A cross platform mobile application built using Cordova and Phonegap. Which the User Interfcae is built using either of React / Angular and deploy to the respective stores.
                        <br /><b>Electron : </b>Also can build a standalone desktop application for windows using Electron.
                    </span>
                    <br />
                </>
            )
        },
        {
            contentTitle: "A Hostable Resume",
            details: (
                <>
                    <span>
                        A Hostable Resume Template generated using React JS. To provide Brief and Detailed versions. Currently hosted using Git Pages and Auto deployed using Git Actions.
                    </span>
                    <br />
                </>
            )
        }
    ]
}

const ToolsSection = () => (
    <Container fluid className="detail-section text-left pt-4 px-4">
        <Row>
            <Col lg={2} />
            <Col lg={10} className={""}>
                <h5 className="fw-bold text-uppercase">Tools & Environments</h5>
                <Row className="lh-lg">
                    <Col xs="auto"><FaCode className="me-2" />VS Code</Col>
                    <Col xs="auto"><FaCode className="me-2" />Cursor AI</Col>
                    <Col xs="auto"><FaGitAlt className="me-2" />Git</Col>
                    <Col xs="auto"><SiJira className="me-2" />Jira</Col>
                    <Col xs="auto"><FaBitbucket className="me-2" />Bitbucket </Col>
                    <Col xs="auto"><FaChrome className="me-2" />DevTools</Col>
                </Row>
            </Col>
        </Row>
    </Container>
);

export default function ResumeBody() {
    return (
        <Container fluid className="lh-lg px-0">
            <Container fluid className="my-2 bg-light rounded shadow-sm p-3 mx-3 w-auto quote-text">
                Passionate about continuous learning and applying knowledge to build impactful solutions. Driven to simplify complexity and pave the way for innovation that benefits both individuals and teams.
            </Container>
            <DetailSection detail={Career} />
            <DetailSection detail={Skills} />
            <DetailSection detail={AdditiveSkills} />
            <DetailSection detail={Education} />
            <ToolsSection />
        </Container>
    )
}
