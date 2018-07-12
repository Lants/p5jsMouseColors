var rx;
var gx;
var bx;
var ry;
var gy;
var by;

function setup() {
	createCanvas(600, 400);
	rx = 0;
	ry = 0;
	gx = 0;
	gy = 0;
	bx = 0;
	by = 0;
	}


function draw() {
	rx = map(mouseX, 0, 600, 255, 0);
	bx = map(mouseX, 0, 600, 0, 255);
	gy = map(mouseY, 0, 400, 0, 255);
	
	background(rx+ry, gx+gy, bx+by);

	// add test comment
}

