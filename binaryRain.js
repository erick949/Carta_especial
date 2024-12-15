const canvas = document.getElementById("binaryRain");
const ctx = canvas.getContext("2d");

// Ajustar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caracteres de la lluvia
const characters = "01";
const fontSize = 16; // Tamaño de las letras
const columns = Math.floor(canvas.width / fontSize); // Número de columnas

// Posiciones de caída inicial (Y) para cada columna
const drops = Array(columns).fill(0);

// Lluvia binaria
function drawBinaryRain() {
    // Fondo semi-transparente para efecto de desvanecimiento
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Estilo de texto
    ctx.fillStyle = "#00FF41"; // Verde Matrix
    ctx.font = `${fontSize}px monospace`;

    // Dibujar caracteres en cada columna
    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reiniciar la caída cuando llega al final
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}


// Animación continua
setInterval(drawBinaryRain, 50);

// Redimensionar canvas al cambiar tamaño de ventana
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
