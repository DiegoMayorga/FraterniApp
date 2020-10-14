var thatPost;
var postView = {
    init: function () {
        thatPost = this;
        // Listener del evento submit de un formulario
        $('#postForm').on('submit', thatPost.sendPostForm);
        postControl.post(thatPost.postCallBack);        
    },
    postCallBack:function(data){
        console.log(data);
    },
    sendPostForm: function (e) {
        //Evitar que la página se refresque
        e.preventDefault();
        var txtTitle = $('#txtTitle').val();
        var txtVacant = $('#txtVacant').val();
        var cboCollege = parseInt($('#cboCollege :selected').val());
        var data = {
            "publicacionTitulo": txtTitle,
            "publicacionDescripcion": txtVacant,
            'cboCollege': cboCollege
        };
        postControl.post(data, thatPost.sendPostFormCallBack);
    },
    sendPostFormCallBack: function (data) {
        if (data) {
            window.location = 'home.html'
        }
    }
};
postView.init();