
$(document).ready(function(){
//console.log("test HX's first js");
    $("li").on("click", function () {
                //li
        if ($(this).hasClass("done")) {
            $(this).removeClass("done");
        } else {
            $(this).addClass("done");
        }
    });
    $("img").on("dblclick", function(){
        $("img").width(200);

        $("h1").fadeOut();

        $(".booboo").slideUp();

        $("#rahul").hide();

       

    });

//    $("img").click(function(){
//
//    $("img").width(200);
//    });
});
