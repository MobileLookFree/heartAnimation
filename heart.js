$(function() {
    $(".heart").click (function () {
        $(this).toggleClass('is_animating');
    });

    $(".heart").on('animationend', function () {
        $(this).toggleClass('is_animating');
    });
});

