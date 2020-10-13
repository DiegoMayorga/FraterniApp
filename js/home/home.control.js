var homeControl = {
    home: function(callBack) {
        return _app.ajax({
            'url': _route.path + _route.home,
            'completado': callBack,
            'contentType': 'application/json',
            'token': localStorage.token
        });
    }
};