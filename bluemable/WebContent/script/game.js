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
		
//--------------------------------------(위)주사위 이미지 (아래)게임 기능--------------
$(document).ready(function() {
	
	// 준비 완료 
		console.log("ready");

		// 변수 초기화 
		let beforePoint = 1;
		let afterPoint = 1;

	//------------------게임 시작 전------------------------
		//게임 시작전 버튼 숨기기
		$("#play").hide()
		$("#1P").hide()
		$("#2P").hide()
		$("#3P").hide()
		$("#4P").hide()
		$("#mydice11").hide()
		$("#mydice22").hide()
	//------------------게임 시작 후------------------------
		// 플레이 버튼 클릭 
		$("#play").click(function() {		
			
			//첫번째 주사위 값
			let ran1=Math.floor((Math.random()*5)+1)
			//첫번째 주사위 이미지 보내기
			document.images["mydice1"].src=eval("face"+ran1+".src")
			
			//두번째 주사위 값
			let ran2=Math.floor((Math.random()*5)+1)
			//두번째 주사위 이미지 보내기
			document.images["mydice2"].src=eval("face"+ran2+".src")
			
			let Sran = ran1 + ran2
			
			//#dice <-html 출력화면에 주사위 수를 나타냄.
			$("#dice1").val(ran1);
			$("#dice2").val(ran2);
			console.log("1, 2번 주사위 ::"+Sran)
			if (beforePoint + Sran < 41) {
				afterPoint = beforePoint + Sran;
			} else {
				afterPoint = beforePoint + Sran - 40;
			}
			$("#point").val(afterPoint);
			console.log($("#point").attr("value"))
			// 말을 이동시킵니다.
			let afterId = "#p" + afterPoint;
			$(afterId).append('<b class="horses">🏇</b>');

			let beforeId = "#p" + beforePoint;
			$(beforeId).empty();

			beforePoint = afterPoint;
		});
	})