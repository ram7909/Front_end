const h1 = document.querySelector('h1')

// h1.innerText = window.innerWidth
// h1.innerText = window.innerHeight

document.querySelector('#dark').addEventListener('click',()=>{
    document.body.style.backgroundColor = 'black'
    document.body.style.Color = 'white'
    if(confirm("You are Redirect To Google \n Okay to proceed")){
        location.assign("https://www.google.com")
    }
})
document.querySelector('#light').addEventListener('click',()=>{
    document.body.style.backgroundColor = 'white'
    document.body.style.Color = 'black'
    if(confirm("You are Redirect To W3 School \n Okay to proceed")){

        location.assign("https://www.w3schools.com")
    }
})