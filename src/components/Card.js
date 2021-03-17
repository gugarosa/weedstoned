import React from "react";

import { CardBanner } from "./CardBanner";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardMenu } from "./CardMenu";

import "./card.scss";

// Card
// Wraps the card and children components
export const Card = ({ data, index }) => {
    return (
        <div className="card">
            <CardBanner imgUrl={data.img_url} rarity={data.rarity} />
            <CardMenu type={data.type} level={data.thc_level} />
            <CardBody
                name={data.name}
                terpene={data.most_common_terpene}
                effects={data.effects}
                rarity={data.rarity}
            />
            <CardFooter description={data.description} index={index} />
        </div>
    );
};
