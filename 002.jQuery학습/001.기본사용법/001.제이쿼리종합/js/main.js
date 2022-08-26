// 제이쿼리 기본 JS - main.js 
// html이 모두 로딩 후 실행구역
$(()=>{ ///// jQB /////
    // JS에서 제일 중요한 것은? → 요소선택!
    // JS에서 편리한 요소선택법은?
    // document.querySelector() / document.querySelectorAll()

    // 제이쿼리 함수호출법
    // jQuery() → $() 축약형을 많이씀!
    // 선택법: $(선택자) → 하나하나 달러에 넣으면 메모리 낭비이므로 변수에 담는다!

    // 1. 대상선정 변수할당
    // 대상1: 주인공 미니언즈 선택(변수할당!)
    let mi = $(".mi");
    // 대상2: 버튼들
    let btns = $(".btns button");
    // 대상3: 빌딩각방
    let bd = $(".building li");
    // 대상4: 메시지박스
    let msg = $(".msg");

    // 2. 초기화 셋팅하기
    // 2-1. 버튼 셋팅: 모든 버튼 다 숨기고 첫번째만 보이게하기
    btns.hide().first().show();
    // 버튼들.숨겨라().첫번째().보여라()

    // 주사기, 좀비 코드 변수에 담기
    // 주사기
    let inj = '<img src="images/inj.png" alt="주사기" class="inj">';
    // 좀비1, 2, 좀비들
    let mz1 = '<img src="images/mz1.png" alt="좀비1" class="mz">',
        mz2 = '<img src="images/mz2.png" alt="좀비2" class="mz">',
        zom = '<img src="images/zom.png" alt="좀비들" class="mz">';

    // 2-2. 빌딩숫자 셋팅
    // → 모든 빌딩 li를 순서대로 돌면서
    // 순번넣기 + 좀비, 주사기 넣기
    // 대상: 빌딩 li → bd변수
    bd.each((idx,ele)=>{
        // 1. 각 li 요소에 글자순번 넣기
        $(ele).text(idx);
        // text()는 글자넣기/읽기 메서드

        //2. 좀비 + 주사기 넣기
        // 뒤에 코드 넣기는 append() 메서드 사용
        if(idx === 2) $(ele).append(inj);
        else if(idx === 9) $(ele).append(mz1);
        else if(idx === 7) $(ele).append(mz2);
        else if(idx === 1) $(ele).append(zom);
    }); ///// each /////
    /*
        [for문을 쓰지 않고 돌게 해주는 제이쿼리 메서드]
        → each(function(idx,ele){})
        → each((idx,ele)=>{})

        - 요소를 순서대로 돌면서 구현부를 실행함
        - 첫번째 전달변수 idx: 순번이 전달됨(0부터)
        - 두번째 전달변수 ele: 각각의 요소가 전달됨
        (비교) forEach((ele,idx)=>{})
    */

    // 2-3. 모든 좀비 숨기기
    $(".mz").hide();
    // 선택요소가 여러개이면 for문을 써야하지만 제이쿼리는 자동으로 모두 셋팅해준다!

    // 미니언즈 공통기능함수
    const miniAct = (ele,seq)=>{ // ele 버튼자신, seq 이동할 li순번
        $(ele).slideUp(400);

        // 미니언즈가 몇번방으로 이동하기
        // 8번방 li 위치 알아오기
        let posT = bd.eq(seq).offset().top,
            posL = bd.eq(seq).offset().left;
        console.log("top:",posT,"\nleft:",posL);
        // eq(순번) 해당 순번요소 선택
        // offset() 메서드: 요소의 크기, 위치 등 정보제공
        // offset().top → 맨 위에서 부터 top값
        // offset().left → 맨 왼쪽에서 부터 left값
        mi.animate({
            top:posT + "px",
            left:posL + "px"
        }, 1000, "easeInOutElastic",
        ()=>{ // 애니 후 실행함수
            // 다음 버튼 보이기
            $(ele).next().slideDown(400);
        }); ///// animate /////
    }; /////  miniAct 함수 /////

    /*
        3. 버튼별 클릭 이벤트 함수 만들기
    */
    // 3-1. "들어가기" 버튼 클릭시
    btns.first().click((e)=>{
        // 클릭된 버튼 자신 사라지기
        // 원래는 this가 자기자신이지만
        // 화살표함수 내부에서는 event.currentTarget 이다!
        // e는 클릭메서드 전달변수로 이벤트를 받는다!
        
        // 미니언즈 공통함수 호출!
        miniAct(e.currentTarget, 8);
        // miniAct(버튼자신,이동할li순번)

        /*
        $(e.currentTarget).slideUp(400);

        // 미니언즈가 8번방으로 이동하기
        // 8번방 li 위치 알아오기
        let posT = bd.eq(8).offset().top,
            posL = bd.eq(8).offset().left;
        console.log("top:",posT,"\nleft:",posL);
        // eq(순번) 해당 순번요소 선택
        // offset() 메서드: 요소의 크기, 위치 등 정보제공
        // offset().top → 맨 위에서 부터 top값
        // offset().left → 맨 왼쪽에서 부터 left값
        mi.animate({
            top:posT + "px",
            left:posL + "px"
        }, 1000, "easeInOutElastic",
        ()=>{ // 애니 후 실행함수
            // 다음 버튼 보이기
            $(e.currentTarget).next().slideDown(400);
        });
        */
    }) ///// 1번 버튼 click /////

    /*
        [slideUp(시간,이징,함수)]
        - 높이값이 0되면서 애니메이션
        - 마지막에 display:none처리!
        [slideDown(시간,이징,함수)]
        - display를 보이게 한 후 높이값이 원래값을 복원 애니메이션
    */

    // 3-2. "옆방으로!" 버튼 클릭시
    // next() 선택요소의 다음 형제요소
    // 앞의 버튼 다음 버튼임!
    .next().click((e)=>{
        miniAct(e.currentTarget, 9);
        // miniAct(버튼자신,이동할li순번)
    })
    .next().click((e)=>{
        miniAct(e.currentTarget, 7);
    })
    .next().click((e)=>{
        miniAct(e.currentTarget, 6);
    })
    .next().click((e)=>{
        miniAct(e.currentTarget, 4);
    })
    .next().click((e)=>{
        miniAct(e.currentTarget, 2);
    })
    .next().click((e)=>{
        miniAct(e.currentTarget, 3);
    })
    .next().click((e)=>{
        miniAct(e.currentTarget, 1);
    })
    .next().click((e)=>{
        miniAct(e.currentTarget, 0);
    })
        
    /*
        [제이쿼리 애니메이션 메서드]
        animate({css설정},시간,이징,함수)
        - CSS는 속성:값 객체형식을 사용
        - 시간은 1/1000초 단위없이 사용
        (시간을 안쓰면 기본시간 400이 적용됨 0.4초)
        - 이징은 가속도 (제이쿼리UI가 있어야 적용됨!)
        (참조: https://easings.net/ko)
        - 함수는 애니메이션 후 실행코드(콜백함수)

        [제이쿼리 CSS변경 메서드]
        $(선택자).css({
            속성1:값,
            속성2:값,
            속성3:값
        });

        JS와 비교:
        선택자.style.속성1 = 값;
        선택자.style.속성2 = 값;
        선택자.style.속성3 = 값;
    */
}); ///// jQB /////