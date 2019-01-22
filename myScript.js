
var menü = $("div").children().eq(0);
var aufgabenwahl ;



linkeSeiteschreiben();
$(".menu").find(".druck").hide();



$("#Aufgabenübersicht").find("p").click(function(){
	$("#Aufgabenübersicht").children().removeClass("yellow");
	$(this).addClass("yellow");
	var zahl=	$(this).index();
	window.aufgabenwahl=zahl;
	$("#Aufgabentext").children().eq(0).children().eq(0).html("Aufgabe");//überschrift

	var div1= "<div class='bruchBox'></div>";
	var div2= "<div class='operatorBox'> <p class='operator'> +</p> </div>";
	var div3= "<div class='bruchBox'></div>";
	var div4= "<div class='gleichBox'><p class='operator'> =</p> </div>";
	var div5= "<div class='bruchBox'></div>";
	var div6= "<div class='operatorBox'> <p class='operator'> +</p> </div>";
	var div7= "<div class='bruchBox'></div>";
	var div8= "<div class='gleichBox'><p class='operator'> =</p> </div>";
	var div9= "<div class='bruchBox'></div>";

	$("#aufgabenFeld").children().eq(0).html("");
	$("#aufgabenFeld").children().eq(0).append(div1);//
	$("#aufgabenFeld").children().eq(0).append(div2);//
	$("#aufgabenFeld").children().eq(0).append(div3);//
	$("#aufgabenFeld").children().eq(0).append(div4);//
	$("#aufgabenFeld").children().eq(0).append(div5);//
	$("#aufgabenFeld").children().eq(0).append(div6);//
	$("#aufgabenFeld").children().eq(0).append(div7);//
	$("#aufgabenFeld").children().eq(0).append(div8);//
	$("#aufgabenFeld").children().eq(0).append(div9);//

	var zählerdiv = "<p class='zählerböxchen' ></p>";
	var bruchstrichdiv = "<hr>";
	var nennerdiv = "<p class='nennerböxchen' ></p>";

	$(".bruchBox").append(zählerdiv);
	$(".bruchBox").append(bruchstrichdiv);
	$(".bruchBox").append(nennerdiv);


 //svg kopieren/Kreis erstellen:
	$(".bilderFeld").empty();
	for(i=0;i<5;i++){
		$(".bilderFeld").append("<div class='bruchbildböxchen'> </div>");  // Bild vom ersten Bruch erschaffen
	}
	$(".bilderFeld .bruchbildböxchen").addClass("lightgrey");
	$(".bilderFeld").css("height","100%");

//Je nach Aufgabe unterschiedliche "Muster"
	var ix = $(this).index() ;
	//alert(ix);
	switch(ix){
			case 0 :
				aufgabe = additionsaufgabe("+");
				$(".operatorBox").children().eq(0).text("+");
					$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
				break;
			case 1:
				aufgabe = additionsaufgabe("-");
				$(".operatorBox").eq(0).children().eq(0).text("-");
				$(".operatorBox").eq(1).children().eq(0).text("-");
					$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
				break;
			case 2:
				aufgabe = additionsaufgabe("*");
				$(".operatorBox").children().eq(0).text("*");
				$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
				mittehide();
				break;
			case 3:
				aufgabe = additionsaufgabe(":");
				$(".operatorBox").eq(0).children().eq(0).text(":");
				$(".operatorBox").eq(1).children().eq(0).text("*");
				$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
				break;
			case 4:
				aufgabe = additionsaufgabe("erweitern");
				$(".bruchBox").eq(1).hide();  //2. bruch wird nicht benötigt beim erweitern.
				$(".operatorBox").eq(0).hide(); //
				$(".bilderFeld .bruchbildböxchen").eq(1).hide(); //entsprechendes bild
				$(".operatorBox").eq(1).children().eq(0).text("=");
				$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7][0] + aufgabe[7][1] +  aufgabe[7][2]);
				break;
			case 5:
				aufgabe = additionsaufgabe("gemischt");
				$(".operatorBox").children().eq(0).text("?");
					$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
				break;
		}

			//Aufgabe schreiben:

		$(".zählerböxchen").eq(0).text(aufgabe[0]);
		$(".zählerböxchen").eq(1).text(aufgabe[2]);
		$(".nennerböxchen").eq(0).text(aufgabe[1]);
		$(".nennerböxchen").eq(1).text(aufgabe[3]);

		//Bild 1 erstellen:
		var ort1 = $(".bilderFeld").children().eq(0);
		var ort2 = $(".bilderFeld").children().eq(1);

		bruchbild(aufgabe[0],aufgabe[1], ort1);
		bruchbild(aufgabe[2],aufgabe[3], ort2);


		//clickfunktion für lösungen

		$(".bruchBox").find(".zählerböxchen ,.nennerböxchen").click(function(){
		inputMachen($(this), aufgabe);
		});
}); //ende click links

function mittehide(){
	$(".bilderFeld .bruchbildböxchen").eq(2).hide();
	$(".bilderFeld .bruchbildböxchen").eq(3).hide();
	$(".bruchBox").eq(2).hide();
	$(".bruchBox").eq(3).hide();
	$(".operatorBox").eq(1).hide();
	$(".gleichBox").eq(0).hide();
}


function linkeSeiteschreiben(){
	for(i=0;i<iconString.length;i++){
		if(iconString[i]!=undefined){
			var überschrift="<p class='menüicon pic'>" + iconString[i] + "</p>"; //frowning face
		}else{
			var überschrift = "<p class='menüicon pic'>" + '<img class=images src="https://img.icons8.com/wired/64/000000/question-mark.png">' + "</p>";
		}
		$("#Aufgabenübersicht").append(überschrift);
	}
}

//VierfelderTafel Input:
function inputMachen(objekt, aufgabe){
				//Input-Fenster löschen: (führt nicht zum error, selbst beim ersten klick,obwohl noch keins vorhanden ist... mh=?...
				$("input").remove();
				// Wähle die geklickte Box der Grid-Tabelle aus:
				var boxWähler = objekt;
				// Box leeren:
				var inhaltsspeicher = boxWähler.children();
				boxWähler.empty();
				//leeres Eingabefeld erzeugen und einfügen:
				var text1	= "<input type='text' class='input' size='4' id='inputFeld'>" ;
				boxWähler.append(text1);
				boxWähler.children().eq(0).focus();
				$("#inputFeld").keypress(
					function(e) {
						if (e.keyCode == 13){
							var textUser =boxWähler.children().eq(0).val();    // Der Value, also der eingegebene Text wird ausgelesen aus der Zelle und in textUser gespeichert.
							boxWähler.empty();
							var newUserElement = "<p style='font-size:24pt' >".concat(textUser, "</p>");

							if(textUser==""){
									 boxWähler.append(inhaltsspeicher);
							}else{
								boxWähler.append(newUserElement);

								ergebnischeck(aufgabe);//allles wird als bruch gemalt und ggf hintergrund markiert
								//Feedback:
							}
						} //enter
					}
				);
}

function ergebnischeck(aufgabe){
	var zeichen = aufgabe[6];
	var zähler1 = $(".zählerböxchen").eq(2).text();
	var zähler2 = $(".zählerböxchen").eq(3).text();
	var zähler3 = $(".zählerböxchen").eq(4).text();

	var nenner1 = $(".nennerböxchen").eq(2).text();
	var nenner2 = $(".nennerböxchen").eq(3).text();
	var nenner3 = $(".nennerböxchen").eq(4).text();

	var ergebnis = aufgabe[4]/aufgabe[5];

	//erster  Bruch
	if( (isNaN(zähler1))||(isNaN(nenner1))||(zähler1=="")||(nenner1=="")){
	}
	else{
		var a1 = aufgabe[0] / aufgabe[1];
		var l1 = "Error";
		var l1 = zähler1/nenner1;



		var ort3 = $(".bilderFeld").children().eq(2);

		bruchbild(zähler1,nenner1, ort3);

		if(a1==l1){
			//erweitern : 1. bruch muss Aufgabenstellung entsprechen:
			var erweiterungsZ = aufgabe[8][0];
			if((zeichen=="erweitern")&&(zähler1==aufgabe[0]*erweiterungsZ)){
					$(".zählerböxchen").parent().eq(2).css("background-color","darkgreen");
			}		else if((zeichen=="erweitern")&&(zähler1!=aufgabe[0]*erweiterungsZ)){
				//richtig erweitert, entspricht aber nicht der aufgabenstellung:
				$(".zählerböxchen").parent().eq(2).css("background-color","yellow");
		//		alert(zähler1 + " " + aufgabe[0] + " " + erweiterungsZ);
			}else{ //hier bei addition auf gleichen Nenner achten?
				$(".zählerböxchen").parent().eq(2).css("background-color","darkgreen");
			}

		}else{
			$(".zählerböxchen").parent().eq(2).css("background-color","purple");
		}
	}

//zweiter Bruch
	if( (isNaN(zähler2))||(isNaN(nenner2))||(zähler2=="")||(nenner2=="")){
	}else{
		//unterschied bei geteilt aufgaben, da muss 2. bruch kehrwert sein! Beim Erweitern muss das ergebnis dem ersten entsprechen
		var a2 =0;
		if(zeichen==":"){
			a2 = aufgabe[3] / aufgabe[2];
		}else if(zeichen=="erweitern"){
			a2 = aufgabe[0] / aufgabe[1];
		}
		else{
			a2 = aufgabe[2] / aufgabe[3];
		}
		var l2 = zähler2/nenner2;
		$(".bilderFeld").children().eq(3).children().eq(0).css("opacity","100");
		var ort4 = $(".bilderFeld").children().eq(3);
		bruchbild(zähler2,nenner2, ort4);
		if(a2==l2){
			var erweiterungsZ = aufgabe[8][1];
			if((zeichen=="erweitern")&&(zähler2==zähler1/erweiterungsZ)){
					$(".zählerböxchen").parent().eq(3).css("background-color","darkgreen");
			}		else if((zeichen=="erweitern")&&(zähler2!=zähler1/erweiterungsZ)){
				//richtig erweitert, entspricht aber nicht der aufgabenstellung:
				$(".zählerböxchen").parent().eq(3).css("background-color","yellow");
				alert(zähler2 + " = " + zähler1 + "  :  " + erweiterungsZ);
			}else{ //hier bei addition auf gleichen Nenner achten?
				$(".zählerböxchen").parent().eq(3).css("background-color","darkgreen");
			}

		}else{
			$(".zählerböxchen").parent().eq(3).css("background-color","purple");
		}

	}


//Ergebnis:
	if( (isNaN(zähler3))||(isNaN(nenner3))||(zähler3=="")||(nenner3=="")){
		//alert("nix beides zahl");
	}else{
		var l3 = zähler3/nenner3;
		$(".bilderFeld").children().eq(4).children().eq(0).css("opacity","100");
		var ort5 = $(".bilderFeld").children().eq(4);
		bruchbild(zähler3,nenner3, ort5);
		if(ergebnis==l3){
			var erweiterungsZ = aufgabe[8][2];
			if((zeichen=="erweitern")&&(zähler3==zähler2/erweiterungsZ)){
					$(".zählerböxchen").parent().eq(4).css("background-color","darkgreen");
			}		else if((zeichen=="erweitern")&&(zähler1!=zähler2/erweiterungsZ)){
				//richtig erweitert, entspricht aber nicht der aufgabenstellung:
				$(".zählerböxchen").parent().eq(4).css("background-color","yellow");
			}else{ //hier bei addition auf gleichen Nenner achten?
				$(".zählerböxchen").parent().eq(4).css("background-color","darkgreen");
			}

		}else{
			$(".zählerböxchen").parent().eq(4).css("background-color","purple");
		}
	}

//	alert(zähler1 + " " + zähler2 + "  "+ zähler3 + " " + nenner1 + " + " + nenner2 + "  " + nenner3);
}



var letter ="ö";
function buchstaben(i,text){
			switch(i){
			case 1:				letter = "a";				break;
			case 2:				letter = "b";				break;
			case 3:				letter = "c";				break;
			case 4:				letter = "d";				break;
			case 5:				letter = "e";				break;
			case 6:				letter = "f";				break;
			case 7:				letter = "g";				break;
			case 8:				letter = "h";				break;
			case 9:				letter = "i";				break;
			case 10:			letter = "j";				break;
			case 11:			letter = "k";				break;
			case 12:			letter = "l";				break;
			case 13:			letter = "m";				break;
			case 14:			letter = "n";				break;
			case 15:			letter = "o";				break;
			case 16:			letter = "p";				break;
			default:			letter = "?";
		}
		var chapter = letter.concat(")");

		if(text=="chap"){				return chapter;
		}else{									return letter;
		}
	}



function printcontainer(){
	$(".lösungsplace").removeAttr('Id');
	$(".innerpage1").clone().appendTo(	$(".printArea")	);
	$(".printArea").find(".auftrag0").remove();
	$(".printArea").find(".main").children().eq(1).css("text-align","left");

	$(".printArea").children().removeClass("innerpage1");
	//$(".printArea").children().removeClass("main");

		$("#printArea").children().find(".main").css("width", "100%");
	$(".printArea").append("<div class='lösungsplace' id='felderBox'></div>");

	printVierfelder();
	printBaumdiagramm();
}

function printVierfelder(){ //+Aufgabe in Container
	var string= lösungenVierfelder[window.aufgabenwahl];
	for(i=0;i<16;i++){																//in die originale Vierfeldertafel Lösungen hinzufügen
		var gerundet= string[0][0][i];
		if(!isNaN(gerundet)){
			gerundet=gerundet*1000;
			gerundet=Math.round(gerundet);
			gerundet=gerundet/1000;
		}
		$("#vierfelderBox").children().eq(i).html(gerundet);
	}
	$("#taBelle").show();
	$("#taBelle").clone().appendTo($("#felderBox")); //funzt nur bei show
//	$(".printArea").find(".tabelle").removeClass("tabelle");
	$(".printArea").find(".tabelle").removeAttr("Id");//Id entfernen
	$("#taBelle").hide(); //die originale Tabelle oben wird versteckt
	//tab-höhe ändern im resize programm
	//$("#gridContainer").clone().appendTo(	$("#felderBox")	);
		$(".printArea").find(".tabelle").css("top","0pt");
		$(".printArea").find(".tabelle").css("left","0pt");


	for(i=0;i<16;i++){
		var feldinhalt=$("#gridContainer").children().eq(1).children().eq(i).text();
		$("#felderBox").find(".tab").eq(i).text(feldinhalt); //hier funktioniert wohl was nicht...
	}
//	$(".printArea").find("#gridContainer").removeAttr(	'Id'	);

	$(".printArea").find('p').css("font-size","12pt");
	$(".printArea").find('div').css("font-size","12pt");
	$("#felderBox").children().css("color","black");
	$(".printArea").children().css("color","black");
}

function printBaumdiagramm(){
	$("#mySVG").find("foreignObject").hide();  //foreign
	var string= lösungenVierfelder[window.aufgabenwahl];
//Nennerposition korrigieren
	for(l=0;l<10;l++){
		var k=6+l*3;  //zählerelemente, die zur Eingabe benötigt ewerden

		var zähler = string[1][0][k];
		var nenner = string[1][0][k+2];
		var gerundet=zähler/nenner;
		gerundet=gerundet*1000;
		gerundet=Math.round(gerundet);
		gerundet=gerundet/1000;
		$("#mySVG").children().eq(k).text(gerundet);
	}
	for(i=0;i<6;i++){
		$("#mySVG").children().eq(i).text(string[1][0][i]);
		feldAnpassen(i);
	}
	baumDiagrammPrüfen(); //passt Rechteckfarbe an Rcihtigkeit des inhalts an
	//alert(string[1][0]);
	$("#svgDiv").clone().appendTo(	$("#felderBox")	);
//	$("#felderBox").find(".svg").children().eq(0).remove();
	$("#felderBox").children().removeAttr("Id");  // sonst dupliziert sich alles.
	$("#felderBox").find("path").css("stroke","black");
	$("#felderBox").find("text").css("fill","black");
}

function druckansicht(){
	$(".aufgabenübersicht").hide();
	$(".innerpage1").hide();
	$(".gridContainer").hide();
	$(".svg").hide(); //sonst bleibt überschrift sichtbar
	$(".lösungen").hide();

	$(".menu").find(".home").hide();
	$(".menu").find(".druck").show();
	$(".printArea").addClass("grid");
	$(".printArea").css("grid-template-columns","100%");

}

function vierf(){
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();
//	$(".printArea").filter("div").hide();
	$(".lösungsplace").find(".tabelle").show();
$(".lösungsplace").find(".tabelle").next().hide(); //svg div ausblenden (hiter vierf)
	$(".printArea").css("grid-template-columns","80% 20%");
	$(".lösungsplace").css("grid-template-columns","100%");
	$(".lösungsplace").css("width","100%");
}

function baumd(){
//	var svghöhe =  $(".printArea").find("#mySVG").height();
	$(".lösungsplace").css("width", "100%");
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();

	$(".lösungsplace").find(".tabelle").hide();
	$(".lösungsplace").find(".tabelle").next().show(); //baum
	//$(".lösungsplace").find("#svgDiv").css("height","180pt");

	$(".printArea").css("grid-template-columns","75% 25%");
	$(".lösungsplace").css("grid-template-columns","100%");
	$(".lösungsplace").css("width","100%");
}

function baumVier(){
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();

	$(".lösungsplace").find(".tabelle").show();
		$(".lösungsplace").find(".tabelle").next().show(); //baum

 	$(".printArea").css("grid-template-columns","100%");
 	$(".lösungsplace").css("grid-template-columns","60% 40%");
 	$(".lösungsplace").css("width","100%");
}

function nurAufgabe(){
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();
	$(".lösungsplace").find(".tabelle").hide();
		$(".lösungsplace").find(".tabelle").next().hide(); //baum
	$(".printArea").css("grid-template-columns","100%");
	$(".lösungsplace").css("grid-template-columns","100%");
	$(".lösungsplace").hide();
}

function nurLös(){
		$(".printArea").children().hide();
		$(".lösungsplace").find(".üschrift").remove();
		var üschrift = 0;
	 	for(i=0;i<20;i++){
		  üschrift = $(".printArea").find(".Nüberschrift").eq(i).text();
			$(".lösungsplace").eq(i).prepend("<p class='üschrift'>" + üschrift + "</p>");
 		}
		$(".lösungsplace").show();
		$(".lösungsplace").find(".tabelle").show();
			$(".lösungsplace").find(".tabelle").next().show(); //baum
		$(".printArea").css("grid-template-columns","50% 50%");
		$(".lösungsplace").css("grid-template-columns","40% 60%");
		$(".lösungsplace").css("width","100%");
	//	$(".lösungsplace").css("grid-template-rows","10% 90%");
}

	function printer(){
		$(".menu").hide();
		window.print();

		$(".menu").show();

	}


function home(){
	$(".menu").find(".home").show();
	$(".menu").find(".druck").hide();


	$(".menu").show();
	$(".aufgabenübersicht").show();
	$(".innerpage1").show();

	$(".gridContainer").show();
	$(".svg").show();
		$(".lösungen").show();
}
