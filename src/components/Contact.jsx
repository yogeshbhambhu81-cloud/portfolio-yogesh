export default function Contact() {
  return (
    <section id="contact" style={{ borderBottom: 'none' }}>
      <div className="file-tab">contact<span className="ext">.sh</span></div>
      <div className="panel">
        <h2 className="section-title">## Contact</h2>
        <div className="contact-term">
          <div>
            <span className="cmd">$</span> ./reach_out.sh{' '}
            <span className="comment2">--to yogesh</span>
          </div>
        </div>
        <div className="contact-list">
          <a href="mailto:yogeshbhambhu81@gmail.com">
            <span className="k">email</span> → yogeshbhambhu81@gmail.com
          </a>
          <a href="tel:+919351021034">
            <span className="k">phone</span> → +91-9351021034
          </a>
          <a href="https://www.linkedin.com/in/yogesh-bhambhu" target="_blank" rel="noopener noreferrer">
            <span className="k">linkedin</span> → linkedin.com/in/yogesh-bhambhu
          </a>
          <a href="https://github.com/yogeshbhambhu81-cloud" target="_blank" rel="noopener noreferrer">
            <span className="k">github</span> → github.com/yogeshbhambhu81-cloud
          </a>
          <span className="loc">
            <span className="k">location</span> → Chandigarh, India
          </span>
        </div>
      </div>
    </section>
  )
}
