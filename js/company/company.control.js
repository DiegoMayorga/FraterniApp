var companyControl = {
    company: function (data, callBack) {
        return _app.ajax({
            'url': _route.path + _route.company,
            'completado': callBack,
            'data': JSON.stringify(data),
            'contentType': 'application/json'
        });
    }
};