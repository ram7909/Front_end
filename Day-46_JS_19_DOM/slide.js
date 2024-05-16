const images = ['https://cdn.pixabay.com/photo/2022/11/04/13/43/car-7569896_640.jpg',"https://cdn.pixabay.com/photo/2022/12/02/21/20/blue-7631674_640.jpg",'https://cdn.pixabay.com/photo/2023/06/19/18/41/blue-jay-8075346_640.jpg','https://cdn.pixabay.com/photo/2024/05/09/12/06/fruit-8750860_640.jpg',"https://cdn.pixabay.com/photo/2022/11/07/21/31/rose-7577265_640.jpg"]

const img = document.querySelector('img')
let index = 0;

img.src = images[index]

const next = () =>{
    index++;
    if(index<images.length-1){
        img.src = images[index]
    }
    else if(index == images.length){
        index = 0;
        img.src = image[index]
    }
}
const prev = () =>{
    index--;
    if(index>0){
        img.src = images[index]
    }
    else if(index<0){
        index = image.length-1;
        img.src = image[index]
    }
}