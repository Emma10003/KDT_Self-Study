// const 명칭 = num1, num2, operator, calculateBtn, calcResult
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calculateBtn = document.getElementById("calculateBtn");
const calcResult = document.getElementById("calc-result");

// calculateBtn 클릭 이벤트 설정
calculateBtn.addEventListener("click", function (e) {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  const op = operator.value;

  if (num1.value === "" || num2.value === "") {
    calcResult.textContent = "숫자를 입력하세요.";
    return;
  }

  let result; // 결과를 담을 변수를 설정해야 함.

  // (operator.value) -> 위에서 'const op = operator.value;로 담아놨기 때문에 op로 쓰면 됨.
  switch (op) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      if (number2 === 0) {
        calcResult.textContent = "0으로 나눌 수 없습니다.";
        return;
      }
      result = number1 / number2;
      break;
  }

  calcResult.textContent = `${number1} ${op} ${number2} = ${result}`;
});
// 입력값 가져오기 (숫자로 변환)
// const number1 = Number(num1.value);
// const number2 = Number(num2.value);
// const op = operator.value;

// 빈 값 체크
// if (num1.value === "" || num2.value === "") {
//     calcResult.textContent = "숫자를 입력하세요.";
//     return;
// }

// switch문으로 연산자에 따라 계산
// case "+": result = number1 + number2; break;
// case "-": result = number1 - number2; break;
// case "*": result = number1 * number2; break;
// case "/":
//     if (number2 === 0) {
//         calcResult.textContent = "0으로 나눌 수 없습니다.";
//         return;
//     }
//     result = number1 / number2;
//     break;

// 결과 출력
// calcResult.textContent = `${number1} ${op} ${number2} = ${result}`;
