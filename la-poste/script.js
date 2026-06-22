document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // Animation des statistiques au scroll
    // ============================================================
    const stats = document.querySelectorAll('.stat-number');

    const animateNumber = (element) => {
        const target = parseInt(element.dataset.target, 10);
        const duration = 1500;
        const start = performance.now();

        const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            element.textContent = Math.floor(ease * target);

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));

    // ============================================================
    // Bouton de suivi : petite interaction
    // ============================================================
    const trackBtn = document.getElementById('track-btn');
    const trackInput = document.getElementById('tracking-input');

    trackBtn.addEventListener('click', () => {
        const value = trackInput.value.trim();
        if (value) {
            trackBtn.textContent = 'Recherche...';
            setTimeout(() => {
                trackBtn.textContent = 'Suivre';
                trackInput.value = '';
                alert('Numéro ' + value + ' : colis en cours de transport \u2013 arrivée prévue demain.');
            }, 800);
        } else {
            trackInput.focus();
        }
    });

    trackInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            trackBtn.click();
        }
    });
});
