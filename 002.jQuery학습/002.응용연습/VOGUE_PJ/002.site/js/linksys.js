// 보그 PJ 링크 시스템 JS - linksys.js ///////

$(() => { ////////// jQB ///////////////////////

    /************************************** 
        로그인, 회원가입, 갤러리 아이콘 넣기
    **************************************/
    // 대상: .sns a:last-child (마지막 카스링크)
    // 변경: 대상요소 앞에 a요소 코드를 삽입한다!
    // 메서드: before(요소) -> 선택요소 앞에 형제요소 삽입
    // -> 참고) after(요소) -> 선택요소 뒤에 형제요소 삽입
    // 선택자 :last는 제이쿼리 전용임!
    $('.sns a:last').before(`
        <a class="fi fi-laptop">
            <span class="ir">
                로그인
            </span>
        </a>
        <a class="fi fi-user-secret">
            <span class="ir">
                회원가입
            </span>
        </a>
        <a class="fi fi-camera">
            <span class="ir">
                갤러리
            </span>
        </a>
    `);
    
    ///// sns 파트 a요소들에 툴팁넣기 ////////
    $('.sns a').each((idx,ele)=>{
        $(ele).attr('title',$(ele).children('.ir').text().trim());
    });
    

    // 선택메서드 비교
    // find(요소) - 자손선택
    // children(요소) - 직계자식선택

    /************************************ 
        SNS 메뉴 파트 링크 셋팅하기
    ************************************/
    // 대상: .sns a
    $('.sns a').click(e=>{
        let ele = e.currentTarget;
        e.preventDefault();
        let atxt = $(ele).text().trim();
        // console.log(atxt);

        let url;
        switch(atxt){
            case "인스타그램":
                url = "https://www.instagram.com/VOGUEKOREA/";
                break;
            case "페이스북":
                url = "https://www.facebook.com/VOGUEkr";
                break;
            case "트위터":
                url = "https://twitter.com/VogueKorea";
                break;
            case "유튜브":
                url = "https://www.youtube.com/user/VogueKorea?sub_confirmation=1";
                break;
            case "카카오스토리":
                url = "https://story.kakao.com/ch/voguekr";
                break;
            case "로그인":
                url = "login.html";
                break;
            case "회원가입":
                url = "member.html";
                break;
            case "갤러리":
                url = "gallery.html";
                break;
        }

        if (atxt === "로그인" ||
            atxt === "회원가입" ||
            atxt === "갤러리")
            location.href = url;
        else
            window.open().location.href = url;

    });

    /************************************ 
            메인로고 링크 셋팅하기
    ************************************/
    $('.logo a').click(()=>
        location.href = 'index.html');
    
    /************************************ 
        GNB 메뉴 파트 링크 셋팅하기
    ************************************/
    // 대상: .gnb a
    $(".gnb a").click(e=>{
        e.preventDefault();

        let ele = e.currentTarget,
            txt = $(ele).text().toLowerCase().trim(); // 대문자변환 toUpperCase()

        console.log(txt);
        if(txt !== 'search')
            location.href = 'category.html?cat=' + encodeURIComponent(txt);

        // 카테고리를 구분하기 위한 파라미터 키=값 쌍을 보냄
        // cat=카테고리명
        // 이것을 받아서 페이지 셋업을 함!
        // 이렇게 데이터를 url로 전달하는 방식을 GET방식이라고 함
        // 특수문자가 있으므로 (time & gem) 이것을 보낼 때
        // encodeURIComponent()로 변환하여 보내고
        // 받는 곳에서는 decodeURIComponent()로 복원함!
    });



}); ////////////// jQB ///////////////////////