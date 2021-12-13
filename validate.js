function validName(name) {
    if (name === "") {
        return false;
    }
    return true;
}

function validEmail(email) {
    if (email === "") {
        return false;
    }
    return true;
}



function validateUser() {
    let fName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("country").value = "australia";

    if (validName(fName) && validEmail(email)) {
        document.getElementById("theName").innerHTML = fName;
        document.getElementById("theEmail").innerHTML = email;
        document.getElementById("theCountry").innerHTML = country[0].toUpperCase() + country.slice(1);
        document.getElementById("error").innerHTML = "";
    } else {
        document.getElementById("error").innerHTML = "Error: Invalid name or email!"
    }
}

