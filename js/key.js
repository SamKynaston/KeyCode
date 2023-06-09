const title = "Sam's Keycode Generator"

//This function runs every time a key is pressed
function input(event) {
    let key = event.key //Name of the Key
    let location = event.location 
    let which = event.which  //The location of the specific key on the keyboard
    let code = event.code //Key Cod

    document.getElementById("title").innerHTML = title

    document.getElementById("key").innerHTML = key
    document.getElementById("location").innerHTML = location
    document.getElementById("which").innerHTML = which
    document.getElementById("which-2").innerHTML = which
    document.getElementById("code").innerHTML = code

    document.getElementById("unhide").classList.remove("hide");

    if (document.getElementById("welcomeText")) {
        document.getElementById("welcomeText").remove() //Remove the Welcome Screen
    }
}