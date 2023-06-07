$(function () {
    // 커스텀 마우스 커서 고정 시작
    var mouseCursor = document.getElementById("cursor");

    document.addEventListener("mousemove", cursor);
    function cursor(e) {
        mouseCursor.style.top = e.pageY + document.body.scrollTop + "px";
        mouseCursor.style.left = e.pageX + document.body.scrollLeft + "px";
    }


    // 상단 고정 롤링 바 시작
    var $rollingList = $("#rolling > ul");
    var delay = 3000;
    var duration = 800;

    window.setInterval(function () {
        $rollingList.animate({ top: "-100%" }, duration, function () {
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });
    }, delay);


    // 페이지 스크롤링
    // 현재 스크롤된 위치에서 마우스 휠을 굴리면 한 페이지씩 스크롤 이동이 되어지도록 작성

    var $html = $("html");
    var $window = $(window);

    // 마우스 휠을 굴릴 때 한 페이지씩 스크롤 이동할 수 있도록
    // 마우스 휠의 기본 이벤트를 제거
    window.addEventListener("wheel", function (event) {
        event.preventDefault();

        // 페이지가 한 번에 많이 넘어가지 않도록
        // 페이지가 이동 중이면 핸들러를 종료
        if ($html.is(":animated")) return;

        // 휠을 굴린 방향을 알기 위한 속성
        var delta = event.deltaY;

        // 현재 스크롤된 위치
        var currentScrollTop = $window.scrollTop();
        // 한 페이지의 높이 = 뷰 포트의 높이
        var pageHeight = $window.height();
        // 이동할 스크롤 값
        var move = 0;

        if (delta > 0) { // 휠을 아래로 굴린 경우

            // 오버된 스크롤 값
            var over = currentScrollTop % pageHeight;
            move = currentScrollTop + pageHeight - over;

        }
        else { // 휠을 위로 굴린 경우

            var over = currentScrollTop % pageHeight;

            if (over == 0) move = currentScrollTop - pageHeight;
            else move = currentScrollTop - over;
        }

        $html.animate({ scrollTop: move });

    }, { passive: false });


    // 첫번째 페이지로 이동하기
    function prevPage() {
        $html.animate({ scrollTop: 0 });
    }

    // 마지막 페이지로 이동하기
    function nextPage() {
        // 현재 스크롤된 위치
        var currentScrollTop = $window.scrollTop();
        // 한 페이지의 높이 = 뷰 포트의 높이
        var pageHeight = $window.height();
        // 이동할 스크롤 값
        var move = 0;
        // 오버된 스크롤 값
        var over = currentScrollTop % pageHeight;

        move = currentScrollTop + pageHeight - over;

        $html.animate({ scrollTop: move });
    };

    function mouseEnter() {
        $houseShape.attr({ src: "images/house-hover.svg" });
        $typo1.attr({ src: "images/typo1-hover.svg" });
        $typo2.attr({ src: "images/typo2-hover.svg" });
        $light.attr({ src: "images/light-hover.svg" });
    };

    function mouseLeave() {
        $houseShape.attr({ src: "images/house.svg" });
        $typo1.attr({ src: "images/typo1.svg" });
        $typo2.attr({ src: "images/typo2.svg" });
        $light.attr({ src: "images/light.svg" });

        if ($houseShape.hasClass("click")) $houseShape.attr({ src: "images/house-hover.svg" });
        if ($typo1.hasClass("click")) $typo1.attr({ src: "images/typo1-hover.svg" });
        if ($typo2.hasClass("click")) $typo2.attr({ src: "images/typo2-hover.svg" });
        if ($light.hasClass("click")) $light.attr({ src: "images/light-hover.svg" });
    };

    function houseClick() {
        $houseShape.addClass("click");
        $typo1.addClass("click");
        $typo2.addClass("click");
        $light.addClass("click");
    }

    // function changeSrc() {
    //     if ($houseShape.hasClass("click")) $houseShape.attr({ src: "images/house-hover.svg" });
    //     if ($typo1.hasClass("click")) $typo1.attr({ src: "images/typo1-hover.svg" });
    //     if ($typo2.hasClass("click")) $typo2.attr({ src: "images/typo2-hover.svg" });
    //     if ($light.hasClass("click")) $light.attr({ src: "images/light-hover.svg" });
    // }

    // 집 모양 일러스트 클릭시
    var $houseShape = $("#house_shape");
    $houseShape.on("click", function () {
        nextPage();
        houseClick();
    });

    // 집 모양 일러스트 호버시
    $houseShape.hover(mouseEnter, mouseLeave);

    // 타이포1 클릭시
    var $typo1 = $("#typo1");
    $typo1.on("click", function () {
        nextPage();
        houseClick();
    });

    // 타이포1 호버시
    $typo1.hover(mouseEnter, mouseLeave);

    // 타이포2 클릭시
    var $typo2 = $("#typo2");
    $typo2.on("click", function () {
        nextPage();
        houseClick();
    });

    // 타이포2 호버시
    $typo2.hover(mouseEnter, mouseLeave);

    // 조명 클릭시
    var $light = $("#light_shape");
    $light.on("click", function () {
        nextPage();
        houseClick();
    });

    // 조명 호버시
    $light.hover(mouseEnter, mouseLeave);

    // 오버레이창
    var $overlay = $("#overlay");
    var duration = 200;

    // close 버튼 클릭시
    var $close = $("#close");
    $close.on("click", function () {
        $overlay.hide();
    });

    // 오디오메뉴 인덱스
    var $menuList = $("#menu > ul > li");
    var $audio = $("#menu > #audio");
    $menuList.each(function (index, element) {
        $(element).data("index", index);
    });


    // 창 나타날 때 기본 설정
    function overlayShow () {
        $overlay.show();
        $category.hide();
        $ctn.hide();
    }

    // 오디오메뉴 클릭시
    $menuList.on("click", function () {
        menuIndex = $menuList.index(this);
        if (menuIndex == 0) prevPage()
        else if (menuIndex == 1) {
            overlayShow();
            $cgList.removeClass("on");
            $profile.show().addClass("on");
            $about.show();
        }
        else if (menuIndex == 2) {
            overlayShow();
            $cgList.removeClass("on");
            $site.show().addClass("on");
            $web.show();
        }
        else if (menuIndex == 3) {
            overlayShow();
            $graphic.show();
        }
        else if (menuIndex == 4) nextPage();
    });

    // 오디오메뉴 호버시
    $menuList.hover(
        function () {
            menuIndex = $menuList.index(this);
            if (menuIndex == 0) $audio.attr({ src: "images/audio-home-hover.svg" })
            else if (menuIndex == 1) $audio.attr({ src: "images/audio-about-hover.svg" });
            else if (menuIndex == 2) $audio.attr({ src: "images/audio-web-hover.svg" });
            else if (menuIndex == 3) $audio.attr({ src: "images/audio-graphic-hover.svg" });
            else if (menuIndex == 4) $audio.attr({ src: "images/audio-contact-hover.svg" });
        },
        function () {
            $audio.attr({ src: "images/audio.svg" });
        }
    );


    // 스탠드조명 일러스트 클릭시
    var $stand = $("#stand_ai");
    $stand.on("click", function () {
        prevPage();
        $(this).addClass("click");
    });

    // 스탠드조명 일러스트 호버시
    var $standSpan = $("#contents > #stand > span")
    $stand.hover(
        function () {
            $(this).attr({ src: "images/stand-hover.svg" });
            $standSpan.css({ display: "block" });
        },
        function () {
            $(this).attr({ src: "images/stand.svg" });
            $standSpan.css({ display: "none" });
            if ($(this).hasClass("click")) $(this).attr({ src: "images/stand-hover.svg" });
        });

    // 두번째 액자 일러스트 클릭시
    var $gallery = $("#gallery2_ai");
    var $category = $(".category");
    var $ctn = $("#ctn_bx > div");
    var $graphic = $(".graphic");

    $gallery.on("click", function () {
        overlayShow();
        $(this).addClass("click");
        $graphic.show();
    });

    // 두번째 액자 일러스트 호버시
    var $gallerySpan = $("#contents > #gallery > span");

    $gallery.hover(
        function () {
            $(this).attr({ src: "images/gallery2-hover.svg" });
            $gallerySpan.css({ display: "block" });
        },
        function () {
            $(this).attr({ src: "images/gallery2.svg" });
            $gallerySpan.css({ display: "none" });
            if ($(this).hasClass("click")) $(this).attr({ src: "images/gallery2-hover.svg" });
        });


    // 피아노 일러스트 클릭시
    var $piano = $("#piano_ai");
    var $profile = $(".profile");
    var $about = $(".about");

    $piano.on("click", function () {
        overlayShow();
        $(this).addClass("click");
        $about.show();
        $cgList.removeClass("on");
        $profile.show().addClass("on");
    });

    // 피아노 일러스트 호버시
    var $pianoSpan = $("#contents > #piano > span");

    $piano.hover(
        function () {
            $(this).attr({ src: "images/piano-hover.svg" });
            $pianoSpan.css({ display: "block" });
        },
        function () {
            $(this).attr({ src: "images/piano.svg" });
            $pianoSpan.css({ display: "none" });
            if ($(this).hasClass("click")) $(this).attr({ src: "images/piano-hover.svg" });
        });

    // 컴퓨터 일러스트 클릭시
    var $computer = $("#computer_ai");
    var $site = $(".site");
    var $web = $(".web");

    $computer.on("click", function () {
        overlayShow();
        $(this).addClass("click");
        $cgList.removeClass("on");
        $site.show().addClass("on");
        $web.show();
    });

    // 컴퓨터 일러스트 호버시
    var $computerSpan = $("#contents > #computer > span");

    $computer.hover(
        function () {
            $(this).attr({ src: "images/computer-hover.svg" });
            $computerSpan.css({ display: "block" });
        },
        function () {
            $(this).attr({ src: "images/computer.svg" });
            $computerSpan.css({ display: "none" });
            if ($(this).hasClass("click")) $(this).attr({ src: "images/computer-hover.svg" });
        });

    // 턴테이블 일러스트 클릭시
    var $player = $("#player_ai");

    $player.on("click", function () {
        nextPage();
        $(this).addClass("click");
    });

    // 턴테이블 일러스트 호버시
    var $playerSpan = $("#contents > #player > span");

    $player.hover(
        function () {
            $(this).attr({ src: "images/player-hover.svg" });
            $playerSpan.css({ display: "block" });
        },
        function () {
            $(this).attr({ src: "images/player.svg" });
            $playerSpan.css({ display: "none" });
            if ($(this).hasClass("click")) $(this).attr({ src: "images/player-hover.svg" });
        });

    // -----------------------------------------------
    $cgList = $(".category > ul > li");
    $ctnBox = $("#ctn_bx > div");

    $cgProfile = $(".category > ul > .profile")
    $profile = $(".profile");
    $cgSkills = $(".category > ul > .skills")
    $skills = $(".skills");
    $cgCertificate = $(".category > ul > .certificate")
    $certificate = $(".certificate");
    $cgSite = $(".category > ul > .site")
    $site = $(".site");
    $cgBanner = $(".category > ul > .banner")
    $banner = $(".banner");
    $cgDetail = $(".category > ul > .detail")
    $detail = $(".detail");

    // 각 카테고리 클릭시 기본 설정
    function contentShow () {
        $cgList.removeClass("on");
        $ctnBox.hide();
    }

    // 프로필 클릭시
    $cgProfile.on("click", function () {
        contentShow();
        $profile.show().addClass("on");
    });

    // 기술 클릭시
    $cgSkills.on("click", function () {
        contentShow();
        $skills.show().addClass("on");
    });

    // 자격증 클릭시
    $cgCertificate.on("click", function () {
        contentShow();
        $certificate.show().addClass("on");
    });

    // 사이트 클릭시
    $cgSite.on("click", function () {
        contentShow();
        $site.show().addClass("on");
    });

    // 배너 클릭시
    $cgBanner.on("click", function () {
        contentShow();
        $banner.show().addClass("on");
    });

    // 상세페이지 클릭시
    $cgDetail.on("click", function () {
        contentShow();
        $detail.show().addClass("on");
    });

    // 타이핑 효과
    var $type = $("#type");
    var text = "안녕하세요, 저는 반짝이는 열정과 \n" + "반짝이는 아이디어를 가지고 있는\n" + "디자이너 정민주입니다";
    var i = 0;
    var timerId = 0;

    function startTyping () {
        i = 0;
        $type.html("");
        window.clearInterval(timerId);
        if(i >= text.length) window.clearInterval(timerId);
        
        window.setTimeout(function(){
            timerId = window.setInterval(function(){
                $type.append(text.charAt(i++));
            }, 100); 
        }, 500);
    }

    $menuList.on("click", startTyping);

    $piano.on("click", startTyping);

    $profile.on("click", startTyping);



    // 사이트 이미지 호버시 버튼 나타나게 하기
    $siteBtn = $(".site_box > button");
    $siteImg = $(".site_box");

    $siteImg.hover(
        function () {
            $siteBtn.fadeIn();
        },
        function () {
            $siteBtn.fadeOut();
        });

    // 리스트
    $titleList = $(".site_name");
    $btnList = $(".site_btn");
    $imgList = $(".site_img");
    $infoList = $(".site_info");

    // 버튼
    $prev = $("#prev")
    $next = $("#next");

    var duration = 400;

    // 다음 내용으로 슬라이드 이동하기 위한 함수
    function nextSlide() {
        if ($titleList.is(":animated")) return;
        $titleList.animate({ top: "-100%" }, duration, function () {
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });

        if ($btnList.is(":animated")) return;
        $btnList.animate({ top: "-100%" }, function () {
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });

        if ($imgList.is(":animated")) return;
        $imgList.animate({ left: "-100%" }, duration, function () {
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });

        if ($infoList.is(":animated")) return;
        $infoList.animate({ top: "-100%" }, duration, function () {
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });
    }

    // 이전 내용으로 슬라이드 이동하기 위한 함수
    function prevSlide() {
        if ($titleList.is(":animated")) return;
        $titleList.prepend($titleList.children(":last"))
            .css({ top: "-100%" })
            .css({ top: 0 }, duration);

        if ($btnList.is(":animated")) return;
        $btnList.prepend($btnList.children(":last"))
            .css({ top: "-100%" })
            .css({ top: 0 });

        if ($imgList.is(":animated")) return;
        $imgList.prepend($imgList.children(":last"))
            .css({ left: "-100%" })
            .css({ left: 0 }, duration);

        if ($infoList.is(":animated")) return;
        $infoList.prepend($infoList.children(":last"))
            .css({ top: "-100%" })
            .css({ top: 0 }, duration);
    }

    $next.on("click", nextSlide);
    $prev.on("click", prevSlide);

    // 페이드창이나 닫기 버튼 클릭 시 페이드 아웃
    $fade = $("#fade");
    $photo = $("#photo");
    $closeBtn = $("#close_btn")
    
    $fade.on("click", function(){
        $fade.fadeOut(400);
    });
    $closeBtn.on("click", function () {
        $fade.fadeOut(400);
    });

    // 배너, 상세페이지, 그래픽 클릭시 페이드효과로 나타나기
    $bannerList = $(".banners > li > img");
    $detailList = $(".details > li > img");
    $graphicList = $(".graphics > li > img");

    // 클릭한 이미지의 src 속성 가져오기
    $bannerList.each(function (index, element) {
        $(element).data("index", index);
    });
    $detailList.each(function (index, element) {
        $(element).data("index", index);
    });
    $graphicList.each(function (index, element) {
        $(element).data("index", index);
    });

    // 배너 요소 클릭 시 페이드인
    $bannerList.on("click", function () {
        bannerIndex = $bannerList.index(this);

        var src = this.src;

        $fade.fadeIn(400);
        $photo.attr("src", src).fadeIn(400);
    });

    // 상세페이지 요소 클릭 시 페이드인
    $detailList.on("click", function () {
        detailIndex = $detailList.index(this);

        var src = this.src;

        $fade.fadeIn(400);
        $photo.attr("src", src).fadeIn(400);
    });

    // 그래픽 요소 클릭 시 페이드인
    $graphicList.on("click", function () {
        graphicIndex = $graphicList.index(this);

        var src = this.src;

        $fade.fadeIn(400);
        $photo.attr("src", src).fadeIn(400);
    });


    // bannerIndex 에 위치한 이미지로 바꾸는 함수
    function changeBanner(bannerIndex) {
        $photo.fadeOut(400, function () {
            var src = $bannerList.eq(bannerIndex).attr("src");
            $photo.attr("src", src).fadeIn(400);
        });
    }
    // detailIndex 에 위치한 이미지로 바꾸는 함수
    function changeDetail(detailIndex) {
        $photo.fadeOut(400, function () {
            var src = $detailList.eq(detailIndex).attr("src");
            $photo.attr("src", src).fadeIn(400);
        });
    }
    // graphicIndex 에 위치한 이미지로 바꾸는 함수
    function changeGraphic(graphicIndex) {
        $photo.fadeOut(400, function () {
            var src = $graphicList.eq(graphicIndex).attr("src");
            $photo.attr("src", src).fadeIn(400);
        });
    }


    // lp판 회전 멈추기, 시작하기
    $lpPlayer = $("#lp_player");
    $lpStick = $("#stick");
    $rotate = $(".rotate");

    function rotateStart() {
        $rotate.css({animationPlayState: "running"})
        $lpStick.css({ transform: "rotate(0deg)" });
    }

    function rotateStop() {
        $rotate.css({animationPlayState: "paused"})
        $lpStick.css({ transform: "rotate(-30deg)" });
    }

    $lpPlayer.hover(rotateStop, rotateStart);

});