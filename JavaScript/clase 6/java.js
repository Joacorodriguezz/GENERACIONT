let body = document.querySelector('body')

document.addEventListener ('click',function(info) {
    let imagen = document.querySelector('img')
    imagen.style.marginTop = info.clientY + "px"
    imagen.style.marginLeft= info.clientx + "px"
})