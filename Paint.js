//ammend to init toolbar, then create canvas, 
//then when recreating canvas, recreate init toolbar

//CREATE LEFTHAND TOOLBAR
var toolbar = document.createElement('div');
document.body.appendChild(toolbar);
toolbar.setAttribute("id", "toolbar");

//CREATE MVP MENU WITH BASIC FUNCTIONS
var mvpMenu = document.createElement('div');
toolbar.appendChild(mvpMenu);
mvpMenu.setAttribute("id", "mvpMenu");

//CREATE INPUTS: HEIGHT AND WIDTH FOR DYNAMIC ENTRY
var input = document.createElement('input');
mvpMenu.appendChild(input);
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Height (px)");
input.setAttribute("id", "canvasHeight")
var input2 = document.createElement('input');
mvpMenu.appendChild(input2);
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Width  (px)");
input2.setAttribute("id", "canvasWidth");

//CREATE AND CLEAR BUTTONS
var btn = document.createElement("button");
var textin = document.createTextNode("Create");
btn.appendChild(textin);
mvpMenu.appendChild(btn);
btn.addEventListener('click', drawCanvas);
var btnclear = document.createElement("button");
var textclear = document.createTextNode("Clear");
btnclear.appendChild(textclear);
mvpMenu.appendChild(btnclear);
btnclear.setAttribute("id", "buttonClear");
btnclear.addEventListener('click', clear);

//CREATE INPUTS: DYNAMIC COLOR PICKER AND THICCNESS
var input3 = document.createElement('input');
mvpMenu.appendChild(input3);
input3.setAttribute("type", "color");
input3.setAttribute("value", "#e66465");
input3.setAttribute("id", "colorPicker");
var input4 = document.createElement('input');
mvpMenu.appendChild(input4);
input4.setAttribute("type", "number");
input4.setAttribute("value", "8");
input4.setAttribute("id", "thickness");
//SET THICKNESS INPUT MIN 1 MAX 50;
input4.setAttribute("min", "1");
input4.setAttribute("max", "50");


//CREATE BONUS MENU FOR EXTRA BUTTONS
var bonusMenu = document.createElement('div');
toolbar.appendChild(bonusMenu);
bonusMenu.setAttribute("id", "bonusMenu");
var btn = document.createElement("button");
var textBrush = document.createTextNode("BRUSH");
btn.appendChild(textBrush);
bonusMenu.appendChild(btn);
btn.addEventListener('click', toggleBrush);
btn.setAttribute("id", "brush");
//SHAPE BUTTONS IF I GET TIME TO IT
var btn = document.createElement("button");
var textCircle = document.createTextNode("CIRCLE");
btn.appendChild(textCircle);
bonusMenu.appendChild(btn);
btn.addEventListener('click', toggleCircle);
btn.setAttribute("id", "circle");
var btn = document.createElement("button");
var textSquare = document.createTextNode("SQUARE");
btn.appendChild(textSquare);
bonusMenu.appendChild(btn);
btn.addEventListener('click', toggleSquare);
btn.setAttribute("id", "square");
var btn = document.createElement("button");
var textTextBox = document.createTextNode("TEXT");
btn.appendChild(textTextBox);
bonusMenu.appendChild(btn);
btn.addEventListener('click', toggleText);
btn.setAttribute("id", "textBox");

//CREATE SAVE MENU FOR SAVING AND LOADING
var saveMenu = document.createElement('div');
toolbar.appendChild(saveMenu);
saveMenu.setAttribute("id", "saveMenu");
var savebutton = document.createElement("button");
var textsave = document.createTextNode("Save");
savebutton.appendChild(textsave);
saveMenu.appendChild(savebutton);
savebutton.setAttribute("class", "saveButton");
savebutton.addEventListener('click', save);
var loadbutton = document.createElement("BUTTON");
var textload = document.createTextNode("LOAD");
loadbutton.appendChild(textload);
saveMenu.appendChild(loadbutton);
loadbutton.setAttribute("class", "saveButton");
loadbutton.addEventListener('click', load);

//CREATE DEFAULT 500x500 CANVAS
var canvas = document.createElement('div');
canvas.setAttribute("id", "canvas");
document.body.appendChild(canvas);
canvas.style.width = '500px';
canvas.style.height = '500px';

//CREATE CANVAS OUTLINE TO HIDE OVERFLOW
var outline = document.createElement('div');
canvas.appendChild(outline);
outline.setAttribute("id", "outline");
outline.style.width = canvas.style.width;
outline.style.height = canvas.style.height;

//- FIGURE OUT WHY CANVAS DOES NOT ALLOW DRAWiNGS ----//
//CREATE DYNAMIC CANVAS
function drawCanvas() {
    //REMOVE OLD CANVAS 
    if (document.getElementById('canvas') != null) {
        var oldCanvas = document.getElementById('canvas');
        oldCanvas.parentNode.removeChild(oldCanvas);
    }
    // GET HEIGHT, WIDTH ENTERED BY USER
    var height = document.getElementById("canvasHeight").value;
    var width = document.getElementById("canvasWidth").value;
    //CREATE NEW CANVAS
    var canvas = document.createElement('div');
    canvas.setAttribute("id", "canvas");
    document.body.appendChild(canvas);
    canvas.style.width = parseInt(width) + "px";
    canvas.style.height = parseInt(height) + "px";
    //CREATE CANVAS OUTLINE TO HIDE OVERFLOW
    var outline = document.createElement('div');
    canvas.appendChild(outline);
    outline.setAttribute("id", "outline");
    outline.style.width = canvas.style.width;
    outline.style.height = canvas.style.height;
}




//PICK COLOR FUNCTION
var colorSelected = document.getElementById("colorPicker").value;
colorPicker.addEventListener('change', pickColor);

function pickColor(e) {
    colorSelected = document.getElementById("colorPicker").value;
    console.log(colorSelected);
};

//PICK DIV SIZE
var sizeSelected = document.getElementById("thickness").value;
thickness.addEventListener('change', pickSize);

function pickSize(e) {
    sizeSelected = parseInt(document.getElementById("thickness").value);
    console.log(sizeSelected);
};





// MAKE DOTS (1 Per Click)
var dotShape = true;
var dot = document.createElement("div");
canvas.addEventListener("click", event => {
    if (dotShape == true) {
        dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = (event.pageX - 4) + "px";
        dot.style.top = (event.pageY - 4) + "px";
        document.body.appendChild(dot);
        dot.style.background = colorSelected;
        dot.style.height = sizeSelected + "px";
        dot.style.width = sizeSelected + "px";
    }
});


// DRAG AND DRAW ELEMENT
//NOTE: button 0 = No button; 1 = Primary button; 
// 2 = Secondary button, 4 = Middle/Mousewheel
// -----TURN OFF WHEN BRUSH DE-SELECTED -----//
canvas.addEventListener('mousemove', function (event) {
    if (event.buttons == 1) {
        if (brushShape == true) {
            dot = document.createElement("div");
            dot.className = "dot";
            dot.style.left = (event.pageX - 4) + "px";
            dot.style.top = (event.pageY - 4) + "px";
            document.body.appendChild(dot);
            dot.style.background = colorSelected;
            dot.style.height = sizeSelected + "px";
            dot.style.width = sizeSelected + "px";
        }
    }
    if (circleShape == true) {
        dot.style.borderRadius = (sizeSelected / 2) + "px";
    }
    if (squareShape == true) {
        dot.style.borderRadius = "0px";
    }
    else {
        return;
    }
});

//ERASE ON RIGHT CLICK FUNCTION
canvas.addEventListener('mousemove', function (event) {
    if (event.buttons == 2) {
        dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = (event.pageX - 4) + "px";
        dot.style.top = (event.pageY - 4) + "px";
        document.body.appendChild(dot);
        dot.style.background = "white";
        dot.style.height = sizeSelected + "px";
        dot.style.width = sizeSelected + "px";
    } else {
        return;
    }
});



var brushShape = true;
function toggleBrush() {
    if (brushShape == true) {
        brushShape = false;
    } else {
        brushShape = true;
    }
};

var circleShape = false;
function toggleCircle(e) {
    if (circleShape == false) {
        circleShape = true;
    } else {
        circleShape = false;
    }
};

var squareShape = false;
function toggleSquare(e) {
    if (squareShape == false) {
        squareShape = true;
    } else {
        squareShape = false;
    }
};


//CREATE TEXT - TURNS OFF BRUSH
//CURRENTLY DOES NOT WORK
//NEED TO TURN BRUSH SHAPE BACK ON AFTER CLICK
function toggleText() {
    if (brushShape == true) {
        brushShape = false
        dotShape = false;
    } var textDraw = prompt('Enter your text here.');
    canvas.addEventListener("click", event => {
        dot = document.createElement("div");
        dot.className = "textDiv";
        dot.style.left = (event.pageX - 4) + "px";
        dot.style.top = (event.pageY - 4) + "px";
        document.body.appendChild(dot);
        dot.style.background = colorSelected;
        dot.style.color = white;
        dot.style.height = sizeSelected + "px";
        dot.style.width = sizeSelected + "px";
        dot.style.fontSize = "12px";
        dot.innerHTML += textDraw;
    })
};



function clear() {
    if (document.getElementById('canvas') != null) {
        drawCanvas();
    }
}

function save() {
    var savedraw = document.getElementById('canvas').innerHTML;
    var lastdraw = prompt('Enter your drawing name.');
    localStorage.setItem(lastdraw, savedraw);
}

function load() {
    var drawpicked = prompt('Enter the name of the drawing you want to load.');
    var loadObj = localStorage.getItem(drawpicked);
    document.getElementById('canvas').innerHTML = loadObj;
}