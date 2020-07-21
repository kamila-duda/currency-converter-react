import React from "react";
import "./style.css";

const Section = ({className, body}) => {
    return (
        <section className={className}>
                {body}
        </section>
    )
}

export default Section;