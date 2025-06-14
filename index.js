const container = document.querySelector(".container");
const btn = document.querySelector(".newSketchBtn")
btn.style.color = "blue"

btn.addEventListener("click", () => {
    do{
        userInput = prompt("Set a new sketch (1 - 100)")
    }while(userInput < 1 || userInput > 100)
    
    const grid = document.querySelector(".grid")
    container.removeChild(grid)
    createGrid(userInput);
})

function randomColor(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
}

function createGrid(num){
    const grid = document.createElement("div")
    grid.className = "grid";
    grid.setAttribute("style", "display: flex; flex-direction: column; align-items: center; width: 60%; height: 80%; background-color: black; border: 2px solid black;")
    for(let i = 0; i < num; i++){
        const row = document.createElement("div");
        row.className = "row";
        row.setAttribute("style", "display: flex; flex: 1; width: 100%;")
        for(let j = 0; j < num; j++){
            const col = document.createElement("div");
            col.className = "col";
            col.setAttribute("style", "flex: 1; background-color: white; opacity: 1; border: 2px solid black;")
            col.addEventListener("mouseover", () => {
                col.style["backgroundColor"] = randomColor();
            })
            col.addEventListener("mouseout", () => {
                let currentOpacity = parseFloat(col.style.opacity);
                currentOpacity = Math.max(0, currentOpacity - 0.1);
                col.style.opacity = currentOpacity;
            })
            row.appendChild(col)
        }
        grid.appendChild(row)
    }
    container.appendChild(grid);
}

createGrid(16);

