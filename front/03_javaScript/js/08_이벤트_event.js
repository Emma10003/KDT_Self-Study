const btnE = document.getElementById("btn-e");
const btnEvent = document.getElementById("btn-event");
const result1 = document.getElementById("result1");

// 0. 매개변수(=파라미터)의 값을 e나 event 이외의 명칭으로
// 작성 가능하지만 개발자들 간의 약속 명칭으로 e나 event 사용

// 1. e 로 작성한 방법
btnE.addEventListener("click", function (e) {
  result1.textContent = `e 사용 - 이벤트 타입: ${e.type},
    클릭된 요소: ${e.target.textContent}
    `; // 버튼을 눌렀을 때 출력될 결과
});
// e.type -> 해당 자리에 addEventListener()의 첫 번째 파라미터(type)가 출력됨 (결과: click)

// 2. event 로 작성한 방법
btnEvent.addEventListener("click", function (event) {
  result1.textContent = `event 사용 - 이벤트 타입: ${event.type},
    클릭된 요소: ${event.target.textContent}
    `;
});

// ------------------------------------------------------------------------------------

// 예제 2: target 활용하기
// 버튼 A를 클릭했을 때 버튼 A에 대한 요소를 result2에 출력
// textContent 줄바꿈 처리 방법: /n 과 <br> 태그가 아니라 \n 사용!
//                             css에 'white-space:pre-line'을 추가해야 \n이 작동한다.
const btnA = document.getElementById("btn-A"); // html과 js를 연결해주는 중간 역할
const btnB = document.getElementById("btn-B");
const btnC = document.getElementById("btn-C");
const result2 = document.getElementById("result2");

btnA.addEventListener("click", function (e) {
  result2.textContent = ` 태그: ${e.target.tagName}
    내용: ${e.target.textContent}
    ID명칭: ${e.target.id}
    Class 명칭: ${e.target.className}
    `;
});
/*
[출력 결과]
태그: BUTTON        -   > html에서 클릭 이벤트가 발생한 해당 요소의 태그(tag, <>)를 출력
                         btnA는 id가 'btn-A'인 요소가 저장된 변수이므로, html에서 btn-A를 감싼 요소의 태그 <button>이 출력됨.
내용: 버튼A             -> html에서 해당 요소의 내용 (<button> 버튼A <button>)을 출력
ID명칭: btn-A           -> html에서 해당 요소의 id를 출력
Class 명칭: target-btn  -> html에서 해당 요소의 Class를 출력
 */

btnB.addEventListener("click", function (e) {
  result2.textContent = `태그: ${e.target.tagName}
    내용: ${e.target.textContent}
    ID명칭: ${e.target.id}
    Class 명칭: ${e.target.className}
    `;
});

/*
span 태그 내부 id 명칭 btn-C 생성
btn-C라는 명칭으로 span 태그를 클릭했을 때
span 태그의 내용, ID명칭, Class 명칭 확인 설정
 */
btnC.addEventListener("click", function (e) {
  result2.textContent = `태그: ${e.target.tagName}
    내용: ${e.target.textContent}
    ID명칭: ${e.target.id}
    Class 명칭: ${e.target.className}
    `;
});

// ------------------------------------------------------------------------------------

// 예제 3: value 활용
const textInput = document.getElementById("text-input"); // text-input과 연결
const numberInput = document.getElementById("number-input"); // number-input과 연결
const selectInput = document.getElementById("select-input"); // select-input과 연결
const result3 = document.getElementById("result3");

// 텍스트 입력이 감지되었을 때 진행할 기능 설정
textInput.addEventListener("input", function (e) {
  result3.textContent = `e를 보고싶어: ${e}
  target을 보고싶어: ${e.target}
  텍스트 입력값: ${e.target.value}
  글자수: ${e.target.value.length}
  `;
});
/*
[출력 결과]
'안녕안녕'을 입력했을 때:
텍스트 입력값: 안녕안녕
글자수: 4

+) 그냥 ${e}를 출력했을 때는 [object InputEvent]가 출력됨.
+) 그냥 ${e.target}을 출력했을 때는 [object HTMLInputElement]가 출력됨.

addEventListner에서 function(e)이 있는 파라미터 자리는 
'이벤트 핸들러', 즉 이벤트가 발생했을 때 실행되는 함수가 입력되는 자리.
e 는 이벤트 객체인데, > 발생한 이벤트에 관련된 다양한 정보를 담은 < 이벤트 객체를 만들어 addEventListner에 전달한다.
                        -> 발생한 이벤트에 관한 정보를 담고 있는 property와       이벤트 흐름 등을 제어하는 메소드가 담겨 있음.
                          : type, target, currentTarget, defaultPrevented           preventDefault()  등
*/

// 숫자 입력이 감지되었을 때 숫자 입력값과 숫자 수를 result3에서 보여주기
numberInput.addEventListener("input", function (e) {
  result3.textContent = `숫자 입력값: ${e.target.value}
  글자수: ${e.target.value.length}
  `;
});

// select 에서 선택한 옵션을 클릭해서 변경할 때 변경된 값 보여주기
selectInput.addEventListener("change", function (e) {
  result3.textContent = `
  선택된 값: ${e.target.value}
  선택된 값의 글자수: ${e.target.value.length}
  선택된 값의 순서: ${e.target.selectedIndex}
  `; // e.target.value가 읽는 값은 html 문서에서 <option> 태그의 value 변수의 값. (개발자가 사용하기 위한 값!)
});

// ------------------------------------------------------------------------------------

// 예제 4: 종합 활용
const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const userPw = document.getElementById("userPw");
const result = document.getElementById("result4");

loginForm.addEventListener("submit", function (e) {
  // 반드시 preventDefault() 뒤에 소괄호 붙이기!!
  /*
    함수(=기능, 행동) 내부에 메서드(=기능, 행동) 존재.
    메서드는 특정 행동 - 함수는 단독 사용 O, 메서드는 함수 뒤에 '.'을 붙여서 쓴다.

    소괄호를 붙임: 동사(행동)
    소괄호를 안 붙임: 명사(단순히 보여줌)

    변수이름.메서드행동기능함수명칭() = 동사
    변수이름.명칭                 = 명사
   */
  e.preventDefault(); // 실제 폼 제출 우선 멈춤
  result4.textContent = `
  사용자 이   름: ${username.value}
  사용자 비밀번호: ${userPw.value}
  `;
});
