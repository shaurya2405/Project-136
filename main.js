Status="";

function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();

    video = createVideo(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    document.getElementById("object_input").value;
}

function modelLoaded()
{
    console.log("Model Loaded Successfully!");
    Status = true;
}

function draw()
{
    image(video, 0, 0, 480, 480);
}