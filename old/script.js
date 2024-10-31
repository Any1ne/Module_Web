// Example of hover effect interaction
document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#FFD700';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '';
    });
  });
  