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
            I’m a Computer Science Engineering student from the 2027 batch with a strong foundation in Java, Data Structures & Algorithms, and Full-Stack Development. I enjoy building products end-to-end—from taking an idea from a blank repository to designing the backend, developing the frontend, integrating APIs and databases, and deploying a working application.

My development experience includes building full-stack applications using Java, React, Node.js/Express, MongoDB, REST APIs, JWT authentication, and file storage systems, with a focus on creating practical, scalable features rather than just prototypes. I have also worked with Generative AI and LLMs, integrating AI into real applications for use cases such as natural-language-to-SQL and intelligent application features.

Alongside development, I’ve solved 300+ DSA problems, strengthening my algorithmic thinking, problem-solving, and ability to handle edge cases efficiently. I approach engineering with a builder mindset—understanding the problem, designing the solution, implementing it, testing beyond the happy path, and turning it into something people can actually use.
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
