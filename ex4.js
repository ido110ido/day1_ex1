 const handleClick = function(ID){
    document.getElementById(ID).style.color= "blue";
    console.log('Element Clicked')

}

function delayHandleClick(Id){
    setTimeout(() => handleClick(Id), 3000);
}

function Clicked(){
        document.body.classList.toggle('dark_mood')
        document.getElementById("head").classList.toggle('dark_mood_header')
        document.getElementById("h1").classList.toggle('dark_mood_h1')
    
}

function checkPasswordStrength(password) {
    if (password.length < 8) {
      return "weak password";
    }
    if (!password.match(/[a-z]/)) {
      return "weak password";
    }
    if (!password.match(/[A-Z]/)) {
      return "weak password";
    }
    if (!password.match(/[0-9]/)) {
      return "weak password";
    }
    if (password.match(/\s/)) {
      return "weak password";
    }
    return "strong password";
  }
  