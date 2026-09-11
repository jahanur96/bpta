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
});
