var indexControl = {
    login:function(data,callBack){
        return _app.ajax({
            'url':_route.path + _route.login,
            'completado':callBack,
            'data':data,
            'contentType':'application/json'
        });
    }
};