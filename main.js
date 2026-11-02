// Aparicion suave de contenido y cierre comodo del menu de redes.
(function () {
    var items = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px' });

        items.forEach(function (item) { observer.observe(item); });
    } else {
        items.forEach(function (item) { item.classList.add('is-visible'); });
    }

    var toggle = document.getElementById('menuToggle');
    if (!toggle) return;

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && toggle.checked) {
            toggle.checked = false;
            toggle.focus();
        }
    });

    document.addEventListener('click', function (event) {
        if (toggle.checked && !event.target.closest('.menu-container')) {
            toggle.checked = false;
        }
    });
})();
