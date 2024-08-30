const longitudInput = document.getElementById('longitud');
const generarBtn = document.getElementById('generar');
const contrasenaOutput = document.getElementById('contrasena');

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

generarBtn.addEventListener('click', () => {
    const longitud = parseInt(longitudInput.value);
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }
    contrasenaOutput.textContent = contrasena;
});