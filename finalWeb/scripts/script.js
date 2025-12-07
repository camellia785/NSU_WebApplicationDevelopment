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

  // =========================================
  // 2. 모달 열기/닫기 로직
  // =========================================

  const body = document.body;
  const modalTriggers = document.querySelectorAll("[data-modal-target]");
  const modals = document.querySelectorAll(".modal");

  // 카드(또는 버튼) 클릭 → 해당 모달 열기
  modalTriggers.forEach((trigger) => {
    const targetId = trigger.getAttribute("data-modal-target");
    const modal = document.getElementById(targetId);

    if (!modal) return;

    trigger.style.cursor = "pointer";

    trigger.addEventListener("click", () => {
      modal.classList.add("show");
      body.classList.add("modal-open");
    });
  });

  // 닫기 버튼 또는 오버레이 클릭 → 모달 닫기
  const modalCloseElements = document.querySelectorAll("[data-modal-close]");

  modalCloseElements.forEach((el) => {
    el.addEventListener("click", () => {
      const modal = el.closest(".modal");
      if (modal) {
        modal.classList.remove("show");
      }
      body.classList.remove("modal-open");
    });
  });

  // ESC 키로 모달 닫기
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modals.forEach((modal) => modal.classList.remove("show"));
      body.classList.remove("modal-open");
    }
  });
});

// =========================================
// 3. 햄버거 메뉴 토글 함수 (모바일 네비게이션)
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
