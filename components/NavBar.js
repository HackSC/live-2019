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
            <a className="is-active">
              <strong>Live</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

/*
<div className="navbar-item">
  <a>
    API Directory
  </a>
</div>

<div className="navbar-item">
  <a>
    Resources
  </a>
</div>

<div className="navbar-item">
  <a>
    FAQ
  </a>
</div>

<div className="navbar-item">
  <a>
    Map
  </a>
</div>
*/

export default NavBar
