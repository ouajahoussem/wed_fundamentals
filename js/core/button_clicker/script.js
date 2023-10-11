function loginbtn(el){
    console.log(el)
    if (el.innertext === "Login"){
        el.innertext = "Logout"
    }


    else{
        el.innertext = "Login"
}
    
}