var ara=window.webkitSpeechRecognition;
var r=new ara;
function start(){
    document.getElementById("lekne_ka_yantra").innerHTML="";
    r.start();

}
r.onresult=function(event){
console.log(event);
var ti=event.results[0][0].transcript;
document.getElementById("lekne_ka_yantra").innerHTML=ti;
console.log(ti)
if(ti=="take my selfie"){
    speak()
console.log("taking your selfie in 5 seconds")
}
}

function speak(){
apis= window.speechSynthesis;
 neews ="taking your selfie in 5 seconds";
news= new SpeechSynthesisUtterance(neews);
apis.speak(news);
Webcam .attach(cam);
setTimeout(function(){take_photo();save();},5000
);}

function save(){
y=document.getElementById("rey");
i1=document.getElementById("selfie_image").src ;
y.href=i1;
y.click();
}

Webcam .set({
width:300,
height:250,
image_format:'jpeg',
jpeg_quality:90
});

cam=document.getElementById("khechne_ke_jagha");

function take_photo(){
Webcam .snap(
function(data_uri){
document.getElementById("antim_output").innerHTML='<img id="selfie_image" src="'+data_uri+'">  ';
});}