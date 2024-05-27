let loanAmount = 50;
let harsh = 100;
let ramAlreadyMoney = 200;

const loan = new Promise((resolve, reject) => {
    let remainingAmount = harsh - loanAmount;
    if (remainingAmount > 0) {
        resolve({ message: 'Bhai Phir Kbhi Lge to bolna', loanAmount, iphone: 10000 })
    }
    else {
        reject({ message: "Bhai nhi de paunga" })
    }
})

loan.then((res) => res.loanAmount+ramAlreadyMoney).then((res)=> console.log(`I started my own start up with harsh help now i have ${res} money`) ).catch((err) => console.log(err))