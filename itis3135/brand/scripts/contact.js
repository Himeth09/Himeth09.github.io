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