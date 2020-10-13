var vacantControl = {
    vacant: function(data, callBack) {
        return _app.ajax({
            'url': _route.path + _route.vacant.toVacant,
            'completado': callBack,
            'data': JSON.stringify(data),
            'contentType': 'application/json',
            'token': localStorage.token
        });
    }
};