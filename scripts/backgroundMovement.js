window.onload = function () {
    // onmousemove es el evento que detecta cada movimiento
    // del cursor sobre lo que abarca el cuerpo de la página
    // el cual nos envía la variable 'e' que contiene clientX
    // y clientY, las coordenadas del cursor
    document.onmousemove = function (e) {
        // la posición se calcula de acuerdo a X, pero
        // se divide entre 10, para que tenga un movimiento
        // más suave con respecto al movimiento real
        // del cursor del mouse. Después se hace negativo,
        // para que este sea en dirección contrario, con una
        // sensación de desplazamiento más que de arrastre.
        var x = -(e.clientX / 10);
        // lo mismo para Y
        var y = -(e.clientY / 10);
        // backgroundPosition son las coordenadas del fondo
        this.body.style.backgroundPosition = x + 'px ' + y + 'px';
    };
};
