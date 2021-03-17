import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CardFooter
// Wraps the card-footer component (bottom part of the card)
export const CardFooter = ({ description, index }) => {
    var shortDescription = description.substring(0, 200) + ".";

    return (
        <div className="card-footer bg-transparent p-0">
            <p className="text-muted text-center mb-0 p-3 pt-0 pb-1">
                <em>{shortDescription}</em>
            </p>
            <div className="card-footer-number text-center text-muted p-2">
                <FontAwesomeIcon className="me-1" icon={["fas", "play"]} />
                {index + 1}/100
            </div>
        </div>
    );
};
