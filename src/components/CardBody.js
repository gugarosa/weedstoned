import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardBodyEffects } from "./CardBodyEffects";

// CardBody
// Wraps the card-body component (middle part of the card)
export const CardBody = ({ name, terpene, effects, rarity }) => {
    return (
        <div className="card-body pb-0">
            <h2>{name}</h2>
            <div className="mb-2">
                <span className={"me-1 card-body-icon__" + rarity}>
                    <FontAwesomeIcon className="fa-rotate-270" icon={["fas", "play"]} />
                </span>
                <span>{terpene}</span>
            </div>
            <div className="card-body-separator">
                <hr></hr>
            </div>
            <div className="card-body-effects">
                {Object.entries(effects).map(([key, value], index) => {
                    return (
                        <CardBodyEffects key={index} effect={key} value={value} rarity={rarity} />
                    );
                })}
            </div>
            <div className="card-body-separator">
                <hr></hr>
            </div>
        </div>
    );
};
