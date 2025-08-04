const result = document.getElementById("result");

/*
    opener : 팝업창을 연 창 (== 부모 창)
             팝업창(=자식 창)을 열어준 부모 창의 DOM에 접근,
                                   부모 창의 javaScript 함수를 실행하는 등
                                   부모 창 제어 가능.
             새로 열린 팝업창(=자식 창)에서 부모 창을 찾아가도록 매개해주는 연결고리.
             opener을 통해 부모창의 요소 값(value)를 사용하거나,
             opener.document.querySelector() 등을 이용해 변수 이름도 읽을 수 O
*/

// 부모 창: 23_window내장객체.html

/* readValue: 부모창 DOM의 '팝업창에서 읽어갈 값'의 input id */
const readValue = opener.document.getElementById("readValue").value;
// 여기에서 opener가 현재 자식 창인 24_팝업창.html 에서
// 부모 창인 23_window내장객체.html 에 접근할 수 있도록 해 주는 연결고리 역할을 함.

/* result: 자식창의 '부모로부터 읽어온 값' span id */
// 이 자리에 부모로부터 가져온 readValue의 값을 텍스트로 넣는다는 뜻!
result.textContent = readValue;

/* send: 자식창의 '보내고 팝업창 닫기' button id */
const send = document.getElementById("send");
/* childInput: 자식창의 '부모로 전달할 값' input id */
const childInput = document.getElementById("childInput");

// send 버튼을 누르면
send.addEventListener("click", () => {
    /* writeValue: 부모창의 '팝업창에서 작성한 값' input id */
    // 부모 창의 writeValue 값으로 childInput의 value를 넣음
    opener.document.getElementById("writeValue").value = childInput.value;

    window.close();
});

/*
자식 창에서 opener을 통해 부모 창의 요소에 접근하고 싶을 때
        opener.document.getElementById(”부모창에있는요소의id”)
    → 이런 식으로 작성함.
*/
