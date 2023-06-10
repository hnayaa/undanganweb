

$(window).on("load",function(){

    // nav toggle
    $(".hamburger-btn").click(function(){
        $(".header .navbar").slideToggle();
    })
    $(".header .navbar a").click(function(){
        if($(window).width() < 768){
            $(".header .navbar").slideToggle();
        }
    })
 
    // scrollit
    $.scrollIt();



})


