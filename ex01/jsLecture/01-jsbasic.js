// 주석 하는 법
/* 주석 여러줄
여러줄 */

//터미널, 콘솔에 메시지 출력을 위한 console객체 이용
console.log("일반 메시지")
console.error("에러메시지")
console.warn("warning message zen  ")
console.info("infor message")

//변수 : var,let, const 테스트
var testVar = "var";
let testLet = "let "; // let은 재할당 가능 변수
const testConst = "const"; // const는 재할당 불가 변수, 상수처럼

//변수의 변경
testVar = "var changed";
testLet = "let changed";
testConst = "const changed";

let v = "This is String";
console.log("v is", typeof v);
v = 2018;