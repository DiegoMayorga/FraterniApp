var _app = {
    ajax: function (args) {

        if (!args.data) {
            args.data = {};
        }
        var defecto = {
            'url': args.url,
            'data': (args.data) ? args.data : null,
            'type': (args.metodo) ? args.metodo : 'POST',
            'async': (args.async !== null || args.async !== undefined) ? args.async : true,
            'dataType': (args.tipo) ? args.tipo : 'json',
            'headers': (args.token) ? { "Authorization": args.token } : null,
            'success': function (data) {
                _dom.ocultarCargador();

                if (data === undefined) {
                    _dom.mostrarPanelError(_mensajes.mensajeRegistro);
                }
                if ((args.async !== undefined && args.async === false)) {
                    result = data;
                    args.completado(data);
                } else {
                    args.completado(data);
                }
            },
            'error': function (err, textStatus, errThrown) {
                if (args.error) {
                    args.error(err);
                } else {
                    _app.capturarError(err);
                }
            },
        };
        if (!args.background) {
            defecto.beforeSend = _dom.mostrarCargador;
        }
        if (args.background && !!args.beforeSend) {
            defecto.beforeSend = args.beforeSend;
        }
        try {
            if (args.contentType) {
                defecto.contentType = args.contentType;
            }
            $.ajax(defecto);
        } catch (err) {
            console.warn(err);
        }
        //return result;
    },
    capturarError: function (err) {
        _dom.ocultarCargador();
        if (err.state() === 'rejected') { //error de conexión con el servidor, petición rechazada
            _dom.mostrarPanelError(err.responseText);
            return;
        }
        _dom.mostrarPanelError(_mensajes.mensajeRegistro);
    }
};