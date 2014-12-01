jQuery(function ($) {

    //region ===== Variables =====
    var $window = $(window),
        $header = $(".header"),
        $sections = $(".wrapper > section"),
        animateDuration = 800;
    //endregion

    //region ========== Scroll to the top of the page ==========
    $(".upward").on("click", function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, animateDuration);
    });
    //endregion

    //region ===== Calculate welcome block height =====
    sectionsHeight();

    $window.resize(sectionsHeight);
    //endregion

    //region ===== Scroll to next section =====
    $(".next-step").on("click", function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, animateDuration);
    });
    //endregion

    //region ===== Element is visible =====
    $("#about-cherkassy").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn bounceOutLeft',
        offset: 100
    });
    //endregion

    //region ===== Utils =====
    function sectionsHeight() {
        $sections.height($window.height());
    }
    //endregion

});