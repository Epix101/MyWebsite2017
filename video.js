var nextx = 0;
var vid = 0;
var max = 4;
var youtubevideos = ["https://www.youtube.com/embed/8f2ROIPRWD0", "https://www.youtube.com/embed/PV4DsSKkl7Q", "https://www.youtube.com/embed/J3PbRbVid9M", "https://www.youtube.com/embed/1ExuxDEXWgQ", "https://www.youtube.com/embed/PdedCma4btg"];
var arrayNEXT = ["https://www.adamsknight.com/images/insights/homepage.png","MAYA450.jpg","2222222222223333333334444444444.jpg","animate-sprites-with-flash_1280x600.jpg"];
function onemorevid(){
if (vid != max){
vid++;
}else{
vid=0;}
if (vid===0){
document.getElementById("l").src=youtubevideos[0];
}
if (vid===1){
document.getElementById("l").src=youtubevideos[1];
}
if (vid===2){
document.getElementById("l").src=youtubevideos[2];
}
if (vid===3){
document.getElementById("l").src=youtubevideos[3];
}
if (vid===4){
document.getElementById("l").src=youtubevideos[4];
}}
function onelessvid() {
if (vid != 0){
vid--;
}else{
vid=max;}
if (vid===0){
document.getElementById("l").src=youtubevideos[0];
}
if (vid===1){
document.getElementById("l").src=youtubevideos[1];
}
if (vid===2){
document.getElementById("l").src=youtubevideos[2];
}
if (vid===3){
document.getElementById("l").src=youtubevideos[3];
}
if (vid===4){
document.getElementById("l").src=youtubevideos[4];
}}

function checkinternet(){
 document.getElementById("p").style.left = "400px";
 document.getElementById("b123").style.left = "400px";
}

//SLIDESHOW --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var slides = 0;
var most = 4;
var slideshow = ["http://data.whicdn.com/images/57871680/large.jpg", "https://s-media-cache-ak0.pinimg.com/736x/ef/04/31/ef04316badaf4f9b336ede3ccbc87f5c.jpg", "http://i.imgur.com/IHmWkNO.jpg", "http://4.bp.blogspot.com/-L1q-5nRSBi0/UTLCgVXeV8I/AAAAAAAAAGE/2586-uvUJyA/s1600/house+fancy.jpg", "https://i.ytimg.com/vi/w1O459ksfo0/maxresdefault.jpg", "http://cdn.smosh.com/sites/default/files/2014/10/sponge-20.jpg"];
function onemorepic(){
if (slides != most){
slides++;
}else{
slides=0;}
if (slides===0){
document.getElementById("le").src=slideshow[0];
}
if (slides===1){
document.getElementById("le").src=slideshow[1];
}
if (slides===2){
document.getElementById("le").src=slideshow[2];
}
if (slides===3){
document.getElementById("le").src=slideshow[3];
}
if (slides===4){
document.getElementById("le").src=slideshow[4];
}
if (slides===5){
document.getElementById("le").src=slideshow[5];
}}
function onelesspic() {
if (slides != 0){
slides--;
}else{
slides=most;}
if (slides===0){
document.getElementById("le").src=slideshow[0];
}
if (slides===1){
document.getElementById("le").src=slideshow[1];
}
if (slides===2){
document.getElementById("le").src=slideshow[2];
}
if (slides===3){
document.getElementById("le").src=slideshow[3];
}
if (slides===4){
document.getElementById("le").src=slideshow[4];
}
if (slides===5){
document.getElementById("le").src=slideshow[5];
}}

function checkinternetforpics(){
 document.getElementById("pp1").innerHTML=    "                                  <<                                  ";
 document.getElementById("bb1").innerHTML= "                                   >>                                 ";
}

function alertFunc() {
if (nextx < arrayNEXT.length){
  nextx++;
  document.getElementById("o").src=arrayNEXT[nextx];
  }else{
  nextx=0;
  document.getElementById("o").src=arrayNEXT[nextx];}setInterval(alertFunc(), 60000);}