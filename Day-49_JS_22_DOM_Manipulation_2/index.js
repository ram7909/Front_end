const element = document.querySelector('.parent')

console.log(element.children.length);
for(let i=0;i<element.children.length;i++){
    element.children[i].style.backgroundColor = 'gray'
    element.children[i].style.margin = '10px'
    element.children[i].style.padding = '10px'
}
// console.log(element.firstElementChild.innerText);
// console.log(element.lastElementChild.innerText);

console.log(element.previousElementSibling)
console.log(element.nextElementSibling)
element.previousElementSibling.style.backgroundColor = 'yellow'