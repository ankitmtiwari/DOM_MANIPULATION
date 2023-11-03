window.addEventListener("DOMContentLoaded", (event) => {
  var isFriend = 0;
  var btn = document.querySelector("#add");
  var stts = document.querySelector("#stts");
  btn.addEventListener("click", function () {
    isFriend = !isFriend;
    if (!isFriend) {
      stts.innerHTML = "Stranger";
      stts.style.color = "red";
      btn.innerHTML = "Add friend";
    } else {
      stts.innerHTML = "Freinds";
      stts.style.color = "green";
      btn.innerHTML = "Remove";
    }
  });
});
