$(document).ready(function () {
    /*Tabs*/
    $(".tab-nav a").click(function (e) {
        e.preventDefault();
        var idFor = $(this).attr("href");
        var idTabContentWrapper = $(this).parent().data("id");

        $(this).parent().find("a").removeClass("active");
        $(this).addClass("active");

        $("#"+idTabContentWrapper+" > div.active").fadeOut(1000).removeClass("active");
        $("#"+idTabContentWrapper+" > div#"+idFor).fadeIn(1000).addClass("active");
    });
    /*Tabs*/
});