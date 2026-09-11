document.addEventListener('DOMContentLoaded', function () {
    const timeEl = document.getElementById('current-time');

    if (timeEl) {
        const now = new Date();
        const formatted = now.toLocaleString('bn-BD', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
        timeEl.textContent = formatted;
    }

    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    const closeDropdowns = function () {
        dropdownItems.forEach(function (item) {
            item.classList.remove('show');
            const link = item.querySelector('.dropdown-link');
            const toggleButton = item.querySelector('.dropdown-menu-toggle');
            if (link) link.setAttribute('aria-expanded', 'false');
            if (toggleButton) {
                toggleButton.setAttribute('aria-expanded', 'false');
                toggleButton.innerHTML = '<i class="bi bi-plus"></i>';
            }
        });
    };

    dropdownItems.forEach(function (item) {
        const link = item.querySelector('.dropdown-link');
        const toggleButton = item.querySelector('.dropdown-menu-toggle');

        if (!link) return;

        if (toggleButton) {
            toggleButton.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (window.innerWidth >= 992) return;

                const isOpen = item.classList.contains('show');
                closeDropdowns();

                if (!isOpen) {
                    item.classList.add('show');
                    link.setAttribute('aria-expanded', 'true');
                    toggleButton.setAttribute('aria-expanded', 'true');
                    toggleButton.innerHTML = '<i class="bi bi-dash"></i>';
                }
            });
        }
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-item.dropdown')) {
            closeDropdowns();
        }
    });
});
