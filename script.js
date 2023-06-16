function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
  // MESMO RESULTADO QUE A FUNÇÃO ACIMA.
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  //SUBSTITUIR IMAGEM
  if (html.classList.contains("light")) {
    //se tiver Light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mykon Brinto com fundo azul, usando óculos escuro e jaqueta preta"
    )
  } else {
    // senão tiver no mode light, manter a foto normal
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Foto de Mykon Brinto com fundo azul, usando óculos e jaqueta preta"
    )
  }
}
