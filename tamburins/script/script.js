$(function(){
    // header - menu
    $("#menu").click(function (e) {
        e.preventDefault();
        $("nav").toggleClass("on");
        $("#menu").toggleClass("on");
        $(".sub-menu").css({display: "none"});
    });

    // header - langSelect
    $("#lang-select").click(function () {
        $(".lang-list").slideToggle(300);
        $("#lang-select-icon").toggleClass("active");
    });

    var $currentName = $("#lang-select > .current");
    var $selectName = $(".lang-list > li > .selected");

    $(".lang-list > li").click(function () {
        $(".lang-list > li").removeClass("focus").children().removeClass("selected");
        $(this).addClass("focus").children().addClass("selected");
        $currentName.text($selectName.text());

    });
    
    // header - headerStyleChange
    var $headerBg = $("#header-bg");
    var $menu = $("#menu");
    var $headLogo = $("#head-logo > a > img");
    var $loginIcon = $("#login-icon");
    var $cartIcon = $("#cart-icon");
    var $wishIcon = $("#wish-icon");
    var $langIcon = $("#lang-icon");
    var $gnbRight = $("#gnb-right");
    var $langSelect = $("#lang-select-icon");
    
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1000) { 
        $headerBg.css({background: "#fff", boxShadow: "4px 4px 4px rgba(0,0,0,0.2"});
        $menu.addClass("black");
        $headLogo.attr({src: "images/header-logo-black.svg"});
        $loginIcon.attr({src: "images/login-icon-black.svg" });
        $cartIcon.attr({src: "images/cart-icon-black.svg" });
        $wishIcon.attr({src: "images/wish-icon-black.svg" });
        $langIcon.attr({src: "images/lang-icon-black.svg" });
        $gnbRight.css({color: "#000"});
        $langSelect.css({borderBottom: "2px solid #000", borderRight: "2px solid #000"});
        }
        else {
        $headerBg.css({background: "transparent", boxShadow: "none"});
        $menu.removeClass("black");
        $headLogo.attr({src: "images/header-logo.svg"});
        $loginIcon.attr({src: "images/login-icon.svg" });
        $cartIcon.attr({src: "images/cart-icon.svg" });
        $wishIcon.attr({src: "images/wish-icon.svg" });
        $langIcon.attr({src: "images/lang-icon.svg" });
        $gnbRight.css({color: "#fff"});
        $langSelect.css({borderBottom: "2px solid #fff", borderRight: "2px solid #fff"});
        }

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
       
    });

        var current = $(window).scrollTop();
        console.log(current);
    });

    // nav - cateView
    $(".cate-view").click(function () {
        $(this).toggleClass("rotate");
        $(this).parent().siblings().slideToggle(300);
    });


    // section02 - bestSlide
    $bestSlide = $("#b-slide");
    $bestPrevBtn = $("#best-slide > .slide-top > .slide-btn > .prev-btn");
    $bestNextBtn = $("#best-slide > .slide-top > .slide-btn > .next-btn");
    var bestIndex = 0;
    var $bestBullets = $("<ul></ul>")
                .attr("class", "bullets")
                .appendTo("#best-slide");


    $bestSlide.children().each(function(){
        $("<li></li>")
                    .append("<a href='#'></a>")
                    .appendTo($bestBullets);
    });


    var $bulletsList = $bestBullets.find("a");
    $bulletsList.eq(bestIndex).addClass("on");

    $bestPrevBtn.click(function(){
        if($bestSlide.is(":animated")) return;

        bestIndex--;
        bestIndex %= $bulletsList.length;

        $bulletsList.removeClass("on")
                    .eq(bestIndex).addClass("on");

        $bestSlide.prepend($bestSlide.children(":last"))
        .css("left", "-100%")
        .animate({left: 0}, 800);
    });
    $bestNextBtn.click(function(){
        if($bestSlide.is(":animated")) return;

        bestIndex++;
        bestIndex %= $bulletsList.length;

        $bulletsList.removeClass("on")
                    .eq(bestIndex).addClass("on");

        $bestSlide.animate({ left: "-100%" }, 800, function () {
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });
    });
    
    // section06 - storyRolling
    var storyImages = $("#story-rolling > ul").clone();
    var storyAni = $("#story-rolling");
    storyAni.append(storyImages);


    // section07 - locationSlide
    $locaSlide = $("#location-info > ul");
    $locaPrevBtn = $("#location-list > .slide-btn > .prev-btn");
    $locaNextBtn = $("#location-list > .slide-btn > .next-btn");
    var locaIndex = 0;
    var $locaBullets = $("<ul></ul>")
                .attr("class", "bullets")
                .appendTo("#location-list");


    $locaSlide.children().each(function(){
        $("<li></li>")
                    .append("<a href='#'></a>")
                    .appendTo($locaBullets);
    });
    var $bulletsList2 = $locaBullets.find("a");
    $bulletsList2.eq(locaIndex).addClass("on");

    $locaPrevBtn.click(function(){
        if($locaSlide.is(":animated")) return;

        locaIndex--;
        locaIndex %= $bulletsList2.length;

        $bulletsList2.removeClass("on")
                    .eq(locaIndex).addClass("on");

        $locaSlide.prepend($locaSlide.children(":last"))
        .css("left", "-100%")
        .animate({left: 0}, 800);
    });
    $locaNextBtn.click(function(){
        if($locaSlide.is(":animated")) return;

        locaIndex++;
        locaIndex %= $bulletsList2.length;

        $bulletsList2.removeClass("on")
                    .eq(locaIndex).addClass("on");

        $locaSlide.animate({ left: "-100%" }, 800, function () {
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });
    });

    // scroll Event

});