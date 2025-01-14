const vNames = ["40870403", "809928207", "68722687", "846661461", "722177033", "38228362", "72508143", "56977646", "291908182", "780272316", "212267977"];
const vParam = vNames[parseInt(Math.random() * vNames.length)];

const vDiv = document.querySelector("#video div");

vDiv.setAttribute("data-vbg", `https://vimeo.com/${vParam}`);

const videoBackgrounds = new VideoBackgrounds('[data-vbg]');
