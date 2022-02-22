const s1 = "Modern Java Script and Java";
const s2 = String("Mdoern JavaScript  and java");

console.log(typeof s1, typeof s2);
//길이확인: .length
console.log(s1, "Length ", s1.length);

//특정 인덱스의 문자열 추출
console.log(s1.charAt(7)); //7번 인덱스의 문자를 반환함
console.log(s1[7]); // 배열의 7번 인덱스화하여 반환도 가능하나 배열은 변경불가
console.log(s1.substring(7, 17)) // 문자열의 7번 인덱스부터 17번 인덱스 이전까지 출력
console.log(s1.substring(7)) // 문자열의 7번 인덱스부터 끝까지 출력

//굉장히 중요하다는 검색 메서드
//s1에서 문자열 Java를 검색
let position // 포지션을 잡을 수 있는 변수를 선언
    = s1.indexOf("Java"); // s1에서 java의 위치 검색

console.log(s1);
console.log("1번째 Java", position); // 6이 나옴
//근데 Java는 두번 존재함. 두번째 Java를 찾으려면 7번 인덱스부터 찾으면 됨
position = s1.indexOf("Java", position + 4);
console.log("2번째 Java", position); // 이게 22가 나와야하느넫 왜 나는 -1임?
//없는 검색어를 찾게되면
position = s1.indexOf("Nothing");
console.log(position);

//문자열 치환
console.log(s1);
console.log(s1.replace)


// ES6의 Template String
let temp = 12
let message = "현재 기온은" + temp + "도 입니다";
console.log(message);

//템플릿 문자열 활용
message = `현재 기온은 ${temp} 도 입니다`;
console.log(message)

// 여러 줄 문자열도 템플릿 문자열로 쉽게 만들 수 있음
message = "예전에는 여러 줄 문자열을 만드는 것이 \n 어려웠다"
console.log(message)
message = `하지만 ES6에서는
아주 쉽게
여러줄 문자 생성가능`;
console.log(message)