'use strict';

const CONFIG = {
  formspreeEndpoint: '',
  contactEmail: 'bici14@icloud.com',
  linkedInUrl: 'https://www.linkedin.com/in/ban-zoltan-789638266/',
  cvFileName: 'cv.pdf'
};

const typewriterWords = [
  'diversity.',
  'creativity over chaos.',
  'the power of calm thinking.'
];

const projects = [
  {
    id: 'iot-system',
    category: 'Featured project',
    title: 'ESP32 Smart Home System',
    summary:
      'A practical IoT project that combines ESP32 hardware, MicroPython, Supabase and a React dashboard for monitoring and remote control.',
    image: 'assets/iot-overview.png',
    tags: ['React', 'Supabase', 'MicroPython', 'Wi-Fi', 'HTTP/HTTPS'],
    detail: {
      subtitle:
        'This project started as a low-cost educational smart home system and gradually turned into a complete end-to-end setup with sensor reading, online storage and remote control.',
      gallery: ['assets/iot-overview.png', 'assets/iot-controls.png'],
      sections: [
        {
          title: 'What it does',
          items: [
            'Measures temperature and humidity using an ESP32-based setup.',
            'Shows live data in a React dashboard with a Supabase backend.',
            'Supports LED control and relay output testing from the web interface.',
            'Handles reconnect logic and online/offline device state monitoring.',
            'Was built without soldering, making it easier to reproduce and present.'
          ]
        },
        {
          title: 'Why it matters',
          items: [
            'It demonstrates that I can connect hardware, backend logic and frontend presentation into one working system.',
            'The project also reflects my interest in practical engineering, not just theory.',
            'It is currently in its final phase and is one of the strongest examples of the direction I want to continue in.'
          ]
        }
      ],
      links: [
        {
          label: 'Live Demo',
          url: 'https://szakdoga-iot.vercel.app/'
        },
        {
          label: 'GitHub Profile',
          url: 'https://github.com/banzoltan-ker'
        }
      ]
    }
  },
  {
    id: 'personal-analytics',
    category: 'Personal project',
    title: 'Personal Analytics Hub',
    summary:
      'A self-built data tracking system for work hours, income, expenses, bodyweight and training progress, created with future machine learning ideas in mind.',
    image: null,
    tags: ['Spreadsheets', 'Automation', 'Data analysis', 'Widgets', 'ML direction'],
    detail: {
      subtitle:
        'This project is very personal, but that is exactly why it matters. I built it to make my own daily data easier to understand and more useful in the long run.',
      gallery: [],
      sections: [
        {
          title: 'What it tracks',
          items: [
            'Work arrival and departure times with phone-assisted input.',
            'Daily and monthly salary calculations.',
            'Monthly income and expense summaries.',
            'Daily bodyweight with weekly, monthly and overall comparisons.',
            'Training metrics such as sets, repetitions, stress level and progress compared to previous workouts.'
          ]
        },
        {
          title: 'Next step',
          items: [
            'My long-term goal is to turn this into a machine learning-assisted analytics system.',
            'I would like it to generate predictions, trends and more useful recommendations from the accumulated data.'
          ]
        }
      ],
      links: []
    }
  },
  {
    id: 'visual-quality',
    category: 'Professional project',
    title: 'Automated Visual Quality Inspection',
    summary:
      'A Python-based image analysis workflow created at Valeo to reduce manual inspection time and sort potentially faulty products from a large image set.',
    image: null,
    tags: ['Python', 'Image analysis', 'Quality engineering', 'AI-assisted workflow'],
    detail: {
      subtitle:
        'This was a valuable real-world exercise in problem solving: the goal was not to create a flashy demo, but to save time in a production-related quality process.',
      gallery: [],
      sections: [
        {
          title: 'What I did',
          items: [
            'Started from a small set of good reference images and expanded the base to create a more useful comparison set.',
            'Built a Python workflow that compared around 20,000 product images and sorted potentially problematic ones for manual review.',
            'The system achieved roughly 90% effective sorting performance in practice.',
            'The biggest benefit was that it dramatically reduced the amount of manual checking time needed.'
          ]
        },
        {
          title: 'Result',
          items: [
            'Instead of spending hours going through the whole image set, only a much smaller subset required human checking.',
            'Because the work was based on a confidential company process, no private images or internal data are displayed here.'
          ]
        }
      ],
      links: []
    }
  }
];

const aboutCards = [
  {
    id: 'general',
    title: 'More about me',
    image: 'assets/casual.PNG',
    summary:
      'I enjoy reading, being outdoors, exploring new interests and balancing active periods with quiet ones. I like variety, and I think that comes through in the way I approach life and work.',
    detail:
      'I have always been curious and hands-on. I enjoy trying new things, learning by doing and making the most of opportunities while I am still young. In recent years motorcycling became a new passion of mine, but I also appreciate simple things: a good movie, some time outdoors, or just being with my friends. I wanted this part of the site to stay honest, because personality matters too.'
  },
  {
    id: 'military',
    title: 'Military experience',
    image: 'assets/solider2.jpeg',
    summary:
      'I serve as a volunteer reservist in the Hungarian Defence Forces, and that experience has strengthened my discipline, adaptability and ability to perform under pressure.',
    detail:
      'I wanted this section to include the fact that I trained in the United States in June 2026 for three weeks, which was a major experience for me. It pushed me outside my comfort zone, strengthened my teamwork, resilience and sense of responsibility, and gave me an international training environment. I was also promoted to the rank of Master Sergeant in June 2026, which reflects both commitment and progress.'
  },
  {
    id: 'university',
    title: 'University & leadership',
    image: 'assets/elegant.PNG',
    summary:
      'My university life is not only about classes. Student leadership, responsibility and representing others have all played a big role in my development.',
    detail:
      'At the University of Pannonia, I have had the chance to grow not only academically but also as a leader. My work in student representation helped me develop communication, organization and empathy. Social affairs, dormitory placements, scholarship-related responsibilities and student support tasks all taught me how to handle responsibility in a practical way. My Bologna exchange plans are also an important next step in that journey.'
  },
  {
    id: 'sports',
    title: 'Sports & discipline',
    image: 'assets/sport.jpg',
    summary:
      'Sport has been a constant in my life for years. It taught me discipline, balance, persistence and the ability to stay motivated over time.',
    detail:
      'With more than 14 years of football behind me and regular gym training, movement has always been one of the strongest pillars of my routine. Beyond football, I also explored many other activities and sports. For me, sport is not only about performance — it is also about focus, mental reset and staying balanced.'
  }
];

const timelineEntries = {
  work: [
    {
      date: '2018.10',
      title: 'Started working at McDonald’s',
      text: 'My early work experience started in hospitality, where I learned reliability, pace and customer-focused thinking.'
    },
    {
      date: '2022.01',
      title: 'Promoted to Guest Experience Manager at McDonald’s',
      text: 'This role helped build communication, problem-solving and leadership skills in a demanding environment.'
    },
    {
      date: '2023.06',
      title: 'Administrator at László Iparcikk',
      text: 'Administrative experience that strengthened accuracy, organization and business-side discipline.'
    },
    {
      date: '2024.04',
      title: 'Motherson EHS Intern',
      text: 'Worked in an EHS-related support role and gained industrial environment experience.'
    },
    {
      date: '2025.01',
      title: 'Head of Social Affairs',
      text: 'Responsible for social scholarship and dormitory-related cases, leading processes and supporting students.'
    },
    {
      date: '2025.02',
      title: 'Valeo Customer Quality Intern',
      text: 'Worked with automation, App Script, spreadsheets, image analysis, AI-supported workflows, statistics and SAP-based processes.'
    },
    {
      date: '2025.04',
      title: 'Joined the Hungarian Defence Forces as a volunteer reservist',
      text: 'An experience that added structure, resilience and a strong sense of discipline to my life.'
    },
    {
      date: '2026.06',
      title: 'Three-week training in the United States',
      text: 'A defining experience that expanded my confidence, adaptability and international perspective.'
    },
    {
      date: '2026.06',
      title: 'Promoted to Master Sergeant',
      text: 'A meaningful milestone that reflects commitment and progress in military service.'
    }
  ],
  education: [
    {
      date: '2018.09',
      title: 'Secondary IT technician school',
      text: 'My first structured technical foundation and the place where my IT interest became more serious.'
    },
    {
      date: '2021.09',
      title: 'English language examination certificate',
      text: 'Official language qualification, with English continuing to be one of my practical strengths.'
    },
    {
      date: '2022.06',
      title: 'Secondary school diploma',
      text: 'Finished secondary education and continued further in an IT-related direction.'
    },
    {
      date: '2023.05',
      title: 'IT technician qualification',
      text: 'Completed the formal qualification connected to my earlier technical studies.'
    },
    {
      date: '2023.09',
      title: 'Accepted to the University of Pannonia – Computer Science BSc',
      text: 'Started my Engineering Informatics journey and began building a stronger direction toward automation, data and embedded systems.'
    },
    {
      date: '2025.06',
      title: 'Motorcycle driving licence',
      text: 'A personal milestone that also reflects one of my newer passions.'
    }
  ]
};

const skillGroups = [
  {
    title: 'Programming & scripting',
    tags: ['Python', 'JavaScript', 'HTML', 'CSS', 'MicroPython', 'Google Apps Script']
  },
  {
    title: 'Platforms & tools',
    tags: ['React', 'Supabase', 'SAP', 'Spreadsheets', 'Vercel', 'GitHub Pages']
  },
  {
    title: 'Technical areas',
    tags: ['IoT', 'Automation', 'Quality engineering', 'Image analysis', 'Data analysis', 'Networking basics']
  },
  {
    title: 'Human strengths',
    tags: ['Leadership', 'Adaptability', 'Communication', 'Discipline', 'Teamwork', 'Problem solving']
  }
];

const projectGrid = document.getElementById('project-grid');
const aboutGrid = document.getElementById('about-grid');
const timelineList = document.getElementById('timeline-list');
const skillsGrid = document.getElementById('skills-grid');
const detailsDialog = document.getElementById('details-dialog');
const dialogBody = document.getElementById('dialog-body');
const dialogClose = document.getElementById('dialog-close');
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');
const navLinks = document.querySelectorAll('.nav-link');
const currentYear = document.getElementById('current-year');
const linkedInLink = document.getElementById('linkedin-link');

let currentTimelineCategory = 'work';

function renderProjects() {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <button type="button" class="project-trigger" data-project-id="${project.id}">
            <div class="project-image">
              ${
                project.image
                  ? `<img src="${project.image}" alt="${project.title} preview" />`
                  : `<div class="project-image-placeholder" aria-hidden="true"></div>`
              }
              <span class="project-badge">${project.category}</span>
            </div>
            <div class="project-body">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-summary">${project.summary}</p>
              <div class="project-tags">
                ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
              </div>
              <span class="project-link-text">Read more ↗</span>
            </div>
          </button>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.project-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      const projectId = button.dataset.projectId;
      const project = projects.find((item) => item.id === projectId);
      openDetailsDialog(project, 'project');
    });
  });
}

function renderAboutCards() {
  aboutGrid.innerHTML = aboutCards
    .map(
      (card) => `
        <article class="about-card reveal">
          <button type="button" class="about-trigger" data-about-id="${card.id}">
            <div class="about-image">
              <img src="${card.image}" alt="${card.title}" />
            </div>
            <div class="about-body">
              <h3>${card.title}</h3>
              <p>${card.summary}</p>
              <span class="about-more">Read more ↗</span>
            </div>
          </button>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.about-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      const aboutId = button.dataset.aboutId;
      const item = aboutCards.find((card) => card.id === aboutId);
      openDetailsDialog(item, 'about');
    });
  });
}

function renderTimeline(category) {
  const entries = timelineEntries[category];

  timelineList.innerHTML = entries
    .map(
      (entry) => `
        <article class="timeline-entry reveal">
          <p class="timeline-date">${entry.date}</p>
          <h3>${entry.title}</h3>
          <p>${entry.text}</p>
        </article>
      `
    )
    .join('');

  revealElements();
}

function renderSkills() {
  skillsGrid.innerHTML = skillGroups
    .map(
      (group) => `
        <article class="skill-card">
          <h3>${group.title}</h3>
          <div class="skill-tags">
            ${group.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </article>
      `
    )
    .join('');
}

function openDetailsDialog(item, type) {
  if (!item) {
    return;
  }

  if (type === 'project') {
    const linkMarkup = item.detail.links.length
      ? `
          <div class="dialog-links">
            ${item.detail.links
              .map(
                (link) => `
                  <a href="${link.url}" class="button button-primary" target="_blank" rel="noopener noreferrer">
                    ${link.label}
                  </a>
                `
              )
              .join('')}
          </div>
        `
      : '';

    const galleryMarkup = item.detail.gallery.length
      ? `
          <div class="dialog-gallery">
            ${item.detail.gallery
              .map((imagePath) => `<img src="${imagePath}" alt="${item.title} screenshot" />`)
              .join('')}
          </div>
        `
      : '';

    const sectionMarkup = item.detail.sections
      .map(
        (section) => `
          <section>
            <h3 class="dialog-section-title">${section.title}</h3>
            <ul class="dialog-list">
              ${section.items.map((line) => `<li>${line}</li>`).join('')}
            </ul>
          </section>
        `
      )
      .join('');

    dialogBody.innerHTML = `
      <p class="dialog-kicker">${item.category}</p>
      <h2 id="dialog-title" class="dialog-title">${item.title}</h2>
      <p class="dialog-subtitle">${item.detail.subtitle}</p>
      <div class="detail-tags">
        ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
      </div>
      ${galleryMarkup}
      ${sectionMarkup}
      ${linkMarkup}
    `;
  }

  if (type === 'about') {
    dialogBody.innerHTML = `
      <p class="dialog-kicker">About me</p>
      <h2 id="dialog-title" class="dialog-title">${item.title}</h2>
      <img src="${item.image}" alt="${item.title}" class="dialog-about-image" />
      <p class="dialog-subtitle">${item.detail}</p>
    `;
  }

  detailsDialog.showModal();
  document.body.style.overflow = 'hidden';
}

function closeDetailsDialog() {
  detailsDialog.close();
  document.body.style.overflow = '';
}

function setupTimelineTabs() {
  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      currentTimelineCategory = category;

      document.querySelectorAll('.tab-button').forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
      });

      renderTimeline(category);
    });
  });
}

function setupTypewriter() {
  const typewriterElement = document.getElementById('typewriter');

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentWord = typewriterWords[wordIndex];
    const visibleText = currentWord.substring(0, charIndex);

    typewriterElement.textContent = visibleText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex += 1;
      setTimeout(tick, 90);
      return;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(tick, 1400);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(tick, 45);
      return;
    }

    isDeleting = false;
    wordIndex = (wordIndex + 1) % typewriterWords.length;
    setTimeout(tick, 240);
  }

  tick();
}

function setupNavigation() {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinksContainer.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = document.querySelectorAll('main section[id]');

  function setActiveNavLink() {
    const currentScroll = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNavLink);
  setActiveNavLink();
}

function revealElements() {
  const revealItems = document.querySelectorAll('.reveal');
  const trigger = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < trigger) {
      item.classList.add('visible');
    }
  });
}

function setupDialog() {
  dialogClose.addEventListener('click', closeDetailsDialog);

  detailsDialog.addEventListener('click', (event) => {
    const dialogRect = detailsDialog.getBoundingClientRect();
    const clickedInside =
      event.clientX >= dialogRect.left &&
      event.clientX <= dialogRect.right &&
      event.clientY >= dialogRect.top &&
      event.clientY <= dialogRect.bottom;

    if (!clickedInside) {
      closeDetailsDialog();
    }
  });

  detailsDialog.addEventListener('close', () => {
    document.body.style.overflow = '';
  });
}

function setupContactForm() {
  if (CONFIG.linkedInUrl) {
    linkedInLink.href = CONFIG.linkedInUrl;
    linkedInLink.removeAttribute('aria-disabled');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const websiteValue = form.website.value.trim();
    if (websiteValue) {
      formStatus.textContent = 'Spam protection triggered.';
      return;
    }

    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all required fields.';
      return;
    }

    if (CONFIG.formspreeEndpoint) {
      try {
        formStatus.textContent = 'Sending message...';

        const response = await fetch(CONFIG.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({ name, email, message })
        });

        if (!response.ok) {
          throw new Error('Request failed.');
        }

        form.reset();
        formStatus.textContent = 'Message sent successfully.';
        return;
      } catch (error) {
        formStatus.textContent = 'Sending failed. Please try again later.';
        return;
      }
    }

    if (CONFIG.contactEmail) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
      window.location.href = `mailto:${CONFIG.contactEmail}?subject=${subject}&body=${body}`;
      formStatus.textContent = 'Opening your email client...';
      return;
    }

    formStatus.textContent =
      'Add a Formspree endpoint or a public contact email in script.js to activate the form.';
  });
}

function setCurrentYear() {
  currentYear.textContent = new Date().getFullYear();
}

function init() {
  renderProjects();
  renderAboutCards();
  renderTimeline(currentTimelineCategory);
  renderSkills();
  setupTimelineTabs();
  setupTypewriter();
  setupNavigation();
  setupDialog();
  setupContactForm();
  setCurrentYear();
  revealElements();

  window.addEventListener('scroll', revealElements);
  window.addEventListener('resize', revealElements);
}

init();
