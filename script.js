// DinnerChapter - Twilight Gastronomy & Supper Club Client Script
document.addEventListener('DOMContentLoaded', () => {
    // 1. Reading Progress Bar
    const progressBar = document.getElementById('readingProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // 2. Theme Toggler (Candlelight Warm / Twilight Velvet)
    const themeToggleBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('dinnerchapter_theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', nextTheme);
            localStorage.setItem('dinnerchapter_theme', nextTheme);
            updateThemeIcon(nextTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        const iconSpan = themeToggleBtn.querySelector('.theme-icon');
        if (iconSpan) {
            iconSpan.textContent = theme === 'light' ? '🌓' : '☀️';
        }
    }

    // 3. Mobile Navigation Drawer
    const menuToggle = document.getElementById('menuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
        });
    }

    if (drawerClose && mobileDrawer) {
        drawerClose.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });
    }

    // 4. Interactive 5-Course Dinner Chapter Sequencer
    const courseTabs = document.querySelectorAll('.course-tab-btn');
    const courseData = {
        'amuse': {
            num: '01',
            title: 'Amuse-Bouche & Aromatic Awakening',
            desc: 'A single, high-intensity bite engineered to stimulate salivary amylase and awaken the gustatory papillae before the dinner unfolds.',
            points: [
                'Acidic brightness activates trigeminal nerve receptors',
                'Delicate herb essences prime the olfactory cortex',
                'Micro-portioning ensures palate receptivity without early satiety'
            ],
            img: 'images/amuse-bouche-appetizer-course.jpg',
            alt: 'Gourmet amuse-bouche tasting bite with botanical garnish'
        },
        'harvest': {
            num: '02',
            title: 'First Course: Earth & Harvest',
            desc: 'Celebration of seasonal heirloom vegetables, botanical purees, and delicate crisp textures that establish terroir and seasonal tone.',
            points: [
                'Caramelized root sugars balanced with citrus vinegar reductions',
                'Contrasting crispy and velvety mouthfeel layers',
                'Cold-pressed extra virgin olive oil emulsion infusion'
            ],
            img: 'images/farm-to-table-roasted-vegetables.jpg',
            alt: 'Heirloom roasted root vegetables and autumn botanical salad'
        },
        'entree': {
            num: '03',
            title: 'Centerpiece Entrée: The Searing & Savor',
            desc: 'The dramatic peak of the evening meal, showcasing high-temperature Maillard crusting, reduction pan sauces, and deep savory richness.',
            points: [
                'Maillard pyrolysis creating complex pyrazines and furans',
                'Gelatin-enriched pan reduction deglazed with aromatic broths',
                'Resting dynamics that equalize internal cellular hydraulic pressure'
            ],
            img: 'images/gourmet-seared-steak-dinner.jpg',
            alt: 'Pan-seared gourmet dinner centerpiece with velvety sauce reduction'
        },
        'cleanser': {
            num: '04',
            title: 'Intermezzo: Palate Cleanser',
            desc: 'A refreshing transition course designed to dissolve residual lipid coatings from the tongue and restore palate equilibrium.',
            points: [
                'Botanical citrus granita or sparkling ginger infusion',
                'Thermal contrast resets sensory receptor fatigue',
                'Prepares the tastebuds for the final sweet and aromatic notes'
            ],
            img: 'images/botanical-sparkling-table-elixir.jpg',
            alt: 'Effervescent botanical palate cleanser elixir in crystal glassware'
        },
        'dessert': {
            num: '05',
            title: 'The Finale: Artisanal Confection & Digestif',
            desc: 'A harmonious resolution blending dark cocoa, roasted orchard fruits, and warming herbal digestif elixirs.',
            points: [
                'Bittersweet flavor equilibrium to prevent glycemic fatigue',
                'Warm herbal infusion of fennel, mint, and chamomile',
                'Lingering aromatic finish that encourages reflective conversation'
            ],
            img: 'images/artisan-evening-dessert-plating.jpg',
            alt: 'Artisanal plated dinner dessert with botanical digestif accompaniment'
        }
    };

    courseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            courseTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const key = tab.getAttribute('data-course');
            const data = courseData[key];
            if (!data) return;

            const panel = document.getElementById('coursePanel');
            if (panel) {
                panel.innerHTML = `
                    <div class="course-text-col">
                        <span class="course-number">${data.num}</span>
                        <h3 class="course-name">${data.title}</h3>
                        <p>${data.desc}</p>
                        <ul class="course-science-list">
                            ${data.points.map(pt => `<li>${pt}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="course-img-col">
                        <img src="${data.img}" alt="${data.alt}" class="course-img">
                    </div>
                `;
            }
        });
    });
});
