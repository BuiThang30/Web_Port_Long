window.addEventListener("load", () => {
  const content = document.querySelector(".content");
  const character = document.querySelector(".character");
  const buttons = document.querySelectorAll(".skills button");

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

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".skill-btn");
  const rightPanel = document.querySelector(".right-panel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Bỏ active cũ
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const type = btn.dataset.type;
      const link = btn.dataset.link;

      // Nếu là AutoCAD → hiển thị bảng nội dung
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
      // Nếu là skill khác có link → chuyển trang
      else if (link) {
        window.location.href = link;
      } 
      // Còn lại → reset ảnh mặc định
      else {
        rightPanel.innerHTML = `
          <img src="image/background_home1.png" class="side-image" />
        `;
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".music-btn");
  const contents = document.querySelectorAll(".music-content");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Reset active
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Hiển thị nội dung tương ứng
      const type = btn.dataset.type;
      contents.forEach(c => {
        c.classList.remove("active");
        if (c.classList.contains(type)) {
          c.classList.add("active");
        }
      });
    });
  });
});

document.querySelectorAll("#btn-singapore").forEach(btn => {
  btn.onclick = () => showSection("singapore-section");
});
document.querySelectorAll("#btn-stemese").forEach(btn => {
  btn.onclick = () => showSection("stemese-section");
});
document.querySelectorAll("#btn-soccer").forEach(btn => {
  btn.onclick = () => showSection("soccer-section");
});

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

window.addEventListener("load", () => {
  const backBtn = document.getElementById("back");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "/built-different";
    });
  } else {
    console.error("Không tìm thấy nút #back trong DOM");
  }
});

