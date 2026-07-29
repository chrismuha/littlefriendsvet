let overlay = null;
let overlayImg = null;
let prevBtn = null;
let nextBtn = null;
let closeBtn = null;

let currentImages = [];
let currentIndex = 0;
let initialized = false;

function createOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'photo-grid-lightbox-overlay';

    closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'photo-grid-lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '<i class="bi bi-x-lg"></i>';

    prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'photo-grid-lightbox-arrow photo-grid-lightbox-prev';
    prevBtn.setAttribute('aria-label', 'Previous image');
    prevBtn.innerHTML = '<i class="bi bi-chevron-left"></i>';

    nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'photo-grid-lightbox-arrow photo-grid-lightbox-next';
    nextBtn.setAttribute('aria-label', 'Next image');
    nextBtn.innerHTML = '<i class="bi bi-chevron-right"></i>';

    const content = document.createElement('div');
    content.className = 'photo-grid-lightbox-content';

    overlayImg = document.createElement('img');
    overlayImg.className = 'photo-grid-lightbox-image';

    content.appendChild(overlayImg);

    overlay.appendChild(closeBtn);
    overlay.appendChild(prevBtn);
    overlay.appendChild(content);
    overlay.appendChild(nextBtn);

    document.body.appendChild(overlay);

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', handleKeydown);
}

function handleKeydown(e) {
    if (!overlay || !overlay.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
}

function updateImage() {
    const img = currentImages[currentIndex];
    overlayImg.src = img.currentSrc || img.src;
    overlayImg.alt = img.alt || '';
}

function openLightbox(images, index) {
    currentImages = images;
    currentIndex = index;
    updateImage();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateImage();
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateImage();
}

function handleGridClick(e) {
    const img = e.target.closest('.photo-grid-wrapper img');
    if (!img) return;

    const wrapper = img.closest('.photo-grid-wrapper');
    const images = Array.from(wrapper.querySelectorAll('img'));
    const index = images.indexOf(img);

    openLightbox(images, index);
}

export function initPhotoGridLightbox() {
    if (initialized) return;
    initialized = true;

    createOverlay();
    wrapGridImages();
    new MutationObserver(() => wrapGridImages()).observe(document.body, {
        childList: true,
        subtree: true,
    });

    document.addEventListener('click', handleGridClick);
}

export function destroyPhotoGridLightbox() {
    if (!initialized) return;

    document.removeEventListener('click', handleGridClick);
    document.removeEventListener('keydown', handleKeydown);

    if (overlay) {
        overlay.remove();
        overlay = null;
    }

    initialized = false;
}

function wrapGridImages(root = document) {
    root.querySelectorAll('.photo-grid-wrapper img').forEach((img) => {
        if (img.parentElement.classList.contains('photo-grid-item')) return;
        const frame = document.createElement('span');
        frame.className = 'photo-grid-item';
        img.parentNode.insertBefore(frame, img);
        frame.appendChild(img);
    });
}