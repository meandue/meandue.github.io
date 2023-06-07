$(document).ready(function(){
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
    
    // header - headerBg
    var $headerBg = $("#header-bg");
    var $menu = $("#menu");
    var $headLogo = $("#head-logo > a > img");
    var $loginIcon = $("#login-icon");
    var $cartIcon = $("#cart-icon");
    var $wishIcon = $("#wish-icon");
    var $langIcon = $("#lang-icon");
    var $gnbRight = $("#gnb-right");
    var $langSelect = $("#lang-select-icon");

    $(window).on('scroll', function(){
        if($(window).scrollTop() >= 700) { 
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
    });

    // nav - cateView
    $(".cate-view").click(function () {
        $(this).toggleClass("rotate");
        $(this).parent().siblings().slideToggle(300);
    });

    // section03 - shellSlide
    $shellSlide = $("#shellSlide > .container");
    $shellPrevBtn = $("#shellButton > .prev-btn");
    $shellNextBtn = $("#shellButton > .next-btn");
    var shellIndex = 0;
    var $shellBullets = $("<ul></ul>")
                .attr("class", "bullets")
                .appendTo("#shell-sliding");

    $shellSlide.children().each(function(){
        $("<li></li>")
                    .append("<a href='#'></a>")
                    .appendTo($shellBullets);
    });

    var $bulletsList = $shellBullets.find("a");
    $bulletsList.eq(shellIndex).addClass("on");

    $shellPrevBtn.click(function(){
        if($shellSlide.is(":animated")) return;

        shellIndex--;
        shellIndex %= $bulletsList.length;

        $bulletsList.removeClass("on")
                    .eq(shellIndex).addClass("on");

        $shellSlide.prepend($shellSlide.children(":last"))
        .css("left", "-100%")
        .animate({left: 0}, 800);
    });
    $shellNextBtn.click(function(){
        if($shellSlide.is(":animated")) return;

        shellIndex++;
        shellIndex %= $bulletsList.length;

        $bulletsList.removeClass("on")
                    .eq(shellIndex).addClass("on");

        $shellSlide.animate({ left: "-100%" }, 800, function () {
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });
    });

    // section03 - chainSlide
    $chainSlide = $("#chainSlide > .container");
    $chainPrevBtn = $("#chainButton > .prev-btn");
    $chainNextBtn = $("#chainButton > .next-btn");
    var chainIndex = 0;
    var $chainBullets = $("<ul></ul>")
                .attr("class", "bullets")
                .appendTo("#chain-sliding");

    $chainSlide.children().each(function(){
        $("<li></li>")
                    .append("<a href='#'></a>")
                    .appendTo($chainBullets);
    });

    var $bulletsList2 = $chainBullets.find("a");
    $bulletsList2.eq(chainIndex).addClass("on");

    $chainPrevBtn.click(function(){
        if($shellSlide.is(":animated")) return;

        chainIndex--;
        chainIndex %= $bulletsList2.length;

        $bulletsList2.removeClass("on")
                    .eq(chainIndex).addClass("on");

        $chainSlide.prepend($chainSlide.children(":last"))
        .css("left", "-100%")
        .animate({left: 0}, 800);
    });
    $chainNextBtn.click(function(){
        if($chainSlide.is(":animated")) return;

        chainIndex++;
        chainIndex %= $bulletsList2.length;

        $bulletsList2.removeClass("on")
                    .eq(chainIndex).addClass("on");

        $chainSlide.animate({left: "-100%"}, 800, function () {
            $(this).removeAttr("style")
                .children(":first").appendTo(this);
        });
    });
});