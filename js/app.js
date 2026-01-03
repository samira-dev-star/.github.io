// اسکرول نرم به سکشن‌ها
document.querySelectorAll('header nav a').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id.startsWith('#')) return;
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// مشاهده کارت‌ها با انیمیشن هنگام ورود به دید
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(el => observer.observe(el));