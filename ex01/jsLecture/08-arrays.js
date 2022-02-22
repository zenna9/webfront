// const v1 = new Array(10); // 인자 개수가 10개인 배열
// const v2 = new Array(); // 인자가 없는 배열
// const v3 = new Array(1, "ABC", true);
// console.log(v1.length, v2.length, v3.length); // 10 0 3

// const v4 = [];
// const colors = ["red", "green", "blue", "yellow"];
// console.log(v4)
// console.log(colors)

// //객체도 배열처럼 접근 가능
// const person = {
//     name: "홍길동",
//     job: "도적"
// };
// console.log(person['name'] + ":" + person['job'])

// const arr = []; // 빈 배열 생성하고
// console.log(arr.length);
// arr[10] = 5; // 뜬금없이 10번 인덱스에 5라는 값을 집어넣어주면
// console.log(arr.length); //비어있는 공간이 자동 추가됨

//배열 합치기
// const veges = ['배추', '무', '쪽파'];
// const sources = ['소금', '고춧가루', '새우젓'];
// const ingredients = veges.concat(sources);
// console.log(ingredients);

// const veges = ['배추', '무', '쪽파'];
// const sources = ['소금', '고춧가루', '새우젓'];
// const ingredients = veges.concat(sources);
// console.log("김장 재료: " + ingredients.join(", "));

// let fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Kiwi");
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits);

// let fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Kiwi");
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits.shift());
// console.log(fruits);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);
let slices = fruits.slice(1, 2);
console.log(slices);
fruits.sort();
console.log(fruits);
fruits.sort(function(v1, v2) {
    if (v1 < v2) return 1; // 양수면 v1이 순서가 뒤로가게
    if (v1 > v2) return -1; // 음수면 v1이 순서가 앞으로 가게
    if (v1 == v2) return 0; // 0이면 순서가 같게
});
console.log(fruits);