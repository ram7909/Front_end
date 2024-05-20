// console.log("Hello Console");
// const h1= document.createElement('h1')
// h1.setAttribute('class','black')
// h1.setAttribute('id','h1')
// h1.innerText = 'This is my own h1'
// document.body.appendChild(h1)

// const img= document.createElement('img')
// img.setAttribute('class','img')
// img.src = 'https://cdn.pixabay.com/photo/2024/05/11/06/47/tropical-8754092_640.jpg'
// document.body.appendChild(img)
let input;
const getInput = () => {
    input = document.querySelector("#ip1").value;
    const myElement = (msg,cls) =>{
        const p = document.createElement('p')
        p.setAttribute('class',cls)
        p.innerText = msg
        document.body.appendChild(p)
    }
    let i ;
    for (i = 0; input.length; i++) {
        let ch = input.charAt(i)
        if (ch == '!' || ch == '@' || ch == '#' || ch == '$'){
            myElement("Your Password Is Super Strong",'green')
            break;
        }
    }
    if(i == input.length){
        myElement('Your Password is Weak','red')
    }
};