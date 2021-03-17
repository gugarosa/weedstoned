import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export const CardBodyEffects = ({ effect, value, rarity, index }) => {
    if (index < 6) {
        const capitalizedEffect = effect
            .replace("_", " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
        const valueWithoutPercentage = value.split("%")[0];

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
