// 변수 선언

/*
document(문서): HTML 문서 파일 안에서 존재하는 메서드 기능들 중에서
    . 위 항목을 선택하겠다.
    getElementByID: 함수 안에서 메서드 기능으로 document를 사용해야만
                    호출할 수 있는 기능으로
                    이 기능의 역할은 Element = 요소, 태그 내부에 존재하는 것들 중에
                    개발자가 원하는 ID 값이 들어있는 요소 태그의 값을
                    가져오겠다.
    ("아이디명칭"):   요소 태그 내부에서 <input id = "아이디명칭"> 으로 존재하는
                    태그 내부의 요소를 알아보겠다.

        .value      바라만 보는 상태에서 input 내부에 클라이언트(소비자)가 작성한 값을
                    가져오기 위해서 value 를 사용
                    value 도 마찬가지로 하위 기능이기 때문에
                    단독으로 사용 불가능
                    주로 HTML 내부에 존재하는 값을 가져올 때 사용하는 명칭

*/

// 대소문자 구분할 경우
const ABC = "알파벳 ABC 대문자";
const abc = "알파벳 abc 소문자";

console.log(ABC);   // 알파벳 ABC 대문자
console.log(abc);   // 알파벳 ABC 소문자

/*
대문자로 변수이름을 작성할 경우에는 상수라는 의미로 개발자들 간의 약속.
DB연결, Email 아이디 인증키 와 같은 설정은 대문자로 작성

개발자, 소비자가 작성한 값을 주고 받는 역할을 하는 변수명칭은 소문자로 작성
 */

// 함수 내부에서 공통으로 사용하는 변수명칭은 맨 위에 작성

// script 가 포함된 HTML 문서 내부에서
// input1 이라고 작성된 id를 포함한 태그를 바라보겠다 설정.
const num1 = document.getElementById("input1");   // 여기에 .value 쓰지 X!!
const num2 = document.getElementById("input2");
const reslt = document.getElementById("계산결");

function minusFn(){
    // value 의 값은 반드시 function 기능 내부에서 가져오기를 작성해야 함.
    // 왜냐하면 HTML 화면이 보여지는 순간 value의 기본값은 0
    // 우리가 원하는 value 값은 소비자가 작성한 값을 원하는 것이기 때문에
    // 마이너스 버튼을 클릭하기 전까지 소비자가 value 값을 작성할 시간을 주어야 함
    // 소비자가 작성을 모두 완료했다면 원하는 계산기 버튼을 클릭해서
    // 계산결과값을 확인할 수 있도록 해야함
    const value1 = num1.value;
    const value2 = num2.value;
    // num1.value라는 건 num1이라는 변수 안에 담긴 값인 'document.getElementByID("input1")'을 바라보겠다는 뜻으로
    // num1.value와 document.getElementByID("input").value;는 동일한 기능을 하는 코드.

    // input 은 기본으로 글자일 수 있기 때문에
    // 글자를 숫자로 감싸는 형변환 작업 진행
    reslt.innerText = Number(value1) - Number(value2);
}

function multiFn(){
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);

    reslt.innerText = value1 * value2;
}

function divFn(){
    reslt.innerText = Number(num1.value) / Number(num2.value);
}

function modFn(){
    /* 나머지 연산(%)은 나누기 계산 시
    몫이 정수인 부분까지만 계산하고 남은 나머지 값을 출력한다.
     */
    const val1 = Number(num1.value);
    const val2 = Number(num2.value);
    reslt.innerText = value1 % value2;
}