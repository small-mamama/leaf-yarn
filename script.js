// スマホ用メニュー
const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");

menuButton.addEventListener("click", () => {
  const isOpen = globalNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

// メニュー内のリンクを押したら閉じる
globalNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    globalNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// フッターの年を自動更新
document.querySelector("#current-year").textContent = new Date().getFullYear();
