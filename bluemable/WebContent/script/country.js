//타이베이
let taipei = {
   owner : 0,
      hotel : false,
      building : false,
      villa1 : false,
      villa2 : false,
      hotelValue : 450000,
      buildingValue : 180000,
      villaValue1 : 20000,
      villaValue2 : 40000,
      getFare: function() {
         let fare = 0;
         let count = 0;
         if(this.hotel){
            fare += this.hotelValue;
            count++;
         }
         if(this.building) {
            fare += this.buildingValue;
            count++;
         }
         if(this.villa1) {
            fare += this.villaValue1;
            count++;
         }
         if(this.villa2) {
            fare += this.villaValue2;
            count++;
         }
         if(count == 0) {
            fare=4000
         }
         return fare;
      }
}

//베이징
let beijing = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//마닐라
let manila = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//싱가포르
let singapore = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//카이로
let cairo = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//이스탄불
let istanbul = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//아테네
let athens = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;     
		      }
		}

//코펜하겐
let copenhagen = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//스톡홀름
let stockholm = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//베른
let bern = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//베를린
let berlin = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//오타와
let ottawa = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//부에노스아이레스
let buenosaires = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//상파울루
let saopaulo = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//시드니
let sydney = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//하와이
let hawaii = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//리스본
let lisbon = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//마드리드
let madrid = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//도쿄
let tokyo = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//파리
let paris = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//로마
let rome = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//런던
let london = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//뉴욕
let newyork = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}


//--------------관광지
//제주도
let jejuIsland = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//콩고드 여객기
let concorde = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//부산
let busan = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//퀸 엘리자베스
let queenElizabeth = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//컬럼비아호
let columbia = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}

//서울
let seoul = {
		   owner : 0,
		      hotel : false,
		      building : false,
		      villa1 : false,
		      villa2 : false,
		      hotelValue : 450000,
		      buildingValue : 180000,
		      villaValue1 : 20000,
		      villaValue2 : 40000,
		      getFare: function() {
		         let fare = 0;
		         let count = 0;
		         if(this.hotel){
		            fare += this.hotelValue;
		            count++;
		         }
		         if(this.building) {
		            fare += this.buildingValue;
		            count++;
		         }
		         if(this.villa1) {
		            fare += this.villaValue1;
		            count++;
		         }
		         if(this.villa2) {
		            fare += this.villaValue2;
		            count++;
		         }
		         if(count == 0) {
		            fare=4000
		         }
		         return fare;
		      }
		}