const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");

    const emailValue = email.value;

    if (checkInputLength(emailValue) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    const subject = document.querySelector("#subject");
    const subjectError = document.querySelector("#subjectError");
    const subjectValue = subject.value;

    if (subjectLength(subjectValue) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    if (messageLength(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

}

function checkInputLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
    
}

function checkInputLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function subjectLength(value) {
    const subjectValue = value.trim();

    if (subjectValue.length > 7) {
        return true;
    } else {
        return false;
    }
}

function messageLength(value) {
    const messageValue = value.trim();

    if (messageValue.length > 15) {
        return true;
    } else {
        return false;
    }
}