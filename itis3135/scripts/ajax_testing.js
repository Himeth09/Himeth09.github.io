let counter = 1;
let btn = document.getElementById('btn');
let animalContainer = document.getElementById('animal-info');

btn.addEventListener('click', function() {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${counter}.json`);
    ourRequest.onload = function() {
        if(ourRequest.status >= 200 && ourRequest < 400){
            let ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        }else{
            console.log("Server Response Error");
        }
        
    };

    ourRequest.onerror = function() {
        console.log("Connection error?");
    };
    ourRequest.send();
    counter++;
    if(counter>3){
        btn.style.display = "none";
    }
});

function renderHTML(data) {
    let htmlString = "";

    for(let i in data){
        htmlString += "<p>" + data[i].name + " is a "+ data[i].species + " that likes to eat ";
        for(let j=0; j<data[i].foods.likes.length; j++){
            if(j == 0){
                htmlString += data[i].foods.likes[j];
            }else{
                htmlString += " and " + data[i].foods.likes[j];
            }
        }
        htmlString += " and dislikes ";
        for(let j=0; j<data[i].foods.dislikes.length; j++){
            if(j == 0){
                htmlString += data[i].foods.dislikes[j];
            }else{
                htmlString += " and " + data[i].foods.dislikes[j];
            }
        }
        htmlString += ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}