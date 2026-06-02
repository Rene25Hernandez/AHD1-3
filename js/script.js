(function() {
    // Menú hamburguesa
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('active');
            menuBtn.innerHTML = menu.classList.contains('active') ? '✕' : '☰';
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                if (menuBtn) menuBtn.innerHTML = '☰';
            });
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (event) => {
            const isInsideMenu = menu.contains(event.target);
            const isClickOnBtn = menuBtn.contains(event.target);
            if (!isInsideMenu && !isClickOnBtn && menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuBtn.innerHTML = '☰';
            }
        });
    }

    // Formulario: simular envío
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = '¡Enviado! 🚀';
            btn.style.transform = 'scale(0.98)';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.transform = '';
            }, 1500);
            alert('✨ Mensaje recibido (demo). Gracias por contactar.');
            form.reset();
        });
    }

    // Cambiar opacidad del header al hacer scroll (efecto adicional)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
})();