$(document).ready(function () {
    /*Tabs*/
    $(".tab-nav a").click(function (e) {
        e.preventDefault();
        var idFor = $(this).attr("href");
        var idTabContentWrapper = $(this).parent().data("id");

        $(this).parent().find("a").removeClass("active");
        $(this).addClass("active");

        $("#"+idTabContentWrapper+" > div.active").removeClass("active");
        $("#"+idTabContentWrapper+" > div#"+idFor).addClass("active");
    });
    /*Tabs*/
});