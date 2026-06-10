/**
 * About Us - Couples Memory Board
 * Core JS for Netflix-style interactivity
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const profileScreen = document.getElementById('profile-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const loadingVideo = document.getElementById('loading-video');
    const homeScreen = document.getElementById('home-screen');
    const profileCards = document.querySelectorAll('.profile-card');
    const bgMusic = document.getElementById('bg-music');
    const navbar = document.getElementById('main-navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navLogo = document.getElementById('nav-logo');
    const navMusicBtn = document.getElementById('music-toggle-btn');
    const navMusicText = document.getElementById('music-btn-text');
    const heroPlayBtn = document.getElementById('btn-play-music-hero');
    const heroPlayText = heroPlayBtn.querySelector('span');
    const heroPlaySvg = heroPlayBtn.querySelector('svg');
    const videoCards = document.querySelectorAll('.video-card');
    const btnReadMore = document.getElementById('btn-view-memories');
    const modal = document.getElementById('media-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalDescription = document.getElementById('modal-description');
    const modalClose = document.getElementById('modal-close');
    const sections = document.querySelectorAll('section');
    const heroSection = document.getElementById('hero-banner');
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroBadge = document.querySelector('.hero-badge');

    let isMusicPlaying = false;
    let heroShrinkTimer = null;

    // ─────────────────────────────────────────────
    // 1. Screen Flow Transitions
    // ─────────────────────────────────────────────
    profileCards.forEach(card => {
        card.addEventListener('click', () => {
            profileScreen.classList.add('fade-out');

            setTimeout(() => {
                profileScreen.classList.remove('active');
                profileScreen.classList.remove('fade-out');
                loadingScreen.classList.add('active');
                loadingVideo.currentTime = 0;
                loadingVideo.play().catch(err => console.warn('Loading video blocked:', err));
                playMusic();

                setTimeout(() => {
                    loadingScreen.classList.add('fade-out');

                    setTimeout(() => {
                        loadingVideo.pause();
                        loadingVideo.currentTime = 0;
                        loadingScreen.classList.remove('active');
                        loadingScreen.classList.remove('fade-out');
                        homeScreen.classList.add('active');
                        window.scrollTo(0, 0);

                        // Start Netflix hero shrink sequence
                        startHeroShrink();
                    }, 600);
                }, 2500);

            }, 600);
        });
    });

    // ─────────────────────────────────────────────
    // 2. Hero Netflix-style Title Shrink
    //    On entry  : title BIG, description visible
    //    After 4.5s: title shrinks, description fades out
    //    On hover  : expand back, re-shrink on leave
    // ─────────────────────────────────────────────
    function startHeroShrink() {
        // Reset to expanded state first
        heroTitle.classList.remove('hero-title-small');
        heroDescription.classList.remove('hero-desc-hidden');
        heroBadge.classList.remove('hero-badge-hidden');

        clearTimeout(heroShrinkTimer);
        heroShrinkTimer = setTimeout(() => {
            shrinkHero();
        }, 4500);
    }

    function shrinkHero() {
        heroTitle.classList.add('hero-title-small');
        heroDescription.classList.add('hero-desc-hidden');
        heroBadge.classList.add('hero-badge-hidden');
    }

    function expandHero() {
        heroTitle.classList.remove('hero-title-small');
        heroDescription.classList.remove('hero-desc-hidden');
        heroBadge.classList.remove('hero-badge-hidden');
    }

    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearTimeout(heroShrinkTimer);
            expandHero();
        });

        heroSection.addEventListener('mouseleave', () => {
            heroShrinkTimer = setTimeout(() => {
                shrinkHero();
            }, 3000);
        });
    }

    // ─────────────────────────────────────────────
    // 3. Music System
    // ─────────────────────────────────────────────
    function playMusic() {
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            updateMusicUI(true);
        }).catch(err => {
            console.warn("Autoplay block:", err);
            isMusicPlaying = false;
            updateMusicUI(false);
        });
    }

    function pauseMusic() {
        bgMusic.pause();
        isMusicPlaying = false;
        updateMusicUI(false);
    }

    function toggleMusic() {
        if (isMusicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    }

    function updateMusicUI(isPlaying) {
        if (isPlaying) {
            navMusicBtn.classList.add('playing');
            navMusicText.textContent = "Pause Music";
            heroPlayText.textContent = "Pause Music";
            heroPlaySvg.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        } else {
            navMusicBtn.classList.remove('playing');
            navMusicText.textContent = "Play Music";
            heroPlayText.textContent = "Play Music";
            heroPlaySvg.innerHTML = '<path d="M8 5v14l11-7z"/>';
        }
    }

    navMusicBtn.addEventListener('click', e => { e.stopPropagation(); toggleMusic(); });
    heroPlayBtn.addEventListener('click', e => { e.stopPropagation(); toggleMusic(); });

    // ─────────────────────────────────────────────
    // 4. Navbar Scroll
    // ─────────────────────────────────────────────
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const targetId = link.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const el = document.querySelector(targetId);
                if (el) {
                    const offset = el.getBoundingClientRect().top + window.pageYOffset - navbar.offsetHeight;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            }
        });
    });

    navLogo.addEventListener('click', e => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        document.getElementById('nav-link-home').classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ─────────────────────────────────────────────
    // 5. Scroll Spy
    // ─────────────────────────────────────────────
    window.addEventListener('scroll', () => {
        let currentId = '';
        sections.forEach(section => {
            const top = section.offsetTop - navbar.offsetHeight - 20;
            if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
                currentId = section.getAttribute('id');
            }
        });

        if (currentId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) link.classList.add('active');
            });
        } else if (window.scrollY < 200) {
            navLinks.forEach(l => l.classList.remove('active'));
            document.getElementById('nav-link-home').classList.add('active');
        }
    });

    // ─────────────────────────────────────────────
    // 6. Autoplay muted video cards
    // ─────────────────────────────────────────────
    videoCards.forEach(card => {
        const video = card.querySelector('.card-video');
        const placeholder = card.querySelector('.card-fallback-placeholder');
        if (video) {
            video.muted = true;
            video.loop = true;
            video.play().then(() => {
                if (placeholder) placeholder.style.opacity = '0';
            }).catch(err => console.log("Autoplay blocked:", err));
        }
    });

    // ─────────────────────────────────────────────
    // 7. Modal — only opens on button click
    // ─────────────────────────────────────────────
    function closeModal() {
        modal.classList.remove('active');
        modalVideo.pause();
        modalVideo.src = '';
    }

    btnReadMore.addEventListener('click', () => {
        const videoSrc = btnReadMore.getAttribute('data-video');
        const description = btnReadMore.getAttribute('data-description');

        modalVideo.src = videoSrc;
        modalDescription.textContent = description;
        modal.classList.add('active');
        modalVideo.play().catch(err => console.warn('Video play blocked:', err));
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

});

function startHeroShrink() {
    // Reset ke state besar
    heroTitle.classList.remove('hero-title-small');
    heroDescription.classList.remove('hero-desc-hidden');
    heroBadge.classList.remove('hero-badge-hidden');

    // Tunggu 4.5 detik lalu shrink
    heroShrinkTimer = setTimeout(() => {
        shrinkHero();
    }, 4500);
}

// Hover masuk → expand
heroSection.addEventListener('mouseenter', () => {
    clearTimeout(heroShrinkTimer);
    expandHero();
});

// Hover keluar → shrink lagi setelah 3 detik
heroSection.addEventListener('mouseleave', () => {
    heroShrinkTimer = setTimeout(() => {
        shrinkHero();
    }, 3000);
});