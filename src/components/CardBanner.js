import React from "react";

// CardBanner
// Wraps the card-banner component (top part of the card)
export const CardBanner = ({ imgUrl, rarity }) => {
    return (
        <div className={"card-banner card-banner__" + rarity}>
            <div className="card-banner-logo" style={{ backgroundImage: `url(${imgUrl})` }}></div>
        </div>
    );
};
