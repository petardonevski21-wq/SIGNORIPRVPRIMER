document.addEventListener("DOMContentLoaded", () => {
    
    // Rotating Header Text Logic
    const messages = [
        "Book Your Private Consultation",
        "Experience True Bespoke Elegance",
        "THE ART OF BESPOKE"
    ];

    const textElement = document.getElementById("rotating-text");
    let currentIndex = 0;

    setInterval(() => {
        if (!textElement) return;
        textElement.classList.add("fade");

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % messages.length;
            textElement.textContent = messages[currentIndex];
            textElement.classList.remove("fade");
        }, 800); 

    }, 5000);

    // ==========================================
    // LUXURY TIMING FOR THE MORPH INTERACTION (LEFT MENU)
    // ==========================================
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const navDrawer = document.getElementById('navDrawer');
    const navOverlay = document.getElementById('navDrawerOverlay');
    const closeBtn = document.getElementById('closeNavBtn');

    let isMenuAnimating = false;

    function openMenuSequence() {
        if (isMenuAnimating) return;
        isMenuAnimating = true;

        const isMobile = window.innerWidth <= 768;
        menuToggleBtn.classList.add('morph-active');

        if (isMobile) {
            navDrawer.classList.add('active');
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                isMenuAnimating = false;
            }, 400);
        } else {
            setTimeout(() => {
                navDrawer.classList.add('active');
                navOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; 
                
                setTimeout(() => {
                    isMenuAnimating = false;
                }, 1000); 
            }, 750); 
        }
    }

    function closeMenuSequence() {
        if (isMenuAnimating) return;
        isMenuAnimating = true;

        const isMobile = window.innerWidth <= 768;

        navDrawer.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';

        if (isMobile) {
            menuToggleBtn.classList.remove('morph-active');
            setTimeout(() => {
                isMenuAnimating = false;
            }, 400);
        } else {
            setTimeout(() => {
                menuToggleBtn.classList.remove('morph-active');
                
                setTimeout(() => {
                    isMenuAnimating = false;
                }, 600);
            }, 800); 
        }
    }

    if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMenuSequence);
    if (closeBtn) closeBtn.addEventListener('click', closeMenuSequence);
    if (navOverlay) navOverlay.addEventListener('click', closeMenuSequence);


    // ==========================================
    // LUXURY SEARCH DRAWER INTERACTION (RIGHT MENU)
    // ==========================================
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    const searchDrawer = document.getElementById('searchDrawer');
    const searchOverlay = document.getElementById('searchDrawerOverlay');
    const closeSearchBtn = document.getElementById('closeSearchBtn');

    let isSearchAnimating = false;

    function openSearchSequence() {
        if (isSearchAnimating) return;
        isSearchAnimating = true;

        const isMobile = window.innerWidth <= 768;

        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        
        if (isMobile) {
            searchDrawer.classList.add('active');
            setTimeout(() => {
                isSearchAnimating = false;
            }, 400);
        } else {
            setTimeout(() => {
                searchDrawer.classList.add('active');
                
                setTimeout(() => {
                    isSearchAnimating = false;
                }, 1000); 
            }, 100); 
        }
    }

    function closeSearchSequence() {
        if (isSearchAnimating) return;
        isSearchAnimating = true;

        const isMobile = window.innerWidth <= 768;

        searchDrawer.classList.remove('active');
        document.body.style.overflow = '';

        if (isMobile) {
            searchOverlay.classList.remove('active');
            setTimeout(() => {
                isSearchAnimating = false;
            }, 400);
        } else {
            setTimeout(() => {
                searchOverlay.classList.remove('active');
                
                setTimeout(() => {
                    isSearchAnimating = false;
                }, 600);
            }, 800); 
        }
    }

    if (searchToggleBtn) searchToggleBtn.addEventListener('click', openSearchSequence);
    if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearchSequence);
    if (searchOverlay) searchOverlay.addEventListener('click', closeSearchSequence);


    // ==========================================
    // МАЗНА АНИМАЦИЈА - ЛИЗГАЊЕ ОД ГОРЕ
    // ==========================================
    const header = document.querySelector('.header');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 10) {
                    header.classList.add('ready-sticky');
                } else {
                    header.classList.remove('ready-sticky');
                }
                
                if (currentScrollY > 40) {
                    header.classList.add('show-sticky');
                } else {
                    header.classList.remove('show-sticky');
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
});