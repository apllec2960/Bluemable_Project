//------------------플레이어 선택 --------------------
		
		// 2인 플레이 
		$("#2people").click( function() {		
			person = maxState = 2;
			console.log("2인 스타트!");
			alert("2인 스타트!");
			gameStart(person);
		});
		
		// 3인 플레이
		$("#3people").click( function() {
			person = maxState = 3;
			console.log("3인 스타트!");
			alert("3인 스타트!");
			gameStart(person);
		});
		
		// 4인 플레이
		$("#4people").click( function() {
			person = maxState = 4;
			console.log("4인 스타트!");
			alert("4인 스타트!");
			gameStart(person);
		});
		//-------------- 도시 및 건물 구매 ---------------------
		// 도시
		$("#country").click(function(){
			tower = 0;
			console.log("도시 구매!");
			buyCountry(tower)
			console.log("!!"+state);
			$("#buuild").hide();
		})
		
		// 별장
		$("#villa").click(function(){
			tower = 1;
			console.log("별장 구매!");
			buyCountry(tower)
			$("#buuild").hide();
		})
		
		// 빌딩
		$("#building").click(function(){
			tower = 2;
			console.log("빌딩 구매!");
			buyCountry(tower)
			$("#buuild").hide();
		})
		
		// 호텔
		$("#hotel").click(function(){
			tower = 3;
			console.log("호텔 구매!");
			buyCountry(tower)
			$("#buuild").hide();
		})
		
		//--------------플레이어 전광판 ---------------------
		moneyDisplay();
		turnDisplay();

//게임 시작 - 플레이어들을 시작위치에 배치.
function gameStart(person) {
	//console.log("person"+person) 
	$("#gameAlert").addClass("no_hover");
	//console.log(this)	
	$("#p1").empty();
	for (let i = 0; i < person; i++) {
	//console.log("person[i]"+i);F
		$("#p1").append(player[i]);
	}	
}

//각각의 도시에 도착했을때 구매 및 경유비를 지출하는 함수.
function alertCountry(){
	console.log("플레이어state"+state);
	//도시      lands[0].length : 40
	for(let i=0; i<lands[0].length; i++){
		if(i == afterPoint[state]){
			console.log("i == afterPoint[state]"+i);
			console.log("위치비교"+beforePoint);
			console.log("땅 :"+lands[0][i-1]) 
			console.log("state"+state)
			//1.알림창으로 어디에 도착했는지 알림.
			
			if(lands[6][i-1]==0){
				console.log("구매가능"); // 소유자가 없을때 
				$("#buuild").show();
			
				
			}else if(lands[6][i-1]==1){
				console.log("소유자 있음"); // 소유자가 있을때 (안에서 한번더 조건걸기(내가 산건지 아닌지))
				$("#buuild").hide();
				//1.소유자 확인(몇번째 플레이어 인지)//2.비용 지출()
				
				//코드수정 해야함: 아래 코드가 반복되어 통행료를 많이 받게 되는 문제.
				for(let n=0; n<4; n++){
					if(dCity[n][i-1] ==1){
						
						//현 플레이어는 자금에서 통행료를 뺌.
						Pprice[state]= Pprice[state] - tollFee[n][i-1];
						
						//땅 주인은 통행료를 자금에 더함.
						Pprice[n] = Pprice[n] + tollFee[n][i-1];
						console.log((state+1)+"플레이어의 잔고(지출)"+Pprice[state]);
						console.log("통행료 받음"+Pprice[n]);
					}
				}
			}else{
				console.log("구매할수 없는 지역입니다.")
				$("#buuild").hide();

				//1.비용을 내야하는곳인지
				//2.그냥 통과가 가능한 곳인지
				//3.다른 기능이 있는지.
			}
		}
		
	}
	
}

// 플레이어는 건물 선택 및 구매.
function buyCountry(tower){
	
	
	//alertCountry(state);
	console.log("buyCounter() 실행");
	console.log("state"+state)
	/*
	 * console.log("건물"+tower); console.log((1+state)+"번마");
	 * console.log("위치값"+afterPoint[state])
	 */
	//state = state -1;
	//console.log(state);
	i = afterPoint[state] -1;
	// console.log("i는"+i);
	console.log("ran1"+ran1);
	/********************************
	*추가 해야할 기능*
	*처음엔 땅만 살수 있다.
	*그 후엔 건물 하나씩만 구매 가능(별장만 2개 가능)
	*다른 유저가 도착하면 구매 불가.
	*******************************/
	
	// 땅 구매 비용지불
	if(tower ==0){
		console.log("도시구매")
		//내 자본이 건물구매비용 보다 많다면.
		if(Pprice[state] >= lands[1][i]){
			console.log("내 자본"+Pprice[state]);
			console.log("건물가격"+lands[1][i])
			
			//건물비용 지불
			Pprice[state] = Pprice[state] - lands[1][i];
			//통행료 저장
			tollFee[state] = tollFee[state]+ lands[1][i]
			//구매한 도시지명 저장.
			dCity[state][i] = dCity[state][i] + 1;
			//도시 구매 유무
			lands[6][i]+=1;
			
			console.log("[1:내도시]"+dCity[state][i]);
			console.log("[1:구매됨]"+lands[6][i]);

				let afterId = "#p" + afterPoint[state];
					$(afterId).append(Bbuild[tower]);
						console.log("위치"+afterId);
						console.log("땅 구매완료")
						console.log("구매후 잔액"+Pprice[state]);
						//플레이어 자금초기화 
						moneyDisplay();

			}else{
				console.log("내 자본"+Pprice[state]);
				console.log("건물가격"+lands[1][i])
				alert("돈이 부족합니다.")
				console.log("돈이 부족합니다");
				return
		}
		
	}else if(tower ==1){
		//별장
		if( (Pprice[state] >= lands[2][i])&&(Pturn[state]>=1)){
			console.log("내 자본"+Pprice[state]);
			console.log("건물가격"+lands[2][i])
			
			//건물비용 지불
			Pprice[state] = Pprice[state] - lands[2][i];
			//통행료 저장
			tollFee[state] = tollFee[state]+ lands[2][i]
				let afterId = "#p" + afterPoint[state];
					$(afterId).append(Bbuild[tower]);
						console.log("별장 구매완료")
						console.log("구매후 잔액"+Pprice[state]);
						//플레이어 자금초기화
						moneyDisplay();
						
			}else if((Pprice[state] >= lands[2][i])&&(Pturn[state]<1)){
				alert("아직 1턴미만 입니다.")
				console.log("1턴미만");
				
			}else{
				alert("돈이 부족합니다");
				console.log("돈부족");
			}
	}else if(tower ==2){
		//빌딩
		if( (Pprice[state] >= lands[4][i])&&(Pturn[state]>=2)){
			console.log("내 자본"+Pprice[state]);
			console.log("건물가격"+lands[4][i])
			
			//건물비용 지불
			Pprice[state] = Pprice[state] - lands[4][i];
			//통행료 저장
			tollFee[state] = tollFee[state]+ lands[4][i]
				let afterId = "#p" + afterPoint[state];
					$(afterId).append(Bbuild[tower]);
						console.log("빌딩 구매완료")
						console.log("구매후 잔액"+Pprice[state]);
						//플레이어 자금초기화
						moneyDisplay();
						
			}else if((Pprice[state] >= lands[4][i])&&(Pturn[state]<2)){
				alert("아직 2턴미만 입니다.")
				console.log("2턴미만");
				return
				
			}else{
				alert("돈이 부족합니다");
				console.log("돈부족");
			}
	}else{
		//호텔
		if( (Pprice[state] >= lands[5][i])&&(Pturn[state]>=3) ){
			console.log("내 자본"+Pprice[state]);
			console.log("건물가격"+lands[5][i])
			
			//건물비용 지불
			Pprice[state] = Pprice[state] - lands[5][i];
			//통행료 저장
			tollFee[state] = tollFee[state]+ lands[5][i]
			
				let afterId = "#p" + afterPoint[state];
					$(afterId).append(Bbuild[tower]);
						console.log("호텔 구매완료")
						console.log("구매후 잔액"+Pprice[state]);
						//플레이어 자금초기화
						moneyDisplay();
						
			}else if((Pprice[state] >= lands[5][i])&&(Pturn[state]<3)){
				alert("아직 3턴미만 입니다.")
				console.log("3턴미만");
				return
				
			}else{
				alert("돈이 부족합니다");
				console.log("돈부족");
			}
	}
	// 건물 세우기
	// 끝
	console.log("--------------end-------------")
}

//말이 이동.
function move() {
	//위치 배열에 위치 지정.
	if (beforePoint[state] + Sran < 41) {
		afterPoint[state] = beforePoint[state] + Sran;
		console.log("이동지점"+afterPoint[state]);
		
		
	} else {
		//beforePoint[state] + Sran 값이 40보다 크다면
		afterPoint[state] = beforePoint[state] + Sran - 40;
		console.log("이동지점"+afterPoint[state]);
		
		//각 말들의 턴 회수를 구함.
			Pturn[state]++;
			console.log("플레이어별 턴 수 ["+Pturn[state]+"]");
		
		//플레이어 월급
			console.log("입금전 잔액"+Pprice[state]);
			Pprice[state] +=lands[1][0] ;
			console.log("월급이 지급되었습니다 입금후 잔액"+Pprice[state]);
			
	}
	
	//이동위치.
	$("#point").val(afterPoint[state]);

	// 말을 이동시킵니다.
	let afterId = "#p" + afterPoint[state];
	$(afterId).append(player[state]);
	
	// 말을 지움.
	let beforeId = "#p" + beforePoint[state];
	$(beforeId).children("b").remove("#"+(state+1)+"p");
	
	beforePoint[state] = afterPoint[state];
}

//플레이어 각각의 돈을 보여줌.
function moneyDisplay(){
	$("#1pMoney").val(Pprice[0]);
	$("#2pMoney").val(Pprice[1]);
	$("#3pMoney").val(Pprice[2]);
	$("#4pMoney").val(Pprice[3]);
}

//플레이어 개인 턴수와 전체 턴수를 보여줌.
function turnDisplay(){
	//전체 턴 1p~4p까지 돌았을때
	$("#Cturn").val(turn);
	//유저별 턴수
	$("#1pt").val(Pturn[0]);
	$("#2pt").val(Pturn[1]);
	$("#3pt").val(Pturn[2]);
	$("#4pt").val(Pturn[3]);
}

//차례가 끝나면 다음 플레이어로 바뀌는 함수
function stateUp(){
	if(ran1 == ran2){
		diceNum++
		console.log("주사위 더블!");
	}else{
		if(state<(maxState-1)){
			state++;
		}else{
			state=0;
			turn++;
		}
	}
}



//주사위를 던지는 함수.+ 주사위 이미지와 주사위 값을 페이지에 출력.
function diceThrow(){
	//랜덤으로 수를 뽑아  ran에 저장.
	ran1=Math.floor((Math.random()*6)+1);// 1~6
	ran2=Math.floor((Math.random()*6)+1);


	
	//주사위 이미지  출력.
	document.images["mydice1"].src=eval("face"+ran1+".src")
	document.images["mydice2"].src=eval("face"+ran2+".src")
	
	//Sran : 주사위 수 총합.
	Sran = ran1 + ran2;
	console.log("주사위 합 ::"+Sran)
	
	//#dice <-html 출력화면에 주사위 수를 나타냄.
	$("#dice1").val(ran1);
	$("#dice2").val(ran2);
}

//사회복지기금 접수처(돈 받음.)
function welfare() {
	if(afterPoint[state] == 21){
		console.log("접수복지처에 도착하였습니다. 돈을 받아가세요!");
		console.log("모금 금액 :"+ Pprice[1][20]);
		
		//플레이어 돈 추가.
		Pprice[state] += lands[1][20];
		//모금 값 초기화
		lands[1][20] = 0;
	}
}

//사회복지 기금(돈 냄.)
function welfareFund(){
	if(afterPoint[state] == 38){
		console.log("모금하세요! 15만!");
		
		//플레이어 15만 지불
		Pprice[state] -= 15;
		//모금함에 15만 저장.
		lands[1][38] += 15;
		console.log("모금 금액 : "+lands[1][38]);
	}
}

//행운카드 기능
function luckyCard(){
	if(beforePoint[state]==3 || beforePoint[state]==8 || beforePoint[state]==13 || beforePoint[state]==18 || beforePoint[state]==23 ||beforePoint[state]==36 ){
		//행운카드 보이기.
		$("#luckCard").show();
		console.log("행운카드")
		//0~2
		card = Math.floor(Math.random()*2);
		document.images["luckCard"].src=eval("luckCard"+card+".src")
		
	//우주여행.	
	if(card ==0){
		afterPoint[state] =31;
		
		//이동위치.
		$("#point").val(afterPoint[state]);

		// 말을 이동시킵니다.
		let afterId = "#p" + afterPoint[state];
		$(afterId).append(player[state]);
		
		// 말을 지움.
		let beforeId = "#p" + beforePoint[state];
		$(beforeId).children("b").remove("#"+(state+1)+"p");
		
		beforePoint[state] = afterPoint[state];
		console.log("이동위치"+ afterPoint[state]);
		state++;
		return;
		
		}
	
	//무인도
	if(card ==1){
		afterPoint[state] =11;
		//이동위치.
		$("#point").val(afterPoint[state]);

		// 말을 이동시킵니다.
		let afterId = "#p" + afterPoint[state];
		$(afterId).append(player[state]);
		
		// 말을 지움.
		let beforeId = "#p" + beforePoint[state];
		$(beforeId).children("b").remove("#"+(state+1)+"p");
		
		beforePoint[state] = afterPoint[state];
		console.log("이동위치"+ afterPoint[state]);
		state++;
		return;
		}
	}
}








