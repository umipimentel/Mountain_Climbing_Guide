AOS.init();

// Dark mode toggle
$("#darkToggle").click(function () {
    $("body, .navbar, footer").toggleClass("dark-mode");
    $(".card").toggleClass("dark-card");
});

// Gallery lightbox
document.querySelectorAll('.gallery-img').forEach(item => {
  item.addEventListener('click', function() {

    let src = "";
    let isVideo = false;

    if (this.tagName.toLowerCase() === "video") {
        isVideo = true;
        src = this.getAttribute("src");
    } else {
        src = this.getAttribute("src");
    }

    const img   = document.getElementById('lightboxImage');
    const video = document.getElementById('lightboxVideo');

    if (isVideo) {
        video.src = src;
        video.classList.remove('d-none');
        video.load();
        img.classList.add('d-none');
        img.src = "";
    } else {
        img.src = src;
        img.classList.remove('d-none');
        video.classList.add('d-none');
        video.pause();
        video.src = "";
    }

    new bootstrap.Modal(document.getElementById('lightboxModal')).show();
  });
});


document.getElementById("closeMountain").onclick = function() {
  document.getElementById("mountainDisplay").style.display = "none";
};
const flipbook = document.getElementById('flipbook');
const pages = document.querySelectorAll('.flipbook-page');
let currentIndex = 0;

// Navigate pages
document.getElementById('nextPage').addEventListener('click', () => {
  if (currentIndex < pages.length - 1) currentIndex++;
  flipbook.style.transform = `translateX(-${currentIndex * (pages[0].offsetWidth + 20)}px)`;
});

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  flipbook.style.transform = `translateX(-${currentIndex * (pages[0].offsetWidth + 20)}px)`;
});

// Modal on click
pages.forEach(page => {
  page.addEventListener('click', function() {
    const type = this.getAttribute('data-type');
    const src = this.getAttribute('data-src');

    const img = document.getElementById('flipbookModalImage');
    const video = document.getElementById('flipbookModalVideo');

    if (type === 'video') {
      video.src = src;
      video.classList.remove('d-none');
      video.load();
      img.classList.add('d-none');
      img.src = "";
    } else {
      img.src = src;
      img.classList.remove('d-none');
      video.classList.add('d-none');
      video.pause();
      video.src = "";
    }

    new bootstrap.Modal(document.getElementById('flipbookModal')).show();
  });
});
