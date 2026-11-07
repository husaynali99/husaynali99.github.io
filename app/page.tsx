const navItems = ["About", "Explore", "Writing", "Projects", "Contact"];

const categoryList = [
  {
    number: "01",
    title: "Data Intelligence",
    description:
      "Power BI and dashboard engineering, SQL and Python for analytics, data modeling, ETL, and decision-making through data.",
  },
  {
    number: "02",
    title: "Building & Engineering",
    description:
      "Python development, software architecture, Linux workflows, automation, APIs, and personal technical experiments.",
  },
  {
    number: "03",
    title: "Research & Discoveries",
    description:
      "Artificial intelligence, machine learning, research papers, computer science concepts, and emerging technologies worth exploring.",
  },
  {
    number: "04",
    title: "Podcasts & Conversations",
    description:
      "Data careers, technology thinking, product lessons, and conversations around the people building in these fields.",
  },
  {
    number: "05",
    title: "Notes & Perspectives",
    description:
      "Personal reflections, learning in public, problem solving, productivity, and the ideas shaping my work.",
  },
];

const articleList = [
  {
    title: "Beyond Dashboards: Thinking About Business Intelligence as a System",
    description:
      "A look at how BI becomes more than reporting when it is treated as a living decision-making system.",
    category: "Data Intelligence",
    date: "03 Jan 2026",
    readTime: "6 min read",
    accent: "from-[#b6ff00]/30 via-[#b6ff00]/10 to-transparent",
  },
  {
    title: "What Makes a Good KPI?",
    description:
      "A practical framework for creating metrics that are useful, understandable, and aligned with meaningful business decisions.",
    category: "Analytics",
    date: "20 Dec 2025",
    readTime: "4 min read",
    accent: "from-[#f2f2ee]/10 via-[#b6ff00]/15 to-transparent",
  },
  {
    title: "Building a Linux Environment Inside the Browser",
    description:
      "Exploring how simulation, shell interactions, and browser-based systems can teach software fundamentals in a more tactile way.",
    category: "Engineering",
    date: "18 Nov 2025",
    readTime: "7 min read",
    accent: "from-[#b6ff00]/20 via-transparent to-transparent",
  },
  {
    title: "The Difference Between Reporting Data and Understanding It",
    description:
      "Why clear numbers are not the same as operational understanding—and what better analytical practice looks like.",
    category: "Research",
    date: "09 Oct 2025",
    readTime: "5 min read",
    accent: "from-[#b6ff00]/15 via-[#f2f2ee]/5 to-transparent",
  },
  {
    title: "Exploring Graph-Based Knowledge Systems",
    description:
      "Using graph structures to model dependencies, logic, and interconnected knowledge in a more human-readable way.",
    category: "Discovery",
    date: "02 Sep 2025",
    readTime: "8 min read",
    accent: "from-[#f2f2ee]/10 via-[#b6ff00]/10 to-transparent",
  },
  {
    title: "What I'm Learning About AI and Data Engineering",
    description:
      "Notes from the frontier: how AI workflows, data pipelines, and engineering practices are starting to converge.",
    category: "AI",
    date: "15 Aug 2025",
    readTime: "6 min read",
    accent: "from-[#b6ff00]/20 via-transparent to-transparent",
  },
];

const researchEntries = [
  {
    title: "Graph-based reasoning for structured knowledge systems",
    source: "arXiv / Research paper",
    summary:
      "A compelling look at how graph representations help model relationships and context in a way that scales beyond tabular thinking.",
    reason: "This matters because modern systems need context, not just facts.",
    tags: ["Knowledge graphs", "AI", "Systems"],
  },
  {
    title: "Designing better data pipelines for decision support",
    source: "Technical notes / industry practice",
    summary:
      "The most useful data systems are not only fast—they are observable, explainable, and aligned with the decisions they support.",
    reason: "Good pipeline design is a product decision as much as an engineering one.",
    tags: ["Data engineering", "Architecture", "BI"],
  },
  {
    title: "How AI tools change developer workflows",
    source: "Research & experiments",
    summary:
      "AI can accelerate iteration, but it reshapes engineering practice by changing the way we reason, prototype, and validate work.",
    reason: "The biggest gains come from pairing human judgment with better tooling.",
    tags: ["AI", "Productivity", "Engineering"],
  },
];

const projectList = [
  {
    name: "Linux Lab",
    type: "Interactive system simulator",
    description:
      "A browser-based Linux operating system simulator featuring a virtual filesystem and interactive shell.",
    technologies: ["Linux", "Shell", "Web UI"],
    accent: "from-[#b6ff00]/25 via-[#b6ff00]/5 to-transparent",
  },
  {
    name: "LogicFlow",
    type: "Knowledge engine",
    description:
      "A graph-based knowledge engine for representing logic, dependencies, and structured knowledge.",
    technologies: ["Python", "Graph Theory", "Automation"],
    accent: "from-[#f2f2ee]/12 via-[#b6ff00]/12 to-transparent",
  },
  {
    name: "TaskFlow",
    type: "Distributed execution framework",
    description:
      "A lightweight distributed execution framework for task orchestration and dependency management.",
    technologies: ["Distributed Systems", "Task Orchestration", "Python"],
    accent: "from-[#b6ff00]/20 via-transparent to-transparent",
  },
];

const episodeList = [
  {
    number: "01",
    title: "Data / Systems",
    guest: "Coming soon",
    description:
      "A future conversation about data, technology, AI, and the systems that shape how we work.",
  },
  {
    number: "02",
    title: "Thinking in Systems",
    guest: "Solo episode",
    description:
      "A short reflection on building better analysis, processes, and technical habits over time.",
  },
];

const experienceList = [
  {
    title: "Business Intelligence Analyst",
    company: "Saudi German Health",
    period: "October 2026 — Present",
  },
  {
    title: "Senior Management Information Systems Analyst",
    company: "e& CX Solutions Egypt",
    period: "July 2026 — October 2026",
  },
  {
    title: "Management Information System Analyst",
    company: "e& CX Solutions Egypt",
    period: "October 2025 — July 2026",
  },
  {
    title: "Python Developer",
    company: "Business Spike",
    period: "June 2022 — December 2023",
  },
];

const toolkitGroups = [
  {
    title: "Business Intelligence",
    items: ["Power BI", "DAX", "Power Query", "KPI Reporting", "Dashboard Development"],
  },
  {
    title: "Data Analytics",
    items: ["Python", "Pandas", "NumPy", "Excel", "SQL", "Statistical Analysis"],
  },
  {
    title: "Data Engineering",
    items: ["ETL", "Data Pipelines", "Data Integration", "Data Quality", "Workflow Automation"],
  },
  {
    title: "Machine Learning",
    items: ["Scikit-learn", "Classification", "Regression", "Feature Engineering"],
  },
  {
    title: "Development",
    items: ["Git", "Linux", "Jupyter Notebook", "VS Code", "API Integration"],
  },
];

const educationList = [
  {
    degree: "B.Sc. Computer Science & Artificial Intelligence",
    institution: "Beni-Suef University",
    period: "2020 — 2023",
  },
  {
    degree: "ITI Tech-Leaps Diploma in Data Analytics & Visualization",
    institution: "Information Technology Institute",
    period: "2022",
  },
];

const achievementList = [
  "3rd Place — Coursera Data Science Code Competition (2022)",
  "1st Place — GDSC NHU Code Camp (2021)",
  "Certificate of Recognition — Arab-African Military Collaboration Conference",
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="nav-inner">
          <div className="brand-mark">HUSAYN ALI</div>
          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero-section" id="about">
        <div className="hero-copy">
          <p className="eyebrow mono">INDEPENDENT DATA &amp; TECHNOLOGY JOURNAL</p>
          <h1>
            Making sense of data. <span className="lime-highlight">Building</span> things that matter.
          </h1>
          <p className="lead">
            I&apos;m Husayn Ali — a BI Analyst, developer, and technology enthusiast exploring the intersection of data,
            intelligent systems, and practical software engineering.
          </p>

          <div className="hero-tags" aria-label="Personal identity labels">
            <span>Based in Cairo, Egypt</span>
            <span>Working with Data &amp; Technology</span>
            <span>Always Learning &amp; Building</span>
          </div>

          <div className="hero-actions">
            <a href="#explore" className="primary-button">
              Explore my world <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="secondary-button">
              Get in touch
            </a>
          </div>

          <div className="availability">
            <span className="availability-dot" aria-hidden="true" />
            Available for project conversations and research collaborations.
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract editorial portrait panel">
          <div className="portrait-frame">
            <div className="portrait-card">
              <div className="portrait-badge mono">H A</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section intro-section" id="about-me">
        <div className="section-kicker mono">01 / A LITTLE ABOUT ME</div>
        <div className="intro-grid">
          <div className="intro-copy">
            <h2>Not just analyzing data. Understanding what it can do.</h2>
            <p>
              I&apos;m a Business Intelligence Analyst and Data Professional interested in more than reports and dashboards.
            </p>
            <p>
              My work involves transforming operational data into meaningful insights, building reporting solutions,
              automating workflows, and exploring how software and analytical systems solve real problems.
            </p>
            <p>
              My background combines Business Intelligence, Python development, Computer Science, and Artificial Intelligence.
            </p>
            <p>
              Outside my professional work, I enjoy exploring technical concepts, building experimental projects, reading
              research, documenting discoveries, and sharing ideas about technology and data.
            </p>
            <p>
              This website is my digital notebook — a place to document what I build, what I learn, and what I find
              interesting.
            </p>
          </div>

          <aside className="mini-portrait" aria-label="Editorial portrait still-life">
            <div className="mini-portrait-inner">
              <div className="mini-portrait-shape" />
              <div className="mini-portrait-lines" />
            </div>
          </aside>
        </div>
      </section>

      <section className="content-section" id="explore">
        <div className="section-kicker mono">WHAT I EXPLORE</div>
        <h2 className="section-heading">Things I spend time thinking about.</h2>

        <div className="category-list">
          {categoryList.map((item) => (
            <article key={item.title} className="category-row">
              <div className="category-number mono">{item.number}</div>
              <div className="category-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="category-arrow" aria-hidden="true">
                →
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="writing">
        <div className="section-kicker mono">02 / THE JOURNAL</div>
        <div className="section-header-row">
          <h2 className="section-heading">Ideas worth exploring.</h2>
          <a href="#contact" className="inline-link">
            Submit a topic →
          </a>
        </div>

        <div className="article-grid">
          {articleList.map((article) => (
            <article key={article.title} className="article-card">
              <div className={`article-cover ${article.accent}`} />
              <div className="article-meta mono">
                <span>{article.category}</span>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href="#" aria-label={`Read article: ${article.title}`}>
                Read article <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section research-section" id="research">
        <div className="section-kicker mono">03 / RESEARCH &amp; DISCOVERY</div>
        <h2 className="section-heading">Curiosity, documented.</h2>

        <div className="research-list">
          {researchEntries.map((entry) => (
            <article key={entry.title} className="research-card">
              <div className="research-topline mono">
                <span>{entry.source}</span>
                <span>Observation</span>
              </div>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              <div className="research-row">
                <strong>Why it matters:</strong>
                <span>{entry.reason}</span>
              </div>
              <div className="tag-row">
                {entry.tags.map((tag) => (
                  <span key={tag} className="tag mono">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="section-kicker mono">04 / SELECTED WORK</div>
        <h2 className="section-heading">Things I&apos;ve built. Things I&apos;m exploring.</h2>

        <div className="project-grid">
          {projectList.map((project) => (
            <article key={project.name} className="project-card">
              <div className={`project-image ${project.accent}`}>
                <div className="project-visual" aria-hidden="true" />
              </div>
              <div className="project-meta mono">{project.type}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag mono">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#" className="project-link">
                View project <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section podcast-section" id="podcasts">
        <div className="section-kicker mono">05 / THE CONVERSATIONS</div>
        <h2 className="section-heading">Good ideas come from good conversations.</h2>

        <div className="podcast-layout">
          <div className="podcast-artwork" aria-label="Podcast artwork placeholder">
            <div className="artwork-ring" />
            <div className="artwork-label mono">DATA / SYSTEMS</div>
          </div>
          <div className="podcast-copy">
            <p className="podcast-question">Conversations and explorations around data, technology, intelligent systems, and the ideas shaping how we work.</p>
            <div className="podcast-list">
              {episodeList.map((episode) => (
                <article key={episode.number} className="episode-card">
                  <div className="episode-meta mono">
                    <span>EP {episode.number}</span>
                    <span>{episode.guest}</span>
                  </div>
                  <h3>{episode.title}</h3>
                  <p>{episode.description}</p>
                  <div className="audio-placeholder mono">Audio player placeholder</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="experience">
        <div className="section-kicker mono">06 / PROFESSIONAL JOURNEY</div>
        <h2 className="section-heading">A practical path through data and systems.</h2>

        <div className="timeline-list">
          {experienceList.map((role) => (
            <article key={`${role.title}-${role.period}`} className="timeline-item">
              <div className="timeline-period mono">{role.period}</div>
              <div className="timeline-copy">
                <h3>{role.title}</h3>
                <p>{role.company}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section toolkit-section" id="toolkit">
        <div className="section-kicker mono">MY WORKING TOOLKIT</div>
        <h2 className="section-heading">What I use to build, analyze, and learn.</h2>

        <div className="toolkit-grid">
          {toolkitGroups.map((group) => (
            <div key={group.title} className="toolkit-card">
              <h3>{group.title}</h3>
              <p>{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section education-section" id="education">
        <div className="section-kicker mono">EDUCATION &amp; ACHIEVEMENTS</div>
        <div className="education-layout">
          <div>
            <h2 className="section-heading">Learning without stopping.</h2>
            <div className="education-list">
              {educationList.map((entry) => (
                <article key={entry.degree} className="education-item">
                  <div className="mono period">{entry.period}</div>
                  <div>
                    <h3>{entry.degree}</h3>
                    <p>{entry.institution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="achievement-panel">
            {achievementList.map((achievement) => (
              <div key={achievement} className="achievement-item mono">
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <div className="section-kicker mono cta-kicker">COLLABORATE</div>
          <h2>Have an interesting idea? Let&apos;s explore it.</h2>
          <p>
            I&apos;m always interested in connecting with people who build, explore, question, and think differently about data and technology.
          </p>
          <div className="contact-grid">
            <div>
              <span className="mono label">Email</span>
              <a href="mailto:hire-hussein@proton.me">hire-hussein@proton.me</a>
            </div>
            <div>
              <span className="mono label">Phone</span>
              <a href="tel:+201012787537">+20 101 278 7537</a>
            </div>
            <div>
              <span className="mono label">Location</span>
              <span>Cairo, Egypt</span>
            </div>
            <div>
              <span className="mono label">Social</span>
              <span>GitHub / LinkedIn</span>
            </div>
          </div>
          <a href="mailto:hire-hussein@proton.me" className="cta-button">
            Let&apos;s talk <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">HUSAYN ALI</div>
            <p>Data / Systems / Intelligence.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-meta mono">
            <a href="https://github.com/husaynali99">GitHub</a>
            <a href="https://www.linkedin.com/in/husaynali">LinkedIn</a>
            <a href="mailto:hire-hussein@proton.me">Email</a>
          </div>
        </div>
        <div className="copyright mono">© 2026 Husayn Ali — Built with curiosity.</div>
      </footer>
    </main>
  );
}
