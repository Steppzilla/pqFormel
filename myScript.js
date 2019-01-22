
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
	var div5= "<div class='bruchBox lösung'></div>";



	$("#aufgabenFeld").children().eq(0).html("");
	$("#aufgabenFeld").children().eq(0).append(div1);//
	$("#aufgabenFeld").children().eq(0).append(div2);//
	$("#aufgabenFeld").children().eq(0).append(div3);//
	$("#aufgabenFeld").children().eq(0).append(div4);//
	$("#aufgabenFeld").children().eq(0).append(div5);//


//Je nach Aufgabe unterschiedliche "Muster"
	var ix = $(this).index() ;
	//alert(ix);
	switch(ix){
			case 0 :
				aufgabe = binom();
				$(".operatorBox").children().eq(0).html("&#8729");
			//		$("#Aufgabentext").children().eq(1).children().eq(0).html(aufgabe[7]);
				break;
			case 1:
				aufgabe = binom();
				$(".operatorBox").eq(0).children().eq(0).text("-");
				$(".operatorBox").eq(1).children().eq(0).text("-");
		//			$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
				break;
			case 2:
				aufgabe = binom();
				$(".operatorBox").children().eq(0).text("*");
				$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
				mittehide();
				break;
			case 3:
				aufgabe = binom();
				$(".operatorBox").eq(0).children().eq(0).text(":");
				$(".operatorBox").eq(1).children().eq(0).text("*");
				$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
				break;
			case 4:
				aufgabe = binom();
				$(".bruchBox").eq(1).hide();  //2. bruch wird nicht benötigt beim erweitern.
				$(".operatorBox").eq(0).hide(); //
				$(".bilderFeld .bruchbildböxchen").eq(1).hide(); //entsprechendes bild
				$(".operatorBox").eq(1).children().eq(0).text("=");
			//	$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7][0] + aufgabe[7][1] +  aufgabe[7][2]);
				break;
			case 5:
				aufgabe = binom();
				$(".operatorBox").children().eq(0).text("?");
					$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
				break;
		}

			//Aufgabe schreiben:

		$(".bruchBox").eq(0).text(aufgabe[0]);
		$(".bruchBox").eq(1).text(aufgabe[1]);


		//Bild 1 erstellen:
		var ort1 = $(".bilderFeld").children().eq(0);
		var ort2 = $(".bilderFeld").children().eq(1);

		bruchbild(aufgabe[0],aufgabe[1], ort1);
		bruchbild(aufgabe[2],aufgabe[3], ort2);

ergebnischeck(aufgabe);
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
	var ergebnis = $(".bruchBox").eq(2).text();


	var ergebnisSoll = aufgabe[2];

	//erster  Bruch
	//if( (isNaN(zähler1))||(isNaN(nenner1))||(zähler1=="")||(nenner1=="")){
	//}
	//else{
	//	var a1 = aufgabe[0] / aufgabe[1];
	//	var l1 = "Error";
	//	var l1 = zähler1/nenner1;



	//	var ort3 = $(".bilderFeld").children().eq(2);
	$(".lösung").text(aufgabe[2]);
	MathJax.Hub.Queue(["Typeset",MathJax.Hub,".lösung"]);


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
			case 17:			letter = "q";				break;
			case 18:			letter = "r";				break;
			case 19:			letter = "s";				break;
			case 20:			letter = "t";				break;
			case 21:			letter = "u";				break;
			case 22:			letter = "v";				break;
			case 23:			letter = "w";				break;
			case 24:			letter = "x";				break;
			case 25:			letter = "y";				break;
			case 26:			letter = "z";				break;

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
