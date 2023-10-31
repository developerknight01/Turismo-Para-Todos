var files = [];
$(document).ready(function(){
    ClickGallery();
    $.ajax({
        method:"POST",
        url:"../../view/home/Controller/gallery.php",                
        data:{gallery:JSON.stringify({})},
        success:function(res){
            for(var i = 0; i < res.split("*").length;i++){
                files[i] = res.split("*")[i];
            }
        }
    });
    $("#modalImage").append(
        "<span class='btnArrow prev'><i class='fa-solid fa-chevron-left'></i></span>"+
        "<span class='btnArrow next'><i class='fa-solid fa-chevron-right'></i></span>"
    );
    
});
function ClickGallery(){
    $(".boxGallery").click(function(){
        var countImg = 0;        
        var img = [];
        if($(this).hasClass("box-1")){                
            for(var i = 0; ;i++){
                if(files[i].includes("banner")){
                    img[countImg] = "../../images/banner/"+files[i];                    
                    countImg++;      
                    console.log(countImg);              
                }
                if(files[i+1] == null)
                    break;
            }            
        }
        else if($(this).hasClass("box-2")){
            for(var i = 0; ;i++){
                if(files[i].includes("montaña")){
                    img[countImg] = "../../images/banner/"+files[i];                    
                    countImg++;      
                    console.log(countImg);              
                }
                if(files[i+1] == null)
                    break;
            } 
        }
        else if($(this).hasClass("box-3")){
            for(var i = 0; ;i++){
                if(files[i].includes("playa")){
                    img[countImg] = "../../images/banner/"+files[i];                    
                    countImg++;      
                    console.log(countImg);              
                }
                if(files[i+1] == null)
                    break;
            } 
        }
        OpenImageGallery(img,countImg);
    });
}
function OpenImageGallery(url,countImg){
    var modal = document.getElementById("modalImage");    
    // var img = img;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");    
    var count = 0;
    modal.style.display = "block";
    modalImg.src = url[0];    
    var span = document.getElementsByClassName("closeImage")[0];
    $("body").addClass("blockScroll");
    span.onclick = function() {        
        modal.style.display = "none";
        $("body").removeClass("blockScroll");
    }
    $("#modalImage .btnArrow").click(function(){        
        $("#modalImage #img01").addClass("change");        
        setTimeout(() => {
            if($(this).hasClass("prev")){
                if(count == 0){                    
                    modalImg.src = url[countImg-1];
                    count = countImg-1;
                }
                else if(count > 0){                    
                    count--;
                    modalImg.src = url[count];
                }
            }
            else if($(this).hasClass("next")){                
                if(count == (countImg-1)){
                    modalImg.src = url[0];
                    count = 0;
                }
                else if(count < countImg){
                    count++;
                    modalImg.src = url[count];
                }
            }
            $("#modalImage #img01").removeClass("change");
        }, 500);
    });
}