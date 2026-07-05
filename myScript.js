
let divNum = [];
let totalDivs = 16;

for(let i = 0; i < totalDivs; i++){
    const div = document.createElement("div");
    divNum.push(div);
    document.body.appendChild(div);
    console.log(div);
}