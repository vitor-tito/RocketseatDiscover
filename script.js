function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk brito sorrindo, usando óculos escuro e jaqueta preta, sem barba e fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
