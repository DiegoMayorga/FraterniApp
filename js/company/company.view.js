var thatCompany;
var companyView = {
    init: function () {
        thatCompany = this;
        // Listener del evento submit de un formulario
        $('#companyForm').on('submit', thatCompany.sendCompanyForm);
    },
    sendCompanyForm: function (e) {
        //Evitar que la página se refresque
        e.preventDefault();
        var txtName = $('#txtName').val();
        var txtEmail = $('#txtEmail').val();
        var txtPhone = $('txtPhone').val();
        var txtNit = $('#txtNit').val();
        var txtDescription = $('#txtDescription').val();
        var txtSector = parseInt($('#txtSector: selected').val());
        var data = {
            'empresaNombre': txtName,
            'empresaEmail': txtEmail,
            'empresaTelefono': txtPhone,
            'nitEmpresa': txtNit,
            'empresaDescripcion': txtDescription,
            'id_sector': txtSector
        };
        companyControl.company(data, thatCompany.sendCompanyFormCallBack);
    },

    sendCompanyFormCallBack: function (data) {
        if (data) {
            window.location = 'home.html'
        }
    }
};
companyView.init();