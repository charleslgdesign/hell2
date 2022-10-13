var img;
let xOff = -4;
let yOff = 1;
let zOff = 2;



function preload() {
  img = loadImage('earth.jpeg');
}

// draw a sphere with radius 200
function setup(){




    var cnv = createCanvas(1000, 700, WEBGL);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

}


function draw(){
  background(255);

  noStroke();
  noFill();

  translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*200);
  rotateY(millis() / 1550);
  texture(img)
  sphere(300);
  
  xOff+=0.01;
  yOff+=0.01;
  zOff+=0.0001;

}