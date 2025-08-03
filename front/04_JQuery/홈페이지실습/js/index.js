$(function () {
    // .click() 내부에 함수를 작성할 때: 기능명칭만 작성하고 ()는 제외
    // 특별히 메서드 내부에 함수를 작성하지 않고, 단독으로 함수를 작성할 때는
    // 기능명칭();      형태로 작성
    // 로그아웃 버튼이 html에 존재한다는 가정
    $("#loginBtn").click(loginCheck);
    $("#logoutBtn").click(logoutCheck);
});

function loginCheck() {
    // 1. html 내부에 소비자가 작성한 값을 가져오기 위해 .val() 메서드 활용
    const username = $("#username").val(); // 아이디 input에 입력한 값
    const password = $("#password").val(); // 패스워드 input에 입력한 값

    // username 또는 password에 아무것도 적혀있지 않다면
    // loginResult 공간에 '아이디와 비밀번호를 입력하세요.' 출력
    //      class="error"
    if (!username || !password) {
        $("#loginResult").html(
            `
            <div class="error">아이디와 비밀번호를 입력하세요</div>
            `
        );
        return;
    }

    $.get("../json/userInfo.json").done(function (data) {
        // get을 이용해 json에 해당하는 username과 password가 일치하는지 확인
        // username과 password가 json 파일의 정보와 일치한다면
        if (
            data.users[username] &&
            data.users[username].password === password
        ) {
            // 1. 로그인 버튼 -> 로그아웃 버튼으로 변경
            $("#loginBtn").hide();
            $("#logoutBtn").show();
            // 2. 아이디/비밀번호 입력란 숨김처리
            $(".form-group").hide();
            // 3. loginResult 자리에 '로그인 성공! {username}님, 환영합니다' 출력
            //      class="success"
            $("#loginResult").html(
                `
            <div class="success">
                <p><strong>로그인 성공!</strong></p>
                <p>${username}님, 환영합니다.</p>
            </div>

            `
            );
        } else {
            // 그렇지 않다면
            // '아이디 또는 비밀번호가 일치하지 않습니다.' 출력
            $("#loginResult").html(
                `
                <div class="error">아이디 또는 비밀번호가 일치하지 않습니다.</div>
                `
            );
        }
    });
}

function logoutCheck() {
    // 1. 입력필드 초기화
    $("#username").val("");
    $("#password").val("");
    // 2. 아이디/비밀번호 입력란, 버튼 원래대로 복구
    $(".form-group").show();
    $("#logoutBtn").hide();
    $("#loginBtn").show();
    // 3. 로그아웃 메세지 표시
    $("#loginResult").html(
        `
        <div class="success">로그아웃이 완료되었습니다.</div>
        `
    );
    // 4. 1초 후에 로그아웃 메세지 사라지게 하기
    setTimeout(function () {
        $("#loginResult").html("");
    }, 1000);
}
