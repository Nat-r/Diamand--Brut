var prenomcheck = 0;
var nomcheck = 0;
var emailcheck = 0;
var datecheck = 0;
var phonecheck = 0;
var citycheck = 0;
var areacheck = 0;
function prenomInput(event) {
    var prenom = document.getElementById('prenom')
    if (!prenom.value){
        prenom.classList.add('is-invalid')
        prenomcheck = false
    }
    else if (prenom.value){
        prenom.classList.replace('is-invalid','is-valid')
        prenomcheck = true
    }
}

function nomInput(event) {
    var nom = document.getElementById('nom')
    if (!nom.value){
        nom.classList.add('is-invalid')
        nomcheck = false;
    }
    else if (nom.value){
        nom.classList.replace('is-invalid','is-valid')
        nomcheck = true
    }
}

function emailInput(params) {
    var email = document.getElementById('email')
    if (!email.value){
        email.classList.add('is-invalid')
        emailcheck = false
    }
    else if (email.value){
        email.classList.replace('is-invalid','is-valid')
        emailcheck = true
    }
}

function dateInput(params) {
    var date = document.getElementById('date')
    if (!date.value){
        date.classList.add('is-invalid')
        datecheck = false
    }
    else if (date.value){
        date.classList.replace('is-invalid','is-valid')
        datecheck = true
    }
}

function phoneInput(event) {
    var phone = document.getElementById('phone')
    if (!phone.value){
        phone.classList.add('is-invalid')
        phonecheck = false;
    }
    else if (phone.value.length == 9){
        phone.classList.replace('is-invalid','is-valid')
        phonecheck = true;
    }
    else if (phone.value.length != 9){
        phone.classList.replace('is-valid','is-invalid')
        phonecheck = false;
    }
}

function cityInput(event) {
    var city = document.getElementById('city')
    if (!city.value){
        city.classList.add('is-invalid')
        citycheck = false
    }
    else if (city.value){
        city.classList.replace('is-invalid','is-valid')
        citycheck = true
    }
}

function areaInput(event) {
    var area = document.getElementById('textAreaFormMid')
    if (!area.value){
        area.classList.add('is-invalid')
        areacheck = false
    }
    else if (area.value){
        area.classList.replace('is-invalid','is-valid')
        areacheck = true
    }
}

function sub(event){
    
    var form = document.getElementById('formMid')
    var div = document.getElementById('messageSubmit')
    if (prenomcheck == true  && nomcheck == true && emailcheck == true && phonecheck == true && datecheck == true && citycheck == true && areacheck == true) {
        
        div.innerHTML = 'Votre message vas être envoyer dans 3 seconde'
        setInterval(function(){ form.submit(); }, 3000);
    }
    else{
        div.innerHTML = 'Un ou plusieurs champs contiennent une erreur. Veuillez vérifier et essayer à nouveau svp.'
        div.style.color = 'red'
    }
}