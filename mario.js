function submit() {
    var name = document.getElementById("name").value;
    var column = document.getElementById("col").value;
    if (column < 6) {
        alert("Please enter a number greater than or equal to 6");
    } else if (isNaN(column)) {
        alert("Please enter a valid number of columns");
    } else {
        grid(column, column);
    }
}

function grid(rows, cols) {
    var instruction = document.createElement("span");
    instruction.innerText = "Use &#8592; &#8593; &#8594; &#8595;"
    const container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };

}