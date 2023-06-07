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

    // ----- main slide ----- //

    // 메인슬라이드 이동
    var $mainBannerList = $("#m-slide");
    var $slideText = $(".m-slide-txt");
    var $prevMainBtn = $("#main > .buttons > .btn-prev");
    var $nextMainBtn = $("#main > .buttons > .btn-next"); 
    var timerId;
        function prevMainList(){
            if($mainBannerList.is(":animated")) return;
            else {
                $mainBannerList.prepend($mainBannerList.children(":last"))
                .css("left", "-100%")
                .animate({left:0}, 800);
                clearTimeout(txtTimer);
                $slideText.css({display: "none"});
                txtTimer = setTimeout(function(){$slideText.css({display: "block"})}, 500);
            }
        }
        function nextMainList(){
            var txtTimer = 0; 
            if($mainBannerList.is(":animated")) return;
            else {
                $mainBannerList.animate({left: "-100%"}, 800, function(){
                    $(this).removeAttr("style")
                    .children(":first").appendTo(this);
                });
                clearTimeout(txtTimer);
                $slideText.css({display: "none"});
                txtTimer = setTimeout(function(){$slideText.css({display: "block"})}, 500);
            }
        }

        timerId = window.setInterval(nextMainList, 6000);

    //prev, next 버튼 클릭 시 슬라이드 이동//
    $prevMainBtn.on("click", function(){
        window.clearInterval(timerId);
        prevMainList();
    });
    $nextMainBtn.on("click", function(){
        window.clearInterval(timerId);
        nextMainList();
    });
 

    // ----- doctors ----- //

    // 의사소개 슬라이드 이동
    var $doctorList = $("#doctor-list");
    var $prevDocBtn = $("#section04 > .contents > .buttons > .btn-prev");
    var $nextDocBtn = $("#section04 > .contents > .buttons > .btn-next");
    var timerId = 0;
    function prevDoctorList(){
        if($doctorList.is(":animated")) return;
        $doctorList.prepend($doctorList.children(":last"))
        .css("left", "-100%")
        .animate({left:0}, 800);
    }
    function nextDoctorList(){
        $doctorList.animate({left: "-100%"}, 800, function(){
            $(this).removeAttr("style")
            .children(":first").appendTo(this);
        });
    }
    
    // prev, next 버튼 클릭 시 슬라이드 이동
    $nextDocBtn.on("click", function(){
        window.clearInterval(timerId);
        nextDoctorList();
    });   
    $prevDocBtn.on("click", function(){
        window.clearInterval(timerId);
        prevDoctorList();
    });
    

    // ----- medical reservation ----- //

    // 분야선택 클릭 시 리스트 보이기
    var $select = $(".nice-select");
    var $selectHover = $(".nice-select > .list").children();
    $select.click(function(){
        $select.toggleClass("open");
    });

    // 분야선택 리스트에 마우스 엔터 시 focus 클래스 추가
    $selectHover.mouseenter(function(){
        $selectHover.removeClass("focus");
        $(this).addClass("focus");
    });

    // 분야선택 리스트 클릭 시 selected 클래스 추가, 분야선택란 이름 변경
    var $currentName = $select.children(".current");
    $selectHover.click(function(){
        $selectHover.children().removeClass("selected");
        var $selectName = $(this).children().addClass("selected");
        $currentName.text($selectName.text()); 
    });

    // 리뷰 슬라이드 이동
    var $reviewList = $("#section09 > .ctn-wrap > .contents > ul");
    var $prevReviewBtn = $("#section09 > .ctn-wrap > .title > .buttons > .btn-prev");
    var $nextReviewBtn = $("#section09 > .ctn-wrap > .title > .buttons > .btn-next");
    var timerId = 0;
    function prevReviewList(){
        if($reviewList.is(":animated")) return;
        $reviewList.prepend($reviewList.children(":last"))
              .css("left", "-320px")
              .animate({left:0}, 800);
    }
    function nextReviewList(){
        if($reviewList.is(":animated")) return;
        $reviewList.animate({left: "-320px"}, 800, function(){
            $(this).removeAttr("style")
                    .children(":first").appendTo(this);
        });
    }
    timerId = window.setInterval(nextReviewList, 3000);

    // prev, next 버튼 클릭 시 슬라이드 이동 
    $prevReviewBtn.on("click", function(){
        window.clearInterval(timerId);
        prevReviewList();
        timerId = window.setInterval(nextReviewList, 3000);
      });
      $nextReviewBtn.on("click", function(){
        window.clearInterval(timerId);
        nextReviewList();
        timerId = window.setInterval(nextReviewList, 5000);
      });
    

    // ----- notice slide ----- //
    var $noticeList = $("#section10 > .contents > ul");
    var $prevNoticeBtn = $("#section10 > .contents > .buttons > .btn-prev");
    var $nextNoticeBtn = $("#section10 > .contents > .buttons > .btn-next");
    var timerId = 0;       
        function prevNoticeList(){
            if($noticeList.is(":animated")) return;
            $noticeList.prepend($noticeList.children(":last"))
            .css("left", "-100%")
            .animate({left:0}, 800);
        }
        function nextNoticeList(){
            if($noticeList.is(":animated")) return;
            $noticeList.animate({left: "-1200px"}, 800, function(){
                $(this).removeAttr("style")
                .children(":first").appendTo(this);
            });
        }

    // prev, next 버튼 클릭 시 슬라이드 이동
    $prevNoticeBtn.on("click", function(){
        window.clearInterval(timerId);
        prevNoticeList();
    });
    $nextNoticeBtn.on("click", function(){
        window.clearInterval(timerId);
        nextNoticeList();
    });    


    // ----- interior ----- //

    // 인테리어 이미지 슬라이드
    var $interiorImgList = $("#in-slide > #in-slide-img");
    var $interiorTxtList = $("#in-slide-txt > ul");
    var $prevInteriorBtn = $("#in-slide-ctn > .buttons > .btn-prev");
    var $nextInteriorBtn = $("#in-slide-ctn > .buttons > .btn-next");
    var timerA;
    var timerB;
    function prevInteriorImg(){
        if($interiorImgList.is(":animated")) return;
        $interiorImgList.prepend($interiorImgList.children(":last"))
              .css("left", "-100%")
              .animate({left:0}, 600);
    }
    function nextInteriorImg(){
        if($interiorImgList.is(":animated")) return;
        $interiorImgList.animate({left: "-100%"}, 600, function(){
            $(this).removeAttr("style")
                    .children(":first").appendTo(this);
        });
    }
    timerA = window.setInterval(nextInteriorImg, 5000);

    // 인테리어 텍스트 슬라이드
    function prevInteriorTxt(){
        if($interiorTxtList.is(":animated")) return;
        $interiorTxtList.prepend($interiorTxtList.children(":last"))
              .css("top", "-100%")
              .animate({top:0}, 600);
    }
    function nextInteriorTxt(){
        if($interiorTxtList.is(":animated")) return;
        $interiorTxtList.animate({top: "-100%"}, function(){
            $(this).removeAttr("style")
                    .children(":first").appendTo(this);
        });
    }

    timerB = window.setInterval(nextInteriorTxt, 5000);

    // prev, next 버튼 클릭 시 슬라이드 이동
    $prevInteriorBtn.on("click", function(){
        window.clearInterval(timerA);
        window.clearInterval(timerB);
        prevInteriorImg();
        prevInteriorTxt();
        timerA = window.setInterval(nextInteriorImg, 5000);
        timerB = window.setInterval(nextInteriorTxt, 5000);
      });
      $nextInteriorBtn.on("click", function(){
        window.clearInterval(timerA);
        window.clearInterval(timerB);
        nextInteriorImg();
        nextInteriorTxt();
        timerA = window.setInterval(nextInteriorImg, 5000);
        timerB = window.setInterval(nextInteriorTxt, 5000);
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
        parallax(scrollTop,$("#section02 > h3"));
        parallax(scrollTop,$("#section02 > .left-box > img"));
        parallax(scrollTop,$("#section02 > .right-box > h4"));
        parallax(scrollTop,$("#section02 > .right-box > p"));
        parallax(scrollTop,$("#section03 > .title > .title-en"));
        parallax(scrollTop,$("#section03 > .title > .title-kr"));
        parallax(scrollTop,$("#section03 > .title > p"));
        parallax(scrollTop,$("#section03 > .contents > ul > li > h4"));
        parallax(scrollTop,$("#section03 > .contents > ul > li > p"));
        parallax(scrollTop,$("#section04 > h3"));
        parallax(scrollTop,$("#section04 > p"));
        parallax(scrollTop,$("#section04 > .contents > .buttons"));
        parallax(scrollTop,$("#section04 > .contents > ul > li > .right-box"));
        parallax(scrollTop,$("#section05 > h3"));
        parallax(scrollTop,$("#section05 > p"));
        parallax(scrollTop,$("#section05 > iframe"));
        parallax(scrollTop,$("#section06 > .title > .title-en"));
        parallax(scrollTop,$("#section06 > .title > .title-kr"));
        parallax(scrollTop,$("#section06 > .title > p"));
        parallax(scrollTop,$("#section06 > ul > li > .circle-icon"));
        parallax(scrollTop,$("#section06 > ul > li > h4"));
        parallax(scrollTop,$("#section06 > ul > li > p"));
        parallax(scrollTop,$("#value > h3"));
        parallax(scrollTop,$("#value > p"));
        parallax(scrollTop,$("#section07 > .contents > #value1"));
        parallax(scrollTop,$("#section07 > .contents > #value2"));
        parallax(scrollTop,$("#section07 > .contents > #value3"));
        parallax(scrollTop,$("#section08 > h3"));
        parallax(scrollTop,$("#section08 > h4"));
        parallax(scrollTop,$("#section08 > p"));
        parallax(scrollTop,$("#section08 > #onlineReservation"));
        parallax(scrollTop,$("#section09 > .ctn-wrap > .title > h3"));
        parallax(scrollTop,$("#section09 > .ctn-wrap > .title > p"));
        parallax(scrollTop,$("#section09 > .ctn-wrap > .title > .buttons"));
        parallax(scrollTop,$("#section09 > .ctn-wrap > .contents"));
        parallax(scrollTop,$("#section10 > h3"));
        parallax(scrollTop,$("#section10 > p"));
        parallax(scrollTop,$("#section10 > .contents"));
        parallax(scrollTop,$("#section10 > .contents > .buttons"));
        parallax(scrollTop,$("#section11 > .title > .title-en"));
        parallax(scrollTop,$("#section11 > .title > .title-kr"));
        parallax(scrollTop,$("#section11 > .title > p"));
        parallax(scrollTop,$("#section11 > .contents"));
        parallax(scrollTop,$("#section12 > h3"));
        parallax(scrollTop,$("#section12 > p"));
        parallax(scrollTop,$("#section12 > .contents"));
    });


});