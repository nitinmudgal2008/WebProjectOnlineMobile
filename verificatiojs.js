var rdm;
function fun(){
var phone=document.getElementById('phone');
var email=document.getElementById('email');
rdm=Math.floor(Math.random() * (9999- 1001) ) + 1001;
alert('Your OTP is :- '+rdm);

}

function otpfun(){
    var otp1=document.getElementById('otp').value;
    
    if (otp1==rdm){
        alert('You are verified');
    }
    else{
        alert('Your otp is incorrect please try again');
        rdm=Math.floor(Math.random() * (9999- 1001) ) + 1001;
        alert('Your new OTP is'+ rdm);

    }
}