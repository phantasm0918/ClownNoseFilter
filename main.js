function preload(){
    clownIMG = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup(){
    Canvas1 = createCanvas(350, 350);
    Canvas1.center()
    WebCam1 = createCapture(VIDEO)
    WebCam1.hide()
    MyModel = ml5.poseNet(WebCam1, modelLoaded)
    MyModel.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("Model has been loaded")
}

function take_snapshot(){
    save("Joker.png")
}

noseX = 0
noseY = 0

function gotPoses(results){
   if(results.length > 0){
    noseX = results[0].pose.nose.x-177
    noseY = results[0].pose.nose.y-80

   }
}

function draw(){
    image(WebCam1, 0, 0, 350, 350)
    image(clownIMG, noseX , noseY , 30 , 30)
}