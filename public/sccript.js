
/* ── CURSOR ── */
const cur = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX+'px';
  cur.style.top = e.clientY+'px';
});

/* ── BOOT ── */
const bootEl = document.getElementById('boot');
const bootBar = document.getElementById('boot-bar');
let bw = 0;
const bootInt = setInterval(() => {
  bw = Math.min(100, bw + Math.random() * 18);
  bootBar.style.width = bw + '%';
  if (bw >= 100) {
    clearInterval(bootInt);
    setTimeout(() => {
      bootEl.classList.add('done');
      setTimeout(() => { bootEl.style.display='none'; bootWelcome(); }, 600);
    }, 400);
  }
}, 120);

/* ── DATA ── */
const DATA = {
  name: 'Anurag Rajput',
  age: 20,
  title: 'Data Science Student',
  uni: 'Dev Bhoomi Uttarakhand University (DBUU)',
  year: '2nd Year B.Tech — Data Science',
  location: 'Varanasi, India / Remote',
  status: 'OPEN FOR WORK',
  bio: '20-year-old Data Science student passionate about exploring the endless possibilities data offers. Building NeoBrutalist web experiences and AI-powered tools on the side.',
  email: '4444readerrajput@gmail.com',
  phone: '+91 8910350896',
  github: 'https://github.com/instai4',
  linkedin: 'https://www.linkedin.com/in/anurag-singh-43230a380/',
  portfolio: 'https://instai4.github.io/PORT-FOLIO/',
  instagram: 'https://www.instagram.com/inst.ai.4',
  projects: [
    {
      name: 'GENIE.exe',
      desc: 'AI mind reader that guesses any person, character or animal. Multi-provider AI fallback (Grok → Groq → Gemini). Unlimited questions, 95% confidence threshold.',
      tags: ['HTML5','CSS3','JavaScript','Vercel','Grok API','Gemini'],
      live: 'https://genie-exe.vercel.app',
      github: 'https://github.com/instai4/GENIE.exe'
    },
    {
      name: 'SNAKELY',
      desc: 'Classic snake game with glowing cyberpunk aesthetics and smooth controls. Eat, grow, beat your high score.',
      tags: ['HTML5','CSS3','JavaScript'],
      live: 'https://instai4.github.io/SNAKELY/',
      github: 'https://github.com/instai4/SNAKELY'
    },
    {
      name: 'FIN-FLOW',
      desc: 'Privacy-focused offline-first finance tracker. Track spending, set budgets, achieve goals. Installable as mobile app (PWA).',
      tags: ['HTML5','CSS3','JavaScript','MongoDB'],
      live: 'https://instai4.github.io/FIN-FLOW/',
      github: 'https://github.com/instai4/FIN-FLOW'
    },
    {
      name: 'CLOCKS MADE CLOCK',
      desc: 'Analog clock built entirely from tiny digital clocks — blending mathematical precision with visual design.',
      tags: ['HTML5','CSS3','JavaScript','React'],
      live: 'https://instai4.github.io/Clocks-Made-Clock/',
      github: 'https://github.com/instai4/Clocks-Made-Clock'
    },
    {
      name: 'THE SCRIBBLE NIGHTMARE',
      desc: 'Horror-themed interactive gallery of eerie drawings with atmospheric effects, filtering, and modal viewing system.',
      tags: ['HTML5','CSS3','JavaScript','Canva'],
      live: 'https://instai4.github.io/Scribbled-NIGHTMARE/',
      github: 'https://github.com/instai4/Scribbled-NIGHTMARE'
    }
  ],
  skills: {
    languages: ['Java','Python','C','JavaScript'],
    web: ['HTML5','CSS3','React'],
    data: ['Data Cleaning','Data Analysis','Data Collection','ML','TensorFlow','Pandas','Scikit-learn','Tableau'],
    databases: ['SQL','MongoDB','CouchDB'],
    tools: ['Jupyter','Excel','VS Code','Git'],
    soft: ['Problem Solving','Communication','Teamwork']
  },
  experience: [
    { role:'Data Science Intern', org:'Tech Solutions Inc. (Remote)', period:'Summer 2024' },
    { role:'Freelance Web Developer', org:'Self-Employed', period:'2024 – Present' },
  ]
};

/* ── HISTORY ── */
let history = [];
let histIdx = -1;

/* ── OUTPUT ── */
const out = document.getElementById('output');
function print(content, cls='line-out', delay=0) {
  return new Promise(res => setTimeout(() => {
    const div = document.createElement('div');
    div.className = 'line';
    if (typeof content === 'string') {
      const span = document.createElement('div');
      span.className = cls;
      span.innerHTML = content;
      div.appendChild(span);
    } else {
      div.appendChild(content);
    }
    out.appendChild(div);
    out.scrollTop = out.scrollHeight;
    res();
  }, delay));
}

function printCmd(cmd) {
  const div = document.createElement('div');
  div.className = 'line';
  const inner = document.createElement('div');
  inner.className = 'line-cmd';
  inner.innerHTML = `<span class="prompt"><span class="prompt-user">anurag</span><span class="prompt-at">@</span><span class="prompt-host">portfolio</span><span class="prompt-path">:~</span><span class="prompt-dollar"> $</span></span> ${escHtml(cmd)}`;
  div.appendChild(inner);
  out.appendChild(div);
  out.scrollTop = out.scrollHeight;
}

function printBlock(cls, titleCls, icon, title, rows) {
  const div = document.createElement('div');
  div.className = 'line';
  const block = document.createElement('div');
  block.className = `block ${cls}`;
  let html = `<div class="block-title ${titleCls}"><i class="fa-solid ${icon}"></i> ${title}</div>`;
  html += rows;
  block.innerHTML = html;
  div.appendChild(block);
  out.appendChild(div);
  out.scrollTop = out.scrollHeight;
}

function blank() { print('&nbsp;','line-out blank'); }
function escHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }

/* ── BOOT WELCOME ── */
async function bootWelcome() {
  await print(`<pre style="color:var(--blue);font-size:.55rem;line-height:1.2;letter-spacing:.05em">
  ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗      ███████╗██╗  ██╗███████╗
  ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║      ██╔════╝╚██╗██╔╝██╔════╝
     ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║      █████╗   ╚███╔╝ █████╗  
     ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║      ██╔══╝   ██╔██╗ ██╔══╝  
     ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗ ███████╗██╔╝ ██╗███████╗
     ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝ ╚══════╝╚═╝  ╚═╝╚══════╝</pre>`);
  await print(`<span style="color:var(--txt3)">──────────────────────────────────────────────────────────────────</span>`);
  await print(`  <span style="color:var(--green)">ANURAG RAJPUT</span> <span style="color:var(--txt3)">|</span> <span style="color:var(--blue)">Data Science Student</span> <span style="color:var(--txt3)">|</span> <span style="color:var(--purple)">DBUU, India</span>`);
  await print(`  <span style="color:var(--txt3)">Version 1.0.0 | AI-Powered | Cyberpunk Edition</span>`);
  await print(`<span style="color:var(--txt3)">──────────────────────────────────────────────────────────────────</span>`);
  await blank();
  await print(`  Type <span style="color:var(--blue)">help</span> to see all commands.`);
  await blank();
  document.getElementById('cmd-input').focus();
}

/* ── COMMANDS ── */
const COMMANDS = {

  help: async () => {
    await blank();
    await print(`<span style="color:var(--cyan);font-weight:800;letter-spacing:.12em">AVAILABLE COMMANDS</span>`);
    await blank();
    const cmds = [
      ['whoami',       'About me — who is Anurag Rajput'],
      ['ls projects',  'List all projects with links'],
      ['skills',       'Full tech stack breakdown'],
      ['contact',      'Email, GitHub, LinkedIn & more'],
      ['open portfolio','Open portfolio website in new tab'],
      ['open github',  'Open GitHub profile in new tab'],
      ['easter',       'You found the hint. Now find the command.'],
      ['clear',        'Clear the terminal (Ctrl+L)'],
      ['help',         'Show this help menu'],
    ];
    for (const [cmd, desc] of cmds) {
      await print(`  <span style="color:var(--blue);font-weight:700;min-width:160px;display:inline-block">${cmd}</span><span style="color:var(--txt3)"> — ${desc}</span>`);
    }
    await blank();
    await print(`  <span style="color:var(--txt3)">Tip: Unknown commands are handled by <span style="color:var(--purple)">AI</span>. Ask me anything.</span>`);
    await blank();
  },

  whoami: async () => {
    await blank();
    printBlock('', 'blue', 'fa-user', 'IDENTITY', `
      <div class="kv"><span class="kv-k">Name</span><span class="kv-v">${DATA.name}</span></div>
      <div class="kv"><span class="kv-k">Age</span><span class="kv-v">${DATA.age}</span></div>
      <div class="kv"><span class="kv-k">Title</span><span class="kv-v">${DATA.title}</span></div>
      <div class="kv"><span class="kv-k">University</span><span class="kv-v">${DATA.uni}</span></div>
      <div class="kv"><span class="kv-k">Year</span><span class="kv-v">${DATA.year}</span></div>
      <div class="kv"><span class="kv-k">Location</span><span class="kv-v">${DATA.location}</span></div>
      <div class="kv"><span class="kv-k">Status</span><span class="kv-v" style="color:var(--green)">${DATA.status}</span></div>
    `);
    await blank();
    printBlock('green', 'green', 'fa-terminal', 'BIO', `<div style="color:var(--txt);font-size:.75rem;line-height:1.6">${DATA.bio}</div>`);
    await blank();
    printBlock('purple', 'purple', 'fa-briefcase', 'EXPERIENCE', DATA.experience.map(e =>
      `<div class="kv"><span class="kv-k" style="color:var(--purple)">${e.period}</span><span class="kv-v"><span style="color:var(--txt)">${e.role}</span> <span style="color:var(--txt3)">@ ${e.org}</span></span></div>`
    ).join(''));
    await blank();
  },

  'ls projects': async () => {
    await blank();
    await print(`<span style="color:var(--cyan);font-weight:800;letter-spacing:.12em">PROJECTS /</span> <span style="color:var(--txt3)">${DATA.projects.length} found</span>`);
    await blank();
    for (const p of DATA.projects) {
      const div = document.createElement('div');
      div.className = 'line';
      const card = document.createElement('div');
      card.className = 'proj-card';
      card.innerHTML = `
        <div class="proj-name"><i class="fa-solid fa-folder" style="margin-right:.4rem;font-size:.65rem"></i>${p.name}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-tags">${p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="proj-links">
          <a class="proj-link" href="${p.live}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>
          <a class="proj-link" href="${p.github}" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
        </div>`;
      div.appendChild(card);
      out.appendChild(div);
      out.scrollTop = out.scrollHeight;
    }
    await blank();
    await print(`  <span style="color:var(--txt3)">More on <a href="${DATA.github}?tab=repositories" target="_blank" style="color:var(--blue)">github.com/instai4</a></span>`);
    await blank();
  },

  skills: async () => {
    await blank();
    await print(`<span style="color:var(--cyan);font-weight:800;letter-spacing:.12em">TECH STACK</span>`);
    await blank();

    const sections = [
      { label:'Languages',  cls:'lang',  icon:'fa-code',           items: DATA.skills.languages },
      { label:'Web',        cls:'web',   icon:'fa-globe',          items: DATA.skills.web },
      { label:'Data & ML',  cls:'data',  icon:'fa-chart-bar',      items: DATA.skills.data },
      { label:'Databases',  cls:'db',    icon:'fa-database',       items: DATA.skills.databases },
      { label:'Tools',      cls:'tool',  icon:'fa-screwdriver-wrench', items: DATA.skills.tools },
      { label:'Soft Skills',cls:'soft',  icon:'fa-people-group',   items: DATA.skills.soft },
    ];

    for (const s of sections) {
      const div = document.createElement('div');
      div.className = 'line';
      const wrap = document.createElement('div');
      wrap.style.marginBottom = '.2rem';
      wrap.innerHTML = `<div style="font-size:.58rem;color:var(--txt3);text-transform:uppercase;letter-spacing:.15em;margin-bottom:.3rem"><i class="fa-solid ${s.icon}" style="margin-right:.35rem"></i>${s.label}</div>
        <div class="skill-grid">${s.items.map(i=>`<span class="skill-tag ${s.cls}">${i}</span>`).join('')}</div>`;
      div.appendChild(wrap);
      out.appendChild(div);
      out.scrollTop = out.scrollHeight;
    }
    await blank();
  },

  contact: async () => {
    await blank();
    await print(`<span style="color:var(--cyan);font-weight:800;letter-spacing:.12em">CONTACT</span>`);
    await blank();
    printBlock('', 'blue', 'fa-satellite-dish', 'CHANNELS', `
      <div class="kv"><span class="kv-k"><i class="fa-solid fa-envelope" style="margin-right:.3rem"></i>Email</span><span class="kv-v"><a href="mailto:${DATA.email}">${DATA.email}</a></span></div>
      <div class="kv"><span class="kv-k"><i class="fa-solid fa-phone" style="margin-right:.3rem"></i>Phone</span><span class="kv-v">${DATA.phone}</span></div>
      <div class="kv"><span class="kv-k"><i class="fa-brands fa-github" style="margin-right:.3rem"></i>GitHub</span><span class="kv-v"><a href="${DATA.github}" target="_blank">github.com/instai4</a></span></div>
      <div class="kv"><span class="kv-k"><i class="fa-brands fa-linkedin" style="margin-right:.3rem"></i>LinkedIn</span><span class="kv-v"><a href="${DATA.linkedin}" target="_blank">linkedin.com/in/anurag-singh...</a></span></div>
      <div class="kv"><span class="kv-k"><i class="fa-brands fa-instagram" style="margin-right:.3rem"></i>Instagram</span><span class="kv-v"><a href="${DATA.instagram}" target="_blank">@inst.ai.4</a></span></div>
      <div class="kv"><span class="kv-k"><i class="fa-solid fa-map-pin" style="margin-right:.3rem"></i>Location</span><span class="kv-v">${DATA.location}</span></div>
    `);
    await blank();
    await print(`  <span style="color:var(--green)">Available for freelance, internships & full-time roles.</span>`);
    await blank();
  },

  'open portfolio': async () => {
    await print(`  <span style="color:var(--green)">Opening portfolio...</span>`);
    window.open(DATA.portfolio, '_blank');
  },

  'open github': async () => {
    await print(`  <span style="color:var(--green)">Opening GitHub...</span>`);
    window.open(DATA.github, '_blank');
  },

  easter: async () => {
    await blank();
    await print(`  <span style="color:var(--yellow)">Hint: try typing <span style="color:var(--pink)">sudo rm -rf /</span> 👀</span>`);
    await blank();
  },

  'sudo rm -rf /': async () => {
    await blank();
    await print(`  <span style="color:var(--red)">INITIATING SYSTEM DESTRUCTION...</span>`);
    await print(`  <span style="color:var(--orange)">Deleting /bin... ████████░░ 80%</span>`,null,200);
    await print(`  <span style="color:var(--orange)">Deleting /usr... ██████████ 100%</span>`,null,400);
    await print(`  <span style="color:var(--red)">CRITICAL: Cannot delete the rizz. It's permanent.</span>`,null,600);
    await print(`  <span style="color:var(--green)">System restored. Fun fact — Anurag once stayed up 36 hours straight building GENIE.exe.</span>`,null,900);
    await blank();
  },

  'sudo': async () => {
    await print(`  <span style="color:var(--yellow)">anurag is not in the sudoers file. This incident will be reported. (jk — try <span style="color:var(--pink)">sudo rm -rf /</span>)</span>`);
  },

  'ls': async () => { await COMMANDS['ls projects'](); },
  'projects': async () => { await COMMANDS['ls projects'](); },
  'about': async () => { await COMMANDS['whoami'](); },
  'stack': async () => { await COMMANDS['skills'](); },
  'email': async () => { await print(`  <span style="color:var(--blue)">${DATA.email}</span>`); },
  'github': async () => { await COMMANDS['open github'](); },
  'portfolio': async () => { await COMMANDS['open portfolio'](); },

  'neofetch': async () => {
    await blank();
    await print(`<span style="color:var(--blue)">        ___    </span><span style="color:var(--txt3)"> anurag</span><span style="color:var(--txt2)">@</span><span style="color:var(--blue)">portfolio</span>`);
    await print(`<span style="color:var(--blue)">       /   \\   </span><span style="color:var(--txt3)"> ──────────────</span>`);
    await print(`<span style="color:var(--blue)">      | A   |  </span><span style="color:var(--txt3)"> OS:</span><span style="color:var(--txt)"> ANURAG.exe v1.0</span>`);
    await print(`<span style="color:var(--blue)">       \\___/   </span><span style="color:var(--txt3)"> Title:</span><span style="color:var(--txt)"> Data Science Student</span>`);
    await print(`<span style="color:var(--blue)">      /|   |\\  </span><span style="color:var(--txt3)"> Uni:</span><span style="color:var(--txt)"> DBUU, Dehradun</span>`);
    await print(`<span style="color:var(--blue)">     / |   | \\ </span><span style="color:var(--txt3)"> Location:</span><span style="color:var(--txt)"> Varanasi, India</span>`);
    await print(`<span style="color:var(--blue)">              </span><span style="color:var(--txt3)"> Shell:</span><span style="color:var(--txt)"> TERMINAL.exe</span>`);
    await print(`<span style="color:var(--blue)">              </span><span style="color:var(--txt3)"> Status:</span><span style="color:var(--green)"> OPEN FOR WORK</span>`);
    await blank();
  },

  clear: () => { out.innerHTML = ''; },

  'ctrl+l': () => { out.innerHTML = ''; },

};

/* ── RUN COMMAND ── */
async function runCmd(rawInput) {
  const inp = rawInput.trim();
  if (!inp) return;

  printCmd(inp);
  const key = inp.toLowerCase().replace(/\s+/g,' ');

  // update sidebar active
  document.querySelectorAll('.sb-cmd').forEach(b => {
    b.classList.toggle('active', b.textContent.trim().toLowerCase().startsWith(key.split(' ')[0]));
  });

  if (COMMANDS[key]) {
    await COMMANDS[key]();
  } else {
    // AI fallback
    await aiRespond(inp);
  }
}

/* ── AI FALLBACK ── */
async function aiRespond(query) {
  await blank();

  // show thinking dots
  const thinkDiv = document.createElement('div');
  thinkDiv.className = 'line';
  thinkDiv.innerHTML = `<div class="ai-thinking"><span style="color:var(--purple);font-size:.65rem;margin-right:.2rem">AI</span><div class="ai-thinking-dots"><span></span><span></span><span></span></div><span style="font-size:.65rem">processing query...</span></div>`;
  out.appendChild(thinkDiv);
  out.scrollTop = out.scrollHeight;

  try {
    const context = `You are TERMINAL.exe, the AI shell for Anurag Rajput's portfolio. Answer questions about Anurag in terminal/hacker style — short, punchy, monospace-friendly. No markdown headers. Use plain text only.

About Anurag:
- Name: ${DATA.name}, Age: ${DATA.age}
- ${DATA.year} at ${DATA.uni}
- Location: ${DATA.location}
- Status: ${DATA.status}
- Bio: ${DATA.bio}
- Email: ${DATA.email}
- GitHub: ${DATA.github}
- Skills: Java, Python, C, JavaScript, HTML/CSS, React, SQL, MongoDB, CouchDB, Jupyter, TensorFlow, Tableau, Git
- Projects: ${DATA.projects.map(p=>p.name).join(', ')}
- Experience: Data Science Intern (Summer 2024), Freelance Web Developer (2024-present)

Keep responses under 4 lines. Stay in character as a cool terminal AI.`;

    const res = await fetch('/api/terminal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, context })
    });

    thinkDiv.remove();

    if (res.ok) {
      const data = await res.json();
      const lines = (data.reply || '').split('\n').filter(l => l.trim());
      await print(`  <span style="color:var(--purple);font-size:.6rem;font-weight:700;letter-spacing:.1em">AI ></span>`);
      for (const l of lines) {
        await print(`  ${escHtml(l)}`,'line-out');
      }
    } else {
      await print(`  <span style="color:var(--red)">AI offline. Try: help, whoami, ls projects, skills, contact</span>`);
    }
  } catch(e) {
    thinkDiv.remove();
    await print(`  <span style="color:var(--yellow)">command not found: <span style="color:var(--txt)">${escHtml(query)}</span></span>`);
    await print(`  <span style="color:var(--txt3)">Try <span style="color:var(--blue)">help</span> to see available commands.</span>`);
  }
  await blank();
}

/* ── INPUT HANDLER ── */
const input = document.getElementById('cmd-input');
input.addEventListener('keydown', async e => {
  if (e.key === 'Enter') {
    const val = input.value.trim();
    input.value = '';
    histIdx = -1;
    if (!val) return;
    history.unshift(val);
    if (history.length > 50) history.pop();
    await runCmd(val);
  }
  // history navigation
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIdx < history.length - 1) {
      histIdx++;
      input.value = history[histIdx];
    }
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIdx > 0) { histIdx--; input.value = history[histIdx]; }
    else { histIdx = -1; input.value = ''; }
  }
  // tab completion
  if (e.key === 'Tab') {
    e.preventDefault();
    const val = input.value.toLowerCase();
    const match = Object.keys(COMMANDS).find(k => k.startsWith(val) && k !== val);
    if (match) input.value = match;
  }
  // ctrl+l
  if (e.key === 'l' && e.ctrlKey) {
    e.preventDefault();
    out.innerHTML = '';
  }
});

// keep focus on input
document.addEventListener('click', () => input.focus());
document.addEventListener('keydown', e => {
  if (document.activeElement !== input && !e.ctrlKey && !e.metaKey && e.key.length === 1) {
    input.focus();
  }
});
