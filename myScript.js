
let divRow = [];
let divCol = [];
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
        divCol.push(col);
        col.classList.add("colElement");
        divRow[i].appendChild(col);
        console.log(col);
    }

    container.appendChild(row);
}


document.addEventListener("mousemove", function(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
    console.log(mouseX);
    console.log(mouseY);
});

//Changes div color on mouse Hover
function changeColorOnHover(){

}


