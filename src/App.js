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
          <li className="tagline__number">01</li>
          <li className="tagline__number">02</li>
          <li className="tagline__number">03</li>
        </ul>
        <ul className="tagline__props-list">
          <li className="tagline__prop">
            Quickly<span className="text__color _black">.</span>
          </li>
          <li className="tagline__prop">
            Qualitatively<span className="text__color _black">.</span>
          </li>
          <li className="tagline__prop">
            Attention to people<span className="text__color _black">.</span>
          </li>
        </ul>
      </div>
      <div className="steps">
        <div className="steps__caption">
          <div className="steps__caption-content">Just-In-Time.</div>
          <div className="steps__caption-content _semi-black">Trust the professionals.</div>
        </div>
        <div className="steps__container">
          <ul className="steps__rectangle-container">
            <li className="steps__rectangle"></li>

            <li className="steps__rectangle"></li>

            <li className="steps__rectangle"></li>
          </ul>
          <div className="steps__dotted-container">
            <div className="steps__dotted-line"></div>
            <div className="steps__dotted-line"></div>
          </div>
          <div className="steps__icons-container">
            <div className="steps__icons _icon-phone"></div>
            <div className="steps__icons _icon-people-carry"></div>
            <div className="steps__icons _icon-truck"></div>
          </div>

          <div className="steps__content-container">
            <ul className="steps__content">
              <li className="steps__content-text">
                Order & payment: cash and card
                <div className="steps__content-legends">
                  Payment after moving and assembling furniture
                </div>
              </li>
              <li className="steps__content-text">
                We will select cars for your move
                <div className="steps__content-legends">
                  We will quickly load your items and deliver to the address
                </div>
              </li>
              <li className="steps__content-text">
                Best price in Haifa
                <div className="steps__content-legends">We provide invoices directly</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="stock">
        <div className="stock__price"></div>
        <div className="stock__content"></div>
      </div>
    </div>
  );
}

export default App;
