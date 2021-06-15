console.log("안녕하세요");
// 비어있는 배열 생성
let arr = [];
// 배열에 데이터 추가하기
arr.push("홍길동");
arr.push("이몽룡");
arr.push("성춘향");
// 배열전체 내용 확인하기
console.log(arr);
// 1번요소에 담긴 데이터 확인
console.log(arr[1]);

// spread 연산자
// ES6+에서 사용하는 배열과 관련된 연산자
let arrCopy = [...arr];
// arrCopy = [arr[0],arr[1],arr[2]]

console.log("arrCopy", arrCopy);
