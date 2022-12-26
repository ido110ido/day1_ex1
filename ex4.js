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

  function renderList(items) {
    let makeList = `<ul>`;
    for (let index = 0; index < items.length; index++) {
      makeList += `<li>${items[index]}</li>`;
    }
    makeList += `</ul>`;
    console.log(makeList);
     return makeList;
  }
  document.getElementById('foodList').innerHTML = renderList(['pizza', 'tacos', 'ice cream']);
