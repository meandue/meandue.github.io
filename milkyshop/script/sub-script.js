$(function(){

    // const title = document.querySelectorAll("#title path");

    // for(let i = 0; i < title.length; i++) {
    //     console.log('Letter' + i + 'is' +  title[i].getTotalLength());
    // }

    // top 버튼 - 일정 스크롤 내리면 나타나고 클릭 시 스크롤이 맨 위로 올라가게 하기
    $(window).scroll(function(){
        if($(this).scrollTop() >= 300) {
            $(".go_top").fadeIn();
        }
        else {
            $(".go_top").fadeOut();
        }
    });

    $(".go_top").click(function(e){
        e.preventDefault();
        $("html, body").stop().animate({scrollTop: 0}, 500)
    });
});