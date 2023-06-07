$(function () {
    // 메인 슬라이드
    var $rollWrapObj = $("#mu_slide");
    var $objImgList = $rollWrapObj.find(".mslide_img").find(".item");
    var $objTxtList = $rollWrapObj.find(".mslide_txt").find(".item");
    var $objTxtcent = $rollWrapObj.find(".mslide_center").find(".product-img");

    var rollListTotal = $objTxtList.length;
    var rollnum = 1;
    var total = rollListTotal - 1,
        now = 0,
        animating = false;

    var rollRollBtnR = '<button class="btn_prev"></button>';
    var rollRollBtnL = '<button class="btn_next"></button>';

    $objImgList.eq(0).css("z-index", "5");
    $objTxtcent.eq(0).css("opacity", "1");
    $objTxtList.eq(0).css({"opacity": "1", "z-index": "3" });
    $objTxtList.eq(0).addClass("active");

    $objImgList.each(function () {
        var img = $(this).find("img").attr("src");
        $(this).css("background-image", "url(" + img + ")");
    })
    if (rollListTotal > 1) {
        $rollWrapObj.append("<div class='mu-button'></div>")
        $rollWrapObj.find('.mu-button').append(rollRollBtnR);
        $rollWrapObj.find('.mu-button').append(rollRollBtnL);

        $rollWrapObj
            .on("click", ".btn_next", function () {
                navItem("next");
                rollStop();
            })
            .on("click", ".btn_prev", function () {
                navItem("prev");
                rollStop();
            });
    }

    rolling = setInterval(function () { rollC() }, 5000);

    function rollC() {
        $(".btn_next").trigger("click");
    }

    function rollStop() {
        clearInterval(rolling);
        rolling = setInterval(function () { rollC() }, 5000)
    }

    function navItem(action) {
        var showNumber;
        if (action === "next") {
            showNumber = (now + 1 > total) ? 0 : now + 1;
        } else {
            showNumber = (now - 1 < 0) ? total : now - 1;
        }
        viewItem(showNumber, action);
    }

    function viewItem(targetNumber, action) {
        var action,
            showLeft,
            hideLeft;
        var option1 = {
            "duration": 850,
        }
        var option2 = {
            "duration": 850,
            "complete": function () {
                $(this).css("z-index", 1);
                animating = false;
                now = targetNumber;
            }
        }
        if (!animating) {
            animating = true;
            if (action) {
                if (action === "next") {
                    showLeft = "100%";
                    hideLeft = "0";
                } else if (action === "prev") {
                    showLeft = "-100%";
                    hideLeft = "0";
                }

            } else {
                if (targetNumber > now) {
                    showLeft = "100%";
                    hideLeft = "0";
                } else if (targetNumber < now) {
                    showLeft = "-100%";
                    hideLeft = "0";
                }
            }
            $objImgList.eq(now).stop()
                .css({"z-index": 2})
                .animate({"top": hideLeft}, option2);
            $objImgList.eq(targetNumber).stop()
                .css({"top": showLeft, "z-index": 5})
                .animate({"top": 0}, option1);

            $objTxtList.eq(now).stop()
                .css({"z-index": 2})
                .removeClass("active")
                .animate({"opacity": 0}, 0);
            $objTxtList.eq(targetNumber).stop()
                .css({"z-index": 3, "opacity": 0})
                .addClass("active")
                .animate({"opacity": 1}, 1000);

            $objTxtcent.eq(now).stop()
                .css({"z-index": 10})
                .animate({"opacity": 0}, 0);
            $objTxtcent.eq(targetNumber).stop()
                .css({"z-index": 11, "opacity": 0})
                .animate({"opacity": 1}, 300);
        }
    }

    // 베스트메뉴 clone 생성
    var bestMenu = $(".img_list").clone();
    var bestAni = $(".animation_list");
    bestAni.append(bestMenu);

    // 신메뉴 호버시 일러스트 등장
    $p_circle = $("#p_circle");
    $pistachio_ai1 = $("#pistachio_ai1");
    $pistachio_ai2 = $("#pistachio_ai2");

    $c_circle = $("#c_circle");
    $coconut_ai = $("#coconut_ai");
    $remon_ai = $("#remon_ai");

    $m_circle = $("#m_circle");
    $mocha_ai1 = $("#mocha_ai1");
    $mocha_ai2 = $("#mocha_ai2");

    $p_circle.hover(
        function () {
            $(this).css({backgroundColor: "#f9f6e6"});
            $pistachio_ai1.animate({ left: "280px", opacity: 1 });
            $pistachio_ai2.animate({ top: "380px", opacity: 1 });
        },
        function () {
            $(this).css({backgroundColor: "transparent"});
            $pistachio_ai1.animate({ left: "0", opacity: 0 });
            $pistachio_ai2.animate({ top: "0", opacity: 0 });
        });

    $c_circle.hover(
        function () {
            $(this).css({backgroundColor: "#f9f6e6"});
            $coconut_ai.animate({ top: "-300px", opacity: 1 });
            $remon_ai.animate({ left: "-300px", opacity: 1 });
        },
        function () {
            $(this).css({backgroundColor: "transparent"});
            $coconut_ai.animate({ top: "0", opacity: 0 });
            $remon_ai.animate({ left: "0", opacity: 0 });
        });

    $m_circle.hover(
        function () {
            $(this).css({backgroundColor: "#f9f6e6"});
            $mocha_ai1.animate({ top: "-300px", opacity: 1 });
            $mocha_ai2.animate({ left: "280px", opacity: 1 });
        },
        function () {
            $(this).css({backgroundColor: "transparent"});
            $mocha_ai1.animate({ top: "0", opacity: 0 });
            $mocha_ai2.animate({ left: "0", opacity: 0 });
        });

    // 이벤트배너 무한롤링과 스크롤시 이벤트
    const pTag1 = document.querySelector('.first-parallel')
    const pTag2 = document.querySelector('.second-parallel')
    const pTag3 = document.querySelector('.third-parallel')
    const pTag4 = document.querySelector('.forth-parallel')
    const pTag5 = document.querySelector('.fifth-parallel')

    const textArr1 = 'BUTTER SAND BUTTER SAND BUTTER SAND BUTTER SAND BUTTER SAND BUTTER SAND'.split(' ')
    const textArr2 = 'CREAM BRELLE CREAM BRELLE CREAM BRELLE CREAM BRELLE CREAM BRELLE CREAM BRELLE'.split(' ')
    const textArr3 = 'BUTTER SAND BUTTER SAND BUTTER SAND BUTTER SAND BUTTER SAND BUTTER SAND'.split(' ')
    const textArr4 = 'CREAM BRELLE CREAM BRELLE CREAM BRELLE CREAM BRELLE CREAM BRELLE CREAM BRELLE'.split(' ')
    const textArr5 = 'BUTTER SAND BUTTER SAND BUTTER SAND BUTTER SAND BUTTER SAND BUTTER SAND'.split(' ')

    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    let count5 = 0

    initTexts(pTag1, textArr1)
    initTexts(pTag2, textArr2)
    initTexts(pTag3, textArr3)
    initTexts(pTag4, textArr4)
    initTexts(pTag5, textArr5)

    function initTexts(element, textArray) {
        textArray.push(...textArray)
        for (let i = 0; i < textArray.length; i++) {
            element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
        }
    }

    function marqueeText(count, element, direction) {
        if (count > element.scrollWidth / 2) {
            element.style.transform = `translate3d(0, 0, 0)`
            count = 0
        }
        element.style.transform = `translate3d(${direction * count}px, 0, 0)`

        return count
    }

    function animate() {
        count1++
        count2++
        count3++
        count4++
        count5++

        count1 = marqueeText(count1, pTag1, -1)
        count2 = marqueeText(count2, pTag2, 1)
        count3 = marqueeText(count3, pTag3, -1)
        count4 = marqueeText(count4, pTag4, 1)
        count5 = marqueeText(count5, pTag5, -1)

        window.requestAnimationFrame(animate)
    }

    function scrollHandler() {
        count1 += 15
        count2 += 15
        count3 += 15
        count4 += 15
        count5 += 15
    }

    window.addEventListener('scroll', scrollHandler)
    animate()

    // 이벤트 배너 이미지에 호버시
    $buttersand = $(".buttersand");
    $eventTxt = $(".event_txt");

    $buttersand.hover(
        function () {
            $eventTxt.css({display: "block"});
            $buttersand.css({filter: "brightness(50%)"});
        },
        function () {
            $eventTxt.css({display: "none"});
            $buttersand.css({filter: "brightness(100%)"});
        });
    $eventTxt.hover(
        function () {
            $eventTxt.css({display: "block"});
            $buttersand.css({filter: "brightness(50%)"});
        },
        function () {
            $eventTxt.css({display: "none"});
            $buttersand.css({filter: "brightness(100%)"});
        });

    // 브랜드스토리 도넛 이미지에 호버 시 이미지 바꾸기
    $donut = $(".story4 > .right_bx > img");
    $donut.hover(
        function () {
            $(this).attr({src: "images/main/story-photo8.png"});
        },
        function () {
            $(this).attr({src: "images/main/story-photo7.png"});
        });


    // 프랜차이즈지점 clone 생성
    var franMenu = $(".img-list").clone();
    var franAni = $(".animation-list");
    franAni.append(franMenu);

    // 스크롤 애니메이션
    // parallax
    function parallax(st, th){
        if(st >= (th.offset().top - $(window).outerHeight() * 0.8)){
            th.addClass("move");
            th.removeClass("reset")
        }
        else{
            th.removeClass("move");
            th.addClass("reset");
        };
    }

    $(window).scroll(function(){
        var $this = $(this);
        var scrollTop = $this.scrollTop();

        parallax(scrollTop,$("#best > h1"));
        parallax(scrollTop,$("#new_title > h2"));
        parallax(scrollTop,$("#new_title > #butter"));
        parallax(scrollTop,$("#new_menu > .peanut > .left_bx > img"));
        parallax(scrollTop,$("#new_menu > .peanut > .right_bx"));
        parallax(scrollTop,$("#new_menu > .pistachio > .info_bx"));
        parallax(scrollTop,$("#p_circle > img"));
        parallax(scrollTop,$("#new_menu > .coconuts > .info_bx"));
        parallax(scrollTop,$("#c_circle > img"));
        parallax(scrollTop,$("#new_menu > .mocha > .info_bx"));
        parallax(scrollTop,$("#m_circle > img"));
        parallax(scrollTop,$("#brand > h1"));
        parallax(scrollTop,$(".story1 > .left_bx > img"));
        parallax(scrollTop,$(".story1 > .left_bx > .txt"));
        parallax(scrollTop,$(".story1 > .right_bx > img"));
        parallax(scrollTop,$(".story2 > .left_bx > img"));
        parallax(scrollTop,$(".story2 > .right_bx > .txt"));
        parallax(scrollTop,$("#story > .story3"));
        parallax(scrollTop,$(".story4 > .left_bx > .txt"));
        parallax(scrollTop,$(".story4 > .right_bx > img"));
        parallax(scrollTop,$("#franchise > h1"));
        parallax(scrollTop,$(".fran_main > .left_bx > img"));

    });

    // top 버튼 - 일정 스크롤 내리면 나타나고 클릭 시 스크롤이 맨 위로 올라가게 하기
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1000) {
            $(".go_top").fadeIn();
        }
        else {
            $(".go_top").fadeOut();
        }
    });

    $(".go_top").click(function (e) {
        e.preventDefault();
        $("html, body").stop().animate({ scrollTop: 0 }, 500)
    });

});