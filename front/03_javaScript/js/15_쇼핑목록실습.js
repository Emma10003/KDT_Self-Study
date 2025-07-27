// const 명칭 = itemInput, addBtn, shoppingList
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shopping-list");

// 쇼핑 목록을 저장할 배열
const items = [];

// 상품 추가 함수
function addItem() {
  const itemName = itemInput.value.trim();

  // 빈 값 체크
  if (itemName === "") {
    alert("상품명을 입력하세요.");
    return;
  }
  // 배열에 상품 추가
  items.push(itemName); // items 배열에 사용자가 입력한 itemName을 추가하는 기능인 듯? (append()같은 느낌)

  // 화면에 목록 표시
  let listText = "🛒 쇼핑 목록: \n\n";
  // 왜 let으로 변수 선언? -> for문 안에서 listText에 item 배열의 요소를 하나씩 추가할 것이기 때문.

  for (let i = 0; i < items.length; i++) {
    listText += `${i + 1}. ${items[i]}\n`;
  }
  shoppingList.textContent = listText; // shoppingList 자리에 listText가 출력되기 위해 필요한 코드!

  itemInput.value = ""; // 입력창 비우기
  itemInput.focus();
}

// 버튼 클릭 이벤트
addBtn.addEventListener("click", addItem); // addItem()으로 하면 작동을 안 함. 왜지..?

// 엔터키 이벤트
itemInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
