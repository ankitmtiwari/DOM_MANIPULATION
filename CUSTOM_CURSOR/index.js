document.addEventListener("DOMContentLoaded",function(){
    var cursr=document.querySelector("#cursor")
    var box=document.querySelector("#main")
    box.addEventListener("mousemove",function(details){
        cursr.style.left=details.pageX+"px"
        cursr.style.top=details.pageY+"px"
        // console.log(details.pageX)
    })
})