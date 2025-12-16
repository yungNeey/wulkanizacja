import '../contact.css';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="section-badge">
              <span className="badge-icon">⚙</span>
              <span>SKONTAKTUJ SIĘ</span>
            </div>
            <h1 className="contact-hero-title">
              Skontaktuj się z nami
            </h1>
            <p className="contact-hero-description">
              Jesteśmy do Twojej dyspozycji. Zadzwoń, napisz lub odwiedź nas osobiście.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="contact-form-title">Wyślij wiadomość</h2>
              <form className="contact-form" action="#" method="POST">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Imię i nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Wiadomość</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Wyślij wiadomość
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2 className="contact-info-title">Dane kontaktowe</h2>
              <div className="contact-info-content">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3 className="contact-info-label">Adres</h3>
                    <p className="contact-info-value">
                      ul. Kępińska 8<br />
                      56-500 Syców
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92V19.92C22 20.5155 21.7652 21.0867 21.3471 21.5047C20.9291 21.9228 20.3579 22.1576 19.7625 22.1576C10.2194 22.1576 2.5 14.4381 2.5 4.895C2.5 4.29957 2.73477 3.72838 3.15281 3.31034C3.57086 2.89229 4.14205 2.65752 4.73748 2.65752H7.73748C8.33291 2.65752 8.9041 2.89229 9.32214 3.31034C9.74019 3.72838 9.97496 4.29957 9.97496 4.895V7.895"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3 className="contact-info-label">Telefon</h3>
                    <a href="tel:575552835" className="contact-info-value contact-link">
                      575 552 835
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3 className="contact-info-label">Email</h3>
                    <a href="mailto:kinastowskiopony@gmail.com" className="contact-info-value contact-link">
                      kinastowskiopony@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3 className="contact-info-label">Godziny otwarcia</h3>
                    <p className="contact-info-value">
                      Poniedziałek - Piątek: 8:00 - 18:00<br />
                      Sobota: 8:00 - 14:00<br />
                      Niedziela: Nieczynne
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

