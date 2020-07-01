const select = document.querySelector(".js-select");
const region = document.querySelector("select");
const COUNTRY = "country";

function handleCountry(){
    const currentValue = region.options[region.selectedIndex].value;
    localStorage.setItem(COUNTRY,currentValue);
}

function askForCountry(){
    select.addEventListener("change",handleCountry);
}

function loadCountry(){
    const currentCountry = localStorage.getItem(COUNTRY);
    if(currentCountry === null ){
        askForCountry();
    } else {
        
    }
}

function init(){
    loadCountry();
}

init();