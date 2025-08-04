const display = document.querySelector("#display");
const list = document.querySelectorAll("#display > span");
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#record-container");

let count = 0; // 1/100 초마다 1씩 증가한 값을 저장할 변수

// 1/100 초 : count % 100

// 1     초 : count / 100 % 60
// 1     분 : count / 100 / 60

let currInterval; // 인터벌 저장 변수이름

// StartBtn 클릭 시 10ms 마다 display(시간)을 증가
startBtn.addEventListener("click", (e) => {
    if (e.target.textContent == "PAUSE") {
        e.target.textContent = "START"; // 버튼 내용을 START로 변경
        window.clearInterval(currInterval); // currInterval 정지 처리
        return;
    }

    // 클릭한 버튼이 START
    currInterval = window.setInterval(() => {
        count++;
        output();
    }, 10);

    e.target.textContent = "PAUSE";
});

// ------------------------- 여기부터는 코드 가져옴 --------------------------

/* 시계 출력 함수 */
function output() {
    let minute = Math.floor(count / 100 / 60);
    let second = Math.floor((count / 100) % 60);
    let ms = count % 100;

    // 0 붙여서 문자열로 변환해서 반환
    minute = attachZero(minute);
    second = attachZero(second);
    ms = attachZero(ms);

    // minute의 값과 화면에 출력된 분이 다를 경우
    if (list[0].innerText != minute) list[0].innerText = minute;

    // second의 값과 화면에 출력된 초가 다를 경우
    if (list[1].innerText != second) list[1].innerText = second;

    list[2].innerText = ms;
}

/* 한 자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attachZero(num) {
    if (num < 10) {
        // 한 자리 숫자인 경우
        return "0" + num;
    }
    return "" + num;
}

/* RESET 버튼이 클릭 되었을 때 */
resetBtn.addEventListener("click", () => {
    // currInterval 제거
    window.clearInterval(currInterval);

    // count, 출력된 시간 모두 0으로
    count = 0;
    output();

    // start 버튼 활성화 ( == 비활성화 안하겠다)
    //startBtn.disabled = false;

    // START 버튼의 내용을 "START"로 변경
    startBtn.textContent = "START";

    // #recordContainer의 내용을 모두 삭제(== 빈 문자열로 변경)
    recordContainer.innerHTML = "";
});
// -------------------------- 여기까지 코드 가져옴 ---------------------------

recordBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerText = display.innerText;

    recordContainer.prepend(li);
});
