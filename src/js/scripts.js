(function($) {
    'use strict';
    console.log('Hello!');

    $(".headroom").headroom({
    offset : 0,
    tolerance : {
        up : 5,
        down : 0
    },
});

    function isVisible(el){
        let top = $(el).offset().top + 100;
        return top < ($(window).scrollTop()+ $(window).height());
    }

    function animate(){
        $('.animate').each((index, el)=> {
            if (isVisible(el)) {
                $(el).addClass('animated')
                     .addClass($(el).attr('data-animation'))
                     .removeClass('animate');

            }
            // console.log(index,isVisible(el));
        })
    }

    animate();

    $(window).on('scroll',() => {
        animate();
    })

    // $('.animate').each((index, el) => {
    //     console.log(index, isVisible(el));
    // })

})(jQuery);