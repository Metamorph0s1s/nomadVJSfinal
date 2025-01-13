const vNames = ["40870403", "151611962", "809928207", "68722687", "846661461", "46624631", "163285243", "38228362", "72508143"];
const vParam = vNames[parseInt(Math.random() * vNames.length)];

const vDiv = document.querySelector("#video div");

vDiv.setAttribute("data-vbg", `https://vimeo.com/${vParam}`);

const videoBackgrounds = new VideoBackgrounds('[data-vbg]');
