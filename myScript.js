
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

	$("#aufgabenFeld").children().eq(0).children().remove();//feld leeren
	for(i=1;i<30;i++){
		$("#aufgabenFeld").children().eq(1).remove(); //die kästchen rücken nach vorne
	}


	var div1= "<div class='bruchBox'></div>";
	var div2= "<div class='operatorBox'> <p class='operator'> +</p> </div>";
	var div3= "<div class='bruchBox'></div>";
	var div4= "<div class='gleichBox'><p class='operator'> =</p> </div>";
	var div5= "<div class='bruchBox lösung'></div>";
	var aufgabe = "";


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
				formatändern(1);
				aufgabe = binom(0);
				$(".operatorBox").children().eq(0).html("&#8729");
			//		$("#Aufgabentext").children().eq(1).children().eq(0).html(aufgabe[7]);
			$(".lösung").text(aufgabe[2]);
				break;
			case 1:
				formatändern(1);
				aufgabe = binom(1);
				$(".operatorBox").children().eq(0).html("&#8729");
		//			$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabe[7]);
		$(".lösung").text(aufgabe[2]);
				break;
			case 2:
				formatändern(0);
				aufgabe = binom(1);
				var speicher=[aufgabe[2], aufgabe[1], aufgabe[0]];
				aufgabe=speicher;
				$(".operator").eq(0).html("=");
				$(".operator").eq(1).html("&#8729");
				$(".lösung").text(aufgabe[2]);
				break;
			case 3:
				formatändern(0);
				aufgabe = binom(1);
				var speicher=[aufgabe[2], aufgabe[1], aufgabe[0]];
				aufgabe=speicher;
				$(".operator").eq(0).html("=");
				$(".operator").eq(1).html("&#8729");
				$(".lösung").text(aufgabe[2]);
				break;
			case 4: //Nullstellen
				formatändern(0);
				aufgabe = binom(2);
				var speicher=[aufgabe[2], 0, aufgabe[1],aufgabe[0]];
				aufgabe=speicher;
				$(".operator").eq(0).html("=");
				$(".operator").eq(1).hide();
				$(".bruchBox").eq(2).hide();
				$("#aufgabenFeld").children().eq(0).clone().appendTo($("#aufgabenFeld"));
				$("#aufgabenFeld").children().eq(1).removeAttr("Id");
				$("#aufgabenFeld").children().eq(1).children().eq(0).html(aufgabe[2]+"\\( \\text{ }^2 \\)");
				$("#aufgabenFeld").children().eq(1).children().eq(2).html("0");
				//3.zahl:
				$("#aufgabenFeld").children().eq(0).clone().appendTo($("#aufgabenFeld"));
				$("#aufgabenFeld").children().eq(2).removeAttr("Id");
				var split = aufgabe[2].split(" ");
				var ohneKlammer = split[1] + " " + split[2] + " " + split[3];
				$("#aufgabenFeld").children().eq(2).children().eq(0).html(ohneKlammer);
				$("#aufgabenFeld").children().eq(2).children().eq(2).html("0");
				//4. zeile:
				var vorzeichen = split[2];
				if(vorzeichen=="-"){
					vorzeichen=" ";
				}else if(vorzeichen=="+"){
					vorzeichen="-";
				}
				$("#aufgabenFeld").children().eq(0).clone().appendTo($("#aufgabenFeld"));
				$("#aufgabenFeld").children().eq(3).removeAttr("Id");
				$("#aufgabenFeld").children().eq(3).children().eq(0).html(split[1]);
				$("#aufgabenFeld").children().eq(3).children().eq(2).html(vorzeichen+ " " + split[3]);
				break;
			case 5:
				formatändern(3);//links breit
				aufgabe = binom(2);//nur - oder nur + beide klammern
				var speicher=[aufgabe[2], 0, aufgabe[1],aufgabe[0]];
				aufgabe=speicher;
				var random = rand(1,100);
				$(".operator").eq(0).html("=");
				$(".operator").eq(1).text("");
		//		$(".bruchBox").eq(2).hide();
				$("#aufgabenFeld").children().eq(0).clone().appendTo($("#aufgabenFeld"));
			//	$("#aufgabenFeld").children().eq(1).removeAttr("Id");
				$("#aufgabenFeld").children().eq(1).children().eq(0).html(aufgabe[2]+"\\( \\text{ }^2 \\)");
				$("#aufgabenFeld").children().eq(1).children().eq(2).html("0");
				//3.zahl:
				$("#aufgabenFeld").children().eq(0).clone().appendTo($("#aufgabenFeld"));
//				$("#aufgabenFeld").children().eq(2).removeAttr("Id");
				var split = aufgabe[2].split(" ");
				var ohneKlammer = split[1] + " " + split[2] + " " + split[3];
				$("#aufgabenFeld").children().eq(2).children().eq(0).html(ohneKlammer);
				$("#aufgabenFeld").children().eq(2).children().eq(2).html("0");
				//4. zeile:
				var vorzeichen = split[2];
				if(vorzeichen=="-"){
					vorzeichen=" ";
				}else if(vorzeichen=="+"){
					vorzeichen="-";
				}
				$("#aufgabenFeld").children().eq(0).clone().appendTo($("#aufgabenFeld"));
	//			$("#aufgabenFeld").children().eq(3).removeAttr("Id");
				$("#aufgabenFeld").children().eq(3).children().eq(0).html(split[1]);
				$("#aufgabenFeld").children().eq(3).children().eq(2).html(vorzeichen+ " " + split[3]);

				$("#aufgabenFeld").children().eq(0).clone().appendTo($("#aufgabenFeld"));
			//	$("#aufgabenFeld").children().eq(4).removeAttr("Id");
				$("#aufgabenFeld").children().eq(4).children().eq(0).html(split[1]);
				$("#aufgabenFeld").children().eq(4).children().eq(2).html(vorzeichen+ " " + split[3]);

				$("#aufgabenFeld").children().eq(0).clone().appendTo($("#aufgabenFeld"));
			//	$("#aufgabenFeld").children().eq(5).removeAttr("Id");
				$("#aufgabenFeld").children().eq(5).children().eq(0).html();
				$("#aufgabenFeld").children().eq(5).children().eq(2).html();

				$("#aufgabenFeld").children().eq(0).clone().appendTo($("#aufgabenFeld"));
				$("#aufgabenFeld").children().eq(6).removeAttr("Id");
				$("#aufgabenFeld").children().eq(6).children().eq(0).html();
				$("#aufgabenFeld").children().eq(6).children().eq(2).html();
				break;
		}

		function formatändern(status){
			if(status==0){
				$("#aufgabenFeld").children().first().css("grid-template-columns", "250pt 10pt 150pt 10pt 150pt");

			}else if(status==1){
				$("#aufgabenFeld").children().first().css("grid-template-columns", "150pt 10pt 150pt 10pt 250pt");

			}else if (status==3){
				$("#aufgabenFeld").children().first().css("grid-template-columns", "250pt 10pt 250pt 50pt 350pt");
			}
		}

		//Aufgabe schreiben:
		$(".bruchBox").eq(0).text(aufgabe[0]);
		$(".bruchBox").eq(1).text(aufgabe[1]);



		if(ix==5){
			var split = aufgabe[0].split(" ");
			var vorzeichen = split[8];
			var zahl = split[9];
			var gesamt = vorzeichen + zahl;
			gesamt=parseInt(gesamt);
			var rind = rand(1,2);

			var gesamt1 = gesamt + random;
			var gesamt2 = gesamt - random;
			if(rind==1){
				gesamt=gesamt1;
			}else if (rind==2){
				gesamt  = gesamt2;
			}
				//grafische pausen/Darstellung:
			if(gesamt>0){
				gesamt= " + " + gesamt;
			}else if(gesamt<0){
				gesamt = " " + gesamt;
				var gum = gesamt.split("");
				gesamt = gum[0] + " " + gum[1]+" " + gum[2];
				if( gum[3]!=undefined){
						gesamt = gesamt +gum[3];
				}else if (gum[4]!=undefined){
					gesamt = gesamt + gum[3]+gum[4];
				}
			}else{
				gesamt = "";
			}

			$(".bruchBox").eq(0).text(split[0] + split[1] + split[2]+ " "+split[3]+  split[4]+ " " + split[5]+ " " + split[6] + " "+split[7]		+ gesamt);
		//	MathJax.Hub.Queue(["Typeset",MathJax.Hub,"bruchBox"]);


				$(".operator").eq(1).text( "|");
				$(".bruchBox").eq(2).text("quadratische Ergänzung");

			//	$(".operator").css("background-color","yellow");
			var quadratischeErgänzung = 0;
			if(rind==1){
				gesamt=gesamt1-split[9]; //nur minus, weil die quadrat. erg. immer positiv ist
			}else if(rind==2){
				gesamt=gesamt2-split[9];
			}

			//grafische pausen/Darstellung:
		if(gesamt>0){
			gesamt= " + " + gesamt;
		}else if(gesamt<0){
			gesamt = " " + gesamt ;
			var gum = gesamt.split("");
			gesamt = gum[0] + gum[1]+ " " + gum[2];
			if( gum[3]!=undefined){
					gesamt = gesamt + gum[3];
			}else if (gum[4]!=undefined){
				gesamt = gesamt + gum[3] + gum[4];
			}
		}else{
			gesamt = "";
		}
				//2.Zeile:
				$(".bruchBox").eq(3).text(split[0] + split[1] + split[2]+ " "+split[3]+  split[4]+ " " + split[5]+ " " + split[6] + " "+split[7]	+ " " + split[8] + " " + split[9]	+ " " + gesamt);
				$(".operator").eq(3).text("|");
				$(".bruchBox").eq(5).text(vorzeichenwechsel(gesamt));

				//3.Zeile:
				$(".bruchBox").eq(6).text(aufgabe[2] + " \\( \\text{ }^2  \\)"	);
				$(".operator").eq(5).text("|");

				var inhalt = "\\(	\\sqrt{ \\phantom{xyz}  }\\)";
				$(".bruchBox").eq(8).text(inhalt);


				var array = gesamt.split(" ");
				//	alert(array[1]);
				if(array[1]=="+"){
					gesamt = " - " + array[2];
				}else if(array[1]=="-"){

					gesamt = array[2];
				}
					$(".bruchBox").eq(7).text(gesamt);
					var arrayz = aufgabe[2].split(" ");
					ohneKlammer = arrayz[1]  + " "+ arrayz[2] + " " + arrayz[3];
					//zeile4:
					$(".bruchBox").eq(9).text(ohneKlammer);
					var ergebnis = Math.sqrt(gesamt);
					ergebnis = ergebnis*100;
					ergebnis = Math.round(ergebnis);
					var zahlergebnis = ergebnis/100;
					if (isNaN(ergebnis)){
						ergebnis = " keine Lösung";
					}else{
							ergebnis = " \\( \\pm\\)" +  zahlergebnis;
					}
					$(".bruchBox").eq(10).text(ergebnis);



					if(!isNaN(zahlergebnis)){
						//kommando



						$("#aufgabenFeld").children().eq(4).show();
						$("#aufgabenFeld").children().eq(5).show();
						$("#aufgabenFeld").children().eq(6).show();
							$(".bruchBox").eq(12).text(arrayz[1]);
							var zahlig = arrayz[2] + " " + arrayz[3];
							var zö = vorzeichenwechsel(zahlig,"mit");
							//Kommando:
							$(".operator").eq(7).text("|");
						 	$(".bruchBox").eq(11).text(zö);
							$(".bruchBox").eq(13).text(ergebnis + " " + zö);
							var nosplit = nospace(zö);

							zahlergebnis=parseFloat(zahlergebnis);
							nosplit = parseFloat(nosplit);
							var ergebnis1 = zahlergebnis + nosplit;
							ergebnis1 = ergebnis1*100;
							ergebnis1 = Math.round(ergebnis1);
							ergebnis1 = ergebnis1/100;
							var ergebnis2 = - zahlergebnis + nosplit;
							ergebnis2 = ergebnis2*100;
							ergebnis2 = Math.round(ergebnis2);
							ergebnis2 = ergebnis2/100;
							$(".bruchBox").eq(15).text( "\\(\\text{"+ arrayz[1] + "}_1	\\)");
							$(".bruchBox").eq(16).text(+zahlergebnis + " " + zö + " = " + ergebnis1);

							$(".bruchBox").eq(18).text( "\\(\\text{"+ arrayz[1] + "}_2	\\)");
							$(".bruchBox").eq(19).text(-zahlergebnis + " " + zö + " = " + ergebnis2);
					}else{
							$("#aufgabenFeld").children().eq(4).hide();
							$("#aufgabenFeld").children().eq(5).hide();
							$("#aufgabenFeld").children().eq(6).hide();
					}

		}
		function vorzeichenwechsel(string, mitohne){
			var banana = string.split(" ");
			var vorzeichen = banana[0];
			var zahl = banana[1];
			if(banana[0]==""){
				vorzeichen = banana[1];
				zahl = banana[2];
			}
			var ergebnis= "x";
			if(vorzeichen == "+"){
				ergebnis = " - " + zahl;
			}else if(vorzeichen == "-"){
				ergebnis = " + " + zahl;
				if(mitohne=="ohne"){
					ergebnis=zahl;
				}
			}
			return ergebnis;
		}

		function nospace(string){
			var array= string.split(" ");
			var vorzeichen = array[0];
			var zahl = array[1];
			if(array[0]==""){
				vorzeichen=array[1];
				zahl = array[2];
			}
			var ergebnis = vorzeichen+zahl;
			return ergebnis;
		}

	 //kommandos links ausrichten:
		$(".lösung").css("justify-content","left");

		ergebnischeck(aufgabe);
		//clickfunktion für lösungen

		$(".bruchBox").click(function(){
		inputMachen($(this), aufgabe);
		});
}); //ende click links


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
