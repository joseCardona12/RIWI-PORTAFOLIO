
const switchContent = document.getElementById("switch-content");
switchContent.addEventListener("click", ()=>{
    let body = document.querySelector(".body");
    body.classList.toggle("dark");
})