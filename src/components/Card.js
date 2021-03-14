import React from "react";

import "./card.scss";

import { CardBackground } from "./CardBackground";

// Card
// Wraps the card and children components
export const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="card-banner">
                <div className="card-banner-logo"></div>
            </div>
            <div className="card-menu">
                <span class="pill">Hybrid</span>
                <span class="pill">THC: 20%</span>
            </div>
            <div className="card-body">
                <h2>Blue Dream</h2>
                <span>Myrcene</span>
            </div>
            <div className="card-separator">
                <hr></hr>
            </div>
            <div className="card-separator">
                <hr></hr>
            </div>
            <div className="card-footer">
                <span>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                    ipsum lorem ipsum lorem ipsum lorem ipsum
                </span>
            </div>
            {/* <CardBackground /> */}
        </div>
    );
};
