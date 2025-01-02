document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in'); // Seleciona todos os elementos com a classe 'fade-in'

    const observerOptions = {
        root: null, // Usar a viewport como raiz
        rootMargin: '0px',
        threshold: 0.1 // Quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe 'visible' quando o elemento entra na tela
                observer.unobserve(entry.target); // Para de observar o elemento depois de ele aparecer
            }
        });
    }, observerOptions);

    // Observar todos os elementos com a classe 'fade-in'
    elements.forEach(element => {
        observer.observe(element);
    });
});