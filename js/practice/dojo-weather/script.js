var cookie = document.querySelector(".footer")


function loading(){
    alert(" loading weather report...")
}


function accept(){
    cookie.remove();

}


function c2f(temp){
    return Math.round (9 / 5 * temp + 32);
    
}
function f2c(temp) {
    return Math.round((temp - 32) * 5 / 9  );
}

function convert(element){
    console.log (element.value);
    for(var i=1; i<9; i++){
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        console.log(c2f(tempVal));
        if(element.value == "°F"){
            tempSpan.innerText = c2f(tempVal);
        }
        else {
            
            tempSpan.innerText = f2c(tempVal);
        }
        
        
        
        
    }
}






