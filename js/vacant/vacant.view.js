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
        var cboCollege = parseInt($('#cboCollege :selected').val());
        var data = {
            'vacanteNombre': txtTitle,
            'vacanteDescripcion': txtVacant,
            'cboCollege': cboCollege,
        };
        vacantControl.vacant(data, thatVacant.sendVacantFormCallBack);
    },

    sendVacantFormCallBack: function (data) {
        if (data) {
        }
    }
};
vacantView.init();