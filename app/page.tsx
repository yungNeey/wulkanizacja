import Link from 'next/link';
import Image from 'next/image';
import './home.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">⚙</span>
              <span>PROFESJONALNA WULKANIZACJA</span>
            </div>
            <h1 className="hero-title">
              Kompleksowa obsługa
              <br />
              opon i felg
            </h1>
            <p className="hero-description">
              Profesjonalna wulkanizacja w Sycowie. Oferujemy wymianę opon, naprawę opon, sprzedaż opon i felg oraz kompleksową obsługę TPMS.
            </p>
            <div className="hero-actions">
              <Link href="/kontakt" className="btn-primary">
                Skontaktuj się
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="tel:575552835" className="hero-phone">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.3333 14.6583V17.5C18.3333 17.9603 17.9603 18.3333 17.5 18.3333C8.11167 18.3333 1.66667 11.8883 1.66667 2.5C1.66667 2.03977 2.03977 1.66667 2.5 1.66667H5.34167C5.8019 1.66667 6.175 2.03977 6.175 2.5L6.25833 4.61667C6.25833 5.0769 5.88523 5.45 5.425 5.45L4.00833 5.45C3.28333 5.45 2.725 6.00833 2.875 6.71667C3.55833 9.69167 6.30833 12.4417 9.28333 13.125C9.99167 13.275 10.55 12.7167 10.55 11.9917V10.575C10.55 10.1148 10.9231 9.74167 11.3833 9.74167H13.5C13.9603 9.74167 14.3333 10.1148 14.3333 10.575V13.4167" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                575 552 835
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=1000&fit=crop"
              alt="Wulkanizacja - wymiana opon"
              width={800}
              height={1000}
              priority
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-icon">⚙</span>
              <span>NASZE USŁUGI</span>
            </div>
            <h2 className="section-title">Kompleksowa obsługa opon i felg</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6V12L16 14"/>
                </svg>
              </div>
              <h3 className="service-title">Wymiana opon</h3>
              <p className="service-description">
                Profesjonalna wymiana opon dla samochodów osobowych, dostawczych i motocykli.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="service-title">Naprawa opon</h3>
              <p className="service-description">
                Specjalistyczna naprawa opon metodą wulkanizacji. Przywracamy opony do pełnej sprawności.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="8" width="18" height="12" rx="2"/>
                  <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
                  <circle cx="12" cy="14" r="2"/>
                </svg>
              </div>
              <h3 className="service-title">Sprzedaż opon</h3>
              <p className="service-description">
                Szeroki wybór opon w konkurencyjnych cenach. Pomagamy dobrać odpowiednie opony do Twojego pojazdu.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className="service-title">Felgi aluminiowe</h3>
              <p className="service-description">
                Sprzedaż felg aluminiowych, akcesoriów oraz prostowanie felg. Kompleksowa obsługa.
              </p>
            </div>
          </div>
          <div className="services-cta">
            <Link href="/uslugi" className="btn-secondary">
              Zobacz wszystkie usługi
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=700&fit=crop"
                alt="Wulkanizacja - profesjonalna obsługa"
                width={600}
                height={700}
                className="about-img"
              />
            </div>
            <div className="about-text">
              <div className="section-badge">
                <span className="badge-icon">⚙</span>
                <span>POZNAJ NAS</span>
              </div>
              <h2 className="section-title">Doświadczenie i profesjonalizm</h2>
              <p className="about-description">
                Od lat świadczymy profesjonalne usługi wulkanizacji w Sycowie. Nasza firma specjalizuje się w kompleksowej obsłudze opon i felg dla wszystkich typów pojazdów.
              </p>
              <p className="about-description">
                Zapewniamy najwyższą jakość usług, korzystając z profesjonalnego sprzętu i doświadczonego zespołu. Dbamy o bezpieczeństwo i satysfakcję naszych klientów.
              </p>
              <Link href="/o-nas" className="btn-primary">
                Dowiedz się więcej
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
