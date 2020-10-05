var signupControl = {
    signup:function(data,callBack){
        return _app.ajax({
            'url':_route.path + _route.users,
            'completado':callBack,
            'data':data,
            'contentType':'application/json'
        });
    }
};