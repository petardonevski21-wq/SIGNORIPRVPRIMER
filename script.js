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
    // LUXURY TIMING FOR THE MORPH INTERACTION
    // ==========================================
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const navDrawer = document.getElementById('navDrawer');
    const navOverlay = document.getElementById('navDrawerOverlay');
    const closeBtn = document.getElementById('closeNavBtn');

    let isMenuAnimating = false;

    function openMenuSequence() {
        if (isMenuAnimating) return;
        isMenuAnimating = true;

        menuToggleBtn.classList.add('morph-active');

        setTimeout(() => {
            navDrawer.classList.add('active');
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
            
            setTimeout(() => {
                isMenuAnimating = false;
            }, 1000); 
        }, 750); 
    }

    function closeMenuSequence() {
        if (isMenuAnimating) return;
        isMenuAnimating = true;

        navDrawer.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';

        setTimeout(() => {
            menuToggleBtn.classList.remove('morph-active');
            
            setTimeout(() => {
                isMenuAnimating = false;
            }, 600);
        }, 800); 
    }

    if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMenuSequence);
    if (closeBtn) closeBtn.addEventListener('click', closeMenuSequence);
    if (navOverlay) navOverlay.addEventListener('click', closeMenuSequence);


    // ==========================================
    // Скрол Нагоре (Scroll-up) Анимација за Менито
    // ==========================================
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Почнуваме со логиката откако корисникот ќе скролне 350px надолу
        // (за да го одминеме оригиналното мени и да не се поклопат)
        if (currentScrollY > 350) {
            header.classList.add('ready-sticky'); // Го спрема менито со бела позадина скриено нагоре
            
            if (currentScrollY < lastScrollY) {
                // Корисникот скрола НАГОРЕ -> пушти ја анимацијата надолу
                header.classList.add('show-sticky');
            } else {
                // Корисникот скрола НАДОЛУ -> скриј го менито повторно
                header.classList.remove('show-sticky');
            }
        } else {
            // Кога корисникот ќе се врати скроз горе, се ресетираме на првобитното мени
            header.classList.remove('ready-sticky');
            header.classList.remove('show-sticky');
        }
        
        lastScrollY = currentScrollY;
    });
});