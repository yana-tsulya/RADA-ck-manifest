jQuery(function ($) {

    //region ===== Variables =====
    var $window = $(window),
        $wrapper = $(".wrapper"),
        $sections = $(".wrapper > section"),
        animateDuration = 800,
        mark = true;
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
            scrollTop: $(this.hash).offset().top
        }, animateDuration);
    });
    //endregion

    //region ===== Scroll to section on internal-page =====
    $(".goals-list").find("a").on("click", function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
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
                    if (mark) {
                        $wrapper.find(".header-wrapper").addClass("closed-menu");
                        mark = false;
                    }
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
                    mark = true;
                }
            });
        }
        //endregion
    //endregion

    //region ===== Calculate welcome block height =====
    sectionsHeight();
    $window.resize(sectionsHeight);
    //endregion

    //region ===== Utils =====
    function sectionsHeight() {
        if ($wrapper.hasClass("main-page")) {
            $sections
                .not("#welcome, .after-section")
                .css("min-height", $window.height())
            ;
        };
        $("#welcome").css("min-height", $window.height());
    }
    //endregion

    $("#toggle-menu").on("click", function(e) {
        e.preventDefault();
        $(this).parent().toggleClass("closed-menu");
        $(this).parent().parent().find(".social-links-wrap").toggleClass("fixed");
    })

});