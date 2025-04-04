// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita la recarga de la página

    alert('¡Gracias por contactarnos! Te responderemos pronto.');

    // Opcional: Enviar el formulario manualmente
    this.submit();
});

