const cards = document.querySelectorAll('.card');
cards.forEach(function (el) {
  el.addEventListener('mouseenter', function (e) {
    e.target.style.backgroundColor = '#f2f2f2';
    e.target.style.color = 'black';
  });

  el.addEventListener('mouseleave', function (e) {
    e.target.style.backgroundColor = '#ccc';
    e.target.style.color = 'black';
  });
});
