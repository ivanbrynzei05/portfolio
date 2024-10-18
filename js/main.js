const technologiesStack = [
    {
        id: 1,
        name: 'html',
        skill: 95,
        knowledge: [
            'Semantic HTML',
            'HTML5 features (e.g., <video>, <audio>)',
            'Forms and validation',
            'Accessibility (ARIA roles and attributes)',
            'SEO best practices',
            'Responsive design with media queries',
            'Basic meta tags and Open Graph'
        ]
    },
    {
        id: 2,
        name: 'css',
        skill: 90,
        knowledge: [
            'CSS3 features (e.g., Flexbox, Grid)',
            'Responsive design',
            'Animations and transitions',
            'Selectors and specificity',
            'Box model',
            'Positioning',
            'CSS preprocessors (SASS, LESS)',
            'CSS variables'
        ]
    },
    {
        id: 3,
        name: 'js',
        skill: 85,
        knowledge: [
            'ES6+ features (let/const, arrow functions, promises)',
            'DOM manipulation',
            'Event handling',
            'Asynchronous programming (async/await, callbacks)',
            'Fetch API/AJAX',
            'Error handling',
            'JavaScript modules',
            'Basic data structures and algorithms'
        ]
    },
    {
        id: 4,
        name: 'sass',
        skill: 90,
        knowledge: [
            'Variables',
            'Nesting',
            'Partials and imports',
            'Mixins',
            'Inheritance and extends',
            'Functions',
            'Control directives (if, for, each, while)'
        ]
    },
    {
        id: 5,
        name: 'figma',
        skill: 80,
        knowledge: [
            'Creating designs and prototypes',
            'Using components and variants',
            'Auto layout',
            'Collaboration features',
            'Exporting assets',
            'Design systems',
            'Plugins for extended functionality'
        ]
    },
    {
        id: 6,
        name: 'git',
        skill: 75,
        knowledge: [
            'Version control basics (init, add, commit, status)',
            'Branching and merging',
            'Rebasing',
            'Stashing',
            'Remote repositories (push, pull, fetch)',
            'Handling conflicts',
            'Git workflow best practices (feature branching, Git Flow)'
        ]
    },
    {
        id: 7,
        name: 'gulp',
        skill: 75,
        knowledge: [
            'Task automation',
            'Creating and using Gulp tasks',
            'Plugins for common tasks (e.g., minification, transpilation)',
            'Pipelines and streams',
            'Error handling in Gulp tasks',
            'Watching files for changes'
        ]
    },
    {
        id: 8,
        name: 'webpack',
        skill: 75,
        knowledge: [
            'Module bundling',
            'Entry and output configuration',
            'Loaders and plugins',
            'Code splitting',
            'Tree shaking',
            'Development and production modes',
            'Hot Module Replacement (HMR)',
            'Webpack Dev Server'
        ]
    },
    {
        id: 9,
        name: 'react',
        skill: 85,
        knowledge: [
            'JSX syntax',
            'Component lifecycle',
            'State and props',
            'Hooks (useState, useEffect, etc.)',
            'Context API',
            'React Router',
            'Component composition',
            'Performance optimization'
        ]
    },
    {
        id: 10,
        name: 'redux',
        skill: 75,
        knowledge: [
            'Store, actions, reducers',
            'Middleware (e.g., redux-thunk, redux-saga)',
            'Connecting React components with Redux (connect, useSelector, useDispatch)',
            'Immutable state',
            'Redux DevTools',
            'Async actions',
            'Redux Toolkit'
        ]
    },
    {
        id: 11,
        name: 'sass',
        skill: 15,
        knowledge: [

        ]
    }
];


document.addEventListener('DOMContentLoaded', () => {

    function aos_init() {
        AOS.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }



    function toggleLinkByScroll() {
        const sections = document.querySelectorAll('[data-scroll]');
        const navLinks = document.querySelectorAll('.nav__link');

        window.addEventListener('scroll', function () {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }


    function toggleNavigation() {
        const nav = document.querySelector('.nav')
        const navBtn = document.querySelector('.nav-btn')
        const navLinks = document.querySelectorAll('.nav__link');

        navLinks.forEach(elem => {
            elem.addEventListener('click', () => {
                nav.classList.remove('open')
                navBtn.classList.remove('open')
            })
        })

        navBtn.addEventListener('click', () => {
            nav.classList.toggle('open')
            navBtn.classList.toggle('open')
        })
    }

    function setAge() {
        const ageContainer = document.querySelector('.age');
        const today = new Date();
        const birthDate = new Date(2005, 4, 19);
        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        ageContainer.textContent = age;

    }


    function setTechnologiesStack() {
        const technologiesGrid = document.querySelector('.technology-grid');
        let delay = 50;

        technologiesStack.forEach(elem => {
            const technologyWrapper = document.createElement('div'); // обёртка для каждого элемента
            const technologyItem = document.createElement('button');
            const technologyItemIcon = document.createElement('img');
            const technologyText = document.createElement('h4');

            technologyWrapper.setAttribute('data-aos', 'fade-up');
            technologyWrapper.setAttribute('data-aos-delay', delay);

            delay += 50;

            technologyItem.setAttribute('data-id', elem.id);
            technologyItem.classList.add('technology__item');
            technologyItemIcon.src = `icons/tech/${elem.name}.svg`;
            technologyItemIcon.classList.add('technology__item-icon');
            technologyText.textContent = elem.name;

            technologyItem.append(technologyItemIcon, technologyText);
            technologyWrapper.append(technologyItem);
            technologiesGrid.append(technologyWrapper);
        });
    }


    function setTechnologiesStackInfo() {
        const technologyItems = document.querySelectorAll('.technology__item');

        const toggleActiveItem = (item) => {

            if (!item) {
                technologyItems[0].classList.add('active')
                setContentAboutTech(technologyItems[0]);
            } else {
                technologyItems.forEach(elem => {
                    elem.classList.remove('active');
                })
                item.classList.add('active');
                setContentAboutTech(item);
            }
        }


        technologyItems.forEach(item => {
            item.addEventListener('click', () => toggleActiveItem(item))
        });


        function setContentAboutTech(item) {
            const itemId = item.getAttribute('data-id')
            technologiesStack.forEach(elem => {
                if (elem.id == itemId) {
                    const progressContent = document.querySelector('.progress-content');
                    progressContent.innerHTML = '';

                    const progressGrid = document.createElement('div');
                    progressGrid.className = 'progress-grid';

                    const progressWrapper = document.createElement('div');
                    progressWrapper.className = 'progress__wrapper';

                    const progressBarName = document.createElement('span');
                    progressBarName.className = 'progress__bar-name';
                    progressBarName.textContent = `${elem.name} skills`;
                    progressWrapper.append(progressBarName);

                    const progressBarCount = document.createElement('span');
                    progressBarCount.className = 'progress__bar-count';
                    progressBarCount.textContent = `${elem.skill}%`;
                    progressWrapper.append(progressBarCount);

                    const progressBar = document.createElement('div');
                    progressBar.className = 'progress__bar';

                    const progressBarLine = document.createElement('div');
                    progressBarLine.className = 'progress__bar-line';
                    progressBarLine.style.width = `${elem.skill}%`;

                    progressBar.append(progressBarLine);
                    progressWrapper.append(progressBar);

                    const ulElement = document.createElement('ul');

                    elem.knowledge.forEach(item => {
                        const liElement = document.createElement('li');
                        liElement.textContent = item;
                        ulElement.append(liElement);
                    })

                    progressWrapper.append(ulElement);

                    progressGrid.append(progressWrapper);

                    const image = document.createElement('img');
                    image.src = `icons/tech/${elem.name}.svg`;
                    image.alt = elem.name;

                    progressGrid.append(image);
                    progressContent.append(progressGrid);

                }
            })
        }
        toggleActiveItem()
    }
    function toggleInputs() {
        const inputs = document.querySelectorAll('.contacts-form__input input');
        inputs.forEach(input => {
            input.addEventListener('focus', (e) => {
                e.target.closest('.contacts-form__input').classList.add('active');
            });
            input.addEventListener('blur', (e) => {
                if (e.target.value === '') {
                    e.target.closest('.contacts-form__input').classList.remove('active');
                }
            });
        });
    }

    function scrollToCenter() {
        document.querySelectorAll('.technology__item').forEach(item => {
            item.addEventListener('click', function () {
                const grid = document.querySelector('.technology-grid');
                const itemRect = this.getBoundingClientRect();
                const gridRect = grid.getBoundingClientRect();
                const scrollLeft = grid.scrollLeft;
                const gridCenterX = gridRect.width / 2;
                const itemCenterX = itemRect.width / 2;
                const itemOffsetX = itemRect.left - gridRect.left;

                grid.scroll({
                    left: scrollLeft + itemOffsetX - gridCenterX + itemCenterX,
                    behavior: 'smooth'
                });
            });
        });
    }


    function sendForm() {
        const form = document.querySelector('.contacts-form form');

        form.addEventListener('submit', () => {

            const button = form.querySelector('.contacts-form__button');

            button.disabled = true;
            button.textContent = 'Loading';
        })

    }

    function downloadCV() {
        const buttons = document.querySelectorAll('[data-cv-download]');
        const fileUrl = '';

        buttons.forEach(button => {

        })
    }


    aos_init();
    sendForm();
    toggleLinkByScroll()
    toggleNavigation();
    setAge();
    toggleInputs();
    setTechnologiesStack();
    scrollToCenter();
    setTechnologiesStackInfo();

})
