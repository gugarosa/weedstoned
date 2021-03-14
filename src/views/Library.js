import React from "react";

import { Card } from "../components/Card";

import { LEAFLY } from "../data/leafly";

// Library
// Exposes the pre-defined cards and their properties
export const Library = () => {
    // Gathers and defines a `strains` object
    const strains = LEAFLY.strains;

    return (
        <>
            {strains.map((strain) => (
                <Card key={strain.name} data={strain} />
            ))}
        </>
    );
};
