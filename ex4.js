 const handleClick = function(ID){
    document.getElementById(ID).style.color= "blue";
    console.log('Element Clicked')

}

function delayHandleClick(Id){
    setTimeout(() => handleClick(Id), 3000);
}