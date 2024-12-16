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






const lyrics = [
    // [Verso 1]
    { time: 0, text: "Ella llora al cielo porque le aclara la mente", className: "line-red" },
    { time: 5, text: "Se acuesta en la hierba y mira las constelaciones relajarse", className: "line-blue" },
    { time: 10, text: "Los dibujos animados la hacen reír hasta que todas sus preocupaciones se disuelven", className: "line-green" },
    { time: 15, text: "Las películas de terror asustan, pero ella es valiente a pesar de todo", className: "line-purple" },

    // [Estribillo]
    { time: 20, text: "Este día especial es todo para ti", className: "line-orange" },
    { time: 25, text: "Cada estrella en el cielo brilla solo porque sí", className: "line-pink" },
    { time: 30, text: "Ríe llora sueña sigue siendo así", className: "line-yellow" },
    { time: 35, text: "Tu belleza ilumina que ni el miedo puede resistir", className: "line-cyan" },

    // [Verso 2]
    { time: 40, text: "Ella tiene un corazón que podría curar cualquier angustia", className: "line-red" },
    { time: 45, text: "Con una sonrisa que eclipsa a todas las demás", className: "line-blue" },
    { time: 50, text: "Cuando el mundo se siente pesado ella mira al azul", className: "line-green" },
    { time: 55, text: "Recuéstate en esa hierba y deja que las estrellas te arrastren", className: "line-purple" },

    // [Estribillo]
    { time: 60, text: "Este día especial es todo para ti", className: "line-orange" },
    { time: 65, text: "Cada estrella en el cielo brilla solo porque sí", className: "line-pink" },
    { time: 70, text: "Ríe llora sueña sigue siendo así", className: "line-yellow" },
    { time: 75, text: "Tu belleza ilumina que ni el miedo puede resistir", className: "line-cyan" },

    // [Puente]
    { time: 80, text: "En un mundo lleno de ruido eres la canción más dulce", className: "line-red" },
    { time: 85, text: "Luchas tus propias batallas pero aún te mantienes fuerte", className: "line-blue" },
    { time: 90, text: "Cada caricatura que trae consuelo a tus ojos", className: "line-green" },
    { time: 95, text: "Muestra un corazón que es más valiente que los cielos más oscuros", className: "line-purple" },

    // [Estribillo]
    { time: 100, text: "Este día especial es todo para ti", className: "line-orange" },
    { time: 105, text: "Cada estrella en el cielo brilla solo porque sí", className: "line-pink" },
    { time: 110, text: "Ríe llora sueña sigue siendo así", className: "line-yellow" },
    { time: 115, text: "Tu belleza ilumina que ni el miedo puede resistir", className: "line-cyan" }
];


function revealSecret() {
    const secretMessage = document.getElementById('secret-message');
    secretMessage.classList.remove('hidden');
    
    // Reproducir el audio
    const audio = document.getElementById('background-music');
    audio.play();

    // Mostrar letras dinámicamente
    const lyricsContainer = document.getElementById('lyrics-container');
    let currentLine = 0;

    // Evento que verifica el tiempo del audio
    audio.addEventListener('timeupdate', () => {
        if (currentLine < lyrics.length && audio.currentTime >= lyrics[currentLine].time) {
            // Mostrar solo la línea actual con su color correspondiente
            const { text, className } = lyrics[currentLine];
            lyricsContainer.innerHTML = `<p class="${className}">${text}</p>`;
            currentLine++;
        }
    });
}
