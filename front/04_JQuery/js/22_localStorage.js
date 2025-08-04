$(function () {
    $("a").click(signUp); // a 태그 클릭하면 함수 작동
});

function signUp(e) {
    e.preventDefault(); //기본 링크 동작 방지

    // 입력값 가져오기
    const username = $("#username").val();
    const userpw = $("#userpw").val();

    let userList = JSON.parse(localStorage.getItem("userList") || "[]");
    /*
        ↑ 위의 코드 설명
        1. localStorage 에는 문자열만 저장될 수 있음.
            localStorage.getItem("userList") 으로 가져온 데이터는 문자열로 이루어진 json 형태.
            이걸 javascript에서 사용하기 위해서는 배열, 리스트 형식으로 변환해야 함.
        2. JSON.parse() -> json 형식의 문자열을 배열, 리스트 형식으로 변환하는 메서드.
        3. 기존에 userList 안에 값이 존재한다면 userList를, 아니라면 빈 배열을 userList 변수에 저장
    */

    // 새 회원 정보를 담을 json 형태의 배열 생성
    // 생성자 객체 정의
    const newUser = {
        username: username,
        password: userpw,
    };

    // .push() : 브라우저에서 저장된 리스트가 있든 없든 저장. 이어붙이기
    userList.push(newUser);
    // 새로 추가한 리스트를 다시 localStorage에 저장
    localStorage.setItem("userList", JSON.stringify(userList)); // localStorage에 저장할 때는 문자열로!

    // result.html 에서 개별 사용자가 본인이 회원가입을 무사히 했는지 확인하기 위한 변수이름 저장형태
    localStorage.setItem("username", username);
    localStorage.setItem("userpw", userpw);

    // result.html 페이지로 이동
    window.location.href = "22_result.html";
}
