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
            <div className="container">
                <div className="row justify-content-around p-4">
                    {strains.map((strain) => (
                        <div className="col-sm-auto" key={strain.name}>
                            <Card data={strain} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
