function myfunction() {
    var x =
    document.getElementById("mynavbar");
    if (x.className === "nav-menu"){
        x.className += "responsive";
    } else{
        x.className = "nav-menu"
    }
    
}