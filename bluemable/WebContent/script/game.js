$(document).ready(function() {
	
	// 준비 완료 
		console.log("ready");

		// 변수 초기화 
		let beforePoint = 1;
		let afterPoint = 1;

		// 플레이 버튼 클릭 
		$("#play").click(function() {
			//1번째 주사위
			let ran1 = Math.floor((Math.random() * 6) + 1); //1~6
			console.log(ran1);
			//2번째 주사위
			let ran2 = Math.floor((Math.random() * 6) + 1); //1~6
			console.log(ran2);
			//주사위 합
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
			$(afterId).append('<b class="horses" >◆1번마</b>');

			let beforeId = "#p" + beforePoint;
			$(beforeId).empty();

			beforePoint = afterPoint;
		});
	})