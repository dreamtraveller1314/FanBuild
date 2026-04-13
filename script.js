function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const plus   = button.querySelector('.faq-plus');
  const isOpen = answer.classList.contains('open');

  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-plus').forEach(p => {
    p.classList.remove('open');
    p.textContent = '+';
  });

  if (!isOpen) {
    answer.classList.add('open');
    plus.classList.add('open');
    plus.textContent = '+';
  }
}