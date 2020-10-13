var thatHome;
var homeView = {
    init: function() {
        thatHome = this;
        // Listener del evento submit de un formulario
        $('#btnLogout').on('click', thatHome.logout);
        $('#btnPosts').on('click', thatHome.loadView);
        $('#btnVacancies').on('click', thatHome.loadView);
        $('#companyForm').on('submit', thatHome.saveCompany);
        html = 'welcome.html';
        $('#homeContainer2').empty();
        $('#homeContainer2').load(html);
    },
    logout: function() {
        window.location = 'index.html'
    },
    loadView: function() {
        console.log('Cargando vista');
        var html = '';
        var id = $(this).attr('id');
        switch (id) {
            case 'btnPosts':
                html = 'post.html';
                break;
            case 'btnVacancies':
                html = 'vacant.html';
                break;
            default:
                html = 'welcome.html';
        }
        $('#homeContainer2').empty();
        $('#homeContainer2').load(html);
    },
    saveCompany: function(e) {
        e.preventDefault();
        debugger;
        var txtName = $('#txtName').val();
        var txtEmail = $('#txtEmail').val();
        var txtPhone = $('#txtPhone').val();
        var txtNit = $('#txtNit').val();
        var txtDescription = $('#txtDescription').val();
        var txtSector = parseInt($('#txtSector :selected').val());
        var data = {
            'empresaNombre': txtName,
            'empresaEmail': txtEmail,
            'empresaTelefono': txtPhone,
            'nitEmpresa': txtNit,
            'empresaDescripcion': txtDescription,
            'id_sector': txtSector
        };
        homeControl.company(data, thatHome.saveCompanyCallBack);
    },
    saveCompanyCallBack: function(data) {
        debugger;
        $('#companyModalLong').modal({
            show: 'false'
        });
        if (data) {

        }
    }
};
homeView.init();