function preload(){

}
function setup(){
    canvas=createCanvas(600,400);
    canvas.position(450)
    video=createCapture(VIDEO);
    video.hide();
   
}
function draw(){
    image(video,0,0,650,440);
}
function take_snapshot(){
    save('your_photo.png');
}
function welcome(){
    var word=document.getElementById("name").value;
    document.getElementById("head").innerHTML="<h1>"+word+",Welcome to my first p5.js project</h1>";
    document.getElementById("name").value="";
    
}