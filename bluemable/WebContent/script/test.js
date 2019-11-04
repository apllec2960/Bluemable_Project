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
// 플레이어별 말 목록 ,
let player=["<b class='horses' id='1p'>🦍</b>",
			"<b class='horses' id='2p'>🐃</b>",
			"<b class='horses' id='3p'>🦇</b>",
			"<b class='horses' id='4p'>🦈</b>" ];		
//건물 목록
let Bbuild=["<a class='horses' id='1p'>🚩</a>",
			"<a class='horses' id='1p'>🏠</a>",
			"<a class='horses' id='1p'>🏢</a>",
			"<a class='horses' id='1p'>🏰</a>"]

//---------------- 변수 초기화 ---------------------------	
//말이 원래 있었던 장소의 번호 배열 초기화 최대 4개 까지 
let beforePoint = [1, 1, 1, 1];
// 말이 움직일 장소의 번호 배열 초기화 최대 4개까지 (플레이어 현 위치)
let afterPoint = [1, 1, 1, 1];
//플레이어가 갖고있는 도시 구분
let dCity = [[	
				0, //1p (1: 구매한 도시)
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0
			],
			[	
				0, //2p 
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0
			],
			[	
				0, //3p 
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0
			],
			[	
				0, //4p 
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0
			]];
//플레이어수
let person=0;
//플레이어의 돈
let Pprice=[300,300,300,300];
//통행료
let tollFee=[[	
				0, //1p 
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0
			],
			[	
				0, //2p 
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 2, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0
			],
			[	
				0, //3p 
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0
			],
			[	
				0, //4p 
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0
			]];

//출발지점 + 국가 이름, 땅 값, 별장1 값, 별장2 값, 빌딩 , 호텔 값,여부 초기화
let lands = [[	"출발지",
					"타이베이","황금열쇠1","베이징","마닐라","제주","싱가포르","황금열쇠2","카이로","이스탄불","무인도",
					"아테네","황금열쇠3","코펜하겐","스톡홀름","콩코드여객기","베른","황금열쇠4","베를린","오타와","사회복지기금 접수처",
					"부에노스아이레스","황금열쇠5","상파올루","시드니","부산","하와이","리스본","퀸엘리자베스호","마드리드","우주여행",
					"도쿄","컬럼비아호","파리","로마","황금열쇠6","런던","뉴욕","사회복지기금","서울"
				],
				[	20,	// 땅값 출발지점은 월급을 준다.
					5, 0, 8, 8,20, 10, 0, 10, 12, 0,
					14, 0, 16, 16, 20, 18, 0, 18, 20, 0,
					22, 0, 24, 24, 50, 26, 26, 30, 28, 20,
					30, 45, 32, 32, 0, 35, 35, 15 ,100
				],
				[	0, 	//별장1
					5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 
					5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
					6, 6, 6, 6, 7, 7, 7, 7, 7, 7,
					7, 7, 7, 7, 7, 7, 7, 7, 7
				],
				[	0,	//별장2
					5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 
					5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
					6, 6, 6, 6, 7, 7, 7, 7, 7, 7,
					7, 7, 7, 7, 7, 7, 7, 7, 7
				],
				[	0,	//빌딩
					18, 0, 18, 18, 18, 18, 18, 18, 18, 0, 
					25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 
					30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 
					35, 35, 35, 35, 35, 35, 35, 35, 35, 
				],
				[	0,	//호텔
					35, 35, 35, 35, 35, 35, 35, 35, 35, 35,
					50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 
					75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 
					75, 75, 75, 100, 100, 100, 105, 105, 110
				],
				[	
					2, //구매여부 (0:빈땅 1:소유지 땅 2:구매 불가)
					0, 2, 0, 0, 0, 0, 2, 0, 0, 2,
					0, 2, 0, 0, 0, 0, 2, 0, 0, 0,
					0, 2, 0, 0, 0, 0, 0, 0, 0, 2,
					0, 0, 0, 0, 2, 0, 0, 2, 0
				]
];
//건물 변수.
let tower = 0;

//1p~4p 각각의 턴 회수
let Pturn =[0,0,0,0];
//전체 턴 수(4p까지 마친 턴의 수)
let turn = 0;
//무인도에 있을 때 셀 턴수 무인도 도착시 3으로 초기화 
let turnCount = 3;

// 다음턴이 오기까지 
let maxState = 0;
//index
let state = 0;

//주사위 더블 횟수
let diceNum = 0;

// ----------진행 준비 -------------------------
$(document).ready(function() {
		// 준비 완료 
		console.log("ready");

		$("#buuild").hide();
		$("#buuild1").hide();
		$("#buuild2").hide();
		$("#buuild3").hide();
		
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
			console.log("도시 선택!");
			buyCountry(tower)
			$("#buuild").hide();
		})
		
		// 별장
		$("#villa").click(function(){
			tower = 1;
			console.log("별장 선택!");
			buyCountry(tower)
			$("#buuild").hide();
		})
		
		// 빌딩
		$("#building").click(function(){
			tower = 2;
			console.log("빌딩 선택!");
			buyCountry(tower)
			$("#buuild").hide();
		})
		
		// 호텔
		$("#hotel").click(function(){
			tower = 3;
			console.log("호텔 선택!");
			buyCountry(tower)
			$("#buuild").hide();
		})
		
		//--------------플레이어 전광판 ---------------------
		$("#1pMoney").val(Pprice[0]);
		//console.log(Pprice[0]);
		$("#2pMoney").val(Pprice[1]);
		$("#3pMoney").val(Pprice[2]);
		$("#4pMoney").val(Pprice[3]);
		
		$("#1pt").val(Pturn[0]);
		$("#2pt").val(Pturn[1]);
		$("#3pt").val(Pturn[2]);
		$("#4pt").val(Pturn[3]);
		
		$("#Cturn").val(turn);
		//------------------게임 시작 후------------------------		
		
		// 플레이 버튼 클릭 
		$("#play").click(function() {	
			console.log((1+state)+"번마");
			
			//랜덤으로 수를 뽑아  ran에 저장.
			let ran1=Math.floor((Math.random()*6)+1);// 1~6
			let ran2=Math.floor((Math.random()*6)+1);
			
			/*let ran1 =6;
			let ran2 =5; testcode*/
			
			//주사위 이미지  출력.
			document.images["mydice1"].src=eval("face"+ran1+".src")
			document.images["mydice2"].src=eval("face"+ran2+".src")
			
			//Sran : 주사위 수 총합.
			let Sran = ran1 + ran2;
			
			//#dice <-html 출력화면에 주사위 수를 나타냄.
			$("#dice1").val(ran1);
			$("#dice2").val(ran2);
			console.log("주사위 합 ::"+Sran)
			
			//말 이동하는 함수.
			move(state, Sran);
			
			//도시 알림!(소유지 여부 및 건물 구매창)
			alertCountry(state)
			//주사위가 더블이라면 주사위 던질 횟수 추가.
			if(ran1 == ran2){
				diceNum++;
				console.log("주사위 더블!!!!"+diceNum);
				
			//플레이어가 모두 돌면 다시 1번마부터 아니면 다음 플레이어
			}else if(state<person-1){	
				//console.log("person값::"+person)
				diceNum=0;
				//턴을 넘긴다.
				state++;
			}else{
				diceNum=0;
				//턴 수
				turn++;
				console.log("전체 턴수 ::"+ turn);
				//1p에게 턴을 넘긴다
				state=0;
			}
			
			// 세번 연속 더블일때, 무인도로 이동.
			if(diceNum ==3){
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
			}
				
			
			//전체 턴 1p~4p까지 돌았을때
			$("#Cturn").val(turn);
			//유저별 턴수
			$("#1pt").val(Pturn[0]);
			$("#2pt").val(Pturn[1]);
			$("#3pt").val(Pturn[2]);
			$("#4pt").val(Pturn[3]);
			console.log("---------player turn end--------")
		}); //click
	})
	
/*-----------------------------------------------아래 함수-------------------------------------------------*/
//게임 시작 
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
function alertCountry(state){
	console.log("플레이어state"+state);
	//도시      lands[0].length : 40
	for(let i=0; i<lands[0].length; i++){
		if(i == afterPoint[state]){
			console.log("i == afterPoint[state]"+i);
			console.log("beforePoint"+beforePoint);
			console.log("afterPoint"+afterPoint);
			console.log("땅 :"+lands[0][i-1]) //<-- 2인이상 게임시 i가 1이 나오는 문제.
			//alert(lands[0][i-1]+"땅 구매?"); <--이동하기전에 먼저 알림되는 문제
			//1.알림창으로 어디에 도착했는지 알림.
			
			if(lands[6][i-1]==0){
				console.log("구매가능"); // 소유자가 없을때 
				$("#buuild").show()
				
			}else if(lands[6][i-1]==1){
				console.log("소유자 있음"); // 소유자가 있을때 (안에서 한번더 조건걸기(내가 산건지 아닌지))
				$("#buuild").hide();
				//1.소유자 확인(몇번째 플레이어 인지)//2.비용 지출()
				
				for(let n=0; n<4; n++){
					if(dCity[n][i-1] ==1){
						Pprice[state]= Pprice[state] - tollFee[n][i-1];
						Pprice[n] = Pprice[n] + tollFee[n][i-1];
						console.log("통행료지불"+Pprice[state]);
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
	alertCountry(state);
	console.log("buyCounter() 실행");
	/*
	 * console.log("건물"+tower); console.log((1+state)+"번마");
	 * console.log("위치값"+afterPoint[state])
	 */
	i = afterPoint[state] -1;
	// console.log("i는"+i);

	/********************************
	*추가 해야할 기능*
	*처음엔 땅만 살수 있다.
	*그 후엔 건물 하나씩만 구매 가능(별장만 2개 가능)
	*다른 유저가 도착하면 구매 불가.
	*******************************/
	
	// 땅 구매 비용지불
	if(tower ==0){
		//땅
		console.log("건물번호"+tower)
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
						//--------------플레이어 자금초기화  ---------------------
						$("#1pMoney").val(Pprice[0]);
						$("#2pMoney").val(Pprice[1]);
						$("#3pMoney").val(Pprice[2]);
						$("#4pMoney").val(Pprice[3]);
						
			}else{
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
						console.log("땅 구매완료")
						console.log("구매후 잔액"+Pprice[state]);
						//--------------플레이어 자금초기화 ---------------------
						$("#1pMoney").val(Pprice[0]);
						$("#2pMoney").val(Pprice[1]);
						$("#3pMoney").val(Pprice[2]);
						$("#4pMoney").val(Pprice[3]);
						
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
						console.log("땅 구매완료")
						console.log("구매후 잔액"+Pprice[state]);
						//--------------플레이어 자금초기화  ---------------------
						$("#1pMoney").val(Pprice[0]);
						$("#2pMoney").val(Pprice[1]);
						$("#3pMoney").val(Pprice[2]);
						$("#4pMoney").val(Pprice[3]);
						
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
						console.log("땅 구매완료")
						console.log("구매후 잔액"+Pprice[state]);
						//--------------플레이어 자금초기화 ---------------------
						$("#1pMoney").val(Pprice[0]);
						$("#2pMoney").val(Pprice[1]);
						$("#3pMoney").val(Pprice[2]);
						$("#4pMoney").val(Pprice[3]);
						
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
function move(state, Sran) {
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