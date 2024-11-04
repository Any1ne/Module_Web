const images = ["/image/wand0.jpeg", "/image/wand1.jpeg", "/image/wand2.jpeg", "/image/wand3.jpeg", "/image/wand4.jpeg"];
  let currentIndex = 0;
    
function showImage(index) {
  document.getElementById("gallery-image").src = images[index];
}
    
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
    
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#FFD700';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = '';
  });
});
  
document.querySelector('.menu_button').addEventListener('click', function() {
  const menuCategories = document.querySelector('.menu_categories');
  menuCategories.classList.toggle('hidden');
});