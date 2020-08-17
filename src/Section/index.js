import React from "react";
import {Tile} from "./styled"

const Section = ({header, body, extraContent}) => {
    return (
        <Tile>
                {header}
                {body}
                {extraContent}
        </Tile>
    )
}

export default Section;