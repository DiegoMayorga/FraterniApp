var thatHome;
var homeView = {
    init: function () {
        thatHome = this;
        // Listener del evento submit de un formulario
        $('#btnLogout').on('click', thatHome.logout);
        $('#btnPosts').on('click', thatHome.loadView);
        $('#btnVacancies').on('click', thatHome.loadView);
    },
    logout: function () {
        window.location = 'index.html'
    },
    loadView: function () {
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
        }
        $('#homeContainer2').empty();
        $('#homeContainer2').load(html);
    }
};
homeView.init();