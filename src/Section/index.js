import React from "react";
import "./style.css";

const Section = ({className, body, extraContent}) => {
    return (
        <section className={className}>
                {body}
                {extraContent}
        </section>
    )
}

export default Section;