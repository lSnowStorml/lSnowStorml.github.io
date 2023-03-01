
function hab_val(){
     mostrarMensaje();
     validacion();
     save();
}

/*guardar datos*/
function save(){
    var dato_nombre=document.getElementById('inombre').value;
    var dato_email=document.getElementById('iemail').value;
    var dato_msg=document.getElementById('imensaje').value;
    console.log("Nombre: " + dato_nombre + " " + "Email: " + dato_email + " " + "Mensaje: "+ dato_msg);
}

/*cartel formulario*/
function mostrarMensaje() {
    document.getElementById('mensaje').style.display = 'block';
}

function aceptarMensaje() {
    document.getElementById('mensaje').style.display = 'none';
}

/*formulario deshabilitado*/
function validacion(){
    console.log('Se envió correctamente');
}

function habilitar(){
    nombre = document.getElementById('inombre').value;
    email = document.getElementById('iemail').value;
    mensaje = document.getElementById('imensaje').value;

    val = 0;

    if (nombre == '') {
        val++;
    }

    if (email == '') {
        val++;
    }

    if (mensaje == '') {
        val++;
    }

    if(val == 0){
        document.getElementById('botonn').disabled = false;
    } else {
        document.getElementById('botonn').disabled = true;
    }

    }

    document.getElementById('inombre').addEventListener('keyup', habilitar);
    document.getElementById('iemail').addEventListener('keyup', habilitar);
    document.getElementById('imensaje').addEventListener('keyup', habilitar);

