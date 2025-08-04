// 개별 사용자가 입력한 아이디와 비밀번호를 확인하는 페이지

$(function () {
    // localStorage 에서 데이터 가져오기 : .getItem()
    // .setItem("", "") 안에서 첫 번째 파라미터 명칭을 그대로 작성해야 함!!!
    // .setItem("username", username); <- 이 부분
    const username = localStorage.getItem("username");
    const userpw = localStorage.getItem("userpw");

    // 데이터가 있으면 표시
    // 아이디
    if (username) {
        $("#result-id").text(username);
    } else {
        $("#result-id").text("회원가입에서 작성한 아이디를 찾을 수 없습니다.");
    }
    // 비밀번호
    if (userpw) {
        $("#result-pw").text(userpw);
    } else {
        $("#result-pw").text(
            "회원가입에서 작성한 비밀번호를 찾을 수 없습니다."
        );
    }
});
