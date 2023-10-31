
var flagToResize = false
window.onload = function(){
    document.body.scrollTop = 0;
    openMenu();
    checkLocation();
    clickMenu();    
}
$(window).scroll(function(){
    detectScroll();
});
function detectScroll(){    
    if(document.body.scrollTop == 0){
        // $("header,header .header").removeClass("sticky");
        $(".contentBtnUp .btn").removeClass("appear");
        flagToResize = false;
    }
    else if(document.body.scrollTop > 200 && !flagToResize[2]){
        $(".contentBtnUp .btn").addClass("appear");
        // $("header,header .header").addClass("sticky");
        flagToResize = true;
    }    
} 
function checkLocation(){    
    if(window.location.href.includes("index")){
        $(".menu .contentMenu .index").addClass("active");
    }
    else if(window.location.href.includes("promotion")){
        $(".menu .contentMenu .promotion").addClass("active");
    }
    else if(window.location.href.includes("gallery")){
        $(".menu .contentMenu .gallery").addClass("active");
    }
    else if(window.location.href.includes("us")){
        $(".menu .contentMenu .us").addClass("active");
    }
    else if(window.location.href.includes("contact")){
        $(".menu .contentMenu .contact").addClass("active");
    }
}
function openImage(img){           
    var modal = document.getElementById("modalImage");    
    // var img = img;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");    
    modal.style.display = "block";
    modalImg.src = $(img).attr("src");    
    var span = document.getElementsByClassName("closeImage")[0];
    $("body").addClass("blockScroll");
    span.onclick = function() {        
        modal.style.display = "none";
        $("body").removeClass("blockScroll");
    }
}
function openMenu(){
    $(".navbar").click(function(){
        if($(".navbar").hasClass("active")){
            $(".navbar,.menu").removeClass("active");
            $("body").removeClass("blockScroll");
        }            
        else{
            $(".navbar,.menu").addClass("active");
            $("body").addClass("blockScroll");
        }            
    })
}
function clickMenu(){
    $(".menu .nav-link, foot .foot-col-1 li").click(function(){
        if($(this).hasClass("contact")){
            $(".navbar,.menu").removeClass("active");
            $("body").addClass("blockScroll");
        }
    });
    $("#contactModal .close, #contactModal .btn.btn-secondary").click(function(){
        $("body").removeClass("blockScroll");
    });
    $("#contactModal").modal({
        backdrop:'static',
        show:false
    });
    $(".contentBtnUp").click(function(){
        document.body.scrollTop = 0;
    });
}
function readCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}
function createCookie(name, value, expiration) {
    var dateExpiration = new Date();
    dateExpiration.setFullYear(dateExpiration.getFullYear() + expiration); 
    var cookie = name + "=" + value + "; expires=" + dateExpiration.toUTCString() + "; path=/";
    document.cookie = cookie;
}  