
const file = '"C:\Users\HP\Desktop\fetch.txt"';
console.log(file)
const elem = document.getElementById('demo')

fetch(file)
.then(x=>x.text())
.then((y)=>elem.innerHtml = y )
.catch((e)=>console.error(e))