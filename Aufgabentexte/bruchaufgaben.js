

function binom(zahl){
  var faktor1 = rand(1,10);
  var faktor2 = rand(1,10);
  var buchstabe1 = rand(1,26);
  var buchstabe2 = rand(1,26);
  buchstabe1 = buchstaben(buchstabe1, "ohnealles");
  buchstabe2 = buchstaben(buchstabe2, "ohnealles");

  var a =  faktor1 + "" + buchstabe1 ;
  var b = faktor2 + "" + buchstabe2;

//2. Aufgabentyp mit nur 1 Variablen
if ((zahl==1)||(zahl==2)){
 a =  buchstabe1 ;
 b = faktor2;
}

var term1 = "( " + a + " + " + b + " )";
var term2 = "( " + a + " - " + b + " )";



var random = rand(1,4);


if(random==1){
  term2=term1; //beide plus
}else if(random==2){
  //+ -
}else if(random==3){
  var speicher = term1;
  term1=term2;
  term2=speicher;
}else if(random==4){
  term1=term2;
}


if(zahl==2){
  term2=term1;
}

var lösung = löser(term1, term2, faktor1, faktor2, buchstabe1, buchstabe2,zahl);


  var aufgabenstring = [term1, term2,lösung];
  return aufgabenstring;
}

function löser(term1, term2,faktor1,faktor2,buchstabe1,buchstabe2,zahl){

  if((zahl==1)||(zahl==2)){
    faktor1=1;
    buchstabe2="";
  }
  var array1= term1.split(" ");
  var array2 = term2.split(" ");
  var zeichen1 = array1[2];
  var zeichen2 = array2[2];
  var lösungsstring = "hi";
  if((zeichen1 == "+")&&(zeichen2=="+")){
    lösungsstring =  buchstabe1 + " \\( \\text{ }^2 \\) " + " + " + 2*faktor1*faktor2 + buchstabe1 + buchstabe2 + " + " + faktor2*faktor2 + buchstabe2 ;

  }else if(((zeichen1 == "+")&&(zeichen2=="-"))||((zeichen1 == "-")&&(zeichen2=="+"))){
    lösungsstring =  buchstabe1 + " \\( \\text{ }^2 \\) " + " - " +  faktor2*faktor2 + buchstabe2 ;

  }
  else if((zeichen1 == "-")&&(zeichen2=="-")){
    lösungsstring =  buchstabe1 +" \\( \\text{ }^2 \\) " + " - " + 2*faktor1*faktor2 + buchstabe1 + buchstabe2 + " + " + faktor2*faktor2 + buchstabe2;

  }

  //Wenn zahl =0, erster Aufgabentyp mit 2 Variablen:

  if(zahl==0){
    lösungsstring = faktor1*faktor1 +lösungsstring+ " \\( \\text{ }^2 \\)";
  }


  return lösungsstring;

}



function bruch(a, b){
  var bruch = {
    zähler: a,
    nenner: b
  };
  return bruch;
}


var icon1 ='<img src="https://img.icons8.com/ios/50/000000/whole-fish.png">';
var icon2 = '<img src="https://img.icons8.com/ios/50/000000/dolphin.png">';
var icon3 = '<img src="https://img.icons8.com/ios/50/000000/earth-worm.png">';
var icon4 ='<img src="https://img.icons8.com/ios/50/000000/hamster.png">';
var icon5 = '<img src="https://img.icons8.com/ios/50/000000/gorilla.png">';
var icon6 ='<img src="https://img.icons8.com/ios/50/000000/sloth.png">';
var icon7 ='<img src="https://img.icons8.com/ios/50/000000/owl.png">';
var icon8 ='<img src="https://img.icons8.com/ios/50/000000/bird.png">';

var iconString = [icon1,icon2,icon3,icon4,icon5, icon6];



function rand (min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
