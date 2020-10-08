var thatPost;
var postView = {
    init:function(){
        thatPost = this;
        // Listener del evento submit de un formulario
        $('#postForm').on('submit',thatPost.sendPostForm);
    },
    sendPostForm:function(e){
        //Evitar que la página se refresque
        e.preventDefault();
        var txtTitle = $('#txtTitle').val();
        var txtVacant = $('#txtVacant').val();
        var data = {
            "tituloVacante":txtTitle,
            "contenidoVacante":txtVacant
        };
        postControl.post(data,thatPost.sendPostFormCallBack);
    },
    sendPostFormCallBack:function(data){
        if (data){
            window.location = 'post.html'
        }
    }
};
postView.init();