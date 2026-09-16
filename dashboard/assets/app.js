document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebarMenu');
    const mobileToggle = document.getElementById('mobileToggle');

    if (sidebar && mobileToggle) {
        mobileToggle.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
    }

    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!target.closest('.sidebar') && !target.closest('#mobileToggle') && sidebar && window.innerWidth < 992) {
            sidebar.classList.remove('open');
        }
    });
});
