function searchFunction() {
  let input = document.getElementById('searchInput').value;
  let results = document.getElementById('searchResults');
  results.innerHTML = `Ви шукали: ${input}`;
}

const items = [
  { name: "Портал", url: "comboPortal.html", img: "img/PortalB.webp"},
  { name: "Кітсунє", url: "comboKitsune.html", img: "img/KitsuneB.webp" },
  { name: "Лід", url: "comboIce.html", img: "img/IceB.webp" },
  { name: "Тісто", url: "comboDough.html", img: "img/DoughB.webp" },
  { name: "Світло", url: "comboLight.html" },
  { name: "Павук", url: "comboSpider.html" },
  { name: "Т-Рекс", url: "comboT-Rex.html" },
  { name: "Пісок", url: "comboSand.html" },
  { name: "Пламя", url: "comboFlame.html" },
  { name: "Рамбл", url: "comboRumble.html" },
  { name: "Спіріт", url: "comboSpirit.html" },
  { name: "Дрожь", url: "comboQuake.html" },
];

function searchFunction() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let results = document.getElementById('searchResults');
  results.innerHTML = "";

  items.forEach(item => {
      if (item.name.toLowerCase().includes(input)) {
          results.innerHTML += `<p><a href="${item.url}">${item.name}</a></p>`;
      }
  });

  if (results.innerHTML === "") {
      results.innerHTML = "Нічого не знайдено.";
  }
}
