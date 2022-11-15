function setup (){
    createCanvas(500, 500);
}

function draw() {
background(220);

makeSnowman();
noLoop();

}

function makeSnowman(xLocation){

  let startingYVal = 8*height;
  let yChange = .15*height;

  circle(xLocation, startingYVal, 35);
  circle(xLocation, startingYVal-15, 35);
  circle(xLocation, startingYVal-30, 15);
}
