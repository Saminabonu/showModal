const openModal = document.querySelectorAll(".showModal");
const modal_text = document.querySelector(".modal");
const close = document.querySelector(".close");
openModal.forEach((e)=>{
    e.addEventListener("click", ()=>{
      modal_text.classList.add("mod")  
    })
});
close.addEventListener("click", ()=>{
    modal_text.classList.remove("mod");

});
modal_text.addEventListener("click", ()=>{
    modal_text.classList.remove("mod");
    
})






