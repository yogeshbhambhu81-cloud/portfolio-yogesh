export default function About() {
  return (
    <section id="about">
      <div className="file-tab">about<span className="ext">.md</span></div>
      <div className="panel">
        <h2 className="section-title">
          ## About <span className="comment">— why I build</span>
        </h2>
        <div className="about-grid">
          <p className="lead">
            I'm a Computer Science Engineering student (2027 batch) with a builder mindset — I like
            taking an idea from a blank repo to something people can actually use. Most of my recent
            work sits at the intersection of full-stack engineering and Generative AI: shipping real,
            deployed products, wiring LLMs into practical features like natural-language-to-SQL, and
            validating everything I build against edge cases rather than the happy path. Alongside
            that, I've solved 300+ DSA problems, which keeps my problem-solving sharp for whatever
            the product throws at me next.
          </p>
          <div className="edu-card">
            <div className="school">Chitkara University</div>
            <div>B.Tech, Computer Science Engineering</div>
            <div className="meta">Aug 2023 – May 2027 · Himachal Pradesh, India</div>
            <div className="meta">CGPA: 7.40 / 10.0</div>
          </div>
        </div>
      </div>
    </section>
  )
}
