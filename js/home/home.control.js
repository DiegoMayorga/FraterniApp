var homeControl = {
    home:function(data,callBack){
        return _app.ajax({
            'url':_route.path + _route.home,
            'completado':callBack,
            'data':JSON.stringify(data),
            'contentType':'application/json'
        });
    }
};