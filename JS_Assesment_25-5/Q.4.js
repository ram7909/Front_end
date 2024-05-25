const palindrome =(strUpper)=>{
    for(let i=0;i<strUpper.length;i++){
        for(let j=strUpper.length-1;j >= 0;j--){
            if(strUpper.charAt(i) == strUpper.charAt(j) ){
                console.log("This Is Palindrome");
            }
            else{
                console.log("This is Not Palindrome");
            }
            break;
        }
        break;
    }
}
const str = "Naman"
let strUpper = str.toUpperCase()
let result = palindrome(strUpper)