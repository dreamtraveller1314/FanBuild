function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const plus   = button.querySelector('.faq-plus');
  const isOpen = answer.classList.contains('open');

  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-arrow').forEach(p => {
    p.classList.remove('open');
    p.textContent = '+';
  });

  if (!isOpen) {
    answer.classList.add('open');
    plus.classList.add('open');
    plus.textContent = '+';
  }
}

const deadline = new Date('2026-08-01'); //just a example, bruh

function updateCountdown() {
  const now  = new Date();
  const diff = deadline - now;

  if (diff <= 0) {
    document.getElementById('days').textContent  = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('mins').textContent  = '00';
    document.getElementById('secs').textContent  = '00';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent  = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('mins').textContent  = String(mins).padStart(2, '0');
  document.getElementById('secs').textContent  = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);