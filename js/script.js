const shareIcon = document.getElementById("share-icon")
const tooltip = document.getElementById("tooltip--js")

shareIcon.addEventListener("click", () =>{
 shareIcon.classList.toggle("share--active")
 shareIcon.firstElementChild.classList.toggle("share__icon")
 tooltip.classList.toggle("tooltip--show")
})