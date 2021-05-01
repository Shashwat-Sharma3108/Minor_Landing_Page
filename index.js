document.querySelector(".contact-plus").addEventListener("click",()=>{
    document.querySelector(".contacts").classList.toggle("change");
})

const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll' , reveal);

function reveal(){
    var reveal = document.querySelector("#products");

    var windowheight = window.innerHeight;
    var revealProduct = reveal.getBoundingClientRect().top;
    var revealpoint = 150;
    if(revealProduct < windowheight - revealpoint){
        reveal.classList.add('active');
    }else{
        reveal.classList.remove('active');
    }
}
