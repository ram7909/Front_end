const length = (str)=>{
    let str1 = str.trim()
    let words = str1.split(' ')
    let lastWord = words[words.length-1]
    console.log(lastWord,"=" ,lastWord.length);
}
const str = "   This Is my String Hello World"
const result = length(str)

