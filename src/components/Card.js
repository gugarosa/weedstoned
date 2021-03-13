import React from "react";

import "./card.scss";

// Card
// Wraps the card and children components
export const Card = ({ data }) => {
    return <div class="card">{data.name}</div>;
};
