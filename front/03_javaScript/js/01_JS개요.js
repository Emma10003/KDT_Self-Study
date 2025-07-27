/*
모든js파일명.js확장자명
          *.js 파일 내부를 <script> 태그 내부라고 보면 됨
어떤 특정 js파일 명칭인지 알 수 없으므로 * 어떠한 이라는 표기를 작성한 것임

 */

function externalFn() {
  alert("HTML 외부 파일에 작성된 externalFn() 함수 기능 호출되었습니다.");
}

/* JS 맛보기 */
// 버튼 클릭 시 body 태그의 글자색, 배경색을 변경

const body = document.querySelector("body"); // 웹 페이지 문서 내에서.선택할 것(바디태그를)

/* 버튼에 장착된 기능 실행하면 다크모드로 바꾸는 기능(함수) 설정 */
function 어두움모드() {
  body.style.color = "white";
  // body 태그 안에 존재하는 스타일에서 글자색상을 흰색으로 변경하겠다.
  body.style.backgroundColor = "black";
  // body 태그 안에 존재하는 스타일에서 배경색상을 검정색으로 변경하겠다.
}
/* 버튼에 장착된 기능 실행하면 라이트모드로 바꾸는 기능(함수) 설정
      글자색상 = 검정 배경색상 = 흰색
      */
function 밝음모드() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
}