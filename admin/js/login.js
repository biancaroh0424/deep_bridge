function formLogin(){

    var idCheck = document.getElementById("admin_id");
    var idValid = admin_id.value.length;
    // var idReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var pwLogin = document.getElementById("admin_pw");
    
    
    if (idCheck.value==""){
    
        var errorPw = document.getElementById("errorId");
        errorPw.innerHTML = "Please write your Id";
    
        document.getElementById("admin_id").style.borderColor="rgb(246, 80, 80)";
        return false;
    };
    
    // if (emailValid < 10 || emailValid > 64){
    //     var errorPw = document.getElementById("errorEmail");
    //     errorPw.innerHTML = "Please write valid Email";
    
    //     document.getElementById("email_login").style.borderColor="#C53F3F";
    //     return false;
    // };
    
    // if(emailCheck.value == idReg){
    //     var errorPw = document.getElementById("errorEmail");
    //     errorPw.innerHTML = "Please write valid Email";
    
    //     document.getElementById("email_login").style.borderColor="#C53F3F";
    //     return false;
    // };
    
    
    if (pwLogin.value==""){
        
        var errorPw = document.getElementById("errorPw");
        
        errorPw.innerHTML = "Please write your password";
        
        document.getElementById("admin_pw").style.borderColor="rgb(246, 80, 80)";
    
        return false;
    
    };
    
    };

    
function showPw(){
    const showPw = document.getElementById("admin_pw");
    if(showPw.type ==="password"){
        showPw.type="text";
    }else{
        showPw.type="password";
    }
};