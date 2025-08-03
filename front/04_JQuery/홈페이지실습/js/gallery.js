// 1. 강아지 사진을 클릭하지 않아도 랜덤으로 1장 보이게 설정
// https://api.thecatapi.com/v1/images/search
// https://dog.ceo/api/breeds/image/random = 1장
// 결과: <img src="">

// 어디서든 현재페이지를 확인할 수 있도록 전역변수 설정
let 현재페이지 = 1;

$(function () {
    randomDog();
    $("#dogResult").click(randomDog);

    getCats();

    // 페이지네이션 버튼 이벤트
    $("#prevBtn").click(function () {
        if (현재페이지 > 1) {
            현재페이지--;
            getCats();
        } else {
            alert("첫 번째 페이지입니다.");
        }
    });

    $("#nextBtn").click(function () {
        현재페이지++;
        getCats();
    });
});

function randomDog() {
    $.get("https://dog.ceo/api/breeds/image/random").done(function (data) {
        $("#dogResult").html(
            `
                <img src="${data.message}">
                `
        );
    });
}

function getCats() {
    $.get("https://api.thecatapi.com/v1/images/search?limit=10").done(function (
        data
    ) {
        // 이미지 10장을 불러오기 위해 .map()으로 리스트 만들기
        // 현재 data는 요소가 10개 들어있는 리스트 형식.
        const catList = data
            .map(
                (cat) => `
            <div class="cat-card">
                <img src="${cat.url}"
                    class="cat-detail"
                    onclick="showFullImg('${cat.url}')">
            </div>
            `
                /*
            data를 cat으로 받아서 각각의 데이터에
            `` 안의 html 코드를 적용.
            onclick :
            // 고양이 이미지를 클릭하면 showFullImg() 함수가 실행되면서 모달이 앞으로 나옴
            */
            )
            .join(""); // 사진 사이에 나오는 콤마(,) 삭제
        $("#catResult").html(catList);
        /*
        cat-card 클래스가 적용되어 있고, cat-detail 클래스가 적용된 이미지들 리스트가
        catResult 화면에 뜸.
        모든 사진이 onclick="showFullImg('${cat.url}')"이 적용되어 있기 때문에
        각각의 사진들을 클릭하면 showFullImg가 호출되면서
        확대된 이미지가 화면 가장 앞으로 나옴 (모달).
        */
    });
}

// 이미지 클릭 시 큰 이미지로 보여주기
function showFullImg(imageUrl){
    // .prepend() : 선택한 요소의 맨 앞에 새로운 요소(태그)를 추가
}