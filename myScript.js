
let divRow = [];
let divCol = [];
let totalDivs = 16;

const container = document.querySelector(".container");

for(let i = 0; i < totalDivs; i++ ){
    const row = document.createElement("div");
    row.classList.add("rowElement");
    divRow.push(row);

    for(let j = 0; j < totalDivs; j++){
        const col = document.createElement("div");
        divCol.push(col);
        col.classList.add("colElement");
        divRow[i].appendChild(col);
        console.log(col);
    }

    container.appendChild(row);
}
