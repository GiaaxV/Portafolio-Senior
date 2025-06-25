// Cambio de tema
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Guardar el tema en localStorage
function setTheme(theme) {
    localStorage.setItem('theme', theme);
    html.setAttribute('data-theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Cargar el tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Animación de secciones al hacer scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => observer.observe(section));

// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Mensaje enviado! Gracias por contactarme.');
    e.target.reset();
});

// Animación de entrada para las tarjetas de portafolio
const projectCards = document.querySelectorAll('.portfolio-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 200);
});

// Animación de habilidades
const skillBars = document.querySelectorAll('.progress-bar');
skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    
    setTimeout(() => {
        bar.style.transition = 'width 1s ease';
        bar.style.width = width;
    }, 200);
});

// Animación de timeline
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    }, index * 300);
});
