var recoveryControl = {
    recovery:function(data,callBack){
        return _app.ajax({
            'url':_route.path + _route.recovery,
            'completado':callBack,
            'data':data,
            'contentType':'application/json'
        });
    }
};