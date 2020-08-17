import React from "react";

const Section = ({body, extraContent}) => {
    return (
        <section>
                {body}
                {extraContent}
        </section>
    )
}

export default Section;