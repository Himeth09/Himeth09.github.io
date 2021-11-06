function display() {
    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let privacyChecked;
    if(document.getElementById('privacy').checked){
        privacyChecked = "Agreeded to privacy policy";
    }else{
        privacyChecked = "Did not agree to privacy policy";
    }
    let offersChecked;
    if(document.getElementById('offers').checked){
        offersChecked = "Recieving special offers and deals";
    }else{
        offersChecked = "Not recieving special offers and deals";
    }
    let formFactor;
    if(document.getElementById('pc').checked){
        formFactor="PC";
    }else{
        formFactor="Mobile";
    }

    window.alert(`Name: ${fName} ${lName}\nEmail: ${email}\n\n${privacyChecked}\n${offersChecked}\n\nForm Factor: ${formFactor}`);
    document.getElementById('fname').value="";
    document.getElementById('lname').value="";
    document.getElementById('email').value="";
    document.getElementById('privacy').checked = false;
    document.getElementById('offers').checked = false;
    if(formFactor === "PC"){
        document.getElementById('pc').checked = false;
    }else{
        document.getElementById('mobile').checked = false;
    }
}

function validateHTML(page){
    if(page == "home"){
        window.open("https://validator.w3.org/nu/?doc=https%3A%2F%2Fwebpages.uncc.edu%2Fhjayakod%2Fitis3135%2Fbrand%2F", "_blank");
    }else if(page == "contact"){
        window.open("https://validator.w3.org/nu/?doc=https%3A%2F%2Fwebpages.uncc.edu%2Fhjayakod%2Fitis3135%2Fbrand%2Fcontact.html", "_blank");
    }else{
        window.open("https://validator.w3.org/nu/?doc=https%3A%2F%2Fwebpages.uncc.edu%2Fhjayakod%2Fitis3135%2Fbrand%2Fservices.html", "_blank");
    }
}

function validateCSS(page){
    if(page == "home"){
        window.open("https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwebpages.uncc.edu%2Fhjayakod%2Fitis3135%2Fbrand%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en", "_blank");
    }else if(page == "contact"){
        window.open("https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwebpages.uncc.edu%2Fhjayakod%2Fitis3135%2Fbrand%2Fcontact.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en", "_blank");
    }else{
        window.open("https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwebpages.uncc.edu%2Fhjayakod%2Fitis3135%2Fbrand%2Fservices.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en", "_blank");
    }
}