var prenomcheck = 0;
var nomcheck = 0;
var emailnomcheck = 0;
var datecheck = 0;
var phonecheck = 0;
var citycheck = 0;
var areacheck = 0;
function prenomInput(event) {
    var prenom = document.getElementById('prenom')
    if (!prenom.value)
        prenom.classList.add('is-invalid')
    else if (prenom.value){
        prenom.classList.replace('is-invalid','is-valid')

    }
}

function nomInput(event) {
    var nom = document.getElementById('nom')
    if (!nom.value) 
        nom.classList.add('is-invalid')
    else if (nom.value)
        nom.classList.replace('is-invalid','is-valid')
}

function emailInput(params) {
    var email = document.getElementById('email')
    if (!email.value)
        email.classList.add('is-invalid')
    else if (email.value)
        email.classList.replace('is-invalid','is-valid')
}

function dateInput(params) {
    var date = document.getElementById('date')
    if (!date.value) 
        date.classList.add('is-invalid')
    else if (date.value)
        date.classList.replace('is-invalid','is-valid')
}

function phoneInput(event) {
    var phone = document.getElementById('phone')
    if (!phone.value){
        phone.classList.add('is-invalid')
    }else if (phone.value.length == 9){
        phone.classList.replace('is-invalid','is-valid')
        phonecheck = true;
    }else if (phone.value.length != 9){
        phone.classList.replace('is-valid','is-invalid')
        phonecheck = false;
    }
}

function cityInput(event) {
    var city = document.getElementById('city')
    if (!city.value)
        city.classList.add('is-invalid')
    else if (city.value)
        city.classList.replace('is-invalid','is-valid')
}

function areaInput(event) {
    var area = document.getElementById('textAreaFormMid')
    if (!area.value) 
        area.classList.add('is-invalid')
    else if (area.value){
        area.classList.replace('is-invalid','is-valid')
        sub(event)
    }
}

function sub(event){
    var form = document.getElementById('formMid');
    var button = document.getElementById('buttonForm')
    if (phonecheck == true) {
        button.style.display ='inline'
    }else{
        
    }
}