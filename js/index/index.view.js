var thatIndex;
var indexView = {
    init:function(){
        thatIndex = this;
        // Listener del evento submit de un formulario
        $('#loginForm').on('submit',thatIndex.sendLoginForm);
        $('#btnRegister').on('click',thatIndex.register);
    },
    sendLoginForm:function(e){
        //Evitar que la página se refresque
        e.preventDefault();
        var txtEmail = $('#txtEmail').val();
        var txtPassword = $('#txtPassword').val();
        var data = {
            "usuarioEmail":txtEmail,
            "usuarioContraseña":txtPassword
        };
        indexControl.login(data,thatIndex.sendLoginFormCallBack);
    },
    sendLoginFormCallBack:function(data){
        if (data){
            window.location = 'home.html'
        }
    },
    register:function(){
        window.location = 'signup.html'
    }
};
indexView.init();