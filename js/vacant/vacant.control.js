var vacantControl = {
    vacant: function(data, callBack) {
        return _app.ajax({
            'url': _route.path + _route.vacant.toVacant,
            'completado': callBack,
            'data': JSON.stringify(data),
            'contentType': 'application/json',
            'token': localStorage.token
        });
    },
    list: function(callBack) {
        return _app.ajax({
            'url': _route.path + _route.vacant.list,
            'completado': callBack,
            'contentType': 'application/json',
            'token': localStorage.token,
            'metodo': 'GET'
        });
    }
};