status="";

function setup(){
    canvas=createCanvas(380, 380)
    canvas.center();
    video= createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function draw(){
    image(video, 0, 0, 380, 380);
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
    input1=document.getElementById("input1").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}
