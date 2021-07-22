import { Container, Row, Col } from "react-bootstrap"
import "../css/ResumeBody.css";
import DetailSection, { IDetailSection } from './DetailSection';

const SkillsList = [
    "C# ASP.NET",
    "Node JS",
    "Php",
    "React.JS",
    "Redux",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Cordova",
    "jQuery",
    "HTML & CSS",
    "GraphQL",
    "SignalR",
    "MongoDB",
    "SQL Server",
    "Docker",
    "WebSockets"
]

/**
 * Education Details
 */
const Education: IDetailSection = {
    title: "EDUCATION",
    content: [
        {
            contentTitle: "Master in Technology, Software Engineering",
            details: (<span>
                Sreenidhi Institute of Science & Technology, Hyderabad
                <br />
                Years: 2012 - 2014, Percentage: <span className={"font-weight-bold"}>78%</span>
            </span>)
        },
        {
            contentTitle: "Bachelor in Technology, Computer Science Engineering",
            details: (<span>
                Jawaharlal Nehru Technological University, Hyderabad
                <br />
                Years: 2008 - 2012, Percentage: <span className={"font-weight-bold"}>65.16%</span>
            </span>)
        },
        {
            contentTitle: "Standard XII / Intermediate.",
            details: (<span>
                Sri Chaitanya Jr College
                <br />
                Years: 2006 - 2008, Percentage: <span className={"font-weight-bold"}>74.2%</span>
            </span>)
        },
        {
            contentTitle: "Schooling / SSC",
            details: (<span>
                Brilliant Grammar High School
                <br />
                Year: 2006, Percentage: <span className={"font-weight-bold"}>72.5%</span>
            </span>)
        }
    ]
}

/**
 * Previous Employment Details
 */
const Career: IDetailSection = {
    title: "WORK EXPERIENCE",
    content: [
        {
            contentTitle: "Accion Labs Pvt Ltd - (Since Jun 2018)",
            details: (<>
                <span>
                    <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>Freedom Central</span> - React.JS Application with Typescript & Redux integrated to GoLang and NodeJS with WebAPI as backend, Integrated High Availablity MongoDB(Replica Set Configured with X.509 certification), Added support for Docker and Kubernetes deployment.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "Hexagon Capability Center India - (Mar 2018 - Jun 2021)",
            details: (<>
                <span>
                    <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>OnCall Mobile Server</span> - React.JS Application with Typescript & Redux integrated to DotNetCore 3.1 with WebAPI as backend, Integrated High Availablity MongoDB(Replica Set Configured with X.509 certification), RabbitMQ(Messaging Queue Integration), and Added support for Docker and Kubernetes deployment.
                </span>
                <br />
                <span>
                    <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>OnCall Mobile</span> - React Native, with Redux and RealmJS. Added the following features support to the product - Firebase Messaging/RabbitMQ Messaging(MQTT), Background location tracking, Map Integration, RocketChat Messaging Integration, and many more.
                </span>
                <br />
                <span>
                    <span className={"font-weight-bold text-muted"}>Product - </span><span className={"font-italic"}>Mobile Responder</span> - React.JS Application with Typescript, Redux & Cordova. Intergraph Mobile Responder from Hexagon Safety & Infrastructure provides constant access to I/CAD (Intergraph Computer-Aided Dispatch), enabling field personnel to create events, view incident details, receive and acknowledge messages, update statuses, query databases, and more. Available as a native application for iOS, Android devices, Intergraph Mobile Responder performs better than browser-based solutions and incorporates native device capabilities, such as push notifications, Global Positioning System (GPS), and the camera operations.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "Neobric IT Solutions Pvt Ltd - (Jan 2015 - Mar 2018)",
            details: (<>
                <span>
                    <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>Unycare </span> (D2D and Unycare patient) - Worked on C# (Web services), Angular 2 & MySQL. Integrated Vidyo and Opentok with annotations feature which is helpful in video calling and annotating on the patient uploaded documents.
                </span>
                <br />
                <span>
                    <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>Unycast</span> (Insurance) - Worked on PHP (Laravel) & SQL developer along with JavaScript and jQuery. Unycast is an online event meeting application, desktop sharing, and video conferencing software that enables the users to meet with other users, customers, clients or colleagues in real time and broadcast their video to a larger audience in real time.
                </span>
                <br />
                <span>
                    <span className={"font-weight-bold text-muted"}>Client - </span><span className={"font-italic"}>KOOII</span> (E-Commerce) - Worked on PHP(Laravel), MySQL, JavaScript (ES6). KOOII Dealership is an evolution in the product sales process. The only application of its kind. It connects buyers and sellers in a real time portal, allowing for a 1 to 1 preview of a product. It has features like Video chat, Text Chat, Geofencing, AWS CPU utilization, custom widgets and also the users have Mobile apps. It is a SaaS based application (Multi-Tenant Application), where users can create their own accounts and owners can manage accounts from provisioning app.
                </span>
                <br />
            </>)
        }
    ]
}

/**
 * Skill Set
 */
const Skills: IDetailSection = {
    title: "SKILLS",
    rawContent: (<Row className={"mb-4 px-3"}>
        {SkillsList.map((skill: string) => <Col md={3} key={skill} className={"font-weight-bold text-center"}><span className={"bg-light shadow-sm card border-0 mb-2"}>{skill}</span></Col>)}
    </Row>)
}

/**
 * Additional Skills
 */
const AdditiveSkills: IDetailSection = {
    title: "ADDITIVE SKILLS",
    content: [
        {
            contentTitle: "Cordova + ReactJS / Angular",
            details: (<>
                <span>
                    A cross platform mobile application built using Cordova and Phonegap. Which the User Interfcae is built using either of React / Angular and deploy to the respective stores.
                    <br /><b>Electron : </b>Also can build a standalone desktop application for windows using Electron.
                </span>
                <br />
            </>)
        },
        {
            contentTitle: "A Hostable Resume",
            details: (<>
                <span>
                    A Hostable Resume Template generated using React JS. To provide Brief and Detailed versions. Currently hosted using Git Pages and Auto deployed using Git Actions.
                </span>
                <br />
            </>)
        }
    ]
}

export default function ResumeBody(props: any) {

    return (
        <Container fluid className="body px-0">
            <Container fluid className="my-2 bg-light rounded shadow-sm p-3 mx-3 w-auto quote-text">
                With learning passion to implement what was learned and to achieve something of great vertical extent, making a path for self and others to lead life simpler.
            </Container>
            <DetailSection detail={Career} />
            <DetailSection detail={Skills} />
            <DetailSection detail={AdditiveSkills} />
            <DetailSection detail={Education} />
        </Container>)
}
