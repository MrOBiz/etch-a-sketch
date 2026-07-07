
let divRow = [];
let divCells = [];
let totalDivs = 16;
let mouseX;
let mouseY;

const container = document.querySelector(".container");

const btn = document.createElement("button")
btn.classList.add("centralBtn");
btn.textContent = "CHANGE GRID SIZE"
btn.addEventListener("click", askGridSize);
btn.style.margin = "10px";
container.appendChild(btn);

//Initial grid
container.style.setProperty("--grid-size", totalDivs);
createGrid(totalDivs);
changeColorOnHover();

function askGridSize(){
    let whileFlag = totalDivs;
    while(totalDivs < 0 || totalDivs > 100 || totalDivs == whileFlag){
        totalDivs = prompt("How many squares per side? ", "max: 100");
    }
    container.replaceChildren();
    divRow.length = 0;
    divCells.length = 0;

    //Sets property for CSS dimensions
    container.style.setProperty("--grid-size", totalDivs);

    container.appendChild(btn);
    createGrid(totalDivs);
    changeColorOnHover();
}

//Creates the square grid
function createGrid(squares){
    for(let i = 0; i < squares; i++ ){
        const row = document.createElement("div");
        row.classList.add("rowElement");
        divRow.push(row);

        for(let j = 0; j < squares; j++){
            const col = document.createElement("div");
            divCells.push(col);
            col.classList.add("colElement");
            divRow[i].appendChild(col);
            //console.log(col);
        }

        container.appendChild(row);
    }
}

//console.log(divRow.length); contains only div that form rows = totalDivs
//console.log(divCol.length); contains all the cells = totalDivs**2

//Changes div color on mouse Hover
function changeColorOnHover(){
    for(let div of divCells){
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "green";
        });
    }
}





