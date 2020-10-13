var signupControl = {
    signup: function (data, callBack) {
        return _app.ajax({
            'url': _route.path + _route.signup,
            'completado': callBack,
            'data': JSON.stringify(data),
            'contentType': 'application/json'
        });
    }
};