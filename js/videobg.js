const vNames = ["65514274", "35706887", "809928207", "68722687", "846661461", "443455797"];
const vParam = vNames[parseInt(Math.random() * vNames.length)];

const vDiv = document.querySelector("#video div");

vDiv.setAttribute("data-vbg", `https://vimeo.com/${vParam}`);

const videoBackgrounds = new VideoBackgrounds('[data-vbg]');
