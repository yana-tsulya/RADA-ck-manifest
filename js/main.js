jQuery(function ($) {

    //region ===== Variables =====
    var $window = $(window),
        $wrapper = $(".wrapper"),
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

    //region ===== Scroll to next section =====
    $(".next-step").on("click", function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - 98
        }, animateDuration);
    });
    //endregion

    //region ===== Animate elements =====
    $sections
        .not(".after-section")
        .viewportChecker({
            classToRemove: "invisible animated fadeIn",
            classToAdd: "visible animated fadeIn",
            offset: 250
        })
    ;
    //endregion

    //region ===== Only for main page =====
        //region ===== Fixed header on scroll =====
        if ($wrapper.hasClass("main-page")) {
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 500) {
                    $wrapper.addClass("fix-header");
                } else {
                    $wrapper.removeClass("fix-header");
                }
            });

            //region ===== Calculate welcome block height =====
            sectionsHeight();
            $window.resize(sectionsHeight);
            //endregion
        }
        //endregion
    //endregion

    //region ===== Utils =====
    function sectionsHeight() {
        $(".after-section").height($window.height());
        $("#welcome").height($window.height());
    }
    //endregion

});