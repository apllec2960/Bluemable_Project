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

//플레이어수
let person=0;

//플레이어의 돈
let Pprice=[300,300,300,300];

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

//건물 변수.
let tower = 0;

//1p~4p 각각의 턴 회수
let Pturn =[0,0,0,0];

//1:1번주사위 2:2번주사위 S:주사위 합계
let ran1 = 0;
let ran2 = 0;
let Sran = 0;

let space =0;
let spaceTurn =0;
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
					 5, 0,  8,  8, 20, 10, 0, 10, 12, 0,
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
					0, 2, 0, 0, 0, 0, 2, 0, 0, 2,
					0, 2, 0, 0, 0, 0, 0, 0, 0, 2,
					0, 0, 0, 0, 2, 0, 0, 2, 0
				]
];

// ----------진행 준비 -------------------------
$(document).ready(function() {
		
		//부루마블 기능 연결
	  	$.getScript("/bluemable/script/function.js");  
	  	
	  	//건물 구매창 숨김.
		$("#buuild").hide();
		
		//------------------게임 시작 ------------------------		
		
		// 플레이 버튼 클릭 
		$("#play").click(function() {	
			console.log((1+state)+"번 플레이어");
			
			if(beforePoint[state] == 31){
				console.log("우주여행 가자!!");
				console.log("space1"+spaceTurn);
				space = prompt('위치를 입력하세요')
				alert(space);
				space = parseInt(space);
				afterPoint[state] = space;
				console.log(afterPoint[state]+"이동");
				
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
			//주사위를 던지는 함수.+ 주사위 이미지와 주사위 값을 페이지에 출력.
			diceThrow()
			
			//말 이동하는 함수.
			move();
			console.log("alertCountry전"+state);
			
			//복지기금 수령
			welfare()
			//복지기금 지불
			welfareFund()
			
			//우주정류장
			spaceSpace()
			
			//도시 알림!(소유지 여부 및 건물 구매창)
			alertCountry()
			console.log("alertCountry후"+state);
			
			//더블이면 한번더 아니면 다음턴으로 넘김.
			stateUp()
			console.log("alertCo후 stateUp"+state);
			
			//전체 턴과 플레이어 턴수를 보여줌.
			turnDisplay();
			moneyDisplay();
			console.log("---------player turn end--------")
		}); //click
	})
