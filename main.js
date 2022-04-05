leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;

function preload(){
song=loadSound("Merlin.mp3");
song2=loadSound("music2(GUMBALL).mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    leftWristx=results[0].pose.leftWrist.x;
    leftWristy=results[0].pose.leftWrist.y;
    console.log("leftWristx="+leftWristx+"leftWristy="+leftWristy);
    
    rightWristx=results[0].pose.rightWrist.x;
    rigthWristy=results[0].pose.rigthWrist.y;
    console.log("rightristx"+rightWristx+"rightWristy"+rigthWristy);
  }
}

function modelLoaded()
{
console.log("The model is LOADED!!!!!")
}
}

function draw(){
image(video,0,0,600,500)
}
song="";
song2="";

function play()
{
  song.play()
  song.setVolume(1);
  song.rate(1);
}