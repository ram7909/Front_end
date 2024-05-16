let img = document.querySelector('img')
let h1 = document.querySelector('h1')

setInterval(() => {
    img.src = 'https://cdn.pixabay.com/photo/2023/06/18/20/08/spruce-8072652_640.jpg'
    h1.innerText = 'Leafes'
}, 1000);
setInterval(() => {
    img.src = 'https://cdn.pixabay.com/photo/2022/11/04/13/43/car-7569896_640.jpg'
    h1.innerText = 'Car'
}, 2000);
setInterval(() => {
    img.src = 'https://cdn.pixabay.com/photo/2022/12/02/21/20/blue-7631674_640.jpg'
    h1.innerText = 'Glass'
}, 3000);
setInterval(() => {
    img.src = 'https://cdn.pixabay.com/photo/2023/06/19/18/41/blue-jay-8075346_640.jpg'
    h1.innerText = 'Bird'
}, 4000);
setInterval(() => {
    img.src = 'https://cdn.pixabay.com/photo/2024/05/09/12/06/fruit-8750860_640.jpg'
    h1.innerText = 'Berry'
}, 5000);