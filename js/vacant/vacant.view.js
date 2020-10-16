var thatVacant;
var vacantView = {
    init: function () {
        thatVacant = this;
        // Listener del evento submit de un formulario
        $('#vacantForm').on('submit', thatVacant.sendVacantForm);
        vacantControl.list(thatVacant.listCallBack);     
    },
    listCallBack:function(data){
        console.log(data);
        for (var i = 0; i < data.Vacants.length; i++) {
            thatVacant.createVacant(data.Vacants[i]);
        }
    },
    createVacant:function(vacant){
        var card = $('<div>').addClass('cardHome');
        var cardHeader = $('<div>').addClass('card-header').html(vacant.vacanteNombre);
        var cardBody = $('<div>').addClass('card-body');
        var title = $('<h5>').addClass('card-title').html(vacant.nombreUser);
        var paragraph = $('<p>').addClass('card-text').html(vacant.vacanteDescripcion);
        var cardFooter = $('<div>').addClass('card-footer').addClass('text-muted').html(vacant.fechasRegistro);

        cardBody.append(title).append(paragraph);
        card.append(cardHeader).append(cardBody).append(cardFooter);
        $('#vacancies').append(card);
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
            $('#vacantModalLong').modal('toggle');
            vacantControl.list(thatVacant.listCallBack);
        }
    }
};
vacantView.init();