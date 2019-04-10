import Link from 'next/link'

const NavBar = (props) => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/static/logo.png" alt="HackSC Logo" width="120"/>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link href="/">
              <a className={(props.page === 'live') ? 'is-active' : undefined}>
                Live
              </a>
            </Link>
          </div>

          <div className="navbar-item">
            <Link href="/api">
              <a className={(props.page === 'api') ? 'is-active' : undefined}>
                API Directory
              </a>
            </Link>
          </div>

          <div className="navbar-item">
            <Link href="/resources">
              <a className={(props.page === 'resources') ? 'is-active' : undefined}>
                Resources
              </a>
            </Link>
          </div>

          <div className="navbar-item">
            <Link href="/faq">
              <a className={(props.page === 'faq') ? 'is-active' : undefined}>
                FAQ
              </a>
            </Link>
          </div>

          <div className="navbar-item">
            <Link href="/prizes">
              <a className={(props.page === 'prizes') ? 'is-active' : undefined}>
                Prizes & Judges
              </a>
            </Link>
          </div>

          <div className="navbar-item">
            <Link href="/map">
              <a className={(props.page === 'map') ? 'is-active' : undefined}>
                Map
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
