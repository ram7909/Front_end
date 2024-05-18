let inr,dir,degree,p,r,t
const getValue = () =>{
    inr = parseFloat(document.querySelector('#currency').value);
    dir = parseFloat(document.querySelector('#dir').value);
    degree = parseFloat(document.querySelector('#degree').value);
    p = parseFloat(document.querySelector('#principle').value);
    r = parseFloat(document.querySelector('#rate').value);
    t = parseFloat(document.querySelector('#time').value);
}
document.querySelector('#usd').addEventListener('click',()=>{
    document.querySelector('#result').innerText = inr*0.12
})
document.querySelector('#yen').addEventListener('click',()=>{
    document.querySelector('#result').innerText = inr*1.87
})
document.querySelector('#euro').addEventListener('click',()=>{
    document.querySelector('#result').innerText = inr*0.11
})
document.querySelector('#dihram').addEventListener('click',()=>{
    document.querySelector('#result').innerText = 22.68/dir
})
document.querySelector('#degreee').addEventListener('click',()=>{
    document.querySelector('#degresult').innerText = (degree*9/5) +32
})
document.querySelector('#si').addEventListener('click',() =>{
    document.querySelector('#sici').innerText = (p*r*t)/100;
})
document.querySelector('#ci').addEventListener('click',() =>{
    document.querySelector('#sici').innerText = (p*Math.pow(1+r/100,t))-p;
})


document.addEventListener('DOMContentLoaded', () => {
    const dobInput = document.getElementById('dob');
    const calculateAgeButton = document.getElementById('calculateAgeButton');
    const result = document.getElementById('result1');

    calculateAgeButton.addEventListener('click', () => {
        const dobValue = dobInput.value;
        if (dobValue) {
            const age = calculateAge(new Date(dobValue));
            result1.textContent = `You are ${age} years old.`;
        } else {
            result1.textContent = 'Please enter your date of birth.';
        }
    });

    function calculateAge(dob) {
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }
});
