const body = document.querySelector('body')
const changeDark = () =>{
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
}
const changeLight = () =>{
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
}
// changeDark()
// changeLight()

let img = document.querySelector('img')
const changeImage = () =>{
    img.src = 'https://cdn.pixabay.com/photo/2022/11/04/13/43/car-7569896_640.jpg'
}
const orgImg = ()=>{
    img.src = 'https://cdn.pixabay.com/photo/2022/11/07/21/31/rose-7577265_640.jpg'
}