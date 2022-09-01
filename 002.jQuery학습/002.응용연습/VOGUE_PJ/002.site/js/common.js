// 보그 PJ 공통 기능 JS - common.js
$(()=>{
    $("main.cont > section:first~section").addClass("scAct");
    let scTop,
        scAct = $(".scAct"),
        topA = $("#top"),
        tbtn = $(".tbtn");

    const scpos = [];
    scAct.each((idx,ele)=>{
        scpos[idx] = $(ele).offset().top;
    });

    let gap = $(window).height() / 2 + 206;
    // 206은 상단 영역이 작아졌을 때 크기 차이

    scpos.forEach((val)=>console.log(val));

    $(window).scroll(()=>{
        scTop = $(this).scrollTop();
        if(scTop >= 100) topA.addClass("on");
        else topA.removeClass("on");

        if(scTop >= 300) tbtn.addClass("on");
        else tbtn.removeClass("on");

        scAct.each(idx=>scAction(idx));

        // if(scTop > scpos[0] - gap && scTop < scpos[0]){
        //     scAct.eq(0).addClass("on");
        // }
    });

    function scAction(seq){
        if(scTop > scpos[seq] - gap && scTop < scpos[seq]){
            scAct.eq(seq).addClass("on");
        }
    }

    tbtn.click((e)=>{
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 400);
    })
});