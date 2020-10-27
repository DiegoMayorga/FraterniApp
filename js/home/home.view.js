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
        homeControl.permits(thatHome.permitsCallBack);
    },
    permitsCallBack: function (data){
        if (!data.res){
            $('.hidden-btn').css('display','inline');
        }
    },
    logout: function() {
        homeControl.logout(thatHome.logoutCallBack);
        localStorage.token = null;
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
        homeControl.permits(thatHome.permitsCallBack);
    },
    saveCompanyCallBack: function(data) {
        $('#companyModalLong').modal({
            show: 'false'
        });
        if (data) {

        }
        homeControl.permits(thatHome.permitsCallBack);
    }
};
homeView.init();