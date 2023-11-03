window.addEventListener("DOMContentLoaded", (event) => {
  var isFriend = 0;
  var btn = document.querySelector("#add");
  var stts = document.querySelector("#stts");
  btn.addEventListener("click", function () {
    isFriend = !isFriend;
    if (!isFriend) {
      stts.innerHTML = "You are Stranger";
      stts.style.color = "red";
      btn.innerHTML = "Add friend";
      btn.style.backgroundColor="green    "

    } else {
      stts.innerHTML = "You are Now Freinds";
      stts.style.color = "green";
      btn.innerHTML = "Remove Friend";
      btn.style.backgroundColor="red"
    }
  });
});
