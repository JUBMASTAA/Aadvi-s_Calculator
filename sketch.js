var Number1;
var Number2;

var b1, b2, b3, b4;
var num1, num2;


function setup (){
  createCanvas(800,700);

  num1 = createInput();
  num1.position(10,100);

  num2 = createInput();
  num2.position(300,100);

  b1 = createButton("ADD");
  b1.position(20,150);
  b1.class("customButton");
  b1.mousePressed(add);

  b2 = createButton ("SUBTRACT");
  b2.position(300,150)
  b2.class("customButton");
  b2.mousePressed(subtract);

  b3 = createButton("MULTIPLY");
  b3.position(20, 250);
  b3.class("customButton");
  b3.mousePressed(multiply);

  b4 = createButton ("DIVIDE");
  b4.position(300, 250);
  b4.class("customButton");
  b4.mousePressed(divide); //biniding the function

}
function draw (){
background("#abf1dd");

 n1 = parseInt(num1.value());
 n2 = parseInt (num2.value());

 //divide();//calling the function

}

function add(){
  console.log(n1 + n2)
}
function subtract(){
  console.log(n1 - n2)
}
function multiply(){
  console.log(n1 * n2)
}
function divide(){
  console.log(n1 / n2)
}

