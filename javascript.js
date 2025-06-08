// email validation
function validateEmail() {
    const emailInput = document.forms["contactForm"]["email"];
    const feedbackElement = document.getElementById('emailFeedback');
    
    if (isEmail(emailInput.value)) {
        feedbackElement.textContent = "";
        emailInput.classList.remove("border-danger");
    } else {
        feedbackElement.textContent = "Por favor, ingrese una direccion de mail valida.";
        emailInput.classList.add("border-danger");
    }

    updateSubmitButton();
}

function isEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}


// message validation
function validateMessage(){
    const messageInput = document.forms["contactForm"]["message"];
    const feedbackElement = document.getElementById('messageFeedback');

    if (isMessage(messageInput.value)) {
        feedbackElement.textContent = "";
        messageInput.classList.remove("border-danger");
    } else {
        feedbackElement.textContent = "Por favor, escriba un mensaje de mas de 20 caracteres.";
        messageInput.classList.add("border-danger");
    }

    updateSubmitButton();
}

function isMessage(message){
    if (message.length > 20) {
        return true;
    } else {
        return false;
    }
}


// updates submit button
function updateSubmitButton(){
    const emailInput = document.forms["contactForm"]["email"];
    const messageInput = document.forms["contactForm"]["message"];
    const submitButton = document.getElementById("submitButton");

    if(isEmail(emailInput.value) && isMessage(messageInput.value)){
        submitButton.disabled = false;
        return true;
    } else {
        submitButton.disabled = true;
        return false;
    }
}
