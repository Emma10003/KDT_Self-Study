// 화면에 존재하는 key 모두 가져오기
const key = document.querySelectorAll(".key"); // key Class 4개를 모두 가져와서 key에 저장. -> 배열로 저장됨.
/*
    .querySelectorAll() : HTML 문서나 특정한 요소 내에서 지정한 CSS 선택자와 일치하는 모든 요소 반환.
    document.querySelectorAll("key");  ->> HTML 문서 내에서 모든 key 요소를 찾음
     * 특정한 요소 내에 있는 요소를 찾기 위해서는 querySelector()를 사용
    ".key" -> 앞에 '.'이 붙은 건 key가 클래스(Class)이기 때문. CSS선택자에서 클래스는 '.클래스명'으로 표기한다.

    ex)
    [HTML]
    <div class="container">
        <p>자손 요소입니다.</p>
    </div>
    
    [JavaScript]
    let container = document.querySelector(".container");   -> 특정한 요소 객체
    let matches =  document.querySelectorAll("p");   -> 특정한 요소 객체 내에서 요소 찾기
        * document.querySelectorAll(".container p"); 와 동일한 반환값.

    (링크: https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-queryselectorall-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%EB%B2%95/)
*/
/*
    [CSS 선택자]
    태그:    tag        ex) p
    id:     #id        ex) #password        * id는 하나의 요소에 하나의 id만 부여할 수 O, 중복불가
    class:  .class     ex) .key
    전체 선택자: *                            페이지의 모든 요소를 가리키는 선택자.
    하위 선택자: 공백으로 분리   ex) .red p     요소 내부에 있는 모든 해당 요소
    (그 외에 자식선택자, 인접선택자, 형제선택자 등등 많다..)
*/

// 특정 요소 X
// 문서(화면 전체)에서 키가 눌러지는 걸 감지했을 때
document.addEventListener("keydown", function (e) {
  // e    : 이벤트 객체 (이벤트 관련 정보가 모두 담겨 있음)
  // e.key: 입력된 키(를 바라봄)

  // 문자열.toLowerCase() : 영어 모두 소문자로 변경
  // 문자열.toUpperCase() : 영어 모두 대문자로 변경
  // index = 0 번째 부터 시작, 마지막은 -1 한 숫자값
  // length = 총 글자 수와 같은 길이 수

  let idx; // 인덱스 값을 저장할 변수 이름 -> idx는 값이 변경될 수 있으므로 let으로 선언

  // 입력된 키와 일치하는 case를 실행

  switch (e.key.toLowerCase()) {
    case "q":
      idx = 0;
      break;
    case "w":
      idx = 1;
      break;
    case "e":
      idx = 2;
      break;
    case "r":
      idx = 3;
      break;
    default: // 각각의 case에서 break 안 하면 case문 실행 후 default로 넘어옴.
      alert("준비중입니다.");
      return;
  }
  console.log("key: ", key); // 콘솔 창에서 key가 뭘로 나오는지 확인
  key[idx].style.color = "#2a9d8f";
});

/*
    console.log("key: ", key); 실행결과
    key: NodeList(4) [div.key, div.key, div.key, div.key]
*/

// keyup 글자색 변경qq
document.addEventListener("keyup", function (e) {
  let idx;

  switch (e.key.toLowerCase()) {
    case "q":
      idx = 0;
      break;
    case "w":
      idx = 1;
      break;
    case "e":
      idx = 2;
      break;
    case "r":
      idx = 3;
      break;
    default:
      alert("준비중입니다.");
      return;
  }
  key[idx].style.color = "#333"; // 키에서 손을 떼면 #333(원래 색상)으로 바뀜.
});
