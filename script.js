const btn = document.getElementById('empezarBtn');
const pantalla1 = document.getElementById('pantalla1');
const pantalla2 = document.getElementById('pantalla2');
const pantalla3 = document.getElementById('pantalla3');
const mensajeAnimado = document.getElementById('mensajeAnimado');
const musica = document.getElementById('musica');

btn.addEventListener('click', () => {
    musica.play();
    pantalla1.classList.add('oculto');
    pantalla2.classList.remove('oculto');

    // Animar mensaje letra por letra
    let texto = "Feliz primer mes, corazón";
    let i = 0;
    const intervalo = setInterval(() => {
        if (i < texto.length) {
            mensajeAnimado.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
            // Luego de mostrar el mensaje, pasar a la pantalla final
            setTimeout(() => {
                pantalla2.classList.add('oculto');
                pantalla3.classList.remove('oculto');
            }, 3000); // espera 3 segundos
        }
    }, 100);
});

// Iniciar carrusel
const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});