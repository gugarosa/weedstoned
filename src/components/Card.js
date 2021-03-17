import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./card.scss";
import { CardBanner } from "./CardBanner";
import { CardFooter } from "./CardFooter";
import { CardMenu } from "./CardMenu";

// Card
// Wraps the card and children components
export const Card = ({ data, index }) => {
    return (
        <div className="card">
            <CardBanner imgUrl={data.img_url} rarity={data.rarity} />
            <CardMenu type={data.type} level={data.thc_level} />
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
            <CardFooter description={data.description} index={index} />
        </div>
    );
};
