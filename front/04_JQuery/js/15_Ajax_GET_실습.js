/* 버튼 클릭했을 때 함수 실행 */
$(function() {
    $("#btn1").click(getText);
    $("#btn2").click(userInfo);
})
/* 문제 1: 기본 텍스트 가져오기 */
// https://jsonplaceholder.typicode.com/posts/1
function getText(){
    $.get("https://jsonplaceholder.typicode.com/posts/1")
    .done(
        function(data){
            $("#result1").html(
                `
                <div class="success">
                    <strong>게시물 제목: </strong>${data.title} <br><br>
                    <strong>게시물 내용: </strong>${data.body}
                `
            )
        }
    )
}

/* 문제 2: 사용자 정보 가져오기 */
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/users/{userId}
function userInfo(){
    const ui = $("#userId").val();  // 사용자가 작성한 값 -> 숫자 타입.
    $.get(`https://jsonplaceholder.typicode.com/users/${ui}`)
    .done(
        function(data){
            // 만약 api에 제대로 접속했다면
            if(!data.id || !data){
                // 만약 data.id를 찾을 수 없거나, data를 제대로 가져오지 못한 경우
                $("#result2").html(
                    `<div class="error">해당 사용자를 찾을 수 없습니다.</div>`
                );
                return;  // 까먹지 말자 리턴,,, 이 아래 기능을 사용하지 못하도록 돌려보내기
            }

            // 성공적으로 data.id를 찾은 경우
            $("#result2").html(
                `
                <div class="success">
                    <strong>이름 : </strong>${data.name}<br>
                    <strong>이메일 : </strong>${data.email}<br>
                    <strong>전화번호 : </strong>${data.phone}<br>
                </div>
                `
            )
        }
    )
    .fail(
        // 아예 api 접근 자체가 불가능한 경우
        function(){
            $("#result2").html(
                `
                <div class="error">
                    해당 사용자를 찾을 수 없습니다. (404 error 발생)
                    주소 자체 접속이 안 되는 상황
                </div>
                `
            )
        }
    )


}

