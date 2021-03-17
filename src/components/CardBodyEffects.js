import React from "react";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

// CardBodyEffects
// Wraps the card-body-effects component (middle-effects part of the card)
export const CardBodyEffects = ({ effect, value, rarity }) => {
    const capitalizedEffect = effect
        .replace("_", " ")
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    const valueWithoutPercentage = value.split("%")[0];

    if (
        effect === "happy" ||
        effect === "euphoric" ||
        effect === "dry_mouth" ||
        effect === "stress"
    ) {
        return (
            <>
                <div className="text-start">{capitalizedEffect}</div>
                <Progress
                    className={"mb-2 card-body-effects__" + rarity}
                    percent={valueWithoutPercentage}
                />
            </>
        );
    }
    return null;
};
