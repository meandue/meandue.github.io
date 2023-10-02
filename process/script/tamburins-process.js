$(function(){
    $("button").click(function(){
        var index = $("button").index(this);
        $("button").removeClass("on");
        $(".detail").find(".img").removeClass("on");
        $(this).addClass("on");
        $(".detail").find(".img").eq(index).addClass("on");
    });

    var $mainClick = $(".main > span");
    $mainClick.click(function(){
        var index = $mainClick.index(this);
        $(this).addClass("on");
        $(".main").find("div").eq(index).fadeIn(300);
    });

    var $sub1Click = $(".sub1 > span");
    $sub1Click.click(function(){
        var index = $sub1Click.index(this);
        $(this).addClass("on");
        $(".sub1").find("div").eq(index).fadeIn(300);
    });

    var $sub2Click = $(".sub2 > span");
    $sub2Click.click(function(){
        var index = $sub2Click.index(this);
        $(this).addClass("on");
        $(".sub2").find("div").eq(index).fadeIn(300);
    });
});