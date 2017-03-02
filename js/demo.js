    var mySwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        direction: 'vertical',

        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },

        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }

    })

    var i = 0;
    $(".music").click(function() {
        $(".music").toggleClass("rotate");
        if (i == 0) {
            $("#myMusic")[0].pause();
            i = 1;
        } else {
            $("#myMusic")[0].play();
            i = 0;
        }
    })