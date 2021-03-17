import React from "react";

// CardFooter
// Wraps the card-footer component (bottom part of the card)
export const CardFooter = ({ description, index }) => {
    var shortDescription = description.substring(0, 200) + ".";

    return (
        <div className="card-footer bg-transparent">
            <p class="text-muted text-center">
                <small>
                    <em>{shortDescription}</em>
                </small>
            </p>
        </div>
    );
};
