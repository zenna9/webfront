let n1 = 5; //Literal
let n2 = Number(5); // 객체를 이용한 생성

console.log(n1, "== ", n2, "?", n1 == n2);

//다양한 형태의 수치 입력
const hex = 0xff0000; // 16진수 입력
const oct = 0o10 //8진수 입력
console.log(hex, oct);

//Math 내장 함수
console.log(Math.round(Math.PI)); // 파이값을 round() 반올림
console.log(Math.min(1, 5, 4, 2, 6, 7)); // 최소값 찾기
console.log(Math.max(1, 5, 4, 2, 6, 7)); // 최대값 찾기
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567)); // trunc 올림, floor 버림

//캐스팅
console.log("--------casting---------");
//문자열을 넘버형으로 변환
console.log(parseInt("011"));
console.log(parseInt("011", 2)); // 011을 2진수로 변환
console.log(parseInt("123.456")); // 정수 형태만 변환
console.log(parseFloat("123.456")); //실수 형태 변환

// 숫자로 변환할 수 없는 형태인 경우 ->NaN이 나옴
let v = parseInt("a123.456");
console.log(v, typeof v); // NaN을 산술 연산에 포함시키면 NaN
console.log(v + 10);
console.log(isNaN(v)); //수치형 변수가 NaN인지 확인

//Infinity
v = 1 / 0;
console.log(v, typeof v);
//Infinity 가 포함된 산술 연산식은 인피니티가 나올 것. 아래에서 확인
console.log(v + 10);

//유한수인지 확인 isFinite 함수
console.log(isFinite(1 / 0)); // false
console.log(isFinite(2018)); // true
console.log(isFinite(NaN)); // false

//문자열 -> 문자열