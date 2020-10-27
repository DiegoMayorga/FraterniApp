var thatPost;
var postView = {
    init: function () {
        thatPost = this;
        // Listener del evento submit de un formulario
        $('#postForm').on('submit', thatPost.sendPostForm);
        $('#filterForm').on('submit', thatPost.sendFilterForm);
        postControl.list(thatPost.listCallBack);

    },
    listCallBack:function(data){
        $('#posts').empty();
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
        var cardFooter = $('<div>').addClass('card-footer').addClass('text-muted')
        .html('Hace ' + thatPost.getDaysPosts(post.publicacionFechaCreacion) + ' días');
        
        cardBody.append(title).append(paragraph);
        card.append(cardHeader).append(cardBody).append(cardFooter);
        $('#posts').append(card);
    },
    getDaysPosts:function(date){
        var newDate = new Date(date);
        var currentDate = new Date();
        var difference = currentDate.getTime() - newDate.getTime();
        return Math.trunc(difference / (1000 * 3600 * 24));
    },
    sendPostForm: function (e) {
        //Evitar que la página se refresque
        e.preventDefault();
        var txtTitle = $('#txtTitle').val();
        var txtVacant = $('#txtVacant').val();
        var cboCollege = parseInt($('#cboCollege :selected').val());
        var data = {
            'publicacionTitulo': txtTitle,
            'publicacionDescripcion': txtVacant,
            'cboCollege': cboCollege
        };
        postControl.post(data, thatPost.sendPostFormCallBack);
    },
    sendFilterForm: function (e){
        e.preventDefault();
        var selCollege = parseInt($('#selCollege :selected').val());
        var selDate = $('#selDate').val();
        var txtSearch = $('#txtSearch').val();
        var data = {
            'cboCollege': selCollege,
            'publicacionFechaCreacion': selDate,
            'words': txtSearch
        };
        postControl.filter(data, thatPost.sendPostFormCallBack);
    },
    sendPostFormCallBack: function (data) {
        if (data) {
            $('#postModalLong').modal('toggle');
            postControl.list(thatPost.listCallBack);
        }
    }
};
postView.init();