document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle ---
    // --- Translations ---
    const translations = {
        "en": {
            "nav_home": "Home",
            "nav_about": "About",
            "nav_projects": "Projects",
            "nav_certifications": "Certifications",
            "nav_events": "Events",
            "nav_contact": "Contact",
            "hero_greeting": "Hello, I'm",
            "hero_role": "B.Tech CS–AIML Student & Developer",
            "hero_desc": "Building intelligent systems and beautiful web interfaces. Passionate about Artificial Intelligence, Machine Learning, and Full Stack Development.",
            "hero_btn_projects": "View Projects",
            "hero_btn_resume": "Download Resume",
            "about_title": "About Me",
            "about_desc_1": "I am a Computer Science student specializing in AI & Machine Learning. I bridge the gap between complex algorithms and user-friendly web applications.",
            "about_desc_2": "With a strong foundation in Python, OpenCV, and Web Technologies, I aim to create impactful solutions that solve real-world problems.",
            "about_btn_more": "More About Me",
            "skills_title": "My Tech Stack",
            "projects_title": "Featured Projects",
            "project_btn_view": "View Details",
            "project_btn_all": "View All Projects",
            "cta_title": "Have a Project in Mind?",
            "cta_desc": "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
            "cta_btn_chat": "Let's Chat",
            "footer_made_by": "Vivek. Made by",
            "contact_title": "Get In Touch",
            "contact_subtitle": "Let's work together",
            "contact_desc": "Feel free to reach out for collaborations or just a friendly hello.",
            "contact_email": "Email Me",
            "contact_linkedin": "LinkedIn",
            "contact_github": "GitHub",
            "form_name": "Name",
            "form_email": "Email",
            "form_message": "Message",
            "form_btn_send": "Send Message",
            "cert_title": "Certifications & Achievements",
            "events_title": "Attended Events",
            "events_desc": "A collection of hackathons, workshops, and tech conferences I've participated in to stay updated with the latest trends.",

            // Projects
            "proj_portfolio_title": "Portfolio Website",
            "proj_portfolio_desc": "Clean, responsive personal portfolio to highlight my work.",
            "proj_face_title": "AI Face Recognition",
            "proj_face_desc": "Real-time face detection system.",
            "proj_sentiment_title": "Sentiment Analysis",
            "proj_sentiment_desc": "NLP based sentiment classifier.",
            "proj_calc_title": "Simple Calculator",
            "proj_calc_desc": "Calculator with modern interface and JS logic.",

            // Events
            "event_genai_title": "Google Cloud GenAI Workshop",
            "event_genai_desc": "Attended the Google Cloud GenAI Workshop, gaining hands-on experience with Generative AI tools, models, and real-world cloud applications.",
            "event_devfest_title": "Prelude to DevFest",
            "event_devfest_desc": "Participated in Google DevFest, where I explored cutting-edge technologies, developer tools, and AI innovations.",
            "event_ms_summit_title": "Microsoft AI Summit",
            "event_ms_summit_desc": "Participated in the Microsoft AI Summit, exploring the latest advancements in AI, cloud innovation, and responsible AI practices.",
            "event_type_workshop": "Workshop",
            "event_type_event": "Event",
            "event_type_conf": "Conference",
            "view_linkedin": "view on LinkedIn",

            // Certifications
            "cert_aws_title": "Future AWS AI Engineer",
            "cert_aws_desc": "Comprehensive course AWS Console",
            "cert_genai_title": "Gen AI Academy",
            "cert_genai_desc": "Foundational knowledge of Artificial Intelligence concepts and applications.",
            "cert_data_analysis_title": "Data Analysis with Python",
            "cert_data_analysis_desc": "Core concepts of Data Analysis using pandas ans numpy",
            "cert_data_vis_title": "Data Visualization",
            "cert_data_vis_desc": "Core concepts of Data Visualization using matplotlib and seaborn",
            "cert_mysql_title": "Getting started with MySQL command line page",
            "cert_mysql_desc": "learned the basics of MySQL command line page",
            "cert_html_css_title": "HTML and CSS",
            "cert_html_css_desc": "learned the basics of HTML and CSS",
            "cert_linux_title": "Getting Started with Linux Fundamentals",
            "cert_linux_desc": "Participated in a 24-hour coding hackathon building innovative solutions.",
            "cert_java_title": "Core and Advanced Java",
            "cert_java_desc": "learned the basics to advanced concepts of Java",
            "cert_cyber_title": "Intro to Cybersecurity",
            "cert_cyber_desc": "learned the basics of cybersecurity",
            "cert_view_cred": "View Credential",

            // About Page - Timeline
            "about_journey_title": "My Journey",
            "timeline_1_title": "B.Tech in CS - AIML",
            "timeline_1_desc": "Focusing on Deep Learning, Algorithms, and System Design.",
            "timeline_1_date": "2023 - Present",
            "timeline_2_title": "12th with PCB",
            "timeline_2_desc": "Learned Python and SQL",
            "timeline_2_date": "2022",
            "timeline_3_title": "10th from JNV",
            "timeline_3_desc": "passed with 77%",
            "timeline_3_date": "2021",

            // About Page - Skills
            "skill_prog_lang": "Programming Languages",
            "skill_prog_desc": "Python, Java, JavaScript, C/C++, SQL, etc.",
            "skill_ai_ml": "AI & Machine Learning",
            "skill_ai_desc": "Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, Model Deployment.",
            "skill_frameworks": "Frameworks & Libraries",
            "skill_frameworks_desc": "TensorFlow, PyTorch, Scikit-Learn, OpenCV, NumPy, Pandas, Matplotlib, face_recognition, etc.",
            "skill_cloud": "Cloud & DevOps",
            "skill_cloud_desc": "Google Cloud, Azure, AWS, Docker, GitHub Actions, CI/CD, Linux.",
            "skill_web": "Web Development",
            "skill_web_desc": "HTML, CSS, JavaScript, React, Node.js, REST APIs, Express.js.",
            "skill_db": "Databases",
            "skill_db_desc": "MySQL, MongoDB, PostgreSQL, Firebase.",
            "skill_tools": "Tools & Platforms",
            "skill_tools_desc": "Git/GitHub, VS Code, Jupyter Notebook, Postman, Figma, Canva.",
            "skill_se": "Software Engineering Concepts",
            "skill_se_desc": "OOP, Data Structures & Algorithms, System Design basics, OS fundamentals."
        },
        "es": {
            "nav_home": "Inicio",
            "nav_about": "Sobre Mí",
            "nav_projects": "Proyectos",
            "nav_certifications": "Certificaciones",
            "nav_events": "Eventos",
            "nav_contact": "Contacto",
            "hero_greeting": "Hola, soy",
            "hero_role": "Estudiante de B.Tech CS–AIML y Desarrollador",
            "hero_desc": "Construyendo sistemas inteligentes e interfaces web hermosas. Apasionado por la Inteligencia Artificial, el Aprendizaje Automático y el Desarrollo Full Stack.",
            "hero_btn_projects": "Ver Proyectos",
            "hero_btn_resume": "Descargar Currículum",
            "about_title": "Sobre Mí",
            "about_desc_1": "Soy un estudiante de Ciencias de la Computación especializado en IA y Aprendizaje Automático. Uno la brecha entre algoritmos complejos y aplicaciones web amigables.",
            "about_desc_2": "Con una base sólida en Python, OpenCV y Tecnologías Web, aspiro a crear soluciones impactantes que resuelvan problemas del mundo real.",
            "about_btn_more": "Más Sobre Mí",
            "skills_title": "Mi Stack Tecnológico",
            "projects_title": "Proyectos Destacados",
            "project_btn_view": "Ver Detalles",
            "project_btn_all": "Ver Todos los Proyectos",
            "cta_title": "¿Tienes un Proyecto en Mente?",
            "cta_desc": "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.",
            "cta_btn_chat": "Hablemos",
            "footer_made_by": "Vivek. Hecho por",
            "contact_title": "Contáctame",
            "contact_subtitle": "Trabajemos juntos",
            "contact_desc": "Siéntete libre de contactarme para colaboraciones o simplemente un saludo amistoso.",
            "contact_email": "Envíame un Correo",
            "contact_linkedin": "LinkedIn",
            "contact_github": "GitHub",
            "form_name": "Nombre",
            "form_email": "Correo",
            "form_message": "Mensaje",
            "form_btn_send": "Enviar Mensaje",
            "cert_title": "Certificaciones y Logros",
            "events_title": "Eventos Asistidos",
            "events_desc": "Una colección de hackatones, talleres y conferencias tecnológicas en las que he participado para mantenerme actualizado con las últimas tendencias.",

            // Projects
            "proj_portfolio_title": "Sitio Web Portafolio",
            "proj_portfolio_desc": "Portafolio personal limpio y responsivo para destacar mi trabajo.",
            "proj_face_title": "Reconocimiento Facial IA",
            "proj_face_desc": "Sistema de detección facial en tiempo real.",
            "proj_sentiment_title": "Análisis de Sentimientos",
            "proj_sentiment_desc": "Clasificador de sentimientos basado en PNL.",
            "proj_calc_title": "Calculadora Simple",
            "proj_calc_desc": "Calculadora con interfaz moderna y lógica JS.",

            // Events
            "event_genai_title": "Taller Google Cloud GenAI",
            "event_genai_desc": "Asistí al taller de Google Cloud GenAI, obteniendo experiencia práctica con herramientas de IA generativa, modelos y aplicaciones en la nube del mundo real.",
            "event_devfest_title": "Preludio a DevFest",
            "event_devfest_desc": "Participé en Google DevFest, donde exploré tecnologías de vanguardia, herramientas para desarrolladores e innovaciones de IA.",
            "event_ms_summit_title": "Cumbre de IA de Microsoft",
            "event_ms_summit_desc": "Participé en la Cumbre de IA de Microsoft, explorando los últimos avances en IA, innovación en la nube y prácticas de IA responsable.",
            "event_type_workshop": "Taller",
            "event_type_event": "Evento",
            "event_type_conf": "Conferencia",
            "view_linkedin": "ver en LinkedIn",

            // Certifications
            "cert_aws_title": "Futuro Ingeniero de IA AWS",
            "cert_aws_desc": "Curso completo de Consola AWS",
            "cert_genai_title": "Academia Gen AI",
            "cert_genai_desc": "Conocimiento fundamental de conceptos y aplicaciones de Inteligencia Artificial.",
            "cert_data_analysis_title": "Análisis de Datos con Python",
            "cert_data_analysis_desc": "Conceptos básicos de Análisis de Datos usando pandas y numpy",
            "cert_data_vis_title": "Visualización de Datos",
            "cert_data_vis_desc": "Conceptos básicos de Visualización de Datos usando matplotlib y seaborn",
            "cert_mysql_title": "Comenzando con la línea de comandos MySQL",
            "cert_mysql_desc": "aprendí los conceptos básicos de la página de línea de comandos de MySQL",
            "cert_html_css_title": "HTML y CSS",
            "cert_html_css_desc": "aprendí los conceptos básicos de HTML y CSS",
            "cert_linux_title": "Comenzando con Fundamentos de Linux",
            "cert_linux_desc": "Participé en un hackathon de programación de 24 horas construyendo soluciones innovadoras.",
            "cert_java_title": "Java Básico y Avanzado",
            "cert_java_desc": "aprendí los conceptos básicos a avanzados de Java",
            "cert_cyber_title": "Intro a la Ciberseguridad",
            "cert_cyber_desc": "aprendí los conceptos básicos de ciberseguridad",
            "cert_view_cred": "Ver Credencial",

            // About Page - Timeline
            "about_journey_title": "Mi Trayectoria",
            "timeline_1_title": "B.Tech en CS - AIML",
            "timeline_1_desc": "Enfocándome en Aprendizaje Profundo, Algoritmos y Diseño de Sistemas.",
            "timeline_1_date": "2023 - Presente",
            "timeline_2_title": "12º con PCB",
            "timeline_2_desc": "Aprendí Python y SQL",
            "timeline_2_date": "2022",
            "timeline_3_title": "10º de JNV",
            "timeline_3_desc": "aprobado con 77%",
            "timeline_3_date": "2021",

            // About Page - Skills
            "skill_prog_lang": "Lenguajes de Programación",
            "skill_prog_desc": "Python, Java, JavaScript, C/C++, SQL, etc.",
            "skill_ai_ml": "IA y Aprendizaje Automático",
            "skill_ai_desc": "Aprendizaje Automático, Aprendizaje Profundo, PNL, Visión por Computadora, IA Generativa, Despliegue de Modelos.",
            "skill_frameworks": "Frameworks y Librerías",
            "skill_frameworks_desc": "TensorFlow, PyTorch, Scikit-Learn, OpenCV, NumPy, Pandas, Matplotlib, face_recognition, etc.",
            "skill_cloud": "Nube y DevOps",
            "skill_cloud_desc": "Google Cloud, Azure, AWS, Docker, GitHub Actions, CI/CD, Linux.",
            "skill_web": "Desarrollo Web",
            "skill_web_desc": "HTML, CSS, JavaScript, React, Node.js, REST APIs, Express.js.",
            "skill_db": "Bases de Datos",
            "skill_db_desc": "MySQL, MongoDB, PostgreSQL, Firebase.",
            "skill_tools": "Herramientas y Plataformas",
            "skill_tools_desc": "Git/GitHub, VS Code, Jupyter Notebook, Postman, Figma, Canva.",
            "skill_se": "Conceptos de Ingeniería de Software",
            "skill_se_desc": "POO, Estructuras de Datos y Algoritmos, conceptos básicos de Diseño de Sistemas, fundamentos de SO."
        }
    };

    // --- Language Logic ---
    const langToggles = document.querySelectorAll('.lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    // Auto-detect browser language if not set
    if (!localStorage.getItem('lang')) {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('es')) {
            currentLang = 'es';
        }
    }

    const updateLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update button text
        langToggles.forEach(btn => {
            btn.textContent = lang === 'en' ? 'ES' : 'EN';
        });
    };

    // Initialize Language
    updateLanguage(currentLang);

    // Language Toggle Event
    langToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'es' : 'en';
            updateLanguage(newLang);
        });
    });


    // --- Theme Toggle ---
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const htmlElement = document.documentElement;

    // Check local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        htmlElement.setAttribute('data-theme', currentTheme);
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (currentTheme === 'light' && icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const theme = htmlElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Update all toggle icons
            themeToggles.forEach(t => {
                const icon = t.querySelector('i');
                if (icon) {
                    if (newTheme === 'light') {
                        icon.classList.remove('fa-sun');
                        icon.classList.add('fa-moon');
                    } else {
                        icon.classList.remove('fa-moon');
                        icon.classList.add('fa-sun');
                    }
                }
            });
        });
    });

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
