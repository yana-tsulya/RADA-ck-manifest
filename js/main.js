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

    //region ===== Animate elements =====
    animateElementsInViewport("#about-cherkassy", "fadeIn rollIn", "fadeIn flipInX");
    animateElementsInViewport("#goals", "bounceInLeft", "bounceInRight");
    animateElementsInViewport("#manifest-goals", "bounceInLeft", "bounceInUp");
    //endregion

    //region ===== Utils =====
    function sectionsHeight() {
        $sections.height($window.height());
    }

    function animateElementsInViewport(sectionId, headerAnimationClass, articleAnimationClass) {
        $(sectionId)
            .find("header")
            .viewportChecker({
                classToRemove: 'invisible',
                classToAdd: 'visible animated ' + headerAnimationClass,
                offset: 0
            })
        ;

        $(sectionId)
            .find("article")
            .viewportChecker({
                classToRemove: 'invisible',
                classToAdd: 'visible animated ' + articleAnimationClass,
                offset: 0
            })
        ;
    }
    //endregion

});