/* ================= DIGITAÇÃO ================= */

const text = "Estudante de Análise e Desenvolvimento de Sistemas\nApaixonado por tecnologia e inovação";
const typingElement = document.getElementById("typing-name");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        if (text.charAt(index) === "\n") {
            typingElement.innerHTML += "<br>";
        } else {
            typingElement.innerHTML += text.charAt(index);
        }
        index++;
        setTimeout(typeEffect, 120);
    }
}

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
