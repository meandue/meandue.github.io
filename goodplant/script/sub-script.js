$(function(){
        // ----- header ----- //

    // 헤더 기본값과 헤더 변경값 설정
    function headerDefault (){
        $("#header").css({background: "transparent"});
        $("#logo > a > img").attr({src: "images/header-logo.png"});
    }
    function headerChange (){
        $("#header").css({background: "rgba(2, 165 ,196 , 0.8)"});
        $("#logo > a > img").attr({src: "images/header-logo-other.png"});
    }

    // 스크롤 시 헤더 변경
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) headerChange();
        else { 
            if($("#sub-bg").hasClass("active")) headerChange();
            else headerDefault();
        }
    });

    // 헤더에 마우스엔터, 마우스리브 이벤트
    $("#header").mouseenter(function(){
        headerChange();
        if(!$("#sub-bg").is(":animated")) {
            $("#sub-bg").addClass("active").animate({height: "607px"}, 700);
            if($("#sub-bg").hasClass("active")) { 
                $(".sub-menu").slideDown(700);
            }
        }
    });
    $("#header").mouseleave(function(){
        var timer3;   
        $("#sub-bg").removeClass("active").animate({height: "0"}, 700);
        if($("#sub-bg").removeClass("active")) { 
            $(".sub-menu").slideUp(700);
            if ($(window).scrollTop() > 0) headerChange();
            else {
                timer3 = window.setTimeout(headerDefault, 1000);
            }
        }
    });
    
    // 헤더 오른쪽메뉴 클릭시 모달창 나타나기
    var $popup = $(".modal");
    var $headerSearch = $("#gnb-right > li > .search-icon");
    var $modalSearch = $("#modalSearch");
    var $headerLogin = $("#gnb-right > li > .login-icon");
    var $modalLogin = $("#modalLogin");
    var $headerLocation = $("#gnb-right > li > .location-icon");
    var $modalLocation = $("#modalLocation");
    var $closeBtn = $(".modal-close");

    $headerSearch.click(function(){
        $modalSearch.addClass("open");
    });
    $headerLogin.click(function(){
        $modalLogin.addClass("open");
    });
    $headerLocation.click(function(){
        $modalLocation.addClass("open");
    });

    // 모달창 닫기 버튼 클릭시 모달창 사라지기
    $closeBtn.click(function(){
        $popup.removeClass("open");
    });


    // ----- process ----- //

    // 치료과정에 마우스엔터 시 너비가 늘어나며 텍스트 보이기
    var $process = $("#process-list > li");

    $process.mouseenter(function(){
        $process.removeClass("on");
        $(this).addClass("on");
    });

    // appliance-list clone 생성
    var appList = $(".appliance-list").clone();
    var appAni = $(".animation-appliance");
    appAni.append(appList);


    // ----- appliance ----- //

    // 장비소개에 마우스엔터 시 정보 보이기
    var $appInfo = $(".app > .app-hover");

    $appInfo.mouseenter(function(){
        $(this).css({opacity: "1"});
    });
    $appInfo.mouseleave(function(){
        $appInfo.css({opacity: "0"});
    });


    // ----- q&a ----- //

    // 질문 클릭 시 답변 보이기
    var $quest = $(".q-txt");

    $quest.click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('open');
    });

    // top 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1000) {
            $(".go-top").fadeIn();
        }
        else {
            $(".go-top").fadeOut();
        }
    });

    $(".go-top").click(function (e) {
        e.preventDefault();
        $("html, body").stop().animate({ scrollTop: 0 }, 500)
    });

    // parallax function

    function parallax(st, th){
        if(st >= (th.offset().top - $(window).outerHeight() * 0.8)){
            th.addClass("move");
        }
        else{th.removeClass("move")};
    }

    $(window).scroll(function(){
        var $this = $(this);
        var scrollTop = $this.scrollTop();

        // parallax
        parallax(scrollTop,$("#section02 > p:nth-of-type(1)"));
        parallax(scrollTop,$("#section02 > h3"));
        parallax(scrollTop,$("#section02 > p:nth-of-type(2)"));
        parallax(scrollTop,$("#section03 > h3"));
        parallax(scrollTop,$("#section03 > .contents > ul:nth-of-type(1)"));
        parallax(scrollTop,$("#section03 > .contents > ul:nth-of-type(2)"));
        parallax(scrollTop,$("#section04 > h3"));
        parallax(scrollTop,$("#section04 > ul > li:nth-of-type(1)"));
        parallax(scrollTop,$("#section04 > ul > li:nth-of-type(2)"));
        parallax(scrollTop,$("#section04 > ul > li:nth-of-type(3)"));
        parallax(scrollTop,$("#section04 > ul > li:nth-of-type(4)"));
        parallax(scrollTop,$("#section05 > h3"));
        parallax(scrollTop,$("#section05 > ul"));
        parallax(scrollTop,$("#section06 > h3"));
        parallax(scrollTop,$("#section06 > .contents > .value:nth-of-type(1)"));
        parallax(scrollTop,$("#section06 > .contents > .value:nth-of-type(2)"));
        parallax(scrollTop,$("#section07 > .title > .title-en"));
        parallax(scrollTop,$("#section07 > .title > .title-kr"));
        parallax(scrollTop,$(".appliance-list"));
        parallax(scrollTop,$("#section08 > h3"));
        parallax(scrollTop,$("#section08 > .review-list"));
        parallax(scrollTop,$(".review-list > li > .after-img"));
        parallax(scrollTop,$("#section09 > .title > .title-en"));
        parallax(scrollTop,$("#section09 > .title > .title-kr"));
        parallax(scrollTop,$("#section09 > .qna-list"));
        parallax(scrollTop,$("#section10 > h3"));
        parallax(scrollTop,$("#section10 > p"));
        parallax(scrollTop,$("#section10 > .contents"));
    });

});