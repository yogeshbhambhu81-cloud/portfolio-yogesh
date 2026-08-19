const ACHIEVEMENTS = [
  {
    text: (
      <><b>Prajwalan 2025 — DSA &amp; Competitive Programming Hackathon</b> (Unstop): participant,
      applying data structures and algorithmic problem-solving under time constraints.</>
    ),
  },
  {
    text: (
      <>Solved <b>300+ DSA problems</b> on LeetCode and other competitive programming platforms.</>
    ),
  },
  {
    text: (
      <><b>Red Hat Certification</b> — Red Hat Linux and Database Management Systems (DBMS).</>
    ),
  },
  {
    text: (
      <><b>Infosys Springboard Certifications</b> — Programming using C, C++, Java and Network Fundamentals.</>
    ),
  },
]

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="file-tab">achievements<span className="ext">.md</span></div>
      <div className="panel">
        <h2 className="section-title">## Achievements &amp; Certifications</h2>
        <div className="ach-list">
          {ACHIEVEMENTS.map((item, i) => (
            <div key={i} className="ach-item">
              <span className="glyph">▹</span>
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
