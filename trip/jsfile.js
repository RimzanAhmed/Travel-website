const cont = document.querySelector("cont");
window.addEventListener("scroll", function(){
    cont.classList.toggle("sticky", this.window.scrollY > 60)
});