var phonecheck = 0;
function checkInput(event) {
    var prenom = document.getElementById('prenom')
    var nom = document.getElementById('nom')
    var email = document.getElementById('email')
    var phone = document.getElementById('phone')
    var date = document.getElementById('date')
    var city = document.getElementById('city')
    if (!prenom.value)
        prenom.classList.add('is-invalid')
    else if (prenom.value)
        prenom.classList.replace('is-invalid','is-valid')
    if (!nom.value) 
        nom.classList.add('is-invalid')
    else if (nom.value)
        nom.classList.replace('is-invalid','is-valid')
    if (!email.value)
        email.classList.add('is-invalid')
    else if (email.value)
        email.classList.replace('is-invalid','is-valid')
    if (!phone.value)
        phone.classList.add('is-invalid')
    else if (phone.value.length == 9){
        phone.classList.replace('is-invalid','is-valid')
        //phonecheck = true;
    }else if (phone.value.length != 9){
        phone.classList.replace('is-valid','is-invalid')
        //phonecheck = false;
    }/*if (!date.value) 
        date.classList.add('is-invalid')
    else if (date.value)
        date.classList.replace('is-invalid','is-valid')
    */if (!city.value)
        city.classList.add('is-invalid')
    else if (city.value)
        city.classList.replace('is-invalid','is-valid')
}

function sub(event){
    var form = document.getElementById('formMid');
    if (phonecheck == true) {
        form.submit();
    }
}