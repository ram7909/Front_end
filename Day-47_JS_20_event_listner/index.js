// const btnDark = document.querySelector('#dark')
// const btnLight = document.querySelector('#light')
// const body = document.querySelector('body')

// btnDark.addEventListener('click',()=>{
//     body.style.backgroundColor = 'black'
//     body.style.color = 'white'
// })
// btnLight.addEventListener('click',()=>{
//     body.style.backgroundColor = 'white'
//     body.style.color = 'black'
// })

const body = document.querySelector('body')

document.querySelector('#dark').addEventListener('click',()=>{
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
})

document.querySelector('#light').addEventListener('click',()=>{
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
})


let input1;
let input2
const getInputVal = ()=>{
input1 = parseInt(document.querySelector('#num1').value);
input2 = parseInt (document.querySelector('#num2').value);
    console.log(input1,input2);
}

document.querySelector('#add').addEventListener('click',()=>{
    document.querySelector('h1').innerText = input1 + input2
})
document.querySelector('#sub').addEventListener('click',()=>{
    document.querySelector('h1').innerText = input1 - input2
})
document.querySelector('#mul').addEventListener('click',()=>{
    document.querySelector('h1').innerText = input1 * input2
})
document.querySelector('#div').addEventListener('click',()=>{
    document.querySelector('h1').innerText = input1 / input2
})