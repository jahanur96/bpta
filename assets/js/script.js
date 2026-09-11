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

    const updateToggleIcon = function (toggleButton, isOpen) {
        const icon = toggleButton.querySelector('i');
        if (icon) {
            icon.className = isOpen ? 'bi bi-dash' : 'bi bi-plus';
        } else {
            toggleButton.innerHTML = '<i class="bi ' + (isOpen ? 'bi-dash' : 'bi-plus') + '"></i>';
        }
        toggleButton.setAttribute('aria-expanded', String(isOpen));
    };

    const setDropdownState = function (item, isOpen) {
        item.classList.toggle('show', isOpen);
        const link = item.querySelector('.dropdown-link');
        const toggleButton = item.querySelector('.dropdown-menu-toggle');

        if (link) {
            link.setAttribute('aria-expanded', String(isOpen));
        }

        if (toggleButton) {
            updateToggleIcon(toggleButton, isOpen);
        }
    };

    const closeDropdowns = function () {
        dropdownItems.forEach(function (item) {
            setDropdownState(item, false);
        });
    };

    dropdownItems.forEach(function (item) {
        const link = item.querySelector('.dropdown-link');
        const toggleButton = item.querySelector('.dropdown-menu-toggle');

        if (!link || !toggleButton) return;

        toggleButton.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (window.innerWidth >= 992) return;

            const isOpen = item.classList.contains('show');

            if (isOpen) {
                setDropdownState(item, false);
                return;
            }

            closeDropdowns();
            setDropdownState(item, true);
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-item.dropdown')) {
            closeDropdowns();
        }
    });
});
