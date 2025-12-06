/*
  Student Name: Yeona Choi
  Chapter 10 Lab
  File Name: script.js
  Date: 11/29/2025
*/

// =========================================
// 1. 네비게이션 active 상태 자동 설정
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar .nav-btn");

  // 현재 파일 이름 가져오기 (예: index.html, basics.html ...)
  let currentPage = window.location.pathname.split("/").pop();

  // 루트에서 열렸을 때 대비
  if (!currentPage) {
    currentPage = "index.html";
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    const isHome =
      (currentPage === "index.html" || currentPage === "") &&
      href === "index.html";

    if (href === currentPage || isHome) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// =========================================
// 2. 햄버거 메뉴 토글 함수 (모바일 네비게이션)
// =========================================
function hamburger() {
  const navlinks = document.getElementById("nav-links");
  const menuicon = document.getElementById("icon");

  if (!navlinks) return;

  if (navlinks.style.display === "block") {
    navlinks.style.display = "none";
    if (menuicon) {
      menuicon.style.color = "#2a1f14";
    }
  } else {
    navlinks.style.display = "block";
    if (menuicon) {
      menuicon.style.color = "#f6eee4";
    }
  }
}
