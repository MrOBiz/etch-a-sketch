
let divRow = [];
let divCells = [];
const totalDivs = 16;
let mouseX;
let mouseY;

const container = document.querySelector(".container");

//Creates the square grid
for(let i = 0; i < totalDivs; i++ ){
    const row = document.createElement("div");
    row.classList.add("rowElement");
    divRow.push(row);

    for(let j = 0; j < totalDivs; j++){
        const col = document.createElement("div");
        divCells.push(col);
        col.classList.add("colElement");
        divRow[i].appendChild(col);
        //console.log(col);
    }

    container.appendChild(row);
}

//console.log(divRow.length); contains only div that form rows = totalDivs
//console.log(divCol.length); contains all the cells = totalDivs**2

//Changes div color on mouse Hover
for(let div of divCells){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "green";
    });
}






