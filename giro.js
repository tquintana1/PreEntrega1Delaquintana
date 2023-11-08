const spinButton = document.getElementById("spinButton");
const resultElement = document.getElementById("result");

let jugando = false; // Variable para rastrear si el jugador está jugando
let contadorGiros = 0; // Contador de giros realizados
const maxGiros = 5; // Número máximo de giros permitidos

function girarRuleta() {
    if (!jugando) {
        if (contadorGiros < maxGiros) {
            jugando = true;
            contadorGiros++;
            spinButton.textContent = "Detener"; // Cambiar el texto del botón

            const intervalo = setInterval(function () {
                const numeroGanador = Math.floor(Math.random() * 37);
                let color = "negro";
                if (numeroGanador === 0) {
                    color = "verde";
                } else if ([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(numeroGanador)) {
                    color = "rojo";
                }

                const numeroElement = document.createElement("span");
                numeroElement.textContent = numeroGanador;
                numeroElement.style.color = color;

                resultElement.innerHTML = "";
                resultElement.appendChild(numeroElement);
            }, 100); // Girar la ruleta cada 100 ms

            // Después de 5000 ms (5 segundos), detener el giro
            setTimeout(function () {
                clearInterval(intervalo); // Detener el intervalo
                jugando = false;
                spinButton.textContent = "Girar"; // Restaurar el texto del botón
            }, 5000);
        } else {
            alert("Has alcanzado el número máximo de giros permitidos.");
        }
    } else {
        clearInterval(intervalo); // Detener el intervalo
        jugando = false;
        spinButton.textContent = "Girar"; // Restaurar el texto del botón
    }
}

// Agregar un evento de clic al botón de "Girar"
spinButton.addEventListener("click", girarRuleta);
