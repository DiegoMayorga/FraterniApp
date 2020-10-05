var thatSignup;
var signupView = {
    init:function(){
        thatSignup = this;
        console.log('signupCargado');
        // Listener del evento submit de un formulario
        $('#signupForm').on('submit',thatSignup.sendRegisterForm);
        $('#btnReturn').on('click',thatSignup.goBack);
    },
    sendRegisterForm:function(e){
        //Evitar que la página se refresque
        e.preventDefault();
        var txtName = $('#txtName').val();
        console.log($('#txtName').val());
        var txtEmail = $('#txtEmail').val();
        console.log(txtEmail);
        var txtPhone = $('#txtPhone').val();
        console.log(txtPhone);
        var selCollege = parseInt($('#selCollege :selected').val());
        console.log(selCollege);
        var txtPassword = $('#txtPassword').val();
        console.log(txtPassword);
        var txtConfirmPassword = $('#txtConfirmPassword').val();
        console.log(txtConfirmPassword);
        if (txtPassword !== txtConfirmPassword){
            alert('Las contraseñas no coinciden');
        }
        var data = {
            "usuarioNombre":txtName,
            "usuarioEmail":txtEmail,
            "usuarioTelefonoPrincipal":txtPhone,
            "fk_universidadId":selCollege,
            "usuarioContraseña":txtPassword
        };
        signupControl.signup(data,thatSignup.sendRegisterFormCallBack);
    },

    sendRegisterFormCallBack:function(data){
        if (data){
            window.location = 'index.html'
        }
    },
    goBack:function(){
        window.location = 'index.html'
    }
};
signupView.init();