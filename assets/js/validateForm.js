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
        name.setCustomValidity('Kérem töltse ki ezt a mezőt!');
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
        email.setCustomValidity('Kérem adjon meg egy valós email-címet!');
        if(passedCheck){
            email.reportValidity();
            passedCheck = false;
        }
    }

    if(messageText.length === 0){
        message.setCustomValidity('Kérem töltse ki ezt a mezőt!');
        if(passedCheck){
            message.reportValidity();
            passedCheck = false;
        }
    }
    else{
        message.setCustomValidity('');
    }

    if(btn.value !== "Küldés"){//Ongoing send request
        console.log(btn.value);
        passedCheck = false;
    }

    // RETURN
    return passedCheck;
}