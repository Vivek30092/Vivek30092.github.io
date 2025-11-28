document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fa-solid fa-times"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // --- Skill Bar Animation ---
    const skillSection = document.querySelector('.skills-container');
    const progressBars = document.querySelectorAll('.progress');

    if (skillSection) {
        window.addEventListener('scroll', () => {
            const sectionPos = skillSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0'; // Reset to 0 first to force animation if needed, or just let CSS transition handle it
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }
        });
    }

    // --- Project Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 200);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // --- Project Modal ---
    const modal = document.getElementById('projectModal');
    const viewBtns = document.querySelectorAll('.view-project-btn');
    const closeModal = document.querySelector('.close-modal');

    if (modal) {
        viewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const title = btn.getAttribute('data-title');
                const desc = btn.getAttribute('data-desc');
                const tech = btn.getAttribute('data-tech');
                const img = btn.getAttribute('data-img');

                document.getElementById('modalTitle').textContent = title;
                document.getElementById('modalDesc').textContent = desc;
                document.getElementById('modalTech').textContent = tech;

                // In a real app, you'd set the image src. For now using placeholder div or if img exists
                const imgContainer = document.querySelector('.modal-img-container');
                imgContainer.innerHTML = `<img src="${img}" alt="${title}" class="modal-img">`;

                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    // --- Scroll to Top ---
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent (simulated).`);
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // --- Certifications Auto Scroll & Filtering ---
    const certContainer = document.querySelector('.cert-scroll-container');
    const certWrapper = document.getElementById('certScrollWrapper');
    const certFilterBtns = document.querySelectorAll('.cert-scroll-container ~ .filter-buttons .filter-btn, .filter-buttons .filter-btn'); // Target filter buttons

    if (certContainer && certWrapper) {
        // Clone items for infinite scroll effect
        const originalItems = Array.from(certWrapper.children);
        originalItems.forEach(item => {
            const clone = item.cloneNode(true);
            clone.classList.add('clone');
            certWrapper.appendChild(clone);
        });

        let scrollPos = 0;
        let isHovered = false;
        const scrollSpeed = 1;
        let isFiltered = false;

        // Filter Logic
        if (certFilterBtns.length > 0) {
            certFilterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all
                    certFilterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const filterValue = btn.getAttribute('data-filter');
                    isFiltered = filterValue !== 'all';

                    // Filter items
                    const allItems = Array.from(certWrapper.children);
                    allItems.forEach(item => {
                        const category = item.getAttribute('data-category');
                        if (filterValue === 'all' || category === filterValue) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                    });

                    // Reset scroll position
                    certContainer.scrollLeft = 0;
                    scrollPos = 0;
                });
            });
        }

        certContainer.addEventListener('mouseenter', () => {
            isHovered = true;
        });

        certContainer.addEventListener('mouseleave', () => {
            isHovered = false;
        });

        certContainer.addEventListener('touchstart', () => {
            isHovered = true;
        });

        certContainer.addEventListener('touchend', () => {
            isHovered = false;
        });

        function autoScroll() {
            // Only auto-scroll if not hovered AND not filtered (or if filtered but we want it to scroll? usually filtering implies static view if few items)
            // Let's keep auto-scroll even if filtered, but check width
            if (!isHovered) {
                // If content is smaller than container, don't scroll
                if (certWrapper.scrollWidth <= certContainer.clientWidth) {
                    // do nothing
                } else {
                    scrollPos += scrollSpeed;
                    // Reset scroll position logic
                    // If filtered, the "half width" logic might be tricky because clones might be hidden or shown irregularly
                    // But since we hide/show both original and clone based on category, the structure is preserved (half originals, half clones)
                    // So scrollWidth / 2 should still be the split point between original set and clone set

                    if (scrollPos >= certWrapper.scrollWidth / 2) {
                        scrollPos = 0;
                    }
                    certContainer.scrollLeft = scrollPos;
                }
            } else {
                scrollPos = certContainer.scrollLeft;
            }
            requestAnimationFrame(autoScroll);
        }

        requestAnimationFrame(autoScroll);
    }
});
