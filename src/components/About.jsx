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
            I’m a Computer Science Engineering student from the 2027 batch with a strong foundation in Java, Full-Stack Development, Data Structures & Algorithms, and Generative AI. I enjoy building software end-to-end—from taking an idea from a blank repository to developing the frontend, designing backend APIs, integrating databases and authentication, testing edge cases, and deploying a product that people can actually use.

My core development experience includes Java, JavaScript, React.js, Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, JWT authentication, Redis, Docker, AWS, Git/GitHub, and CI/CD workflows. I’ve built full-stack applications such as an AI-powered ERP management system and a university assignment management platform, working across different parts of the application rather than limiting myself to a single layer.

I also have hands-on experience building AI-powered applications using LLM APIs, prompt engineering, natural-language-to-SQL, semantic search, and AI-driven features. My approach is not just to integrate AI for the sake of using it, but to solve practical problems where AI adds real value.

Alongside development, I’ve solved 300+ DSA problems, strengthening my algorithmic thinking, problem-solving, and ability to reason about edge cases. Overall, I see myself as a builder-oriented software developer who combines strong fundamentals with practical full-stack engineering and AI to turn ideas into reliable, usable products.
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
