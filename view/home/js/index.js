$(document).ready(function(){
    TransitionCarousel();
    TransitionPromotion();
});
function TransitionCarousel(){
    var countImg = 1;
    var countTemp = 0;
    var flagCount = false;    
    setInterval(() => {
        if(countImg < $("main .carousel img").length && !flagCount){
            countTemp = countImg;
            countImg++;            
        }
        else if(!flagCount)
            flagCount = true;
        
        if(flagCount && countImg > 1){
            countTemp = countImg;
            countImg--;
        }
        else if(flagCount){
            countTemp = countImg;
            flagCount = false;
            countImg++;
        }
        $("main .carousel img:nth-child("+countImg+")").removeClass("inactive");
        $("main .carousel img:nth-child("+countTemp+")").addClass("inactive");
    }, 9999);
}
function TransitionPromotion(){
    var dot = 1;
    var promo = 1;
    var countPromo = $(".promotion .pack").length;
    for(var i = 0 ; i < countPromo; i++){
        $(".promotion .promoFoot").append(
            "<span class='promotionDot'></span>"
        );
    }
    $(".promotion .promoFoot .promotionDot:nth-child(1)").addClass("active");
    $(".promotion .promoFoot .promotionDot").click(function(){
        countPromo = $(this).index()+1;        
        $(".promotion .promoFoot .promotionDot.active").removeClass("active");
        $(".promotion .promoFoot .promotionDot:nth-child("+countPromo+")").addClass("active");
        $(".promotion .pack").not(".inactive").addClass("inactive");
        $(".promotion .pack.pack-"+countPromo).removeClass("inactive");
    });
    $(".promotion .btnCarousel").click(function(){
        countPromo = $(".promotion .pack").length;
        promo = $(".promotion .pack").not(".inactive").attr("class").split("-")[1];
        $(".promotion .pack").not(".inactive").addClass("inactive");
        if($(this).hasClass("left")){                        
            dot = parseInt(promo) - 1;
        }
        else if($(this).hasClass("right")){
            dot = parseInt(promo) + 1;
        }      
        $(".promotion .promoFoot .promotionDot.active").removeClass("active");  
        if(dot == 0){
            $(".promotion .pack.pack-"+countPromo).removeClass("inactive");
            $(".promotion .promoFoot .promotionDot:nth-child("+countPromo+")").addClass("active");
        }
        else if(dot > countPromo){
            $(".promotion .pack.pack-1").removeClass("inactive");
            $(".promotion .promoFoot .promotionDot:nth-child("+1+")").addClass("active");
        }
        else{            
            $(".promotion .pack.pack-"+dot).removeClass("inactive");
            $(".promotion .promoFoot .promotionDot:nth-child("+dot+")").addClass("active");
        }
        
    });
}