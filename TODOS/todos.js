var LIS = document.querySelectorAll("li");
for (var i = 0; i < LIS.length; i++) {
    LIS[i].addEventListener("mouseover", function () {
        this.classList.add("selected");
    })
    LIS[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    })

    LIS[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
}