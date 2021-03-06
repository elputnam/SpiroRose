// Daniel Shiffman
// http://codingtra.in
// Mathematical Roses
// Video: https://youtu.be/f5QBExMNB1I
// Based on: https://en.wikipedia.org/wiki/Rose_(mathematics)

var d = 20;
var n = 1;
var sliderD;
var sliderN;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(1080, 1920);
  frameRate(15);
  // sliderD = createSlider(1, 20, 10, 1);
  // sliderN = createSlider(1, 20, 10, 1);
  // sliderD.input(draw);
  // sliderN.input(draw);
}

function draw() {
  // d = sliderD.value();
  // n = sliderN.value();
  var k = n / d;
  background(255);
  push();
  translate(width / 2, height / 2);

  beginShape();
  stroke(0, random(255), random(255));
  noFill();
  strokeWeight(random(1, 5));
  for (var a = 0; a < TWO_PI * reduceDenominator(n, d); a += 0.02) {
    var r = 200 * sin(k * a);
    var x = r * sin(a);
    var y = r * tan(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
  // noLoop();

  n += 1;
  d -= 1;

  if (n >= 20){
    n = 1;
  }

  if (d <= 1){
    d = 20;
  }
}

function reduceDenominator(numerator, denominator) {
  function rec(a, b) {
    return b ? rec(b, a % b) : a;
  }
  return denominator / rec(numerator, denominator);
}
