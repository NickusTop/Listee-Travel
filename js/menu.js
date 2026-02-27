const menuOpen = document.querySelector(".header-a-menu")
const menuDiv = document.querySelector(".menu-div")
const menuClose = document.querySelector(".menu-a")

menuOpen.addEventListener("click", (e) => {
  e.preventDefault()
  menuDiv.classList.add("active")
  document.body.style.overflow = "hidden"
})

menuClose.addEventListener("click", (e) => {
  e.preventDefault()
  menuDiv.classList.remove("active")
  document.body.style.overflow = ""
})
