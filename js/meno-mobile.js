// جاوااسکریپت منوی موبایل
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const navOverlay = document.getElementById('navOverlay');
    const langBtn = document.getElementById('langBtn');

    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', toggleMobileMenu);
    }

    // بستن منو وقتی روی لینک کلیک می‌شه
    document.querySelectorAll('.nav nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // ادغام با سیستم زبان
    if (window.i18nManager) {
        const originalToggle = window.i18nManager.toggleLanguage.bind(window.i18nManager);
        window.i18nManager.toggleLanguage = function () {
            originalToggle();
            // آپدیت متن دکمه در منوی موبایل
            setTimeout(() => {
                langBtn.textContent = window.i18nManager.currentLang === 'de' ? '🌐 EN' : '🌐 DE';
            }, 100);
        };
    }
});