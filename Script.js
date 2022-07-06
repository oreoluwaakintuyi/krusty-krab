function myFunction() {
    var x = document.getElementById("nav")
    if (x.className === "nav") {
        x.className += "  responsible"
    }
    else {
        x.className = "nav"
    }
}