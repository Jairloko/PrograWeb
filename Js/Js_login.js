const form = document.getElementById("formL");
const inputs = document.querySelectorAll("#formL input");

const expresiones={
    usuario: /^[a-zA-Z0-9]{6,}$/,
    contraseña: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
};

const validar = (e) =>{
    switch(e.target.name){
        case "usuario":
            if(!expresiones.usuario.test(e.target.value)){
                alert("Usuario mínimo de 6 caracteres");
            }

        break;
        case "contraseña":
            if(!expresiones.contraseña.test(e.target.value)){
                alert("Formato no valido de Contraseña\n-Mínimo 8 caracteres\n-1 mayúscula\n-1 minúscula\n-1 número");
            }

        break;
    }
}

inputs.forEach((input)=>{
    input.addEventListener("blur", validar)

});