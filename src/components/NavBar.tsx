export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top bg-body-tertiary bg-dark border-bottom border-body "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#AboutMe">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Experience">
                Work Experience
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
