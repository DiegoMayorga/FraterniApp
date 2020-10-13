var thatVacant;
var vacantView = {
    init: function () {
        thatVacant = this;
        // Listener del evento submit de un formulario
        $('#vacantForm').on('submit', thatVacant.sendVacantForm);
    },
    sendVacantForm: function (e) {
        //Evitar que la página se refresque
        e.preventDefault();
        var txtTitle = $('#txtTitle').val();
        var txtVacant = $('#txtVacant').val();
        var cboCollege = $('#cboCollege').val();
        var data = {
            'vacanteNombre': txtTitle,
            'vacanteDescripcion': txtVacant,
            'cboCollege': cboCollege,
        };
        vacantControl.vacant(data, thatVacant.sendVacantFormCallBack);
    },

    sendVacantFormCallBack: function (data) {
        if (data) {
            window.location = 'home.html'
        }
    }
};
vacantView.init();