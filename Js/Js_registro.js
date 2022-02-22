const form = document.getElementById("formR");
const inputs = document.querySelectorAll("#formR input");

const expresiones={
    nombres: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,25}$/,
    apellidos: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,25}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    usuario: /^[a-zA-Z0-9]{6,}$/,
    contraseña: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
};

nacimiento.max = new Date().toLocaleDateString('en-ca')

const validar = (e) =>{
    switch(e.target.name){
        case "nombres":
            if(!expresiones.nombres.test(e.target.value)){
                alert("No se permiten números ni caracteres especiales en Nombre/s");
            }
        break;
        case "apellidos":
            if(!expresiones.apellidos.test(e.target.value)){
                alert("No se permiten números ni caracteres especiales en Apellido/s");
            }

        break;
        case "email":
            if(!expresiones.email.test(e.target.value)){
                alert("Formato no valido de Email");
            }

        break;
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
        case "contraseña2":
            const pass1 = document.getElementById("contraseña");
            const pass2 = document.getElementById("contraseña2");
            if(pass1.value !== pass2.value){
                alert("Ambas contraseñas deben ser iguales")
            }
        break;
    }
}

inputs.forEach((input)=>{
    input.addEventListener("blur", validar)

});
