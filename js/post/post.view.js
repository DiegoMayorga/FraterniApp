var thatPost;
var postView = {
    init: function () {
        thatPost = this;
        // Listener del evento submit de un formulario
        $('#postForm').on('submit', thatPost.sendPostForm);
        postControl.list(thatPost.listCallBack);       
    },
    listCallBack:function(data){
        console.log(data);
        for (var i = 0; i < data.Posts.length; i++) {
            thatPost.createPost(data.Posts[i]);
        }
    },
    createPost:function(post){
        var card = $('<div>').addClass('cardHome');
        var cardHeader = $('<div>').addClass('card-header').html(post.publicacionTitulo);
        var cardBody = $('<div>').addClass('card-body');
        var title = $('<h5>').addClass('card-title').html(post.usuarioNombre);
        var paragraph = $('<p>').addClass('card-text').html(post.publicacionDescripcion);
        var cardFooter = $('<div>').addClass('card-footer').addClass('text-muted').html(post.publicacionFechaCreacion);
        
        cardBody.append(title).append(paragraph);
        card.append(cardHeader).append(cardBody).append(cardFooter);
        $('#posts').append(card);
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
            postControl.list(thatPost.listCallBack);
        }
    }
};
postView.init();