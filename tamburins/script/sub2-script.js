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
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0) { 
        $headerBg.css({background: "#fff", boxShadow: "4px 4px 4px rgba(0,0,0,0.2"});
        }
        else {
        $headerBg.css({background: "transparent", boxShadow: "none"});
        }
    });

    // nav - cateView
    $(".cate-view").click(function () {
        $(this).toggleClass("rotate");
        $(this).parent().siblings().slideToggle(300);
    });

    // section01 - thumbImage
    var $mainImg = $("#product-img > img");
    var $thumbImg = $("#thumb-img > li > img");

    $thumbImg.click(function(){
        var src = $(this).attr("src");
        $mainImg.attr("src", src);
        
        $thumbImg.parent().removeClass("on");
        $(this).parent().addClass("on");

    });

    // section01 - productCount
    var $count = $(".count");
    var $currentNum = parseInt($count.text());
    var $unit = $("#unit-price").text();
    var $unitPrice = parseInt($unit.replace(",", ""));
    var $totalPrice = $("#total-price");
    
    $(".label-info > button").click(function(){
        if($(this).hasClass("plus")) {
            $currentNum += 1;
        }
        else {
            if($currentNum > 1) {
                $currentNum -= 1;
            }
        }
        $count.text($currentNum);

        var semiTotal = $currentNum * $unitPrice;
        var total = Number(semiTotal).toLocaleString("en");
        $totalPrice.text(total);
    });

    // section02 - tabMenuShow
    var $tabAnchor = $("#tabs-nav > li > a");
    var $tabPanel = $(".tabs-panel");

    $tabAnchor.click(function(e){
        e.preventDefault();
        $tabAnchor.removeClass("active");
        $(this).addClass("active");

        $tabPanel.hide();
        var $target = $(this).attr("href");
        $($target).show();

        // section02 - reviewCount
        var $numAnimation = $(".num_animation");
        var $targetNum = $numAnimation.attr("data-rate");
        var num = 0;

        var timer = setInterval(function(){
            ++num;
            $numAnimation.text(num);
            if(num == $targetNum) {
                clearInterval(timer);
            }
        }, 10);
    });
  
});