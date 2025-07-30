$(document).ready(function () {
    // ========================================
    // 여기에 jQuery 코드를 작성하세요
    // ========================================

    // 과제 1: 로그인 모달 기능 구현
    // HINT: #myPageBtn 클릭 시 #loginModal을 fadeIn(300)
    // HINT: #closeModal 클릭 시 #loginModal을 fadeOut(300)
    // HINT: 모달 배경 클릭 시에도 fadeOut (이벤트 버블링 주의!)

    $("#myPageBtn").click(function () {
        // 여기에 모달 열기 코드 작성
        $("#loginModal").fadeIn(300);
    });

    $("#closeModal").click(function () {
        // x 버튼 누르면 창이 닫힘
        // 여기에 모달 닫기 코드 작성
        $("#loginModal").fadeOut(300);
    });

    $("#loginModal").click(function (e) {
        // 여기에 배경 클릭 시 모달 닫기 코드 작성
        // HINT: e.target === this 조건 사용
        if (e.target === this) {
            $("#loginModal").fadeOut(300);
        }
        // 여기서 e.target : 사용자가 클릭한 요소
        //       this     : id="loginModal" 인 요소
        // 즉, 사용자가 loginModal 요소를 클릭했다면, {} 안의 코드가 작동하도록 함.
        /*
            (06_애니메이션.js 에 있는 내용인데 가져옴)
            modalOverlay = 모달이 존재하는 전체 화면 배경
            modal-content = 실제 모달 창
            e.target === this : modalOverlay의 배경 영역을 직접 클릭했을 때
            조건이 false인 경우는 modal-content나 그 안의 요소를 클릭했을 때.
            -> 이벤트 버블링을 막는다!
            (이벤트 버블링 : 자식요소에서 발생한 이벤트가 부모 요소로 차례차례 전달되는 현상)
        */
    });

    // 모달 내용 클릭 시 이벤트 버블링 방지
    $(".modal-content").click(function (e) {
        // 여기에 이벤트 버블링 방지 코드 작성
        /*
            둘 다 모두 모달 내부를 클릭했을 때 꺼짐 방지 설정
            - 방법 1)
            조건부로 ~~식으로 처리하겠다, 어디만 하겠다 와 같은 형식 설정 가능
            if (e.target === this){
                $("#loginModal").fadeOut(300);
            }

            - 방법 2)
            조건부 형식 설정 없이 모달 내부를 클릭했을 때 꺼짐 방지 설정
            e.stopPropagation();
            특정 행동이 전달되지 않도록 설정
        */
        e.stopPropagation();
    });

    // 과제 2: 애니메이션 탭 메뉴 구현
    // HINT: .tab-btn 클릭 시 data-tab 속성값 읽기
    // HINT: 모든 .tab-content를 slideUp(300)하고 해당 탭만 slideDown(300)
    // HINT: active 클래스도 적절히 추가/제거

    $(".tab-btn").click(function () {
        // 여기에 탭 메뉴 코드 작성
        const selectTab = $(this).data("tab"); // 여기서 this == class=tab-btn인 요소(버튼임)
        console.log("확인: ", $(this).data("tab"));
        $(".tab-btn").removeClass("active");
        $(this).addClass("active"); // 누른 탭에만 active 클래스 추가

        $(".tab-content").slideUp(300); // 모든 tab-content(탭 눌렀을 때 나오는 내용)을 모두 올려놓고
        $("#" + selectTab).slideDown(300); // 선택한 탭에 해당하는 tab-content만 내림
        /*
            여기에서 $(this).data("tab");이 의미하는 것
            =============================================================
            -------------------------------------------------------------
            <div class="tab-menu">
                <button class="tab-btn active" data-tab="web">
                    웹 개발
                </button>
            </div>
            <div id="web" class="tab-content active">
                <h3>💻 웹 개발 서비스</h3>
                <p>
                    최신 기술을 활용한 반응형 웹사이트 개발 서비스를
                    제공합니다.
                </p>
                <p>
                    React, Vue.js를 활용한 SPA 개발과 Node.js 백엔드 시스템
                    구축이 가능합니다.
                </p>
            </div>
            -------------------------------------------------------------
            html 문서는 이런 식으로 되어 있음.
            예를 들어 '웹 개발' 탭을 클릭하면
            .data("tab")은 data- 뒤에 "tab"이 있는 항목을 찾아가서,
                           그 속성의 속성값인 "web"을 가리킨다.
                => 이 때 selectTab에는 "web"이 담겨있다. (console.log()로 확인)
            =============================================================
            $("#" + selectTab).slideDown();이 의미하는 것
            위에서 selectTab에는 "web"이 담겨있게 된다고 했는데, 해당 탭의 콘텐츠를
            보기 위해서는 id="web"인 <div> 요소와 연결해야 한다.
            따라서 id의 css 선택자인 "#" + selectTab 로 선택자를 만든 것.
                => 즉, $("#" + selectTab) = $("#web") 인 상태.
        */
    });

    // 과제 3: 3D 카드 플립 효과 구현
    // HINT: .card 클릭 시 toggleClass("flipped")
    // HINT: CSS는 이미 작성되어 있음

    $(".card").click(function () {
        // 여기에 카드 플립 코드 작성
        $(this).toggleClass("flipped");  // $(".card").toggleClass("flipped"); -> 모든 카드가 한 번에 뒤집힘
                                         // 선택한 카드만 뒤집기 위해서는 this로 현재 선택한 요소를 받아줘야 함.
                                         // 여기서 this == 사용자가 선택한 class="card"인 <div> 요소.
        console.log("this : ", $(this)); // div.card.flipped, 다시 누르면 div.card 로 상태 변경.
    });

    // 추가 기능: 폼 제출 처리 (선택사항)
    $("#loginForm").submit(function (e) {
        e.preventDefault();
        alert("로그인 기능은 데모용입니다!");
    });

    // 기타 네비게이션 버튼들
    $("#homeBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $("#contactBtn").click(function () {
        alert("📞 연락처: contact@thejoheunnara.com");
    });
});
