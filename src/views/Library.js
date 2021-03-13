import React from "react";

import { Card } from "../components/Card";

import { CARDS } from "../data/cards";

// Library
// Exposes the pre-defined cards and their properties
export const Library = () => {
    return (
        <>
            {CARDS.map((card) => (
                <Card data={card} />
            ))}
        </>
    );
};
