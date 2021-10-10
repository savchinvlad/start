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
      <div className="stock__container">
        <div className="stock__image"></div>
        <div className="stock__price"> </div>
        <div className="stock__price-content">
          Transportation price <span className="text__decoration _big">10 ₪</span>
          <span className="text__decoration _small">Minimum order 10 cartons</span>
        </div>
        <div className="stock__content">The cost is calculated individually.</div>
      </div>
      <div className="slogan__container">
        <div className="slogan">
          <p>
            We will carry out a <span className="text__decoration _orange">turnkey</span> move.
            Let's take the <span className="text__decoration _orange"> load</span> off your
            <span className="text__decoration _orange"> shoulders</span>.
          </p>
        </div>
      </div>
      <div className="possibilities">
        <div className="assembly__container">
          <div className="assembly__iamge"></div>
          <div className="possibilities__content ">
            <div className="possibilities__content-text"> Assembly</div>
          </div>
        </div>
        <div className="shipping__container">
          <div className="possibilities__content">
            <div className="possibilities__content-text">Shipping</div>
          </div>
          <div className="shipping__iamge"></div>
        </div>
        <div className="unpacking__container">
          <div className="unpacking__image"></div>
          <div className="possibilities__content">
            <div className="possibilities__content-text">Unpacking</div>
          </div>
        </div>
      </div>
      <div className="benefits__container">
        <div className="slogan">
          <p>
            Four <span className="text__decoration _orange">benefits</span> that will save you a lot
            of
            <span className="text__decoration _orange"> valuable</span> time.
          </p>
        </div>
      </div>
      <div className="benefits__content-container">
        <div className="benefits__body">
          <ul className="benefits__list">
            <li className="benefits__number">01</li>
            <li className="benefits__number">02</li>
            <li className="benefits__number">03</li>
            <li className="benefits__number">04</li>
          </ul>
          <ul className="benefits__props-list">
            <li className="benefits__prop">Kein Suchen nach Baustoffen .</li>
            <li className="benefits__prop">Keine Zeit für Fahrten verschwenden</li>
            <li className="benefits__prop">Kein Transportfahrzeug nötig</li>
            <li className="benefits__prop">
              Keine komplizierten Bestellungen über Telefon, Mail oder Fax
            </li>
          </ul>
          <div className="benefits__image"></div>
        </div>
      </div>
      <div className="feedback">
        <div className="feedback__logo">
          <span className="_semi-black"> Sofortbau</span> is coming
          <span className="text__decoration _orange"> soon</span>.
        </div>
        <div className="feedback__content">Leave your email address to be the first to know.</div>
        <div className="feedback__mail _mail-text">E-Mail-Adresse *</div>
        <div className="feedback__button _button">
          <div className="footer__button-content _button-content"> Absenden</div>
        </div>
        <span className="feedback__line"></span>
      </div>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__question">Willst du Fahrer werden?</div>
          <div className="footer__question-content">
            Bitte kontaktieren Sie uns für eine offene Stelle
          </div>

          <div className="footer__feedback-container">
            <div className="footer__mail _mail-small">E-Mail-Adresse *</div>
            <span className="footer__line-mail"></span>
            <div className="footer__name _mail-small">vollständiger Name*</div>
            <div className="footer__phone _mail-small">Telefon</div>
            <span className="footer__line-name"></span>
            <span className="footer__line-phone"></span>
            <div className="footer__button _button">
              <div className="footer__button-content _button-content">Absenden</div>
            </div>
          </div>
        </div>
        <div className="footer__image"></div>
      </footer>
    </div>
  );
}

export default App;
