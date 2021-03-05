const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success message
function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email validity
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(input).toLowerCase());
    if(re.test(input.value.trim())){
        showSuccess(input);
        // console.log(input.value);
    } else {
        showError(input,"Email is not valid");
    }
}
//check passwords match
function checkPasswordsMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,"Passwords do not match");
    }else {
        showSuccess(input2);
    }
}
//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        // console.log(input.value);
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//check input egth
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min}}`);
    } else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max}`);
    } else {
        showSuccess(input);
    }
}
//getfieldname from input  id
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}


//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();
    // console.log(username.value)
    
    
    checkRequired([username, email, password, password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
});