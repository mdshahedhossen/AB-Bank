document.getElementById('login-btn').addEventListener('click',function(){

    // get user Email
    const mailField= document.getElementById('user-email');
    const userMail=mailField.value;
    // console.log(userMail);

    // get user Password
    const passwordField=document.getElementById('user-password');
    const userPassword=passwordField.value;
    if(userMail=='abc@gmail.com' && userPassword=='123456')
    {
        window.location.href='banking.html';
    }

});



