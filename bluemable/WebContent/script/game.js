let face1=new Image()
	face1.src="http://www.blueb.co.kr/SRC/javascript/image1/d1.gif"
	
let face2=new Image()
	face2.src="http://www.blueb.co.kr/SRC/javascript/image1/d2.gif"
	
let face3=new Image()
	face3.src="http://www.blueb.co.kr/SRC/javascript/image1/d3.gif"
	
let face4=new Image()
	face4.src="http://www.blueb.co.kr/SRC/javascript/image1/d4.gif"
	
let face5=new Image()
	face5.src="http://www.blueb.co.kr/SRC/javascript/image1/d5.gif"
	
let face6=new Image()
	face6.src="http://www.blueb.co.kr/SRC/javascript/image1/d6.gif"
		
//------------------------------(위)주사위 이미지 --------------
// 플레이어별 말 목록
let player=["<b class='horses' id='1p'>🏇</b>",
			"<b class='horses' id='2p'>🚣</b><br>",
			"<b class='horses' id='3p'>🏊</b>",
			"<b class='horses' id='4p'>🚴</b>" ];		


//---------------- 변수 초기화 ---------------------------	
//말이 원래 있었던 장소의 번호 배열 초기화 최대 4개 까지 
let beforePoint = [1, 1, 1, 1];
// 말이 움직일 장소의 번호 배열 초기화 최대 4개까지 
let afterPoint = [1, 1, 1, 1];
//턴 수
let turn = 0;
// 다음턴이 오기까지 
let maxState = 0;
let state = 0;
//무인도에 있을 때 셀 턴수 무인도 도착시 0으로 초기화 
let turnCount = 0;
//1p~4p 각각의 턴 회수
let turn1p =0;
let turn2p =0;
let turn3p =0;
let turn4p =0;

$(document).ready(function() {
	
	$("#play").hide();
	
	// 준비 완료 
		console.log("ready");

		/*if (confirm("게임이 시작됩니다. 준비가 되면 확인, 취소 클릭시 창꺼짐! ") == true) { // 확인
		} else { // 취소
			window.close();
			self.close();
		}*/
		
		//------------------플레이어 선택 --------------------
		
		// 2인 플레이 
		$("#2people").click( function() {		
			let player = maxState = 2;
			console.log("2인 스타트!");
			alert("2인 스타트!");
			gameStart(player);
		});
		
		// 3인 플레이
		$("#3people").click( function() {
			let player = maxState = 3;
			console.log("3인 스타트!");
			alert("3인 스타트!");
			gameStart(player);
		});
		
		// 4인 플레이
		$("#4people").click( function() {
			let player = maxState = 4;
			console.log("4인 스타트!");
			alert("4인 스타트!");
			gameStart(player);
		});
	
		//------------------게임 시작 후------------------------
		// 플레이 버튼 클릭 
		$("#play").click(function() {		
			
			//게임이 시작되면 p1에 위치한 모든 말을 지움.
			$("#p1").empty();
			
			//랜덤으로 수를 뽑아  ran에 저장.
			let ran1=Math.floor((Math.random()*6)+1);// 1~6
			let ran2=Math.floor((Math.random()*6)+1)
			
			//주사위 이미지  출력.
			document.images["mydice1"].src=eval("face"+ran1+".src")
			document.images["mydice2"].src=eval("face"+ran2+".src")
			
			//Sran : 주사위 수 총합.
			let Sran = ran1 + ran2
			
			//#dice <-html 출력화면에 주사위 수를 나타냄.
			$("#dice1").val(ran1);
			$("#dice2").val(ran2);
			console.log("1, 2번 주사위 ::"+Sran)
			
			//위치 배열에 위치 지정.
			if (beforePoint[state] + Sran < 41) {
				afterPoint[state] = beforePoint[state] + Sran;
				console.log("afterPoint[state]"+afterPoint[state]);
			} else {
				afterPoint[state] = beforePoint[state] + Sran - 40;
				console.log("afterPoint[state]"+afterPoint[state]);
				
				//각 말들의 턴 회수를 구함.
				if(afterPoint[state] == afterPoint[0]){
					turn1p+=1;
					console.log("turn1p ::::::::::"+turn1p);
				//1p
				}else if(afterPoint[state] == afterPoint[1]){
					turn2p+=1;
						console.log("turn2p ::::::::::"+turn2p);
				//2p
				}else if(afterPoint[state] == afterPoint[2]){
					turn3p+=1;
					console.log("turn3p ::::::::::"+turn3p);
				//3p
				}else if(afterPoint[state] == afterPoint[3]){
					turn4p+=1;
					console.log("turn4p ::::::::::"+turn4p);
				//4p
				}
			}
			//이동위치.
			$("#point").val(afterPoint[state]);

			// 말을 이동시킵니다.
			let afterId = "#p" + afterPoint[state];
			$(afterId).append(player[state]);
			
			// 말을 지움.
			let beforeId = "#p" + beforePoint[state];
			$(beforeId).empty();

			beforePoint[state] = afterPoint[state];
			
			//1p~4p까지 이동했다면 1p부터 다시
			if(state<3){
				state++;
			}else{
				state=0;
			}
			
		}); //라스트
	})
	
	//게임 시작 
	function gameStart(palyer) {
	$("#gameAlert").addClass("no_hover");
	//console.log(this)	
	$("#p1").empty();
	$("#play").show();
	for (var i = 0; i < palyer; i++) {
	//console.log(player[i]);
		$("#p1").append(player[i]);
	}	
}