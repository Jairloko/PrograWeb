// Aqui obtenemos el elemento del Form con el id que tu le pusiste
const form = document.getElementById("formR");
// Aqui obtenemos todos los inputs del Form
const inputs = document.querySelectorAll("#formR input");

//Las expresiones para las validaciones
const expresiones={
    nombres: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,25}$/,
    apellidos: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,25}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    usuario: /^[a-zA-Z0-9]{6,}$/,
    contraseña: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
};
// Esto es para que en la fecha no se pueda ingresar una fecha mayor a la actual. 
nacimiento.max = new Date().toLocaleDateString('en-ca')


//Todas las validaciones
const validar = (e) =>{
    switch(e.target.name){
        case "nombres":
            if(e.target.value == ""){
                alert("Ingresa Nombre/s")
            }
            else if(!expresiones.nombres.test(e.target.value)){
                alert("No se permiten números ni caracteres especiales en Nombre/s");
            }
        break;
        case "apellidos":
            if(e.target.value == ""){
                alert("Ingresa Apellido/s")
            }
            else if(!expresiones.apellidos.test(e.target.value)){
                alert("No se permiten números ni caracteres especiales en Apellido/s");
            }

        break;
        case "email":
            if(e.target.value == ""){
                alert("Ingresa Email")
            }
            else if(!expresiones.email.test(e.target.value)){
                alert("Formato no valido de Email");
            }

        break;
        case "usuario":
            if(e.target.value == ""){
                alert("Ingresa Usuario")
            }
            else if(!expresiones.usuario.test(e.target.value)){
                alert("Usuario mínimo de 6 caracteres");
            }

        break;
        case "contraseña":
            if(e.target.value == ""){
                alert("Ingresa Contraseña")
            }
            else if(!expresiones.contraseña.test(e.target.value)){
                alert("Formato no valido de Contraseña\n-Mínimo 8 caracteres\n-1 mayúscula\n-1 minúscula\n-1 número");
            }

        break;
        case "contraseña2":
            const pass1 = document.getElementById("contraseña");
            const pass2 = document.getElementById("contraseña2");
            if(e.target.value == ""){
                alert("Ingresa Segunda Contraseña")
            }
            else if(pass1.value !== pass2.value){
                alert("Ambas contraseñas deben ser iguales")
            }
        break;
    }
}

//Aqui obtienes los inputs para mandarlas a validar
inputs.forEach((input)=>{
    input.addEventListener("blur", validar)

});

form.addEventListener("submit", e => {
    const nombre = document.getElementById("nombres");
    const apellido = document.getElementById("apellidos");
    const email = document.getElementById("email");
    const usuario = document.getElementById("usuario");
    const pass1 = document.getElementById("contraseña");
    const pass2 = document.getElementById("contraseña2");
    if(nombre.value=="" || apellido.value=="" || email.value=="" || usuario.value=="" ||pass1.value=="" || pass2.value=="" ){
        alert("Verifica tus datos")
    }else{
        document.getElementById("btn_registrar").addEventListener("click", myFunction);
        function myFunction() {
            window.location.href="Blogee_login.html";
        }    
    }

});
