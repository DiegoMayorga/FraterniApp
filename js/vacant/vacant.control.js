var vacantControl = {
    vacant: function (data, callBack) {
        return _app.ajax({
            'url': _route.path + _route.vacant,
            'completado': callBack,
            'data': JSON.stringify(data),
            'contentType': 'application/json'
        });
    }
};