import './scss/index.scss';

function App() {
  return (
    <header className="header">
      <div className="header__content _container">
        <div className="header__menu menu">
          <div className="menu__icon icon-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="menu__body">
            <ul className="menu__list">
              <li>
                <a className="menu__link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="menu__link" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a className="menu__link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default App;
