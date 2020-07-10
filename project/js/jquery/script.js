$(function() {


    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0;
        checkScroll(scrollOffset);

        //header fixed

    $(window).on("scroll" , function(){
        scrollOffset =$(this).scrollTop();
        checkScroll(scrollOffset);
     
    });
    
    function checkScroll(scrollOffset){
      
        
        
        if(scrollOffset >= introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");  
        }
    }
    /*smooth scrol*/

    $("[data-scroll]").on("click",function(event){
        event.preventDefault();
         
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
   


        $("html,body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    //burger
    $("#nav__toggle").on("click", function(event){
       event.preventDefault();
    


        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    //collapse
    $("[data-collapse]").on("click", function(evenr){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("collapse");

        $this.toggleClass("active");  
     
    });
    
    //slider

    $("[data-slider]").slick({
        infinite: true,
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //search

   
     

});