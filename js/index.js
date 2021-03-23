/* 首页JS */
// window.onload = function () {
    let dataHandler = {
        get() {
            return JSON.parse(localStorage.getItem("heng")) || [];
        },
        set(d) {
            localStorage.setItem("heng", JSON.stringify(d));
        }
    };
    if (dataHandler.get() == 1) {
        shou()
    } else {
        zhan()
    }
    function shou() {
        $(".content").css('marginLeft', "63px")
        $(this).width("63px")
        $(".logo").width("63px").css("background", "url(../image/logo2.png) no-repeat")
        //tips层
        $(".inner").width("63px")
        $(".item li a").hover(function () {
            layer.tips("<span style='font-size:18px;z-index:99999'>" + $(this).text() + "</span>", '.item li .a' + $(this).attr("index"), {
                tips: [4, '#ff9901'], //还可配置颜色
            });
        }, function () {
            layer.tips('', '');
        })
    }
    function zhan() {
        $(".content").css('marginLeft', "225px")
        $(this).width("225px")
        $(".logo").width("225px").css("background", "url(../image/logo.png) no-repeat")
        $(".inner").width("225px")
        $(".item li a").unbind()
    }
    $(".top-btn").click(function () {
        if ($(".content").css('marginLeft') == "225px") {
            shou()
            dataHandler.set("1")
        } else {
            zhan()
            dataHandler.set("0")
        }
    })
    $(".list .title").click(function () {
        $(this).next().toggle();
    })
// }