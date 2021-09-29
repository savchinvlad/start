import './scss/index.scss';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__logo-container">
          <div className="logo">
            <div className="logo__brand">START</div>
            <div className="logo__dot"></div>
          </div>
        </div>
        <div className="header__content"> </div>
        <div className="header__content-text">
          <div className="header__content-text_main">
            More than 20 years in the field of cargo transportation.
          </div>
          <div className="header__content-text_small"> All over Israel.</div>
        </div>
      </header>
      <div className="tagline__body">
        <ul className="tagline__list">
          <li className="tagline__number">
            <div className="tagline__prop"></div>
          </li>
          <li className="tagline__number">
            <div className="tagline__prop"></div>
          </li>
          <li className="tagline__number">
            <div className="tagline__prop"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
