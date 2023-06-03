const form = document.getElementById('form');
const userName = document.getElementById('login');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{
    e.preventDefault();
    // console.log('a')

    validateInputs();
});

const setError=(element,message)=>{
    const inputControl= element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess= element=>{
    const inputControl= element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const validateInputs=()=>{
    const userNameValue= userName.value.trim();
    const passwordValue=password.value.trim();
    const password2Value= password2.value.trim();

    if(userNameValue === ''){
        setError(userName,'Nazwa użytkownika jest wymagana');
    }else if(userNameValue.length < 5){
        setError(userName, 'Nieprawidłowy login');
    }else
        setSuccess(userName)
    

    if(password===''){
        setError(password, 'Hasło jest nieprawidłowe');
    }else if(passwordValue.length < 8){
        setError(password, 'Hasło musi zawierać co najmniej 8 znaków')
    }else{
        setSuccess(password)
    }

    if(password2Value === ''){
        setError(password2, 'Potwierdź swoje hasło ');
    }else if(password2Value !== passwordValue){
        setError(password2, "Passwords doesn't match");
    }else{
        setSuccess(password2)
    }
}