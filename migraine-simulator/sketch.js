let shatter_frames = [];
let i = 0;
let counter = 0;
let burst_array = [];
let spot_array = [];

let droning;

let bQ;
let bQYes;
let bQNo;

let bYes;
let bNo;
let bSleep;

function preload() {
  shatter_frames[0] = loadImage('assets/shatter_01.png');
  shatter_frames[1] = loadImage('assets/shatter_02.png');
  shatter_frames[2] = loadImage('assets/shatter_03.png');
  shatter_frames[3] = loadImage('assets/shatter_04.png');
  
  burst_array[0] = loadImage('assets/burst_01_v02.png');
  burst_array[1] = loadImage('assets/burst_02_v02.png');
  burst_array[2] = loadImage('assets/burst_03_v02.png');
  
  spot_array[0] = loadImage('assets/spot_01.png');
  spot_array[1] = loadImage('assets/spot_02.png');
  spot_array[2] = loadImage('assets/spot_03.png');
  spot_array[3] = loadImage('assets/spot_04.png');
  spot_array[4] = loadImage('assets/spot_05.png');
  spot_array[5] = loadImage('assets/spot_06.png');
  spot_array[6] = loadImage('assets/spot_07.png');
  
  droning = loadSound('assets/droning_humming.flac'); //droning, inside electronic, humming, 10.flac by TRP -- https://freesound.org/s/576464/ -- License: Creative Commons 0
  
  fly = loadSound('assets/buzzing_fly.wav'); //Fly and Lampshade.wav by Puniho -- https://freesound.org/s/387054/ -- License: Attribution 3.0
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  droning.play();
  droning.loop();
}

function bYesPressed() {
  bQ.remove();
  bYes.remove();
  bNo.remove();
  
  bQYes = createButton('It does not help.');
  bQYes.position(20, windowHeight/2);
  bQYes.class("buttonQ");
  
  bSleep = createButton('you should go to bed. it is the only thing that might help.');
  bSleep.position(20, windowHeight/2-78);
  bSleep.class("buttonA");
  bSleep.mousePressed(sleepPressedYes);
  
  print(bQYes.size());
  print(bSleep.size());
}

function bNoPressed(){
  bQ.remove();
  bYes.remove();
  bNo.remove();
  
  bQNo = createButton('There is no glory in suffering.');
  bQNo.position(20, windowHeight/2);
  bQNo.class("buttonQ");

  bSleep = createButton('you should go to bed. it is the only thing that might help.');
  bSleep.position(20, windowHeight/2+78);
  bSleep.class("buttonA");
  bSleep.mousePressed(sleepPressedNo);
}

function sleepPressedYes(){
  bSleep.remove();
  bQYes.remove();
  clear();
  
  i = 0;
  counter = 0;
  outputVolume(counter);
}

function sleepPressedNo(){
  bSleep.remove();
  bQNo.remove();
  clear();
  
  i = 0;
  counter = 0;
  outputVolume(counter);
}

function shatter(){
  
  if (i < shatter_frames.length){
    background(0, 0, 0);
    image(shatter_frames[i], 0, 0, windowWidth, windowHeight);
    i++;
  }
  
  else if (i >= shatter_frames.length){
    
    image(spot_array[floor(random(0,7))], mouseX-125, mouseY-125, 250, 250);
    fly.play();
    counter++;
    outputVolume(counter);
    
    if (counter == 10) {  
        bQ = createButton('do you want to take medicine?');
        bQ.position(20, windowHeight/2);
        bQ.class("buttonQ");
      
        bYes = createButton('yes it hurts so much');
        bYes.position(20, windowHeight/2-78);
        bYes.mousePressed(bYesPressed);
        bYes.class("buttonA");
      
        bNo = createButton('no it is too expensive');
        bNo.position(20, windowHeight/2+78);
        bNo.mousePressed(bNoPressed);
        bNo.class("buttonA");
    }
  }
}

function draw(){
  if (i >= shatter_frames.length) {
    var r = random(0,0.2);
    image(burst_array[floor(random(0,3))], mouseX-(1000*r/2), mouseY-(1000*r/2), 1000*r, 1000*r);
  }
}

function mousePressed() {
  shatter(); 
}
