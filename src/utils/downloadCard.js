import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export const downloadIndividualCard = (id, name) => {
    htmlToImage
        .toSvg(document.getElementById(id), { pixelRatio: 1, quality: 1.0 })
        .then(function (dataUrl) {
            download(dataUrl, name + ".svg");
        });
};
