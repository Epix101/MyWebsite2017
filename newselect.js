var send = true;
var newsarray = ["news101.html","news102.html"];
var x = newsarray.length-1;

function onceagain(){
if (x < newsarray.length-1) {
x++;
}else{
x=newsarray.length-1;
}getNews(x);}

function notagain(){
if (x > 0) {
x--;
}else{
x=0;
}getNews(x);}

function getNews(rfrfrf) {
if (send === true){
document.getElementById("news").src=newsarray[rfrfrf];
}}

function searchj(d) {
var d = document.getElementById("cls")[0].value;
send = true;
if (isNaN(d)===true){send=false;}
switch (d){
case "BattleSimulator!":d=0;break;
case "W3schools":d=1;break;
default:
if (d >= (newsarray.length) || d < 0){alert("ERROR! Page doesn't exist!");send=false;}break;}
getNews(d);}