function setup(){
  canvas=createCanvas(300,300);
  canvas.position(350,300);
  video=createCapture(VIDEO);
  video.hide();
  video.size(300,300);
 pacifier=ml5.imageClassifier("MobileNet",a_mouse_in_the_house);
 
}
function a_mouse_in_the_house(){
console.log("baby shark a do do do yay");
}
function draw(){
  image(video,0,0,300,300);
  pacifier.classify(video,mickeys_fire_brigade);
}
function mickeys_fire_brigade(error,results){
if(error){
console.error(error);
}else{
  console.log(results);
  document.getElementById("results").innerHTML=results[0].label;
  document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
}
}
