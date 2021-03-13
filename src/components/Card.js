import React from "react";

import "./card.scss";

import { CardBackground } from "./CardBackground";

// Card
// Wraps the card and children components
export const Card = ({ data }) => {
    return (
        <div className="card">
            <CardBackground />
        </div>
    );
};
