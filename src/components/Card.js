import React from "react";

import "./card.scss";

// Card
// Wraps the card and children components
export const Card = ({ data }) => {
    return (
        <div className="card">
            <div className={"card-banner card-banner__" + data.rarity}>
                <div
                    className="card-banner-logo"
                    style={{ backgroundImage: `url(${data.img_url})` }}
                ></div>
            </div>
            <div className="card-menu">
                <span className="badge bg-secondary">{data.type}</span>
                <span className="badge bg-secondary">THC: {data.thc_level}</span>
            </div>
            <div className="card-body">
                <h2>{data.name}</h2>
                <span>{data.most_common_terpene}</span>
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
        </div>
    );
};
