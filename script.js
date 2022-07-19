const pictures = document.querySelectorAll(".picture")

function removeClass() {
  pictures.forEach((picuture) => {
    picuture.classList.remove("selected")
  })
}

pictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    removeClass()
    picture.classList.add("selected")
  })
})
