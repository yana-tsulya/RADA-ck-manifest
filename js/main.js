jQuery(function ($) {

    //region ===== Variables =====
    var windowHeight = $(window).height();
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
    $("#welcome").height(windowHeight);
    //endregion

});