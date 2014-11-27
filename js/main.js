jQuery(function ($) {

    //region ===== Variables =====
    var $window = $(window),
        $welcome = $("#welcome");
    //endregion

    //region ========== Scroll to the top of the page ==========
    $(".upward").on("click", function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    //endregion

    //region ===== Calculate welcome block height =====
    welcomeHeight();

    $window.resize(welcomeHeight);
    //endregion

    //region ===== Utils =====
    function welcomeHeight() {
        $welcome.height($window.height());
    }
    //endregion

});