const PROJECTS = [
  {
    id: 'proj-erp',
    name: 'AI-Powered ERP Management System',
    status: 'LIVE',
    statusClass: 'status',
    liveUrl: 'https://wfx-topaz.vercel.app/',
    stack: '// React.js · Node.js · Express.js · Supabase PostgreSQL · LLM APIs (OpenRouter)',
    bullets: [
      <>Independently designed and built an end-to-end ERP covering inventory, suppliers, buyers, sales and invoices; architected a normalized PostgreSQL schema with indexing and Row Level Security.</>,
      <><b>Generative AI-powered Natural Language-to-SQL (NL2SQL)</b> feature using LLM APIs and prompt engineering, letting non-technical users query business data in plain English; manually validated generated queries for correctness and edge cases.</>,
      <>Built and deployed a real-time analytics dashboard, translating business requirements into structured SQL queries and visual output.</>,
    ],
  },
  {
    id: 'proj-submithere',
    name: 'SubmitHere — Assignment Management System',
    status: 'LIVE',
    statusClass: 'status',
    liveUrl: 'https://submit-here-uni.vercel.app/',
    stack: '// React.js · Node.js · Express.js · MongoDB · Redis · Cloudinary',
    bullets: [
      <>Independently designed role-based access logic for students and professors; built and tested secure REST APIs to ensure correct behavior across roles.</>,
      <>Implemented JWT authentication, Cloudinary-based file uploads and automated email notifications; validated flows against expected and edge-case inputs before deployment.</>,
      <>Optimized MongoDB queries and added Redis caching with API rate limiting, improving performance while maintaining correctness under load.</>,
    ],
  },
  {
    id: 'proj-mindwell',
    name: 'MindWell — AI-Based Mental Wellness Journal',
    status: 'LIVE · TEAM',
    statusClass: 'status status-team',
    liveUrl: null,
    stack: '// React.js · Node.js · Express.js · MongoDB · Python · OpenCV · DeepFace',
    bullets: [
      <><b>My contribution:</b> owned backend security — implemented JWT authentication and AES encryption for the MERN application, and reasoned through data-privacy edge cases.</>,
      <>Integrated OpenCV and DeepFace for facial emotion detection, testing model outputs across varied inputs to validate reliability.</>,
      <>Designed and optimized MongoDB schemas for efficient, secure data management as part of a small engineering team that built and shipped the product.</>,
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="file-tab">projects<span className="ext">/</span></div>
      <div className="panel">
        <h2 className="section-title">
          ## Projects <span className="comment">— all live / deployed</span>
        </h2>
        {PROJECTS.map(proj => (
          <div key={proj.id} id={proj.id} className="project">
            <div className="project-head">
              <div className="project-name">
                <span className="fn">function</span> {proj.name}()
              </div>
              <div className="project-badges">
                <span className={proj.statusClass}>{proj.status}</span>
                {proj.liveUrl && (
                  <a className="proj-link" href={proj.liveUrl} target="_blank" rel="noopener noreferrer">
                    ⚡ View Live →
                  </a>
                )}
              </div>
            </div>
            <div className="stack-line">{proj.stack}</div>
            <ul>
              {proj.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
