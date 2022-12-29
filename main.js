song= "";

leftWristX=0;

rightWristX=0;


function preload() {
    song0 = loadSound("chill-lofi-song-8444.mp3");
    song1 = loadSound("let-it-go-12279.mp3");
}
 
function setup(){
    canvas = createCanvas(675,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on ('pose', gotPoses);
}

function draw() {
    image(video,0,0,600,500)
}


function play() {
    song0.play();
    song1.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if( results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
       

        rightWristX = results[0].pose.rightWrist.x;
       
        console.log('LeftWristX='+ leftWristX + 'RightWristX='+ rightWristX );
       
    }
}