document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebarMenu');
    const mobileToggle = document.getElementById('mobileToggle');

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
    }

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.sidebar') && !event.target.closest('#mobileToggle') && sidebar && window.innerWidth < 992) {
            sidebar.classList.remove('open');
        }
    });
});
