var postControl = {
    post:function(callBack){
        return _app.ajax({
            'url':_route.path + _route.post,
            'completado':callBack,
            'contentType':'application/json'
        });
    }
};