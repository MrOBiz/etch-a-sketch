
let divNum = [];
let totalDivs = 16;

const container = document.querySelector(".container");


for(let i = 0; i < totalDivs; i++){
    const div = document.createElement("div");
    divNum.push(div);
    div.classList.add("gridElement");
    container.appendChild(div);
    console.log(div);
}

