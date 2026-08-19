import { useEffect, useRef, useState } from 'react'

const SEQUENCE = [
  { type: 'out', text: 'Yogesh Bhambhu' },
  { type: 'cmd', text: 'cat role.txt' },
  { type: 'out', text: 'AI & Emerging Technologies  |  Full-Stack Development\nGenerative AI / LLM Applications  |  DSA & Problem Solving' },
  { type: 'cmd', text: 'cat status.txt' },
  { type: 'out', text: "3 live projects shipped · 300+ DSA problems solved · CSE '27" },
]

function TypingText({ text, speed, onDone }) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const iv = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) { clearInterval(iv); onDone && onDone() }
    }, speed)
    return () => clearInterval(iv)
  }, [text, speed])
  return <span>{displayed}</span>
}

export default function Hero() {
  const [lines, setLines] = useState([])
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 350)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines, step])

  const handleStepDone = () => {
    const idx = lines.length
    if (idx < SEQUENCE.length) {
      setLines(prev => [...prev, SEQUENCE[idx]])
    } else {
      setDone(true)
    }
  }

  // Bootstrap first step
  useEffect(() => {
    if (step === 1 && lines.length === 0) {
      setLines([SEQUENCE[0]])
    }
  }, [step])

  return (
    <section className="hero" style={{ borderBottom: '1px solid var(--line)', paddingTop: '70px' }}>
      <div className="terminal">
        <div className="terminal-bar">
          <span className="dot-row">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
          </span>
          <span className="terminal-title">yogesh@chandigarh: ~/portfolio</span>
        </div>
        <div className="terminal-body" ref={bodyRef}>
          <div className="cmd-line">
            <span className="prompt">yogesh@dev</span>
            <span className="path">:~$</span> whoami
          </div>
          {lines.map((line, i) => {
            const isLast = i === lines.length - 1
            const speed = line.type === 'cmd' ? 28 : 12
            return line.type === 'out' ? (
              <div key={i} className="out">
                <TypingText
                  text={line.text}
                  speed={speed}
                  onDone={isLast ? handleStepDone : undefined}
                />
              </div>
            ) : (
              <div key={i} className="cmd-line">
                <span className="prompt">yogesh@dev</span>
                <span className="path">:~$</span>{' '}
                <TypingText
                  text={line.text}
                  speed={speed}
                  onDone={isLast ? handleStepDone : undefined}
                />
              </div>
            )
          })}
          {done && (
            <div className="cmd-line">
              <span className="prompt">yogesh@dev</span>
              <span className="path">:~$</span>{' '}
              <span className="cursor" />
            </div>
          )}
        </div>
      </div>

      <div className="hero-links">
        <a href="mailto:yogeshbhambhu81@gmail.com">✉ yogeshbhambhu81@gmail.com</a>
        <a href="https://www.linkedin.com/in/yogesh-bhambhu" target="_blank" rel="noopener">in/yogesh-bhambhu</a>
        <a href="https://github.com/yogeshbhambhu81-cloud" target="_blank" rel="noopener">/yogeshbhambhu81-cloud</a>
        <a href="tel:+919351021034">+91-9351021034</a>
      </div>
    </section>
  )
}
