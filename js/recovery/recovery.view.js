var thatRecovery;
var recoveryView = {
    init: function () {
        thatRecovery = this;
        console.log('recoveryCargado');
        // Listener del evento submit de un formulario
        $('#recoveryForm').on('submit', thatRecovery.sendRecoveryForm);
        $('#btnReturn').on('click', thatRecovery.goBack);
    },
    sendRecoveryForm: function (e) {
        //Evitar que la página se refresque
        e.preventDefault();
        var txtEmail = $('#txtEmail').val();
        var data = {
            "usuarioEmail": txtEmail,
        };
        recoveryControl.recovery(data, thatRecovery.sendRecoveryFormCallBack);
    },
    sendRecoveryFormCallBack: function (data) {
        if (data['res'] == true) {
            console.log(data);
            //window.location = 'recovery.html'
        } else {
            alert (data['message']);
        }
    },
    goBack: function () {
        window.location = 'index.html'
    }
};
recoveryView.init();