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

		if (confirm("게임이 시작됩니다. 준비가 되면 확인, 취소 클릭시 창꺼짐! ") == true) { // 확인
		} else { // 취소
			window.close();
			self.close();
		}
		
		// 변수 초기화 
		let beforePoint = 1;
		let afterPoint = 1;
		let be1 =1;
		let be2 =1;
		let turn =1;
		let afterPoint1 = 1;
		let afterPoint2 = 1;
		let beforePoint1 = 1;
		let beforePoint2 = 1;
	//------------------게임 시작 후------------------------
		// 플레이 버튼 클릭 
		$("#play").click(function() {		
			
			//게임이 시작되면 p1에 위치한 모든 말을 지움.
			$("#p1").empty();
			
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
			/*if (beforePoint + Sran < 41) {
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

			beforePoint = afterPoint;*/
			if(turn ==1){
				if(be1 +Sran<41){
					afterPoint1 = be1 +Sran;
				}else {
					afterPoint1 = be1 + Sran - 40;
				}
				
				$("#point").val(afterPoint1);
				
				// 말을 이동시킵니다.
				let afterId = "#p" + afterPoint1;
				$(afterId).append('<b class="horses">🏇</b>');

				let beforeId = "#p" + beforePoint1;
				$(beforeId).empty();

				beforePoint1 = afterPoint1;
				turn= turn+1;
				console.log("turn1"+turn);
			}else if(turn ==2){
				if(be2 +Sran<41){
					afterPoint2 = be2 +Sran;
				}else{
					afterPoint2 = be2 + Sran - 40;
				}
				
				$("#point").val(afterPoint2);
				console.log($("#point").attr("value"))
				
				// 말을 이동시킵니다.
				let afterId = "#p" + afterPoint2;
				$(afterId).append('<b class="horses">🚣</b>');

				let beforeId = "#p" + beforePoint2;
				$(beforeId).empty();

				beforePoint2 = afterPoint2;
				turn=1;
				console.log("turn2"+turn);
			}
			
		}); //라스트
	})