jQuery(function ($) {

    //region ===== Variables =====
    var $window = $(window),
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

    //region ===== Utils =====
    function sectionsHeight() {
        $sections.height($window.height());
    }
    //endregion

});