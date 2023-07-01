import React from "react";
import Accordion from '../utility/Accordion';
export default function ShowAccordion() {
    
    return (
            <div>
                <h1>Before Accordion</h1>
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <h1>After Accordion</h1>
            </div>
        );
}