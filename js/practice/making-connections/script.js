var requestspan = document.querySelector("#requests")
var connectionsspan = document.querySelector("#connections")
var username = document.querySelector("#username")

function accept(id){
    var element = document.querySelector(id);
    element.remove();
    requestspan.innerText--;
    connectionsspan.innerText++;
    

}
function ignore(id){
    var element = document.querySelector(id)
    element.remove();
    requestspan.innerText--;



}
function edit(){
    username.innerText = "Alice doe"



}