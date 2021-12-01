peter_status = "";
harry_status = "";

Peter_Pater = "";
Harry_Potter_Theme = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
	Peter_Pater = loadSound("music2.mp3");
    Harry_Potter_Theme = loadSound("music.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		scoreRightWrist = results[0].pose.keypoints[10].score;
	scoreLeftWrist = results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist" + scoreRightWrist +", scoreLeftWrist" + scoreLeftWrist);

		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
		console.log("rightWristX = " + rightWristX +", rightWristY" + rightWristY);
	
		leftWristX = results[0].pose.leftWrist.x;
		leftWristY = results[0].pose.leftWrist.y;
		console.log("leftWristX = " + leftWristX +", leftWristY" + leftWristY);
	
	
	}}
	
function draw(){
    image(video, 0, 0, 600, 500);

	peter_status = Peter_Pater.isPlaying();
    harry_status = Harry_Potter_Theme.isPlaying();

	fill("#ff0000");
	stroke("#ff0000");

	if(scoreLeftWrist > 0.2)
	{
circle(leftWristX,leftWristY,20);
Peter_Pater.stop();

if(harry_status == false){
Harry_Potter_Theme.play();
}}
if(scoreRightWrist > 0.2)
{
circle(rightWristX,rightWristY,20);
Harry_Potter_Theme.stop();

if(harry_status == false){
Peter_Pater.play();
}}
}




	
