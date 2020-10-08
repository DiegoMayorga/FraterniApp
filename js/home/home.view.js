var thatHome;
var homeView = {
    init:function(){
        thatHome = this;
        // Listener del evento submit de un formulario
        $('#homeForm').on('submit',thatHome.sendHomeForm);
        $('#btnLogout').on('click',thatHome.logout);
    },
    sendHomeForm:function(e){
        //Evitar que la página se refresque
        e.preventDefault();
        var txtTitle = $('#txtTitle').val();
        var txtVacant = $('#txtVacant').val();
        var data = {
            "tituloVacante":txtTitle,
            "contenidoVacante":txtVacant
        };
        homeControl.home(data,thatHome.sendHomeFormCallBack);
    },
    sendHomeFormCallBack:function(data){
        if (data){
            window.location = 'home.html'
        }
    },
    logout:function(){
        window.location = 'index.html'
    }
};
indexHome.init();