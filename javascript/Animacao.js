/* ================= DIGITAÇÃO ================= */
const texts = [
    "Estudante de Análise e Desenvolvimento de Sistemas",
    "Apaixonado por tecnologia e inovação",
    "Futuro Desenvolvedor Full Stack"
];

const typingElement = document.getElementById("typing-name");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
        // DIGITANDO
        typingElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1500); // espera antes de apagar
        }
    } else {
        // APAGANDO
        typingElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

typeEffect();

/* ================= PARTICLES ================= */

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.4
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    },
    retina_detect: true
});
