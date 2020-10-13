var postControl = {
    post: function(callBack) {
        return _app.ajax({
            'url': _route.path + _route.post.toPost,
            'completado': callBack,
            'contentType': 'application/json',
            'token': localStorage.token
        });
    }
};