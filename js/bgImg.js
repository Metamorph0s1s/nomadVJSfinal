const fileNames = ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp", "5.webp"];
const imgName = fileNames[parseInt(Math.random() * fileNames.length)];

const bgImg = document.createElement("img");

bgImg.src = `asset/${imgName}`;
bgImg.id = "bg";
bgImg.decoding = "async";

document.body.appendChild(bgImg);
