// 2022-02-22

//객체생성
//방법1. Object를 생성
let person = new Object(); //새 객체 생성. 현재 아무 속성도 없음
//속성을 동적으로 추가. 동적 스크립트는 필요할때 속성을 추가해주면 됨
person.name = "홍길동"; // const는 재할당 불가하댔지만..내부를 바꾸는건 어쩌구 된대..
person.age = 28;
person.showInfo = function() {
    let message = `Name : ${this.name}, Age : ${this.age}`;
    console.log(message); // this 는 자기자신
};
//객체 출력
console.log(person);
//메서드 호출
person.showInfo();

//방법2 . JSON이용
person = {
    name: "홍길동", // 키와 값의 쌍
    age: 28,
    showInfo: function() {
        let message = `Name : ${this.name}, Age : ${this.age}`;
        console.log(message);
    }
};
person.showInfo(); // .을 통해 내부 속성 접근

//방법3. 객체 생성 by 프로토타입 기반 상속
//클래스 격의 함수 만들 것
const Member = function(name, position) {
    this.name = name;
    this.position = position;
    //안쪽에 이름과 나이를 가진 Member란 함수가 생긴것
};
let m1 = new Member("강백호", "28");
let m2 = new Member("서태웅", "25");

console.log(m1);
console.log(m2);

//JavaScrpt는 동적으로 필요한 속성을 추가할 수 있윰!
//아래처럼.. 자기소개 메서드를 넣어본다면
m1.sayHi = function() { // sayHi라는 함수를 만들어서 부를거야
    console.log(`${this.name}님이 당신을 부릅니다`);
}
console.log(m1)
m1.sayHi();
//m2.sayHi(); 는 지정한적이 없으므로 실행하면 에러남
// 동적으로 추가한 속성들은 해당 객체에서만 사용 가능함
//만약, Member함수를 상속받은 모든 인스턴스에 공통적인 속성을 부여하고자 하면
//이때 쓰는 게 prototype!
Member.prototype.team = "중랑2팀";
Member.prototype.introduce = function() {
    console.log(`${this.name}님이 당신을 부릅니다`);
    //Member의 공유 영역에 메서드 추가
}
console.log(m1.constructor); // m1의 기반이 되는 객체
console.log(Member.prototype); // Member의 공유 영역

m1.introduce();
m2.introduce();
// m1과 m2의 constructor인 Member의 prototype 영역에 존재하므로 모든 객체가 공유 가능