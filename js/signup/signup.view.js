var thatSignup;
var signupView = {
    init: function () {
        thatSignup = this;
        // Listener del evento submit de un formulario
        $('#signupForm').on('submit', thatSignup.sendRegisterForm);
        $('#btnReturn').on('click', thatSignup.goBack);
    },
    sendRegisterForm: function (e) {
        //Evitar que la página se refresque
        e.preventDefault();
        var txtName = $('#txtName').val();
        var txtEmail = $('#txtEmail').val();
        var txtPhone = $('#txtPhone').val();
        var selCollege = parseInt($('#selCollege :selected').val());
        var txtPassword = $('#txtPassword').val();
        var txtConfirmPassword = $('#txtConfirmPassword').val();
        if (txtPassword !== txtConfirmPassword) {
            alert('Las contraseñas no coinciden');
        }
        var data = {
            'usuarioNombre': txtName,
            'usuarioEmail': txtEmail,
            'usuarioTelefonoPrincipal': txtPhone,
            'fk_universidadId': selCollege,
            'usuarioContraseña': txtPassword
        };
        signupControl.signup(data, thatSignup.sendRegisterFormCallBack);
    },

    sendRegisterFormCallBack: function (data) {
        if (data) {
            window.location = 'index.html'
        }
    },
    goBack: function () {
        window.location = 'index.html'
    }
};
signupView.init();