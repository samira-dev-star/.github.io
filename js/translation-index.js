// js/app.js - Fixed bilingual implementation

// Translation dictionary
const translations = {
    de: {
        nav: {
            home: "Start",
            about: "Über mich",
            animations: "Animationen",
            projects: "Projekte",
            certs: "Zertifikate",
            contact: "Kontakt",
            lang: "🌐 EN"
        },
        hero: {
            title: "Visuelle Erlebnisse & sauberes Coding",
            subtitle: "Kombination aus Kreativität in Animation und Kompetenz in Softwareentwicklung.",
            cta: {
                projects: "Projekte ansehen",
                animations: "Animationen ansehen",
                github: "GitHub Profil"
            }
        },
        about: {
            title: "Über mich",
            subtitle: "Full-Stack Developer · 3D Animator",
            main_text: `Ich bin <strong>Samira Mashti Zadeh</strong>, eine leidenschaftliche Entwicklerin mit Fokus auf <span class="highlight">Full-Stack Entwicklung</span> und <span class="highlight">immersive 3D-Erlebnisse</span>. Mit einem soliden Hintergrund in Softwareentwicklung und einem kreativen Auge für Animation verbinde ich Technologie und Kunst, um innovative Lösungen zu schaffen.`,
            secondary_text: `Meine Reise begann mit der Automatisierung komplexer Prozesse und führte zur Entwicklung von <strong>Scalable Web Applications</strong> und interaktiven 3D-Erfahrungen, die Grenzen verschieben.`
        },
        animations: {
            title: "Animationen",
            subtitle: "Motion Graphics, Webanimationen und leichte Interaktionen.",
            card1: {
                title: "MotorGirl-Animation",
                description: "Ich habe diese Animation mit der BlenderApp erstellt.",
                tag1: "Design",
                tag2: "Animation"
            },
            card2: {
                title: "Abstract Art",
                description: "In diesem Video habe ich dieses animierte Mädchen zum Testen erstellt.",
                tag1: "Motion",
                tag2: "Kunst"
            },
            card3: {
                title: "Interaktives Design",
                description: "In diesem Video läuft dieses animierte Mädchen.",
                tag1: "BlenderApp",
                tag2: "Interaktion"
            },
            more: "Mehr anzeigen"
        },
        projects: {
            title: "Programmierungsprojekte",
            subtitle: "Praktische Beispiele mit Demo-Links und Code.",
            card1: {
                title: "TB Chest X-Ray Classifier",
                description: "Deep-Learning-Modell zur Erkennung von Tuberkulose mit 99.51% Genauigkeit."
            },
            card2: {
                title: "Royal Clinic Project",
                description: "Django-Webanwendung zur Verwaltung einer Luxusklinik."
            },
            card3: {
                title: "The Magic Wish",
                description: "Ein interaktives Scratch-Spiel mit kreativer Story."
            },
            card4: {
                title: "Library Manager",
                description: "Ein Kommandozeilen-Tool zur Verwaltung von Bibliotheksressourcen."
            },
            card5: {
                title: "Real-Time Notification",
                description: "Benachrichtigungssystem mit Python zur Echtzeit-Kommunikation."
            },
            card6: {
                title: "Django Online Shop",
                description: "E-Commerce-Plattform mit Admin-Panel und responsivem Design."
            },
            view: "Projekt anzeigen",
            more: "Weitere Projekte"
        },
        certs: {
            title: "Zertifikate & Nachweise",
            subtitle: "Offizielle Zertifikate, Kurse und Erfolge aus verschiedenen Plattformen.",
            filter: {
                all: "Alle Zertifikate",
                harvard: "Harvard",
                linkedin: "LinkedIn",
                intellipaat: "Intellipaat",
                tvto: "TVTO",
                urbino: "Urbino",
                irandigital: "Iran Digital"
            },
            view: "PDF ansehen",
            controls: {
                play: "Play",
                slow: "Slow Down",
                fast: "Speed Up",
                view_all: "Alle Zertifikate auf GitHub →"
            }
        },
        contact: {
            title: "Kontakt",
            subtitle: "Schreib mir für Zusammenarbeit oder Austausch.",
            github: "GitHub",
            linkedin: "LinkedIn",
            email: "Email",
            phone: "Mobile",
            whatsapp: "WhatsApp",
            telegram: "Telegram"
        },
        footer: {
            text: "© Samira Mashti Zadeh — Portfolio. Mit Liebe zum Detail erstellt."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            animations: "Animations",
            projects: "Projects",
            certs: "Certificates",
            contact: "Contact",
            lang: "🌐 DE"
        },
        hero: {
            title: "Visual Experiences & Clean Coding",
            subtitle: "Combining creativity in animation with competence in software development.",
            cta: {
                projects: "View Projects",
                animations: "View Animations",
                github: "GitHub Profile"
            }
        },
        about: {
            title: "About Me",
            subtitle: "Full-Stack Developer · 3D Animator",
            main_text: `I am <strong>Samira Mashti Zadeh</strong>, a passionate developer focusing on <span class="highlight">Full-Stack Development</span> and <span class="highlight">immersive 3D experiences</span>. With a solid background in software development and a creative eye for animation, I bridge technology and art to create innovative solutions.`,
            secondary_text: `My journey began with automating complex processes and led to the development of <strong>Scalable Web Applications</strong> and interactive 3D experiences that push boundaries.`
        },
        animations: {
            title: "Animations",
            subtitle: "Motion graphics, web animations and light interactions.",
            card1: {
                title: "MotorGirl Animation",
                description: "I created this animation with the BlenderApp.",
                tag1: "Design",
                tag2: "Animation"
            },
            card2: {
                title: "Abstract Art",
                description: "In this video, I created this animated girl for testing.",
                tag1: "Motion",
                tag2: "Art"
            },
            card3: {
                title: "Interactive Design",
                description: "In this video, this animated girl is running.",
                tag1: "BlenderApp",
                tag2: "Interaction"
            },
            more: "Show More"
        },
        projects: {
            title: "Programming Projects",
            subtitle: "Hands-on examples with demo links and code.",
            card1: {
                title: "TB Chest X-Ray Classifier",
                description: "Deep learning model for detecting Tuberculosis with 99.51% accuracy."
            },
            card2: {
                title: "Royal Clinic Project",
                description: "Django web application for managing a luxury clinic."
            },
            card3: {
                title: "The Magic Wish",
                description: "An interactive Scratch game with creative storytelling."
            },
            card4: {
                title: "Library Manager",
                description: "A command-line tool for managing library resources."
            },
            card5: {
                title: "Real-Time Notification",
                description: "Python notification system for real-time communication."
            },
            card6: {
                title: "Django Online Shop",
                description: "E-commerce platform with admin panel and responsive design."
            },
            view: "View Project",
            more: "More Projects"
        },
        certs: {
            title: "Certificates & Credentials",
            subtitle: "Official certificates, courses and achievements from various platforms.",
            filter: {
                all: "All Certificates",
                harvard: "Harvard",
                linkedin: "LinkedIn",
                intellipaat: "Intellipaat",
                tvto: "TVTO",
                urbino: "Urbino",
                irandigital: "Iran Digital"
            },
            view: "View PDF",
            controls: {
                play: "Play",
                slow: "Slow Down",
                fast: "Speed Up",
                view_all: "All Certificates on GitHub →"
            }
        },
        contact: {
            title: "Contact",
            subtitle: "Write to me for collaboration or exchange.",
            github: "GitHub",
            linkedin: "LinkedIn",
            email: "Email",
            phone: "Mobile",
            whatsapp: "WhatsApp",
            telegram: "Telegram"
        },
        footer: {
            text: "© Samira Mashti Zadeh — Portfolio. Created with love for detail."
        }
    }
};

// Language management
class I18nManager {
    constructor() {
        this.currentLang = this.getInitialLanguage();
        console.log('Initializing with language:', this.currentLang);
        this.init();
    }

    getInitialLanguage() {
        // Check saved preference
        const savedLang = localStorage.getItem('portfolio-language');
        if (savedLang && translations[savedLang]) {
            console.log('Found saved language:', savedLang);
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language?.split('-')[0];
        if (browserLang === 'de' || browserLang === 'en') {
            console.log('Using browser language:', browserLang);
            return browserLang;
        }

        // Default to German
        console.log('Defaulting to German');
        return 'de';
    }

    init() {
        this.applyLanguage();
        this.setupEventListeners();
        console.log('I18nManager initialized');
    }

    setupEventListeners() {
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Language button clicked, current:', this.currentLang);
                this.toggleLanguage();
            });
            console.log('Language button event listener attached');
        } else {
            console.error('Language button not found!');
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'de' ? 'en' : 'de';
        console.log('Toggling from', this.currentLang, 'to', newLang);
        this.currentLang = newLang;
        this.applyLanguage();
        this.savePreference();
    }

    savePreference() {
        localStorage.setItem('portfolio-language', this.currentLang);
        console.log('Language preference saved:', this.currentLang);
    }

    applyLanguage() {
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // Update language button
        this.updateLangButton();

        // Apply translations
        this.translateElements();

        console.log('Language applied:', this.currentLang);
    }

    updateLangButton() {
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            const btnText = this.currentLang === 'de' ? '🌐 EN' : '🌐 DE';
            langBtn.textContent = btnText;
            console.log('Button updated to:', btnText);
        }
    }

    translateElements() {
        // Get all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        console.log('Translating', elements.length, 'elements');

        elements.forEach((element, index) => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedTranslation(key);

            if (translation !== undefined) {
                // Handle different element types
                if (element.tagName === 'INPUT' && element.type !== 'submit' && element.type !== 'button') {
                    element.placeholder = translation;
                } else if (element.tagName === 'IMG') {
                    element.alt = translation;
                } else {
                    element.innerHTML = translation;
                }
            } else {
                console.warn('Translation not found for key:', key);
            }
        });
    }

    getNestedTranslation(key) {
        const keys = key.split('.');
        let current = translations[this.currentLang];

        for (const k of keys) {
            if (current && typeof current === 'object' && k in current) {
                current = current[k];
            } else {
                console.error('Translation key not found:', key, 'at part:', k);
                return undefined;
            }
        }

        return current;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing I18nManager...');
    const i18n = new I18nManager();

    // Store globally for debugging
    window.i18nManager = i18n;

    console.log(`✅ Portfolio initialized in ${i18n.currentLang.toUpperCase()} language`);
});
