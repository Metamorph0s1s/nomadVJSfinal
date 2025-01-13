const vNames = ["Tqlw87XV4kU", "GQEcxrY0CWA", "3lDqMx4rmFU", "YudHcBIxlYw", "b73BI9eUkjM", "hOgVAYpHPCc"];
const vParam = vNames[parseInt(Math.random() * vNames.length)];

const vDiv = document.querySelector("#video div");

vDiv.setAttribute("data-vbg", `https://www.youtube.com/watch?v=${vParam}`);

const videoBackgrounds = new VideoBackgrounds('[data-vbg]');