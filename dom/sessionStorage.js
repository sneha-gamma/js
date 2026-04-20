
let key = document.getElementById('keyInp');
let val = document.getElementById('valInp');
let result = document.getElementById('res')

let eventDel = document.getElementById('container')

function storage(event){
    console.log(event);

    if(event.target.id === 'sb'){
       
        let keytext = key.value;
        let valuetext = val.value;

        if(keytext && valuetext){
            sessionStorage.setItem(keytext,valuetext);
             result.innerHTML = ' item stored';
        }
         
        else{
        result.innerHTML = '<b>Input fields can not be empty</b>'
    }
       
    }

    if(event.target.id === 'gb'){
        let keytext = key.value;

        if(keytext){
            result.innerHTML = `<b>
                stored item: ${sessionStorage.getItem(valuetext)}
            </b>`
        }
        else{
        result.innerHTML = `<b>no stored item</b>`
    }
    }
    
}



eventDel.addEventListener('click',storage);