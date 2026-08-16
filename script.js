const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#navLinks');

menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800) nav.style.display = 'none';
  });
});

// Replace this with your real Telegram channel link when you create it.
document.querySelector('#telegramBtn').addEventListener('click', (event) => {
  event.preventDefault();
  alert('Your Telegram link will be added here when you create the Student Hustle Hub community.');
});
