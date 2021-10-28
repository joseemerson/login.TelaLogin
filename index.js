let usuarios = [
    {
   email: "renato@admindaempresa.com",
   senha:"12345"
    },
    {
    email:"pedro@gerentedaempresa.com",
    senha:"20212022"
    }
]
function login () {
    let email = document.getElementById("Email").value;
    let senha = document.getElementById("Senha").value;
    let acesso = false;
     for (let i = 0; i < usuarios.length; i++) {
         if(email === usuarios[i].email && senha === usuarios[i].senha){
            acesso = true;
         }
     }
     if(acesso){
         alert("Acesso Permitido !!");
     }
     else {
         alert("Acesso Negado !!");
     }
}