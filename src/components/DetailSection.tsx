import React, { ReactElement } from 'react';
import { Container, Col, Row, Figure } from "react-bootstrap"
import "../css/DetailSection.css";
import DividerPNG from "../assets/divider.png";

export interface IDetailSection {
    title: string,
    content?: {
        contentTitle: string,
        details: ReactElement
    }[],
    rawContent?: ReactElement
}

export default function DetailSection(props: { detail: IDetailSection, [key: string]: any }) {
    const { detail } = props || {};

    return (
        <Container fluid className="detail-section text-left pt-4 px-4">
            <Row>
                <Col lg={2} className={"text-primary font-weight-bold mb-3"}>
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

export function DetailContent(props: { headerText: string, [key: string]: any }) {
    const { headerText, children } = props || {};
    return (<Container fluid className={"mb-4"}>
        <span className={"font-weight-bold"}>{headerText}</span>
        <br />
        {children}
    </Container>);
}