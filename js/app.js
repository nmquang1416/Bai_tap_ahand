var about = document.getElementById("about");
var section_1 = document.getElementById("section-1");

function scroll_about() {
    about.addEventListener("click",function(){
        scrollTo(section_1);
    })
}

