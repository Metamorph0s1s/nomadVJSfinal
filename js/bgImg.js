const fileNames = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const imgName = fileNames[parseInt(Math.random() * fileNames.length)];

const bgImg = document.createElement("img");

bgImg.src = `asset/${imgName}`;
bgImg.id = 'bg';

document.body.appendChild(bgImg);