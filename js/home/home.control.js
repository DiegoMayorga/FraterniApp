var homeControl = {
    home: function(callBack) {
        return _app.ajax({
            'url': _route.path + _route.home,
            'completado': callBack,
            'contentType': 'application/json',
            'token': localStorage.token
        });
    },
    company: function(data, callBack) {
        return _app.ajax({
            'url': _route.path + _route.company,
            'completado': callBack,
            'data': JSON.stringify(data),
            'contentType': 'application/json',
            'token': localStorage.token
        });
    },
    logout: function(callBack) {
        return _app.ajax({
            'url': _route.path + _route.logout,
            'completado': callBack,
            'contentType': 'application/json',
            'token': localStorage.token
        });
    }
};