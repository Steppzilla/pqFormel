

function additionsaufgabe(zeichen){
  var zählerA = rand(1,10);
  var nennerA = rand(1,10);
  var zählerB = rand(1,10);
  var nennerB = rand(1,10);

if(zählerA>nennerA){
  var speicher=zählerA;
  zählerA=nennerA;
  nennerA=speicher;
}

if(zählerB>nennerB){
  var speicher=zählerB;
  zählerB=nennerB;
  nennerB=speicher;
}

  var auftragszahl =[];

if(zeichen=="+"){
  var zählerLös = zählerA*nennerB + zählerB*nennerA;
  var nennerLös = nennerA*nennerB;
    var auftrag = [];
}else if(zeichen=="-"){
    var zählerLös = zählerA*nennerB - zählerB*nennerA;
    var nennerLös = nennerA*nennerB;
      var auftrag = [];
}else if(zeichen=="*"){
  var zählerLös = zählerA*zählerB;
  var nennerLös = nennerA*nennerB;
    var auftrag = [];
}else if(zeichen==":"){
  var zählerLös = zählerA*nennerB;
  var nennerLös = nennerA*zählerB;
  var auftrag = [];
}else if(zeichen=="erweitern"){
  zählerA =zählerB;
  var zählerLös = zählerA;
  var nennerLös = nennerA;
  var randöm0 = rand(2,5);
    var randöm1 = rand(2,10);
  var auftrag0 = "Erweitere den Bruch mit " + randöm0*randöm1;
  var auftrag1 = ", kürze dann mit " + randöm0;
  var auftrag2 = " und kürze anschließend mit " + randöm1 + ".";
  var auftrag = [auftrag0, auftrag1, auftrag2];
  auftragszahl =[randöm0*randöm1, randöm0, randöm1];
}

  var aufgabenstring = [zählerA, nennerA, zählerB, nennerB, zählerLös, nennerLös,zeichen,auftrag,auftragszahl];
  return aufgabenstring;
}

function aufgaben(){

}



function addieren(bruch1, bruch2){


}



function bruchvonAnzahl(bruch1, anzahl){

}

function erweitern(bruch, erweiterungszahl){

}


function bruch(a, b){
  var bruch = {
    zähler: a,
    nenner: b
  };
  return bruch;
}


var bay= bruch(5,99);

var icon1 ='<img class="images" src="https://img.icons8.com/wired/64/000000/plus-math.png">';
var icon2 = '<img class="images" src="https://img.icons8.com/wired/64/000000/minus-math.png">';
var icon3 = '<img class="images" src="https://img.icons8.com/wired/64/000000/multiply.png">';
var icon4 ='<img class="images" src="https://img.icons8.com/wired/64/000000/divide.png">';
var icon5 = '<img class="images" src="https://img.icons8.com/wired/64/000000/zoom-to-extents.png">';
var icon6 ='<img class="images" src="https://img.icons8.com/wired/64/000000/variation.png">';



var iconString = [icon1,icon2,icon3,icon4,icon5];



function rand (min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
