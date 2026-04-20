
// web history api -> provides window.history object containing the url visited by the user

// 1) back() -> loads the previous url in window.history list

const historyBack = ()=>{
      window.history.back();
      console.log('going back')
}


// 2) go()->  loads a specific url from the history list

const goToPage = ()=>{
      window.history.go(-1);
      console.log(window.history.go(-1))
      console.log('going 1 page back')
}

// 1) back() -> loads the previous url in window.history list

const historyForward = ()=>{
      window.history.forward();
      console.log('going forward')
}
