function verifyForm(id){//Name required, Email required, and matches some regexp, message required
    // ARRANGE
    let name = document.getElementById(id + "-name");
    let email = document.getElementById(id + "-email");
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let message = document.getElementById(id + "-message");
    let btn = document.getElementById(id + "-button");
    let nameText = name.value;
    let emailText = email.value;
    let messageText = message.value;
    let passedCheck = true;

    // ACT
    if(nameText.length === 0){
        name.setCustomValidity('Please fill in this field!');
        if(passedCheck){
            name.reportValidity();
            passedCheck = false;
        }
    }
    else{
        name.setCustomValidity('');
    }

    if(emailPattern.test(emailText)){
        email.setCustomValidity('');
    }
    else{
        email.setCustomValidity('Please enter a valid email address!');
        if(passedCheck){
            email.reportValidity();
            passedCheck = false;
        }
    }

    if(messageText.length === 0){
        message.setCustomValidity('Please fill in this field!');
        if(passedCheck){
            message.reportValidity();
            passedCheck = false;
        }
    }
    else{
        message.setCustomValidity('');
    }

    if(btn.value !== "Send"){//Ongoing send request
        console.log(btn.value);
        passedCheck = false;
    }

    // RETURN
    return passedCheck;
}