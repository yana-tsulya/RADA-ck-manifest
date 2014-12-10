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
        .viewportChecker({
            classToRemove: "transparent",
            classToAdd: "untransparent animated fadeIn",
            offset: 0
        })
    ;
    //endregion

    //region ===== Only for main page =====
        //region ===== Fixed header on scroll =====
        if ($wrapper.hasClass("main-page")) {
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 500) {
                    $wrapper
                        .addClass("fix-header")
                        .find(".header-wrapper")
                        .animate({
                            "top": 0
                        }, animateDuration)
                    ;
                } else {
                    $wrapper
                        .removeClass("fix-header")
//                        .css("top", 0)
                    ;
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
        $("#welcome").css("min-height", $window.height());
    }
    //endregion

});