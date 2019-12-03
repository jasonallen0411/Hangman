var carsArray = ["focus", "maxima", "mustang", "jaguar"];
var trucksArray = ["silverado", "dakota", "ram", "sierra"];
var SUVsArray = ["explorer", "jeep", "pathfinder", "durango"];
var lButtons = document.getElementById("lButtons");
var lArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var rCarNo = Math.floor(Math.random() * carsArray.length);
var rTruckNo = Math.floor(Math.random() * trucksArray.length);
var rSUVNo = Math.floor(Math.random() * SUVsArray.length);
var cars = document.getElementById("cars");
var trucks = document.getElementById("trucks");
var SUVs = document.getElementById("SUVs");
var word = document.getElementById("word");
var pCategory = document.getElementById("pCategory");
var Refresh = document.getElementById("Refresh");
var winModal = document.getElementById("winModal");
var loseModal = document.getElementById("loseModal");
var wrongCount = 0;
var correctCount = 0;
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var E = document.getElementById("E");
var F = document.getElementById("F");
var G = document.getElementById("G");
var H = document.getElementById("H");
var I = document.getElementById("I");
var J = document.getElementById("J");
var K = document.getElementById("K");
var L = document.getElementById("L");
var M = document.getElementById("M");
var N = document.getElementById("N");
var O = document.getElementById("O");
var P = document.getElementById("P");
var Q = document.getElementById("Q");
var R = document.getElementById("R");
var S = document.getElementById("S");
var T = document.getElementById("T");
var U = document.getElementById("U");
var V = document.getElementById("V");
var W = document.getElementById("W");
var X = document.getElementById("X");
var Y = document.getElementById("Y");
var Z = document.getElementById("Z");
var ClintEastwood = document.getElementById("ClintEastwood");
var Boot1 = document.getElementById("Boot1");
var Boot2 = document.getElementById("Boot2");
var pics = document.getElementById("pics");

Refresh.addEventListener("click", refresh)

function refresh(){
	location.reload();
	window.scrollBy(0, -320);
}


// for(var i = 0; i < lArray.length; i++){
// 		lButtons.innerHTML += '<div class="Letters">' + lArray[i] + '</div>';
// 	}
cars.addEventListener("click", carsHangman)

function carsHangman(){
var Letters = document.getElementsByClassName("Letters");

Refresh.style.display = "block";
window.scrollBy(0, 320);

var timer = document.getElementById("Timer");
var gameTimer = setInterval(time, 1000);
var counter = 60;

function time(){
counter -= 1
timer.innerHTML = "Timer: " + counter;
if (counter < 1) {
	clearInterval(gameTimer)
	cars.removeEventListener("click", carsHangman)
	trucks.removeEventListener("click", trucksHangman)
	SUVs.removeEventListener("click", SUVHangman)
	A.style.display = "none";
	B.style.display = "none";
	C.style.display = "none";
	D.style.display = "none";
	E.style.display = "none";
	F.style.display = "none";
	G.style.display = "none";
	H.style.display = "none";
	I.style.display = "none";
	J.style.display = "none";
	K.style.display = "none";
	L.style.display = "none";
	M.style.display = "none";
	N.style.display = "none";
	O.style.display = "none";
	P.style.display = "none";
	Q.style.display = "none";
	R.style.display = "none";
	S.style.display = "none";
	T.style.display = "none";
	U.style.display = "none";
	V.style.display = "none";
	W.style.display = "none";
	X.style.display = "none";
	Y.style.display = "none";
	Z.style.display = "none";
	pics.style.display = "none";
	} 
 if(counter < 5 ) {
 	timer.innerHTML = "Timer: <span style='color: red;'>" + counter;
 }
}
	pCategory.innerHTML = "Cars";
	A.style.display = "inline";
	B.style.display = "inline";
	C.style.display = "inline";
	D.style.display = "inline";
	E.style.display = "inline";
	F.style.display = "inline";
	G.style.display = "inline";
	H.style.display = "inline";
	I.style.display = "inline";
	J.style.display = "inline";
	K.style.display = "inline";
	L.style.display = "inline";
	M.style.display = "inline";
	N.style.display = "inline";
	O.style.display = "inline";
	P.style.display = "inline";
	Q.style.display = "inline";
	R.style.display = "inline";
	S.style.display = "inline";
	T.style.display = "inline";
	U.style.display = "inline";
	V.style.display = "inline";
	W.style.display = "inline";
	X.style.display = "inline";
	Y.style.display = "inline";
	Z.style.display = "inline";
	timer.style.display = "block";
	pics.style.display = "block";
	pics.style.left = "500";
	pics.style.top = "-250";
	cars.style.display = "none";
	trucks.style.display = "none";
	SUVs.style.display = "none";
	for(var i = 0; i < carsArray[rCarNo].length; i++){
		word.innerHTML += '<div class="letter">' + carsArray[rCarNo].charAt(i) + '</div>';
		cars.removeEventListener("click", carsHangman)
	}


	
// 	for(var i = 0; i < lArray.length; i++){
// 		lButtons.innerHTML += '<div class="Letters" id="letter' + i + '">' + lArray[i] + '</div>';
// 	}

	var letters = document.getElementsByClassName("letter");

// 	for(var i = 0; i < letters.length; i++){
// 		(function(i){
// 			letters[i].addEventListener("click", checkMatch);
// 			function checkMatch(){
// 				var rightCount = 0;
// 				for(var l = 0; l < carsArray[0].length; l++){
// 					console.log(letters[0].innerHTML);
// 					console.log(carsArray[0].charAt(l));
// 					if( letters[0].innerHTML == carsArray[0].charAt(l) ){
// 						alert("correct!")
// 						rightCount++;
// 					}
// 				}
// 				if(rightCount == 0){
// 					alert("incorrect!")
// 				}
				


			
// 		}
// 	})(i);
	
// }
// }	



	
	A.addEventListener("click", checkMatchA);

	function checkMatchA(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "a"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++; 
				A.style.backgroundColor = "green";
				A.removeEventListener("click", checkMatchA);
				
				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}

		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			// A.style.backgroundColor = "red";
			A.style.opacity = "0";
			A.removeEventListener("click", checkMatchA);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}

	}

	B.addEventListener("click", checkMatchB);

	function checkMatchB(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "b"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				B.style.backgroundColor = "green";
				B.removeEventListener("click", checkMatchB);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//B.style.backgroundColor = "red";
			B.style.opacity = "0";
			B.removeEventListener("click", checkMatchB);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);


			}
		}
	}
	
	C.addEventListener("click", checkMatchC);

	function checkMatchC(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "c"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				C.style.backgroundColor = "green";
				C.removeEventListener("click", checkMatchC);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//C.style.backgroundColor = "red";
			C.style.opacity = "0";
			C.removeEventListener("click", checkMatchC);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);


			}
		}
	}
	
	D.addEventListener("click", checkMatchD);

	function checkMatchD(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "d"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				D.style.backgroundColor = "green";
				D.removeEventListener("click", checkMatchD);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//D.style.backgroundColor = "red";
			D.style.opacity = "0";
			D.removeEventListener("click", checkMatchD);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	E.addEventListener("click", checkMatchE);

	function checkMatchE(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "e"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				E.style.backgroundColor = "green";
				E.removeEventListener("click", checkMatchE);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//E.style.backgroundColor = "red";
			E.style.opacity = "0";
			E.removeEventListener("click", checkMatchE);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	F.addEventListener("click", checkMatchF);

	function checkMatchF(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "f"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				F.style.backgroundColor = "green";
				F.removeEventListener("click", checkMatchF);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//F.style.backgroundColor = "red";
			F.style.opacity = "0";
			F.removeEventListener("click", checkMatchF);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	G.addEventListener("click", checkMatchG);

	function checkMatchG(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "g"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				G.style.backgroundColor = "green";
				G.removeEventListener("click", checkMatchG);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//G.style.backgroundColor = "red";
			G.style.opacity = "0";
			G.removeEventListener("click", checkMatchG);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	H.addEventListener("click", checkMatchH);

	function checkMatchH(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "h"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				H.style.backgroundColor = "green";
				H.removeEventListener("click", checkMatchH);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//H.style.backgroundColor = "red";
			H.style.opacity = "0";
			H.removeEventListener("click", checkMatchH);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	I.addEventListener("click", checkMatchI);

	function checkMatchI(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "i"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				I.style.backgroundColor = "green";
				I.removeEventListener("click", checkMatchI);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//I.style.backgroundColor = "red";
			I.style.opacity = "0";
			I.removeEventListener("click", checkMatchI);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	J.addEventListener("click", checkMatchJ);

	function checkMatchJ(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "j"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				J.style.backgroundColor = "green";
				J.removeEventListener("click", checkMatchJ);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//J.style.backgroundColor = "red";
			J.style.opacity = "0";
			J.removeEventListener("click", checkMatchJ);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	K.addEventListener("click", checkMatchK);

	function checkMatchK(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "k"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				K.style.backgroundColor = "green";
				K.removeEventListener("click", checkMatchK);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//K.style.backgroundColor = "red";
			K.style.opacity = "0";
			K.removeEventListener("click", checkMatchK);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	L.addEventListener("click", checkMatchL);

	function checkMatchL(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "l"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				L.style.backgroundColor = "green";
				L.removeEventListener("click", checkMatchL);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//L.style.backgroundColor = "red";
			L.style.opacity = "0";
			L.removeEventListener("click", checkMatchL);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	M.addEventListener("click", checkMatchM);

	function checkMatchM(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "m"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				M.style.backgroundColor = "green";
				M.removeEventListener("click", checkMatchM);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//M.style.backgroundColor = "red";
			M.style.opacity = "0";
			M.removeEventListener("click", checkMatchM);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	N.addEventListener("click", checkMatchN);

	function checkMatchN(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "n"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				N.style.backgroundColor = "green";
				N.removeEventListener("click", checkMatchN);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//N.style.backgroundColor = "red";
			N.style.opacity = "0";
			N.removeEventListener("click", checkMatchN);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	O.addEventListener("click", checkMatchO);

	function checkMatchO(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "o"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				O.style.backgroundColor = "green";
				O.removeEventListener("click", checkMatchO);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//O.style.backgroundColor = "red";
			O.style.opacity = "0";
			O.removeEventListener("click", checkMatchO);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	P.addEventListener("click", checkMatchP);

	function checkMatchP(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "p"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				P.style.backgroundColor = "green";
				P.removeEventListener("click", checkMatchP);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//P.style.backgroundColor = "red";
			P.style.opacity = "0";
			P.removeEventListener("click", checkMatchP);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	Q.addEventListener("click", checkMatchQ);

	function checkMatchQ(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "q"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				Q.style.backgroundColor = "green";
				Q.removeEventListener("click", checkMatchQ);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//Q.style.backgroundColor = "red";
			Q.style.opacity = "0";
			Q.removeEventListener("click", checkMatchQ);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	R.addEventListener("click", checkMatchR);

	function checkMatchR(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "r"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				R.style.backgroundColor = "green";
				R.removeEventListener("click", checkMatchR);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//R.style.backgroundColor = "red";
			R.style.opacity = "0";
			R.removeEventListener("click", checkMatchR);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	S.addEventListener("click", checkMatchS);

	function checkMatchS(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "s"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				S.style.backgroundColor = "green";
				S.removeEventListener("click", checkMatchS);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//S.style.backgroundColor = "red";
			S.style.opacity = "0";
			S.removeEventListener("click", checkMatchS);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	T.addEventListener("click", checkMatchT);

	function checkMatchT(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "t"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				T.style.backgroundColor = "green";
				T.removeEventListener("click", checkMatchT);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//T.style.backgroundColor = "red";
			T.style.opacity = "0";
			T.removeEventListener("click", checkMatchT);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	U.addEventListener("click", checkMatchU);

	function checkMatchU(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "u"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				U.style.backgroundColor = "green";
				U.removeEventListener("click", checkMatchU);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//U.style.backgroundColor = "red";
			U.style.opacity = "0";
			U.removeEventListener("click", checkMatchU);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	V.addEventListener("click", checkMatchV);

	function checkMatchV(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "v"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				V.style.backgroundColor = "green";
				V.removeEventListener("click", checkMatchV);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//V.style.backgroundColor = "red";
			V.style.opacity = "0";
			V.removeEventListener("click", checkMatchV);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	W.addEventListener("click", checkMatchW);

	function checkMatchW(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "w"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				W.style.backgroundColor = "green";
				W.removeEventListener("click", checkMatchW);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//W.style.backgroundColor = "red";
			W.style.opacity = "0";
			W.removeEventListener("click", checkMatchW);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	X.addEventListener("click", checkMatchX);

	function checkMatchX(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "x"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				X.style.backgroundColor = "green";
				X.removeEventListener("click", checkMatchX);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//X.style.backgroundColor = "red";
			X.style.opacity = "0";
			X.removeEventListener("click", checkMatchX);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	Y.addEventListener("click", checkMatchY);

	function checkMatchY(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "y"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				Y.style.backgroundColor = "green";
				Y.removeEventListener("click", checkMatchY);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//Y.style.backgroundColor = "red";
			Y.style.opacity = "0";
			Y.removeEventListener("click", checkMatchY);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	Z.addEventListener("click", checkMatchZ);

	function checkMatchZ(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "z"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				Z.style.backgroundColor = "green";
				Z.removeEventListener("click", checkMatchZ);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//Z.style.backgroundColor = "red";
			Z.style.opacity = "0";
			Z.removeEventListener("click", checkMatchZ);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}

	}

		
}

trucks.addEventListener("click", trucksHangman)

function trucksHangman(){

Refresh.style.display = "block";
window.scrollBy(0, 320);

var timer = document.getElementById("Timer");
var gameTimer = setInterval(time, 1000);
var counter = 60;

function time(){
counter -= 1
timer.innerHTML = "Timer: " + counter;
if (counter < 1) {
	clearInterval(gameTimer)
	cars.removeEventListener("click", carsHangman)
	trucks.removeEventListener("click", trucksHangman)
	SUVs.removeEventListener("click", SUVHangman)
	A.style.display = "none";
	B.style.display = "none";
	C.style.display = "none";
	D.style.display = "none";
	E.style.display = "none";
	F.style.display = "none";
	G.style.display = "none";
	H.style.display = "none";
	I.style.display = "none";
	J.style.display = "none";
	K.style.display = "none";
	L.style.display = "none";
	M.style.display = "none";
	N.style.display = "none";
	O.style.display = "none";
	P.style.display = "none";
	Q.style.display = "none";
	R.style.display = "none";
	S.style.display = "none";
	T.style.display = "none";
	U.style.display = "none";
	V.style.display = "none";
	W.style.display = "none";
	X.style.display = "none";
	Y.style.display = "none";
	Z.style.display = "none";
	pics.style.display = "none";
	} 
 if(counter < 5 ) {
 	timer.innerHTML = "Timer: <span style='color: red;'>" + counter;
 }
}
	pCategory.innerHTML = "Trucks";
	A.style.display = "inline";
	B.style.display = "inline";
	C.style.display = "inline";
	D.style.display = "inline";
	E.style.display = "inline";
	F.style.display = "inline";
	G.style.display = "inline";
	H.style.display = "inline";
	I.style.display = "inline";
	J.style.display = "inline";
	K.style.display = "inline";
	L.style.display = "inline";
	M.style.display = "inline";
	N.style.display = "inline";
	O.style.display = "inline";
	P.style.display = "inline";
	Q.style.display = "inline";
	R.style.display = "inline";
	S.style.display = "inline";
	T.style.display = "inline";
	U.style.display = "inline";
	V.style.display = "inline";
	W.style.display = "inline";
	X.style.display = "inline";
	Y.style.display = "inline";
	Z.style.display = "inline";
	timer.style.display = "block";
	pics.style.display = "block";
	pics.style.left = "500";
	pics.style.top = "-250";
	cars.style.display = "none";
	trucks.style.display = "none";
	SUVs.style.display = "none";
	for(var i = 0; i < trucksArray[rTruckNo].length; i++){
		word.innerHTML += '<div class="letter">' + trucksArray[rTruckNo].charAt(i) + '</div>';
		trucks.removeEventListener("click", trucksHangman)
}

var letters = document.getElementsByClassName("letter");
	
	A.addEventListener("click", checkMatchA);

	function checkMatchA(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "a"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++; 
				A.style.backgroundColor = "green";
				A.removeEventListener("click", checkMatchA);
				
				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}

		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//A.style.backgroundColor = "red";
			A.style.opacity = "0";
			A.removeEventListener("click", checkMatchA);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}

	}

	B.addEventListener("click", checkMatchB);

	function checkMatchB(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "b"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				B.style.backgroundColor = "green";
				B.removeEventListener("click", checkMatchB);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//B.style.backgroundColor = "red";
			B.style.opacity = "0";
			B.removeEventListener("click", checkMatchB);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);


			}
		}
	}
	
	C.addEventListener("click", checkMatchC);

	function checkMatchC(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "c"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				C.style.backgroundColor = "green";
				C.removeEventListener("click", checkMatchC);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//C.style.backgroundColor = "red";
			C.style.opacity = "0";
			C.removeEventListener("click", checkMatchC);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);


			}
		}
	}
	
	D.addEventListener("click", checkMatchD);

	function checkMatchD(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "d"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				D.style.backgroundColor = "green";
				D.removeEventListener("click", checkMatchD);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//D.style.backgroundColor = "red";
			D.style.opacity = "0";
			D.removeEventListener("click", checkMatchD);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	E.addEventListener("click", checkMatchE);

	function checkMatchE(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "e"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				E.style.backgroundColor = "green";
				E.removeEventListener("click", checkMatchE);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//E.style.backgroundColor = "red";
			E.style.opacity = "0";
			E.removeEventListener("click", checkMatchE);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	F.addEventListener("click", checkMatchF);

	function checkMatchF(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "f"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				F.style.backgroundColor = "green";
				F.removeEventListener("click", checkMatchF);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//F.style.backgroundColor = "red";
			F.style.opacity = "0";
			F.removeEventListener("click", checkMatchF);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	G.addEventListener("click", checkMatchG);

	function checkMatchG(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "g"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				G.style.backgroundColor = "green";
				G.removeEventListener("click", checkMatchG);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//G.style.backgroundColor = "red";
			G.style.opacity = "0";
			G.removeEventListener("click", checkMatchG);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	H.addEventListener("click", checkMatchH);

	function checkMatchH(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "h"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				H.style.backgroundColor = "green";
				H.removeEventListener("click", checkMatchH);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//H.style.backgroundColor = "red";
			H.style.opacity = "0";
			H.removeEventListener("click", checkMatchH);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	I.addEventListener("click", checkMatchI);

	function checkMatchI(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "i"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				I.style.backgroundColor = "green";
				I.removeEventListener("click", checkMatchI);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//I.style.backgroundColor = "red";
			I.style.opacity = "0";
			I.removeEventListener("click", checkMatchI);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	J.addEventListener("click", checkMatchJ);

	function checkMatchJ(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "j"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				J.style.backgroundColor = "green";
				J.removeEventListener("click", checkMatchJ);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//J.style.backgroundColor = "red";
			J.style.opacity = "0";
			J.removeEventListener("click", checkMatchJ);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	K.addEventListener("click", checkMatchK);

	function checkMatchK(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "k"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				K.style.backgroundColor = "green";
				K.removeEventListener("click", checkMatchK);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//K.style.backgroundColor = "red";
			K.style.opacity = "0";
			K.removeEventListener("click", checkMatchK);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	L.addEventListener("click", checkMatchL);

	function checkMatchL(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "l"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				L.style.backgroundColor = "green";
				L.removeEventListener("click", checkMatchL);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//L.style.backgroundColor = "red";
			L.style.opacity = "0";
			L.removeEventListener("click", checkMatchL);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	M.addEventListener("click", checkMatchM);

	function checkMatchM(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "m"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				M.style.backgroundColor = "green";
				M.removeEventListener("click", checkMatchM);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//M.style.backgroundColor = "red";
			M.style.opacity = "0";
			M.removeEventListener("click", checkMatchM);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	N.addEventListener("click", checkMatchN);

	function checkMatchN(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "n"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				N.style.backgroundColor = "green";
				N.removeEventListener("click", checkMatchN);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//N.style.backgroundColor = "red";
			N.style.opacity = "0";
			N.removeEventListener("click", checkMatchN);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	O.addEventListener("click", checkMatchO);

	function checkMatchO(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "o"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				O.style.backgroundColor = "green";
				O.removeEventListener("click", checkMatchO);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//O.style.backgroundColor = "red";
			O.style.opacity = "0";
			O.removeEventListener("click", checkMatchO);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	P.addEventListener("click", checkMatchP);

	function checkMatchP(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "p"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				P.style.backgroundColor = "green";
				P.removeEventListener("click", checkMatchP);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//P.style.backgroundColor = "red";
			P.style.opacity = "0";
			P.removeEventListener("click", checkMatchP);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	Q.addEventListener("click", checkMatchQ);

	function checkMatchQ(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "q"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				Q.style.backgroundColor = "green";
				Q.removeEventListener("click", checkMatchQ);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//Q.style.backgroundColor = "red";
			Q.style.opacity = "0";
			Q.removeEventListener("click", checkMatchQ);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	R.addEventListener("click", checkMatchR);

	function checkMatchR(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "r"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				R.style.backgroundColor = "green";
				R.removeEventListener("click", checkMatchR);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//R.style.backgroundColor = "red";
			R.style.opacity = "0";
			R.removeEventListener("click", checkMatchR);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	S.addEventListener("click", checkMatchS);

	function checkMatchS(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "s"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				S.style.backgroundColor = "green";
				S.removeEventListener("click", checkMatchS);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//S.style.backgroundColor = "red";
			S.style.opacity = "0";
			S.removeEventListener("click", checkMatchS);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	T.addEventListener("click", checkMatchT);

	function checkMatchT(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "t"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				T.style.backgroundColor = "green";
				T.removeEventListener("click", checkMatchT);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//T.style.backgroundColor = "red";
			T.style.opacity = "0";
			T.removeEventListener("click", checkMatchT);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	U.addEventListener("click", checkMatchU);

	function checkMatchU(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "u"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				U.style.backgroundColor = "green";
				U.removeEventListener("click", checkMatchU);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//U.style.backgroundColor = "red";
			U.style.opacity = "0";
			U.removeEventListener("click", checkMatchU);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	V.addEventListener("click", checkMatchV);

	function checkMatchV(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "v"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				V.style.backgroundColor = "green";
				V.removeEventListener("click", checkMatchV);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//V.style.backgroundColor = "red";
			V.style.opacity = "0";
			V.removeEventListener("click", checkMatchV);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	W.addEventListener("click", checkMatchW);

	function checkMatchW(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "w"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				W.style.backgroundColor = "green";
				W.removeEventListener("click", checkMatchW);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//W.style.backgroundColor = "red";
			W.style.opacity = "0";
			W.removeEventListener("click", checkMatchW);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	X.addEventListener("click", checkMatchX);

	function checkMatchX(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "x"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				X.style.backgroundColor = "green";
				X.removeEventListener("click", checkMatchX);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//X.style.backgroundColor = "red";
			X.style.opacity = "0";
			X.removeEventListener("click", checkMatchX);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	Y.addEventListener("click", checkMatchY);

	function checkMatchY(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "y"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				Y.style.backgroundColor = "green";
				Y.removeEventListener("click", checkMatchY);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//Y.style.backgroundColor = "red";
			Y.style.opacity = "0";
			Y.removeEventListener("click", checkMatchY);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	Z.addEventListener("click", checkMatchZ);

	function checkMatchZ(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "z"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				Z.style.backgroundColor = "green";
				Z.removeEventListener("click", checkMatchZ);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//Z.style.backgroundColor = "red";
			Z.style.opacity = "0";
			Z.removeEventListener("click", checkMatchZ);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}

	}

		
}


SUVs.addEventListener("click", SUVHangman)

function SUVHangman(){
	
Refresh.style.display = "block";
window.scrollBy(0, 320);

var timer = document.getElementById("Timer");
var gameTimer = setInterval(time, 1000);
var counter = 60;

function time(){
counter -= 1
timer.innerHTML = "Timer: " + counter;
if (counter < 1) {
	clearInterval(gameTimer)
	cars.removeEventListener("click", carsHangman)
	trucks.removeEventListener("click", trucksHangman)
	SUVs.removeEventListener("click", SUVHangman)
	A.style.display = "none";
	B.style.display = "none";
	C.style.display = "none";
	D.style.display = "none";
	E.style.display = "none";
	F.style.display = "none";
	G.style.display = "none";
	H.style.display = "none";
	I.style.display = "none";
	J.style.display = "none";
	K.style.display = "none";
	L.style.display = "none";
	M.style.display = "none";
	N.style.display = "none";
	O.style.display = "none";
	P.style.display = "none";
	Q.style.display = "none";
	R.style.display = "none";
	S.style.display = "none";
	T.style.display = "none";
	U.style.display = "none";
	V.style.display = "none";
	W.style.display = "none";
	X.style.display = "none";
	Y.style.display = "none";
	Z.style.display = "none";
	pics.style.display = "none";
	} 
 if(counter < 5 ) {
 	timer.innerHTML = "Timer: <span style='color: red;'>" + counter;
 }
}
	pCategory.innerHTML = "SUVs";
	A.style.display = "inline";
	B.style.display = "inline";
	C.style.display = "inline";
	D.style.display = "inline";
	E.style.display = "inline";
	F.style.display = "inline";
	G.style.display = "inline";
	H.style.display = "inline";
	I.style.display = "inline";
	J.style.display = "inline";
	K.style.display = "inline";
	L.style.display = "inline";
	M.style.display = "inline";
	N.style.display = "inline";
	O.style.display = "inline";
	P.style.display = "inline";
	Q.style.display = "inline";
	R.style.display = "inline";
	S.style.display = "inline";
	T.style.display = "inline";
	U.style.display = "inline";
	V.style.display = "inline";
	W.style.display = "inline";
	X.style.display = "inline";
	Y.style.display = "inline";
	Z.style.display = "inline";
	timer.style.display = "block";
	pics.style.display = "block";
	pics.style.left = "500";
	pics.style.top = "-250";
	cars.style.display = "none";
	trucks.style.display = "none";
	SUVs.style.display = "none";
	for(var i = 0; i < SUVsArray[rSUVNo].length; i++){
		word.innerHTML += '<div class="letter">' + SUVsArray[rSUVNo].charAt(i) + '</div>';
		SUVs.removeEventListener("click", SUVHangman)
}

var letters = document.getElementsByClassName("letter");
	
	A.addEventListener("click", checkMatchA);

	function checkMatchA(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "a"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++; 
				A.style.backgroundColor = "green";
				A.removeEventListener("click", checkMatchA);
				
				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}

		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//A.style.backgroundColor = "red";
			A.style.opacity = "0";
			A.removeEventListener("click", checkMatchA);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}

	}

	B.addEventListener("click", checkMatchB);

	function checkMatchB(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "b"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				B.style.backgroundColor = "green";
				B.removeEventListener("click", checkMatchB);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//B.style.backgroundColor = "red";
			B.style.opacity = "0";
			B.removeEventListener("click", checkMatchB);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);


			}
		}
	}
	
	C.addEventListener("click", checkMatchC);

	function checkMatchC(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "c"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				C.style.backgroundColor = "green";
				C.removeEventListener("click", checkMatchC);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//C.style.backgroundColor = "red";
			C.style.opacity = "0";
			C.removeEventListener("click", checkMatchC);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);


			}
		}
	}
	
	D.addEventListener("click", checkMatchD);

	function checkMatchD(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "d"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				D.style.backgroundColor = "green";
				D.removeEventListener("click", checkMatchD);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//D.style.backgroundColor = "red";
			D.style.opacity = "0";
			D.removeEventListener("click", checkMatchD);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	E.addEventListener("click", checkMatchE);

	function checkMatchE(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "e"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				E.style.backgroundColor = "green";
				E.removeEventListener("click", checkMatchE);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//E.style.backgroundColor = "red";
			E.style.opacity = "0";
			E.removeEventListener("click", checkMatchE);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	F.addEventListener("click", checkMatchF);

	function checkMatchF(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "f"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				F.style.backgroundColor = "green";
				F.removeEventListener("click", checkMatchF);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//F.style.backgroundColor = "red";
			F.style.opacity = "0";
			F.removeEventListener("click", checkMatchF);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	G.addEventListener("click", checkMatchG);

	function checkMatchG(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "g"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				G.style.backgroundColor = "green";
				G.removeEventListener("click", checkMatchG);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//G.style.backgroundColor = "red";
			G.style.opacity = "0";
			G.removeEventListener("click", checkMatchG);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	H.addEventListener("click", checkMatchH);

	function checkMatchH(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "h"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				H.style.backgroundColor = "green";
				H.removeEventListener("click", checkMatchH);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//H.style.backgroundColor = "red";
			H.style.opacity = "0";
			H.removeEventListener("click", checkMatchH);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	I.addEventListener("click", checkMatchI);

	function checkMatchI(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "i"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				I.style.backgroundColor = "green";
				I.removeEventListener("click", checkMatchI);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//I.style.backgroundColor = "red";
			I.style.opacity = "0";
			I.removeEventListener("click", checkMatchI);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	J.addEventListener("click", checkMatchJ);

	function checkMatchJ(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "j"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				J.style.backgroundColor = "green";
				J.removeEventListener("click", checkMatchJ);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//J.style.backgroundColor = "red";
			J.style.opacity = "0";
			J.removeEventListener("click", checkMatchJ);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	K.addEventListener("click", checkMatchK);

	function checkMatchK(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "k"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				K.style.backgroundColor = "green";
				K.removeEventListener("click", checkMatchK);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//K.style.backgroundColor = "red";
			K.style.opacity = "0";
			K.removeEventListener("click", checkMatchK);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	L.addEventListener("click", checkMatchL);

	function checkMatchL(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "l"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				L.style.backgroundColor = "green";
				L.removeEventListener("click", checkMatchL);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//L.style.backgroundColor = "red";
			L.style.opacity = "0";
			L.removeEventListener("click", checkMatchL);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	M.addEventListener("click", checkMatchM);

	function checkMatchM(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "m"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				M.style.backgroundColor = "green";
				M.removeEventListener("click", checkMatchM);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//M.style.backgroundColor = "red";
			M.style.opacity = "0";
			M.removeEventListener("click", checkMatchM);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	N.addEventListener("click", checkMatchN);

	function checkMatchN(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "n"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				N.style.backgroundColor = "green";
				N.removeEventListener("click", checkMatchN);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//N.style.backgroundColor = "red";
			N.style.opacity = "0";
			N.removeEventListener("click", checkMatchN);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	O.addEventListener("click", checkMatchO);

	function checkMatchO(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "o"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				O.style.backgroundColor = "green";
				O.removeEventListener("click", checkMatchO);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//O.style.backgroundColor = "red";
			O.style.opacity = "0";
			O.removeEventListener("click", checkMatchO);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	P.addEventListener("click", checkMatchP);

	function checkMatchP(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "p"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				P.style.backgroundColor = "green";
				P.removeEventListener("click", checkMatchP);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//P.style.backgroundColor = "red";
			P.style.opacity = "0";
			P.removeEventListener("click", checkMatchP);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	Q.addEventListener("click", checkMatchQ);

	function checkMatchQ(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "q"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				Q.style.backgroundColor = "green";
				Q.removeEventListener("click", checkMatchQ);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//Q.style.backgroundColor = "red";
			Q.style.opacity = "0";
			Q.removeEventListener("click", checkMatchQ);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	R.addEventListener("click", checkMatchR);

	function checkMatchR(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "r"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				R.style.backgroundColor = "green";
				R.removeEventListener("click", checkMatchR);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//R.style.backgroundColor = "red";
			R.style.opacity = "0";
			R.removeEventListener("click", checkMatchR);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	S.addEventListener("click", checkMatchS);

	function checkMatchS(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "s"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				S.style.backgroundColor = "green";
				S.removeEventListener("click", checkMatchS);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//S.style.backgroundColor = "red";
			S.style.opacity = "0";
			S.removeEventListener("click", checkMatchS);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	T.addEventListener("click", checkMatchT);

	function checkMatchT(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "t"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				T.style.backgroundColor = "green";
				T.removeEventListener("click", checkMatchT);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//T.style.backgroundColor = "red";
			T.style.opacity = "0";
			T.removeEventListener("click", checkMatchT);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	U.addEventListener("click", checkMatchU);

	function checkMatchU(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "u"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				U.style.backgroundColor = "green";
				U.removeEventListener("click", checkMatchU);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//U.style.backgroundColor = "red";
			U.style.opacity = "0";
			U.removeEventListener("click", checkMatchU);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	V.addEventListener("click", checkMatchV);

	function checkMatchV(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "v"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				V.style.backgroundColor = "green";
				V.removeEventListener("click", checkMatchV);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//V.style.backgroundColor = "red";
			V.style.opacity = "0";
			V.removeEventListener("click", checkMatchV);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	W.addEventListener("click", checkMatchW);

	function checkMatchW(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "w"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				W.style.backgroundColor = "green";
				W.removeEventListener("click", checkMatchW);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//W.style.backgroundColor = "red";
			W.style.opacity = "0";
			W.removeEventListener("click", checkMatchW);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	X.addEventListener("click", checkMatchX);

	function checkMatchX(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "x"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				X.style.backgroundColor = "green";
				X.removeEventListener("click", checkMatchX);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//X.style.backgroundColor = "red";
			X.style.opacity = "0";
			X.removeEventListener("click", checkMatchX);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	Y.addEventListener("click", checkMatchY);

	function checkMatchY(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "y"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				Y.style.backgroundColor = "green";
				Y.removeEventListener("click", checkMatchY);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//Y.style.backgroundColor = "red";
			Y.style.opacity = "0";
			Y.removeEventListener("click", checkMatchY);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}
	}

	Z.addEventListener("click", checkMatchZ);

	function checkMatchZ(){
		var rightCount = 0;
		for(var i = 0; i < letters.length; i++){
			if(letters[i].innerHTML == "z"){
				correctCount++;
				letters[i].style.color = "white";
				rightCount++;
				Z.style.backgroundColor = "green";
				Z.removeEventListener("click", checkMatchZ);

				if(correctCount == letters.length){
					ClintEastwood.style.animation = "lightSpeedOut .5s";
					ClintEastwood.style.opacity = "0";
					Boot1.style.animation = "lightSpeedOut .5s";
					Boot1.style.opacity = "0";
					Boot2.style.animation = "lightSpeedOut .5s";
					Boot2.style.opacity = "0";
					// alert("You escaped from Clint Eastwood! You Win!");
					//winModal.style.display = "block";
					$('#winModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);
				}
			}
		}
		if(rightCount == 0){
			wrongCount++;
			ClintEastwood.style.opacity = "1";
			Boot1.style.opacity = "1";
			Boot2.style.opacity = "1";
			//Z.style.backgroundColor = "red";
			Z.style.opacity = "0";
			Z.removeEventListener("click", checkMatchZ);

			if(wrongCount == 1){
				document.getElementById("Hhead").style.opacity = "1";
				document.getElementById("Hhead").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 2){
				document.getElementById("Hbody").style.opacity = "1";
				document.getElementById("Hbody").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 3){
				document.getElementById("Hleftarm").style.opacity = "1";
				document.getElementById("Hleftarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 4){
				document.getElementById("Hrightarm").style.opacity = "1";
				document.getElementById("Hrightarm").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 5){
				document.getElementById("Hleftleg").style.opacity = "1";
				document.getElementById("Hleftleg").style.animation = "bounceInDown 1s";

			}

			if(wrongCount == 6){
				document.getElementById("Hrightleg").style.opacity = "1";
				document.getElementById("Hrightleg").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 7){
				document.getElementById("Hbottombase").style.opacity = "1";
				document.getElementById("Hbottombase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 8){
				document.getElementById("Hrightbase").style.opacity = "1";
				document.getElementById("Hrightbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 9){
				document.getElementById("Htopbase").style.opacity = "1";
				document.getElementById("Htopbase").style.animation = "bounceInDown 1s";
			}

			if(wrongCount == 10){
				document.getElementById("Hrope").style.opacity = "1";
				document.getElementById("Hrope").style.animation = "bounceInDown 1s";
				//alert("You've been hanged by Clint Eastwood! Game Over!");
				$('#loseModal').modal('show');
				A.removeEventListener("click", checkMatchA);
				B.removeEventListener("click", checkMatchB);
				C.removeEventListener("click", checkMatchC);
				D.removeEventListener("click", checkMatchD);
				E.removeEventListener("click", checkMatchE);
				F.removeEventListener("click", checkMatchF);
				G.removeEventListener("click", checkMatchG);
				H.removeEventListener("click", checkMatchH);
				I.removeEventListener("click", checkMatchI);
				J.removeEventListener("click", checkMatchJ);
				K.removeEventListener("click", checkMatchK);
				L.removeEventListener("click", checkMatchL);
				M.removeEventListener("click", checkMatchM);
				N.removeEventListener("click", checkMatchN);
				O.removeEventListener("click", checkMatchO);
				P.removeEventListener("click", checkMatchP);
				Q.removeEventListener("click", checkMatchQ);
				R.removeEventListener("click", checkMatchR);
				S.removeEventListener("click", checkMatchS);
				T.removeEventListener("click", checkMatchT);
				U.removeEventListener("click", checkMatchU);
				V.removeEventListener("click", checkMatchV);
				W.removeEventListener("click", checkMatchW);
				X.removeEventListener("click", checkMatchX);
				Y.removeEventListener("click", checkMatchY);
				Z.removeEventListener("click", checkMatchZ);

			}
		}

	}

		
}

