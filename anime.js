document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll('#fruit-list li');
  items.forEach(item => {
    item.classList.toggle('hidden', !item.textContent.toLowerCase().includes(query));
  });
});