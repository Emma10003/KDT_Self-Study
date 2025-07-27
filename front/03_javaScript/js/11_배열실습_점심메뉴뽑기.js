const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menus = [
  "곱창",
  "김밥",
  "제육볶음",
  "돈까스",
  "파스타",
  "샐러드",
  "라면",
  "삼겹살",
  "카레라이스",
  "불고기",
  "피자",
  "치킨",
  "쌀국수",
  "감자탕",
  "닭가슴살",
];
selectBtn.addEventListener("click", function () {
  /**
   * Math = (객체) JS에서 수학적 계산을 위해 제공되는 내장 객체
   *        * 내장 객체: JS 개발팀이 추가적으로 만든 객체 기능
   *                    따로 설치할 필요 없이 맨 첫글자를 대문자로 작성하면 됨.
   *
   *    메서드(기능들)
   *    .random()     : 0 이상 1 미만의 랜덤한 소수를 생성
   *    .floor(숫자)   : 소수점을 버림하여 정수로 만듦 (내림 처리)
   *    .ceil(숫자)    : 소수점을 올림하여 정수로 만듦 (올림 처리)
   *    .round(숫자)   : 소수점을 반올림하여 정수로 만듦 - 4 이하 내림, 5 이상 올림
   */

  // menus 배열 index 범위 안에서 난수 생성

  // .random() = 0 이상 1 미만의 랜덤한 소수를 출력.
  // menus.length = 15
  // 소수값 * 15개의 메뉴 = 정수.소수
  // 나온 정수.소수에서 소수점 이하는 버림.
  // index의 값이 마지막 자리수 -1 한 값까지만 되기 때문.
  const mr = Math.random();
  const randomNumber = Math.floor(mr * menus.length);

  console.log("Math.random(): " + mr);
  console.log("randomNumber: " + randomNumber);
  console.log("menus[randomNumber]: " + menus[randomNumber]);
  menuResult.innerText = menus[randomNumber];
});
