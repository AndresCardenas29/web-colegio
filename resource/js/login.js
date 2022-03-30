window.addEventListener("load", () => {

    const btn_login = document.querySelector("input[type=submit]");
    const alerta = document.querySelector(".cont-alert");
    const alerta_alert = document.querySelector('.cont-alert .alert');

    const input_email = document.querySelector("#user");
    const input_password = document.querySelector("#password");
    const form = document.querySelector("form");



    btn_login.addEventListener("click", e => {
        e.preventDefault();

        if (input_email.value === "" && input_password.value === "") {
            let icono = '<i class="fas fa-exclamation-circle"></i>';
            let texto = '¡ERROR!, los campos del correo electrónico y contraseña está vacíos, por favor ingrese sus datos personales e intente de nuevo.';
            let color = "red";
            let color_text = "#fff";
            let tiempo = 15000;
            mensaje_alerta(icono, texto, color, color_text, tiempo);
        } else if (input_email.value === "") {
            let icono = '<i class="fas fa-exclamation-circle"></i>';
            let texto = '¡ERROR!, el campo de correo electrónico está vacío, por favor ingrese su correo electrónico e intente de nuevo.';
            let color = "red";
            let color_text = "#fff";
            let tiempo = 7000;
            mensaje_alerta(icono, texto, color, color_text, tiempo);
        } else if (input_password.value === "") {
            let icono = '<i class="fas fa-exclamation-circle"></i>';
            let texto = '¡ERROR!, el campo de contraseña está vacío, por favor ingrese su contraseña e intente de nuevo.';
            let color = "red";
            let color_text = "#fff";
            let tiempo = 7000;
            mensaje_alerta(icono, texto, color, color_text, tiempo);
        }else{
            form.submit();
        }
        
    });

    

    function alerta_pruena(){
        let icono = '<i class="fas fa-exclamation-circle"></i>'
        let texto = 'Error de prueba!';
        let color = "red";
        let color_text = "#fff";
        let tiempo = 4000;
        mensaje_alerta(icono, texto, color, color_text, tiempo);
    }

    // Función alerta 
    // (icono, mensaje, color de etiqueta, color de texto, tiempo en milisegundos)

    function mensaje_alerta(icono, texto, color, color_text, tiempo) {
        alerta_alert.style.background = color;
        alerta_alert.style.border = color;
        alerta_alert.innerHTML = icono + " " + texto;
        alerta_alert.style.color = color_text;
        alerta.style.top = "300px";
        setTimeout(() => {
            alerta.style.top = "-100%";
        }, tiempo);
    }

    alerta_alert.addEventListener('click', () => {
        alerta.style.top = "-100%";
    })

    // Fin función alerta


})