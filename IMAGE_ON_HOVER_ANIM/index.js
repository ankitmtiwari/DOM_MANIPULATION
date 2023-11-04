document.addEventListener("DOMContentLoaded", function () {
  //   var image = document.querySelector("img");
  var boxes = document.querySelectorAll(".main");
  boxes.forEach(function (box) {
    var image = box.childNodes[3];
    // console.log(image)
    box.addEventListener("mousemove", function (details) {
      image.style.left = details.pageX + "px";
      // image.style.top = details.pageY + "px";
    });
    box.addEventListener("mouseenter", function () {
      image.style.opacity = "1";
    });
    box.addEventListener("mouseleave", function () {
      image.style.opacity = "0";
    });
  });
});
