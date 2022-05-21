(function ($) {
    $(".navbar").each(function () {
        $(".side-menu > a", this).on("click", function () {
            $(".navbar > .side").toggleClass("on");
            $("body").toggleClass("on-side");
        });
    });
    $(".side .close-side").on("click", function () {
        $(".navbar > .side").removeClass("on");
        $("body").removeClass("on-side");
    });
});