const SKILLS = [
  {
    key: '"languages"',
    chips: ['Java', 'C++', 'JavaScript (ES6+)', 'Python', 'SQL'],
  },
  {
    key: '"ai_and_generative_ai"',
    chips: ['LLM APIs (OpenRouter)', 'Prompt Engineering', 'NL2SQL', 'Semantic Search', 'OpenCV', 'DeepFace'],
  },
  {
    key: '"core_cs"',
    chips: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    key: '"full_stack"',
    chips: ['Node.js', 'Express.js', 'React.js', 'REST APIs', 'JWT Auth', 'Tailwind CSS'],
  },
  {
    key: '"databases"',
    chips: ['PostgreSQL (Supabase)', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    key: '"tools_and_cloud"',
    chips: ['Git', 'GitHub', 'Docker', 'AWS (EC2, S3)', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="file-tab">skills<span className="ext">.json</span></div>
      <div className="panel">
        <h2 className="section-title">## Skills</h2>
        <div className="skills-json">
          {SKILLS.map(({ key, chips }) => (
            <div key={key}>
              <div>
                <span className="key">{key}</span>
                <span className="punc">:</span>
              </div>
              <div className="chip-row">
                {chips.map(chip => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
