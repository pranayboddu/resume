import React, { ReactElement } from 'react';
import { Container, Col, Row, Figure } from "react-bootstrap";
import DividerPNG from "../assets/divider.png";
import "../css/DetailSection.css";

export interface IDetailSection {
    title: string,
    content?: {
        contentTitle: string,
        details: ReactElement
    }[],
    rawContent?: ReactElement
}

interface DetailSectionProps {
    detail: IDetailSection,
    [key: string]: any
}

export default function DetailSection(props: DetailSectionProps) {
    const { detail } = props || {};

    return (
        <Container fluid className="detail-section text-left pt-4 px-4">
            <Row>
                <Col lg={2} className={"text-primary fw-bold mb-3"}>
                    {detail.title}
                </Col>
                <Col lg={10} className={""}>
                    {detail.rawContent
                        ?
                        detail.rawContent
                        :
                        detail?.content?.map((item: any, index: number) =>
                        (<DetailContent headerText={item.contentTitle}>
                            {item.details}
                        </DetailContent>))}
                    <Figure.Image src={DividerPNG} className={"divider-img"} alt={"DividerPNG"}></Figure.Image>
                </Col>
            </Row>
        </Container>)
}

interface DetailContentProps {
    headerText: string,
    children: ReactElement
}
export function DetailContent(props: DetailContentProps) {
    const { headerText, children } = props || {};
    return (
        <Container fluid className={"mb-4"}>
            <span className={"fw-bold"}>{headerText}</span>
            <br />
            {children}
        </Container>
    );
}
