var postControl = {
    post: function(data, callBack) {
        return _app.ajax({
            'url': _route.path + _route.post.toPost,
            'completado': callBack,
            'data': JSON.stringify(data),
            'contentType': 'application/json',
            'token': localStorage.token
        });
    }
};