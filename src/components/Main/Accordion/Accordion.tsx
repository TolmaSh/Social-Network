import React from "react";
import s from "./Accordion.module.css";

type AccordionPropsType = {
    titleValue: string,
    accordionNum: number,
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <>
                <AccordionTitle title={props.titleValue}/>
            </>
        );
    }
    return (
        <>
            <AccordionTitle title={props.titleValue}/>
            <AccordionContent accordNum={props.accordionNum}/>
        </>
    );
}

type TitlePropsType = {
    title: string
}
function AccordionTitle(props: TitlePropsType) {
    return (
        <h2>{props.title}</h2>
    );
}

type ContentType = {
    accordNum: number
}
function AccordionContent(props: ContentType) {
    return <span>I`m {props.accordNum} component </span>
}



export default Accordion;