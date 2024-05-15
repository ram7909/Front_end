console.log("Hello");
const element = document.querySelector('h1')
// element.className = 'red'

// setTimeout(() => {
//     element.className='yellow'
//     console.log("Inside Timeout");
// }, 2000);
// setTimeout(() => {
//     element.className='red'
//     console.log("Inside Timeout");
// }, 4000);

// setInterval(() => {
//     element.className='yellow'
// }, 1000);
// setInterval(() => {
//     element.className='red'
// }, 2000);
// let s = element.style
// element.style.backgroundColor = 'blue'
// element.style.fontSize = '4rem'
// element.style.color = 'green'
const body = document.querySelector('body')

setInterval(() => {
    // body.style.backgroundColor = 'blue'
    body.style.backgroundImage = 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)'
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundSize = 'cover'
    body.style.backgroundPosition = 'center'
}, 1000);
setInterval(() => {
    // body.style.backgroundColor = 'aqua'
    body.style.backgroundImage = 'linear-gradient(45deg, #ff9a9e 0%, #2F0743 99%, #fad0c4 100%)'
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundSize = 'cover'
    body.style.backgroundPosition = 'center'
}, 2000);
setInterval(() => {
    // body.style.backgroundColor = 'red'
    body.style.backgroundImage = 'linear-gradient(45deg, #ff9a9e 0%, #ffffff 99%, #fad0c4 100%)'
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundSize = 'cover'
    body.style.backgroundPosition = 'center'
}, 3000);
setInterval(() => {
    // body.style.backgroundColor = 'orange'
    body.style.backgroundImage = 'linear-gradient(45deg, #ff9a9e 0%, #ff7e5f 99%, #fad0c4 100%)'
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundSize = 'cover'
    body.style.backgroundPosition = 'center'
}, 4000);
setInterval(() => {
    // body.style.backgroundColor = 'yellow'
    body.style.backgroundImage = 'linear-gradient(45deg, #ff9a9e 0%, #fc67fa 99%, #fad0c4 100%)'
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundSize = 'cover'
    body.style.backgroundPosition = 'center'
}, 5000);