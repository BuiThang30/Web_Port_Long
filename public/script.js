// =========== SECTION BUTTON LAYOUT ===========
window.addEventListener("load", () => {
  const content = document.querySelector(".content");
  const character = document.querySelector(".character");
  const buttons = document.querySelectorAll(".skills button");

  if (!content || !character || buttons.length === 0) return;

  const contentWidth = content.clientWidth;
  const charRect = character.getBoundingClientRect();
  const leftSpace = charRect.width + parseFloat(getComputedStyle(character).marginRight);

  buttons.forEach((btn) => {
    const btnRect = btn.getBoundingClientRect();
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.flexDirection = "row";

    if (btnRect.top < charRect.bottom) {
      btn.style.width = `calc(${contentWidth - leftSpace - 42}px)`;
      btn.style.marginLeft = `${leftSpace}px`;
    } else {
      btn.style.width = `calc(${contentWidth - 42}px)`;
      btn.style.marginLeft = "0";
    }
  });
});

window.addEventListener("resize", () => {
  window.dispatchEvent(new Event("load"));
});


// =========== SKILL PANEL ===========
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".skill-btn");
  const rightPanel = document.querySelector(".right-panel");

  if (!buttons.length || !rightPanel) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const type = btn.dataset.type;
      const link = btn.dataset.link;

      if (type === "autocad") {
        rightPanel.innerHTML = `
          <div class="autocad-panel">
            <a href="/15W-KII-Series-Motor">15W KII Series Motor</a>
            <a href="/16mm-eyestrap-block">16mm eyestrap block</a>
            <a href="/IE3-Electric-Motor">IE3 Electric Motor</a>
            <a href="/Steel-T-slot-bolt">Steel T-slot bolt</a>
          </div>
       `;
      } 
      else if (link) {
        window.location.href = link;
      } 
      else {
        rightPanel.innerHTML = `
          <img src="image/background_home1.png" class="side-image" />
        `;
      }
    });
  });
});


// =========== MUSIC BUTTONS ===========
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".music-btn");
  const contents = document.querySelectorAll(".music-content");

  if (!buttons.length || !contents.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const type = btn.dataset.type;

      contents.forEach(c => {
        c.classList.remove("active");
        if (c.classList.contains(type)) c.classList.add("active");
      });
    });
  });
});


// =========== SHOW SECTIONS ===========
function safeOnClick(selector, callback) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.onclick = callback;
  });
}

safeOnClick("#btn-singapore", () => showSection("singapore-section"));
safeOnClick("#btn-stemese", () => showSection("stemese-section"));
safeOnClick("#btn-soccer", () => showSection("soccer-section"));
safeOnClick("#btn-scratch", () => showSection("scratch-section"));

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));

  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}


// =========== BACK BUTTON ===========
window.addEventListener("load", () => {
  const backBtn = document.getElementById("back");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "/built-different";
    });
  }
});


// =========== INSTRUMENT VIDEO & INFO ===========
document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".instrument-box .item");
  const videoWrapper = document.querySelector(".video-wrapper");
  const videoFrame = document.getElementById("videoFrame");
  const infoWrapper = document.querySelector(".info-wrapper");

  if (!items.length) return; // nếu trang không có instrument thì bỏ qua

  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const type = item.dataset.type;

      if (videoWrapper) videoWrapper.style.display = "none";
      if (infoWrapper) infoWrapper.style.display = "none";

      if (type === "video" && videoWrapper && videoFrame) {
        videoFrame.src = item.dataset.video;
        videoWrapper.style.display = "block";
      }

      if (type === "info" && infoWrapper) {
        infoWrapper.style.display = "block";
      }
    });
  });

});

// Đổi text speech-bubble khi bấm Instruments from scratch
document.getElementById("btn-scratch").addEventListener("click", function () {
  const bubble = document.querySelector(".speech-bubble");
  bubble.innerHTML = "<p>Instruments from scratch</p>";
});

