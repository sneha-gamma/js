
const setCookie = (ckey,cvalue,exdays) =>{

    const d = new Date();
    console.log(d)
    console.log(d.getTime())
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    let expires = 'expires='+d.toUTCString();
    document.cookie = cname + '=' + cvalue+';'+ expires+';path=/'
}

const getCookie = (cname)=>{
     
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';')
    for(let i=0; i<ca.length; i++){
        let c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length, c.length)
        }
    }
    console.log('key'+Key, value)
}

const checkCookie = ()=>{
    let user = getCookie('username');
    if(user != ''){
        alert('welcome again ' + user);
    }else{
        user = prompt("enter your name", '');
        if(user!=""&& user!=null){
            setCookie('username',user,20)
        }
    }

}