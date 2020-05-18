function submit() {
    
    var column = document.getElementById("col").value;
    if (column < 6 || column > 25) {
        alert("Please enter a number between 6 and 25");
    } else if (isNaN(column)) {
        alert("Please enter a valid number of columns");
    } else {
        grid(column);
    }
}

function grid(col) {
    var name = document.getElementById("name").value;
    var intro = document.getElementById("intro");

    intro.innerHTML = "Welcome <strong>" + name +"</strong><br><br> Use &#8592;, &#8593;, &#8594;, and &#8595; to play the game"
    const container = document.getElementById("container");
    container.innerHTML = "";
    container.style.setProperty('--grid-rows', col);
    container.style.setProperty('--grid-cols', col);
    for (let c = 0; c < (col * col); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        container.appendChild(cell).id = "cell" + c;
    };

    initialMarioPlacement();  
    randomPoisonMushroom(col);

}

function initialMarioPlacement() {
    var marioImg = document.createElement("img");
    marioImg.src = "images/mario.png";
    document.getElementById('cell0').appendChild(marioImg);
}

function randomPoisonMushroom(col) {
    var randomMush = Math.floor(Math.random() * (col * col)) + 1;
    var mushroom = document.getElementById('cell'+randomMush);
    var mushImg = document.createElement("img");
    mushImg.src = "images/mushroom.png";
    mushroom.appendChild(mushImg);

    
    var randomPoison = [];
    var poisonImg = [];

    for(let i = 0; i < col; i++) {
        randomPoison[i] = generateRandomPoison(randomMush, col);
        console.log("i= "+ i + " " + randomPoison[i])
        poisonImg[i] = document.createElement("img");
        poisonImg[i].src = "images/poison.jpg";
        var poison = document.getElementById('cell'+randomPoison[i]);
        console.log(poison);
        console.log(poisonImg[i])
        poison.appendChild(poisonImg[i]);
    }
}

function generateRandomPoison(randomMush, col) {
    var num = Math.floor(Math.random() * (col * col));
    console.log("Mushroom " + randomMush);
    console.log("number " + num);
    if (num !== 0 && 
        num !== randomMush &&
        (num  !== (randomMush - col)) && 
        (num !== (randomMush - (2*col))) && 
        (num !== (randomMush + col)) && 
        (num !== (randomMush + (2*col))) &&
        (num !== (randomMush + 1)) && 
        (num !== (randomMush + 2)) && 
        (num !== (randomMush - 1)) && 
        (num !== (randomMush - 2))
       ) { 
        console.log("return " + num);
        return num;  
    }
    return generateRandomPoison(randomMush, col);
}