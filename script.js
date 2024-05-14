var collapse = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var box = this.nextElementSibling;
        if (box.style.display === "block") {
            box.style.display = "none";
        } else {
            box.style.display ="block";
        }
        });
    }