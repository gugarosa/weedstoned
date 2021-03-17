import React from "react";

// CardMenu
// Wraps the card-menu component (menu part of the card)
export const CardMenu = ({ type, level }) => {
    return (
        <div className="card-menu">
            <span className="badge bg-secondary">{type}</span>
            <span className="badge bg-secondary">THC: {level}</span>
        </div>
    );
};
