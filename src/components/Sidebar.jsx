export default function Sidebar({ activeSection }) {
  const navItems = [
    { href: '#about',        label: '📄 about',       ext: '.md',  target: 'about' },
    { href: '#skills',       label: '🧩 skills',      ext: '.json', target: 'skills' },
    { href: '#projects',     label: '📁 projects/',   ext: '',     target: 'projects' },
    { href: '#proj-erp',     label: null, indent: true, branch: '├─', name: 'ai-erp', ext: '.js' },
    { href: '#proj-submithere', label: null, indent: true, branch: '├─', name: 'submithere', ext: '.js' },
    { href: '#proj-mindwell',   label: null, indent: true, branch: '└─', name: 'mindwell', ext: '.js' },
    { href: '#achievements', label: '🏆 achievements', ext: '.md', target: 'achievements' },
    { href: '#contact',      label: '📡 contact',     ext: '.sh',  target: 'contact' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="dot-row">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
        </span>
        portfolio
      </div>

      <nav className="tree">
        <div className="tree-root">yogesh/</div>
        {navItems.map((item, i) => {
          if (item.indent) {
            return (
              <a key={i} href={item.href} className="tree-link indent">
                <span className="tree-branch">{item.branch}</span>
                {item.name}<span className="tag">{item.ext}</span>
              </a>
            )
          }
          return (
            <a
              key={i}
              href={item.href}
              className={`tree-link${activeSection === item.target ? ' active' : ''}`}
            >
              {item.label}<span className="tag">{item.ext}</span>
            </a>
          )
        })}
      </nav>

      <div className="sidebar-foot">
        build: main<br />
        status: <span className="live">● open to work</span>
      </div>
    </aside>
  )
}
