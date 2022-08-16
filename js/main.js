
document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('input-email');
    const email = emailField.value;
    const passField = document.getElementById('input-password');
    const password = passField.value;

    if(email === 'admin@email.com' && password === 'password'){
       document.getElementById('btn-login').onclick=function(){
        location.href ='./bank-account.html'
       }
    }else{
        console.log('Invalid User');
    }
})


