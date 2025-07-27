/* 배열 선언 및 기초 사용법 */
function check1() {
  // 배열 선언 방법 확인
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ["사과", "바나나", "딸기"];

  // 배열명.length: 배열의 길이(배열의 칸 수 또는 저장된 데이터의 수)
  console.log("arr1.length: " + arr1.length);
  console.log("arr2.length: " + arr2.length);
  console.log("arr3.length: " + arr3.length);
  console.log("arr4.length: " + arr4.length);

  // 배열의 index(색인, 번호)
  /*
    - 배열의 각 칸을 구분하는 번호
    - 0부터 시작!
    - 중간에 번호를 생략할 수 없다 (항상 연속적)
    - 마지막 index == 배열길이 -1 (== 변수이름.length -1)
  */

  // 배열명[index] -> 배열의 해당 인덱스에 존재하는 데이터 반환
  console.log("arr4[0]", arr4[0]);
  console.log("arr4[1]", arr4[1]);
  console.log("arr4[2]", arr4[2]);
  console.log("arr4[3]", arr4[3]); // JS에서는 배열 길이를 초과해도 에러가 나지 X ('undefined'라고 뜸)

  // 배열명[index] = 값;  -> 해당 인덱스에 지정된 값 대입
  arr2[0] = 100;
  arr2[1] = "눈 온다";
  arr2[2] = true;
  // (JS 배열의 특징: 인덱스 별로 자료형을 다르게 할 수 있다.)
  console.log("arr2: ", arr2);

  // JS 배열 특징을 이용한 사용법

  // 1. 길이 제한이 없다. -> 값을 배열에 원하는 만큼 추가 기능
  arr1[0] = "가";
  arr1[1] = "나";
  arr1[2] = "다";
  // 2. 원하는 index에 값을 마음대로 추가할 수 있다.
  // -> 중간에 건너뛴 index는 빈칸으로 채워짐
  arr1[5] = "마";
  arr1[0] = "사";
  console.log("arr1: ", arr1);
}
