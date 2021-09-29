import './scss/index.scss';
import React, { useState } from 'react';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__content _container">
          <div className="header__menu menu">
            <div
              className="menu__icon icon-menu
          "
              onClick={() => setSidebarIsOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav className="menu__body">
              <ul className="menu__list" onClick={() => setSidebarIsOpen(true)}>
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
      </div>
    </header>
  );
}

export default App;
