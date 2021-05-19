$(function(){
    $("#picture img:not(:first-child)").hide();
    setInterval(function(){
        $("#picture img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo("#picture");},3000);

    $("btn").on("click", function(){
        $("html, body").animate({scrollTop: 0}, 3000, "swing");
    });
});
