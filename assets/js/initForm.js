function initForm(id){
    let name = document.getElementById(id + "-name");
    let email = document.getElementById(id + "-email");
    let message = document.getElementById(id + "-message");

    name.addEventListener('input', () => name.setCustomValidity(''));
    email.addEventListener('input', () => email.setCustomValidity(''));
    message.addEventListener('input', () => message.setCustomValidity(''));
}