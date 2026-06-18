/* ============================
   SMOOTH SCROLL
============================ */
function smoothScroll(target) {
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
}

/* ============================
   MOBILE MENU
============================ */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ============================
   NAV ACTIVE LINKS
============================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ============================
   TEMPLATES
============================ */
const templateData = {
  tech: [
    { name: 'Software Engineer', cat: 'ATS Optimized', color: '#6366f1' },
    { name: 'AI / ML Engineer', cat: 'Modern Layout', color: '#8b5cf6' },
    { name: 'Web Developer', cat: 'Clean Minimal', color: '#3b82f6' },
    { name: 'Data Scientist', cat: 'Data Focused', color: '#06b6d4' },
    { name: 'DevOps Engineer', cat: 'Technical', color: '#10b981' },
    { name: 'Full Stack Dev', cat: 'Versatile', color: '#f59e0b' },
  ],
  student: [
    { name: 'Campus Placement', cat: 'Entry Level', color: '#6366f1' },
    { name: 'Fresher', cat: 'Clean Start', color: '#10b981' },
    { name: 'Internship', cat: 'Compact', color: '#f59e0b' },
    { name: 'Graduate', cat: 'Academic', color: '#ec4899' },
  ],
  design: [
    { name: 'UX Designer', cat: 'Creative Bold', color: '#ec4899' },
    { name: 'Graphic Designer', cat: 'Visual Focus', color: '#f59e0b' },
    { name: 'Product Designer', cat: 'Modern Minimal', color: '#8b5cf6' },
  ]
};

function renderTemplates(tab) {
  const grid = document.getElementById('templateGrid');
  const items = templateData[tab] || [];
  grid.innerHTML = items.map(t => `
    <div class="template-card" onclick="smoothScroll('#builder')">
      <div class="template-thumb" style="background: ${t.color}12; border-bottom: 3px solid ${t.color}22">
        <div class="t-avatar" style="background:${t.color}22; margin-bottom:8px"></div>
        <div class="t-line dark short" style="background:${t.color}55; height:10px; width:60%"></div>
        <div class="t-line" style="width:40%; margin-bottom:10px"></div>
        <div style="display:flex;gap:4px;margin-bottom:10px">
          <span class="t-tag" style="background:${t.color}22;width:40px;height:14px;border-radius:100px;display:inline-block"></span>
          <span class="t-tag" style="background:${t.color}22;width:32px;height:14px;border-radius:100px;display:inline-block"></span>
          <span class="t-tag" style="background:${t.color}22;width:36px;height:14px;border-radius:100px;display:inline-block"></span>
        </div>
        <div class="t-block" style="background:${t.color}10"></div>
        <div class="t-block" style="background:${t.color}10"></div>
        <div style="margin-top:auto;font-size:11px;font-weight:600;color:${t.color};letter-spacing:0.5px;text-transform:uppercase">Use Template →</div>
      </div>
      <div class="template-label">
        <strong>${t.name}</strong>
        <span>${t.cat}</span>
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTemplates(btn.dataset.tab);
  });
});
renderTemplates('tech');

/* ============================
   THEME SWITCHER
============================ */
function setTheme(theme, el) {
  document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
  if (theme !== 'indigo') document.body.classList.add('theme-' + theme);
  document.querySelectorAll('.theme-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}

/* ============================
   MULTI-STEP FORM
============================ */
let currentStep = 1;
function goStep(n) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i + 1 < n) s.classList.add('done');
    if (i + 1 === n) s.classList.add('active');
  });
  document.getElementById('step' + n).classList.add('active');
  currentStep = n;
  liveUpdate();
}

/* ============================
   ADD DYNAMIC ENTRIES
============================ */
function addEdu() {
  const c = document.getElementById('eduContainer');
  const div = document.createElement('div');
  div.className = 'edu-entry entry-block';
  div.innerHTML = `
    <button onclick="this.parentElement.remove(); liveUpdate()" style="position:absolute;top:10px;right:12px;background:none;border:none;color:#ef4444;cursor:pointer;font-size:18px">×</button>
    <div class="field-row">
      <div class="field-group"><label>Degree / Course</label><input type="text" class="edu-degree" placeholder="M.Tech Computer Science" oninput="liveUpdate()"></div>
      <div class="field-group"><label>Institution</label><input type="text" class="edu-inst" placeholder="NIT Surat" oninput="liveUpdate()"></div>
    </div>
    <div class="field-row">
      <div class="field-group"><label>Year</label><input type="text" class="edu-year" placeholder="2024 – 2026" oninput="liveUpdate()"></div>
      <div class="field-group"><label>Grade / CGPA</label><input type="text" class="edu-grade" placeholder="9.1 / 10" oninput="liveUpdate()"></div>
    </div>
  `;
  c.appendChild(div);
}

function addExp() {
  const c = document.getElementById('expContainer');
  const div = document.createElement('div');
  div.className = 'exp-entry entry-block';
  div.innerHTML = `
    <button onclick="this.parentElement.remove(); liveUpdate()" style="position:absolute;top:10px;right:12px;background:none;border:none;color:#ef4444;cursor:pointer;font-size:18px">×</button>
    <div class="field-row">
      <div class="field-group"><label>Job Title</label><input type="text" class="exp-title" placeholder="Frontend Developer" oninput="liveUpdate()"></div>
      <div class="field-group"><label>Company</label><input type="text" class="exp-company" placeholder="Meta" oninput="liveUpdate()"></div>
    </div>
    <div class="field-row">
      <div class="field-group"><label>Duration</label><input type="text" class="exp-duration" placeholder="Jun 2023 – Dec 2023" oninput="liveUpdate()"></div>
      <div class="field-group"><label>Location</label><input type="text" class="exp-loc" placeholder="Remote" oninput="liveUpdate()"></div>
    </div>
    <div class="field-group"><label>Key Responsibilities</label><textarea class="exp-desc" rows="3" placeholder="• Worked on..." oninput="liveUpdate()"></textarea></div>
  `;
  c.appendChild(div);
}

function addProj() {
  const c = document.getElementById('projContainer');
  const div = document.createElement('div');
  div.className = 'proj-entry entry-block';
  div.innerHTML = `
    <button onclick="this.parentElement.remove(); liveUpdate()" style="position:absolute;top:10px;right:12px;background:none;border:none;color:#ef4444;cursor:pointer;font-size:18px">×</button>
    <div class="field-row">
      <div class="field-group"><label>Project Name</label><input type="text" class="proj-name" placeholder="Portfolio Website" oninput="liveUpdate()"></div>
      <div class="field-group"><label>Tech Stack</label><input type="text" class="proj-tech" placeholder="HTML, CSS, JS" oninput="liveUpdate()"></div>
    </div>
    <div class="field-group"><label>Description</label><textarea class="proj-desc" rows="2" placeholder="Built a..." oninput="liveUpdate()"></textarea></div>
    <div class="field-group"><label>Link</label><input type="text" class="proj-link" placeholder="github.com/..." oninput="liveUpdate()"></div>
  `;
  c.appendChild(div);
}

/* ============================
   LIVE PREVIEW UPDATE
============================ */
function liveUpdate() {
  const name = v('fname');
  const title = v('ftitle');
  const email = v('femail');
  const phone = v('fphone');
  const location = v('flocation');
  const linkedin = v('flinkedin');
  const github = v('fgithub');
  const portfolio = v('fportfolio');
  const objective = v('fobjective');
  const skills = v('fskills');
  const softskills = v('fsoftskills');
  const certs = v('fcerts');
  const achieve = v('fachieve');
  const langs = v('flangs');
  const hobbies = v('fhobbies');

  const edus = [...document.querySelectorAll('.edu-entry')];
  const exps = [...document.querySelectorAll('.exp-entry')];
  const projs = [...document.querySelectorAll('.proj-entry')];

  if (!name && !email && !objective) {
    document.getElementById('resumeOutput').innerHTML = `
      <div class="resume-placeholder">
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#cbd5e1" stroke-width="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        <p>Start filling your details<br>and your resume will appear here</p>
      </div>`;
    updateScore(0, {});
    return;
  }

  // Build skills tags
  const skillTags = skills
    ? skills.split(',').map(s => s.trim()).filter(Boolean).map(s => `<span class="rd-skill-tag">${s}</span>`).join('')
    : '';
  const softTags = softskills
    ? softskills.split(',').map(s => s.trim()).filter(Boolean).map(s => `<span class="rd-skill-tag" style="background:#f0fdf4;color:#059669">${s}</span>`).join('')
    : '';

  // Education blocks
  const eduHTML = edus.map(e => {
    const deg = e.querySelector('.edu-degree')?.value || '';
    const inst = e.querySelector('.edu-inst')?.value || '';
    const year = e.querySelector('.edu-year')?.value || '';
    const grade = e.querySelector('.edu-grade')?.value || '';
    if (!deg && !inst) return '';
    return `<div class="rd-edu-item">
      <div class="rd-edu-degree">${deg}${inst ? ` — ${inst}` : ''}</div>
      <div class="rd-edu-meta">${[year, grade ? 'CGPA: ' + grade : ''].filter(Boolean).join(' &nbsp;|&nbsp; ')}</div>
    </div>`;
  }).join('');

  // Experience blocks
  const expHTML = exps.map(e => {
    const t = e.querySelector('.exp-title')?.value || '';
    const co = e.querySelector('.exp-company')?.value || '';
    const dur = e.querySelector('.exp-duration')?.value || '';
    const loc = e.querySelector('.exp-loc')?.value || '';
    const desc = e.querySelector('.exp-desc')?.value || '';
    if (!t && !co) return '';
    return `<div class="rd-exp-item">
      <div class="rd-exp-header">
        <span class="rd-exp-title">${t}</span>
        <span class="rd-exp-duration">${dur}</span>
      </div>
      <div class="rd-exp-company">${co}${loc ? ` · ${loc}` : ''}</div>
      ${desc ? `<div class="rd-exp-desc">${desc}</div>` : ''}
    </div>`;
  }).join('');

  // Project blocks
  const projHTML = projs.map(p => {
    const n = p.querySelector('.proj-name')?.value || '';
    const tech = p.querySelector('.proj-tech')?.value || '';
    const desc = p.querySelector('.proj-desc')?.value || '';
    const link = p.querySelector('.proj-link')?.value || '';
    if (!n) return '';
    return `<div class="rd-proj-item">
      <div class="rd-proj-name">${n}${link ? ` <a href="${link}" style="font-size:11px;color:var(--accent);font-weight:500">↗ View</a>` : ''}</div>
      ${tech ? `<div class="rd-proj-tech">${tech}</div>` : ''}
      ${desc ? `<div class="rd-proj-desc">${desc}</div>` : ''}
    </div>`;
  }).join('');

  // Contact row
  const contacts = [
    email ? `<span>${email}</span>` : '',
    phone ? `<span>${phone}</span>` : '',
    location ? `<span>📍 ${location}</span>` : '',
    linkedin ? `<a href="#">${linkedin}</a>` : '',
    github ? `<a href="#">${github}</a>` : '',
    portfolio ? `<a href="#">${portfolio}</a>` : '',
  ].filter(Boolean).join('<span style="color:#d1d5db"> · </span>');

  document.getElementById('resumeOutput').innerHTML = `
    <div id="resumeDoc">
      <div class="rd-header">
        <div class="rd-name">${name || 'Your Name'}</div>
        ${title ? `<div class="rd-title">${title}</div>` : ''}
        <div class="rd-contact">${contacts || '<span style="color:#94a3b8">Add your contact info</span>'}</div>
      </div>
      <div class="rd-divider"></div>
      ${objective ? `<div class="rd-section"><div class="rd-section-title">Profile</div><div class="rd-objective">${objective}</div></div>` : ''}
      ${eduHTML ? `<div class="rd-section"><div class="rd-section-title">Education</div>${eduHTML}</div>` : ''}
      ${expHTML ? `<div class="rd-section"><div class="rd-section-title">Experience</div>${expHTML}</div>` : ''}
      ${skillTags || softTags ? `<div class="rd-section"><div class="rd-section-title">Skills</div><div class="rd-skills-wrap">${skillTags}${softTags}</div></div>` : ''}
      ${projHTML ? `<div class="rd-section"><div class="rd-section-title">Projects</div>${projHTML}</div>` : ''}
      ${certs ? `<div class="rd-section"><div class="rd-section-title">Certifications</div><div class="rd-plain">${certs}</div></div>` : ''}
      ${achieve ? `<div class="rd-section"><div class="rd-section-title">Achievements</div><div class="rd-plain">${achieve}</div></div>` : ''}
      ${langs ? `<div class="rd-section"><div class="rd-section-title">Languages</div><div class="rd-langs">${langs}</div></div>` : ''}
      ${hobbies ? `<div class="rd-section"><div class="rd-section-title">Interests</div><div class="rd-langs">${hobbies}</div></div>` : ''}
    </div>
  `;

  // Score
  const checks = {
    'Personal Info': !!(name && email),
    'Job Title': !!title,
    'Education': !!(edus[0]?.querySelector('.edu-degree')?.value),
    'Experience': !!(exps[0]?.querySelector('.exp-title')?.value),
    'Skills': !!skills,
    'Projects': !!(projs[0]?.querySelector('.proj-name')?.value),
    'Certifications': !!certs,
    'Career Objective': !!objective,
    'Contact Details': !!(phone && location),
    'Social Links': !!(linkedin || github),
  };
  const score = Math.round((Object.values(checks).filter(Boolean).length / Object.keys(checks).length) * 100);
  updateScore(score, checks);

  autoSave();
}

function v(id) { return document.getElementById(id)?.value.trim() || ''; }

/* ============================
   SCORE DISPLAY
============================ */
function updateScore(score, checks) {
  const circle = document.getElementById('scoreCircle');
  const numEl = document.getElementById('scoreNum');
  const feedback = document.getElementById('scoreFeedback');
  const checklist = document.getElementById('scoreChecklist');

  const circumference = 2 * Math.PI * 34;
  const filled = (score / 100) * circumference;
  circle.setAttribute('stroke-dasharray', `${filled} ${circumference}`);

  numEl.textContent = score + '%';

  circle.setAttribute('stroke',
    score >= 80 ? '#10b981' :
    score >= 50 ? '#f59e0b' : '#6366f1'
  );

  feedback.textContent =
    score === 0 ? 'Fill in your details to get started' :
    score < 40 ? 'Good start — keep filling sections' :
    score < 70 ? 'Looking good! Add more details' :
    score < 90 ? 'Great resume! A few things left' :
    'Excellent! Your resume is ready 🎉';

  if (Object.keys(checks).length) {
    checklist.innerHTML = Object.entries(checks).map(([k, v]) =>
      `<div class="check-item ${v ? 'done' : 'miss'}">${v ? '✓' : '✗'} ${k}</div>`
    ).join('');
  }
}

/* ============================
   AUTO SAVE / LOAD
============================ */
function autoSave() {
  const data = {};
  document.querySelectorAll('input[id], textarea[id]').forEach(el => {
    data[el.id] = el.value;
  });
  try { localStorage.setItem('rc_data', JSON.stringify(data)); } catch(e) {}
}

function loadSaved() {
  try {
    const data = JSON.parse(localStorage.getItem('rc_data') || '{}');
    Object.entries(data).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.value = val;
    });
    if (Object.keys(data).length) liveUpdate();
  } catch(e) {}
}

/* ============================
   CLEAR ALL
============================ */
function clearAll() {
  if (!confirm('Clear all data? This cannot be undone.')) return;
  document.querySelectorAll('input, textarea').forEach(el => el.value = '');
  try { localStorage.removeItem('rc_data'); } catch(e) {}
  document.getElementById('resumeOutput').innerHTML = `
    <div class="resume-placeholder">
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#cbd5e1" stroke-width="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      <p>Start filling your details<br>and your resume will appear here</p>
    </div>`;
  updateScore(0, {});
}

/* ============================
   INIT
============================ */
window.addEventListener('load', loadSaved);
