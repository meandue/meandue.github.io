$(function () {
    // 아코디언 기능
    var panelBox = document.querySelectorAll(".panel_box");
    
    for (var i = 0; i < panelBox.length; i++) {
        panelBox[i].addEventListener("click", function () {
            for (var x = 0; x < panelBox.length; x++) {
                panelBox[x].classList.remove("active");
                this.classList.add("active");
            }
        });
    }

    // top 버튼 - 일정 스크롤 내리면 나타나고 클릭 시 스크롤이 맨 위로 올라가게 하기
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
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