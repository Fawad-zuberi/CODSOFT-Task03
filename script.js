const displayscreen = document.querySelector("#disp");
const button = document.querySelectorAll("button");

button.forEach( (item) =>{
    item.onclick = ()=>{
        if ( item.id == "clear" )
        {
            displayscreen.innerText = "";
        }
        else if ( item.id=="backspace")
        {
            let string = displayscreen.innerText.toString();
            displayscreen.innerText=string.substr(0,string.length-1);
        }
        else if( displayscreen.innerText != "" && item.id=="equals")
        {
            displayscreen.innerText=eval(displayscreen.innerText);
        }
        else if( displayscreen.innerText == "" && item.id=="equals")
        {
            displayscreen.innerText="Empty!";
            setInterval(()=>{
                displayscreen.innerText="";
            },2000);
        }
        else{
            displayscreen.innerText=displayscreen.innerText+item.id;
        }
    };
});

