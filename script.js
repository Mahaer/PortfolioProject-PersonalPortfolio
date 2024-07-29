const name = document.getElementById('name')

name.onmouseover = () => {
    name.style.visibility = 'hidden'
}
name.onmouseout = () => {
    name.style.visibility = 'visible'
}