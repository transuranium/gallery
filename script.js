// Меню-бургер
const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
btn.addEventListener("click", () => nav.classList.toggle("open"));

// Роутер по hash
function showRoute() {
  const hash = location.hash || "#home";
  document
    .querySelectorAll(".route")
    .forEach((s) => s.classList.remove("active"));
  const active = document.querySelector(hash);
  if (active) active.classList.add("active");
  nav.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "instant" });
}
window.addEventListener("hashchange", showRoute);
showRoute();

/* ====== Наличие: автообёртка и бейдж ======
   Ты просто ставишь class="in-stock" или data-stock="true" на <img>.
   Скрипт сам делает:
   - оборачивает такую картинку в <span class="in-stock-wrap">...</span>,
   - убирает старые .stock-note, если остались.
*/
document.addEventListener("DOMContentLoaded", () => {
  // убрать старые ручные подписи (если ещё где-то остались)
  document.querySelectorAll(".stock-note").forEach((x) => x.remove());

  const imgs = document.querySelectorAll(
    '.gallery img.in-stock, .gallery img[data-stock="true"]'
  );

  imgs.forEach((img) => {
    // если уже обёрнуты — пропускаем
    if (img.closest(".in-stock-wrap")) return;

    const wrap = document.createElement("span");
    wrap.className = "in-stock-wrap";
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);
  });
});

// Фильтров Mesas нет по ТЗ.
