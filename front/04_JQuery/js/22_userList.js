$(function () {
    showUsers();
    $("#clear-all").click(deleteAllUsers);
});

function showUsers() {
    // 기존 회원목록 가져오기 (없으면 빈 배열 형태)
    let userList = JSON.parse(localStorage.getItem("userList") || "[]");

    // 사용자가 존재한다면 map 사용해서 HTML 로 소비자가 유저 리스트 목록을 확인할 수 있도록 설정
    const userHTML = userList.map(
        (u) => `
        <div class="user-item">
            <div class="user-id">아이디 : ${u.username}</div>
            <div class="user-pw">비밀번호 : ${u.password}</div>
        </div>
        `
    );

    // userHTML 에 저장된 목록 user-list에 출력
    $("#user-list").html(userHTML);
}

// 모든 회원정보 삭제 함수
function deleteAllUsers(e) {
    // 클릭 이벤트가 있을 때 작동하는 함수이므로 이벤트 변수인 e 있어야 함.
    e.preventDefault();

    if (confirm("모든 회원정보를 삭제하시겠습니까?")) {
        // '확인' (true)
        localStorage.removeItem("userList");
        alert("모든 회원정보가 삭제되었습니다.");
        location.reload(); // 새로고침
    }
}
