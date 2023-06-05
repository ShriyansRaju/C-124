function preload(){

}

function setup(){
    video=createCapture(VIDEO)
    video.size(750,700)
    video.position(50, 90)
    canvas=createCanvas(550,500)
    canvas.position(850,150)

    poseNet=ml5.poseNet(video, modelLoaded)

    poseNet.on('pose', gotPoses)
}

function gotPoses(results){
    if (results.length>0)
    {
        console.log(results)
    }
    
}

function modelLoaded(){
    console.log("The model has loaded")
}

function draw(){
    background('#488afa')
    stroke("blue")
    rect(50, 90, 750, 700)
}