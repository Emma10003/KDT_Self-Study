// 사용자 샘플 데이터
// DB -> Java -> 프론트엔드 로 데이터를 가져오거나
// 프론트엔드 -> Java -> DB 에서 소비자가 요청한 데이터가 존재하는지 확인
// 존재한다면 DB -> Java -> 프론트엔드 로 데이터를 전달 / 없으면 전달할 것이 없음

$(function () {
    // 로그인 버튼을 클릭했을 때 ajax를 작동!
    $("#로그인기능").click(function (e) {
        // 1. button 제출 방지
        e.preventDefault();
        const username = $("#username").val();
        const password = $("#password").val();

        $.ajax({
            url: "../json/data.json",
            method: "GET",
            dataType: "json",
            success: function (data) {
                console.log(
                    "성공적으로 json에서 가져온 데이터 확인하기: ",
                    data
                );

                /* 
                    javascript에서 [] 또는 . 으로 데이터를 주고받을 때의 차이
                    users[username] = username의 변수의 값이 admin인 속성을 찾을 때 사용.

                    users.username = 속성명이 고정된 문자열일 때 사용
                    -> users 안에 username 이라는 id가 존재하는지를 찾음

                    users[username]
                    -> users 안에 username 이라는 '변수 이름'으로 가져올 '값'이 존재하는지를 찾음

                    예를 들어 username.value 값으로 admin이 들어왔을 경우
                    users[username] -> users[admin]으로 변경되어,
                    admin과 일치하는 아이디를 검색.
                */

                // 여기서부터는 data.json의 구조를 보면서 작성해야 함!
                if (data.users[username]) {
                    // 아이디가 존재한다면
                    if (data.users[username].password) {
                        // 비밀번호도 존재한다면
                        $("#result").html( // result 부분에 {} 내의 내용 출력
                            `로그인 성공! 환영합니다. ${data.users[username].name} 님`
                        ); // .html() : (jQuery메서드)
                        //           내부에 작성된 내용을 지정한 요소에 가져옴, 태그 인식 O,
                        //           JS의 innderHTML과 동일 기능
                        $("#로그인기능").hide(); // '로그인하기' 버튼 숨김
                        $("#로그아웃기능").show(); // '로그아웃하기' 버튼 보임
                    } else {
                        // 아이디는 존재하지만, 비밀번호가 일치하지 않을 때
                        $("#result").html("일치하는 비밀번호가 없습니다.");
                    }
                } else {
                    // 아이디와 비밀번호 모두 일치하지 않을 때
                    $("#result").html("존재하는 아이디가 없습니다.");
                }
            }, // success: (데이터 가져오기 성공했을 때 함수(기능)) 끝
            error: function(){
                alert("데이터를 가져오는 데 실패했습니다.");
            }
        });
    });

    /* 로그아웃 버튼을 눌렀을 때 */
    $("#로그아웃기능").click(function(e){
        // 로그아웃을 진행할 경우
        e.preventDefault(); // button type="submit"이므로 제출 방지
            // -> 이걸 안 하는 경우 로그아웃 버튼을 누르면 창이 새로고침 됨.
        $("#로그인기능").show();
        $("#로그아웃기능").hide();
        $("#username").val("");  // 입력창에 입력된 값 초기화
        $("#password").va("");
        $("#result").html("로그아웃이 완료되었습니다.");
    })
});

