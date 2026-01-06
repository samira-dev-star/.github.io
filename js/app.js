// اسکرول نرم به سکشن‌ها
document.querySelectorAll('header nav a').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id.startsWith('#')) return;
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// انیمیشن هنگام ورود کارت‌ها به دید
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// اعمال به کارت‌ها
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Certificates
const filterBtns = document.querySelectorAll('.filter-btn');
const certCards = document.querySelectorAll('.cert-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    certCards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.platform === filter) ? 'block' : 'none';
    });
  });
});

// Auto-scroll Controls
const carousel = document.querySelector('.cert-carousel');
let scrollSpeed = 0;
let isScrolling = false;

// Continuous scroll loop
function scrollLoop() {
  if (!isScrolling) return;
  carousel.scrollLeft += scrollSpeed;
  requestAnimationFrame(scrollLoop);
}

function startScroll(speed, delay) {
  clearInterval(scrollInterval);
  scrollInterval = setInterval(() => {
    carousel?.scrollBy({ left: speed, behavior: 'smooth' });
  }, delay);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

document.querySelector('.play')?.addEventListener('click', () => startScroll(2, 30));
document.querySelector('.slow')?.addEventListener('click', () => startScroll(1, 60));
document.querySelector('.fast')?.addEventListener('click', () => startScroll(4, 20));

carousel?.addEventListener('mouseenter', stopScroll);
carousel?.addEventListener('mouseleave', stopScroll);

// Form submission
document.querySelector('.contact')?.addEventListener('submit', (e) => {
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Wird gesendet...';
  btn.disabled = true;
});


