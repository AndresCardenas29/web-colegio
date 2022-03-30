window.addEventListener('load', () => {

    const btn_menu_usuario = document.querySelector(".btn-usuario");
    const contenedor_menu_usuario = document.querySelector(".contenedor-usuario");
    const btn_mensaje = document.querySelector(".btn-mensaje");
    const contenedor_mensaje = document.querySelector(".contenedor-mensajeria");
    const btn_notificacion = document.querySelector(".btn-notificacion");
    const contenedor_notificacion = document.querySelector(".contenedor-notificaciones");
    const btn_menu = document.querySelector(".btn-menu");
    const contenedor_menu = document.querySelector(".menu-lateral");
    const btn_totop = document.querySelector('.btn-totop');

    // Cerrar loader
    setTimeout(() => {
        document.getElementById("loader").classList.toggle("loader2");
    }, 1000);
    // Fin cerrar loader

    btn_menu_usuario.addEventListener("click", () => menu_usuario.action());
    btn_mensaje.addEventListener("click", () => menu_mensajeria.action());
    btn_notificacion.addEventListener("click", () => menu_notificaciones.action());
    btn_menu.addEventListener("click", () => menu_lteral.action());



    window.addEventListener("keypress", e => {
        if (e.charCode === 115) {
            menu_mensajeria.action();
        }
    });

    let menu_usuario = {
        estado: false,
        action() {
            if (!menu_usuario.estado && (menu_mensajeria.estado || menu_notificaciones) && menu_notificaciones) {
                contenedor_menu_usuario.style.display = "block";
                contenedor_mensaje.style.display = "none";
                contenedor_notificacion.style.display = "none";
                this.estado = true;
            } else if (!menu_usuario.estado) {
                contenedor_menu_usuario.style.display = "block";
                this.estado = true;

            } else {
                contenedor_menu_usuario.style.display = "none";
                this.estado = false;
            }
        }
    }

    let menu_mensajeria = {
        estado: false,
        action() {
            if (!menu_mensajeria.estado && (menu_usuario.estado || menu_notificaciones) && menu_notificaciones) {
                contenedor_mensaje.style.display = "block";
                contenedor_menu_usuario.style.display = "none";
                contenedor_notificacion.style.display = "none";
                this.estado = true;
            } else if (!menu_mensajeria.estado) {
                contenedor_mensaje.style.display = "block";
                this.estado = true;

            } else {
                contenedor_mensaje.style.display = "none";
                this.estado = false;
            }
        }
    }

    let menu_notificaciones = {
        estado: false,
        action() {
            if (!menu_notificaciones.estado && (menu_usuario.estado || menu_mensajeria.estado) && menu_mensajeria.estado) {
                contenedor_notificacion.style.display = "block";
                contenedor_menu_usuario.style.display = "none";
                contenedor_mensaje.style.display = "none";
                this.estado = true;
            } else if (!menu_notificaciones.estado) {
                contenedor_notificacion.style.display = "block";
                this.estado = true;

            } else {
                contenedor_notificacion.style.display = "none";
                this.estado = false;
            }
        }
    }

    let menu_lteral = {
        estado: false,
        action() {
            if (!this.estado) {
                contenedor_menu.style.left = "0%";
                this.estado = true;
            } else {
                contenedor_menu.style.left = "-100%";
                this.estado = false;
            }
        }
    }



    function totop() {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                btn_totop.style.display = "block";
            } else {
                btn_totop.style.display = "none";
            }
        });

        btn_totop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                letf: 0,
                behavior: 'smooth'
            });
        });


    }

    totop();
})