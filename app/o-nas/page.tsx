import Image from 'next/image';
import '../about.css';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="section-badge">
              <span className="badge-icon">⚙</span>
              <span>POZNAJ NAS</span>
            </div>
            <h1 className="about-hero-title">
              Doświadczenie i profesjonalizm
              <br />
              w każdym szczególe
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="about-main">
        <div className="container">
          <div className="about-main-content">
            <div className="about-main-image">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=900&fit=crop"
                alt="Zespół wulkanizacji"
                width={800}
                height={900}
                className="about-main-img"
              />
            </div>
            <div className="about-main-text">
              <h2 className="about-main-title">Nasza historia</h2>
              <p className="about-main-description">
                Od lat świadczymy profesjonalne usługi wulkanizacji w Sycowie. Nasza firma specjalizuje się w kompleksowej obsłudze opon i felg dla wszystkich typów pojazdów - od samochodów osobowych, przez pojazdy dostawcze, aż po motocykle.
              </p>
              <p className="about-main-description">
                Zapewniamy najwyższą jakość usług, korzystając z profesjonalnego sprzętu i doświadczonego zespołu. Dbamy o bezpieczeństwo i satysfakcję naszych klientów, oferując kompleksową obsługę w jednym miejscu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <h3 className="mission-vision-title">Nasza misja</h3>
              <p className="mission-vision-description">
                Naszą misją jest zapewnienie kompleksowej obsługi opon i felg na najwyższym poziomie. Stawiamy na jakość, profesjonalizm i zadowolenie klienta.
              </p>
              <ul className="mission-vision-list">
                <li>Profesjonalna obsługa</li>
                <li>Jakość usług</li>
                <li>Zadowolenie klienta</li>
              </ul>
            </div>
            <div className="mission-vision-card">
              <h3 className="mission-vision-title">Nasza wizja</h3>
              <p className="mission-vision-description">
                Dążymy do bycia wiodącą firmą wulkanizacyjną w regionie, znaną z niezawodności, nowoczesnych rozwiązań i indywidualnego podejścia do każdego klienta.
              </p>
              <ul className="mission-vision-list">
                <li>Lider w regionie</li>
                <li>Nowoczesne rozwiązania</li>
                <li>Indywidualne podejście</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-icon">⚙</span>
              <span>NASZE WARTOŚCI</span>
            </div>
            <h2 className="section-title">Co nas wyróżnia</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <h3 className="value-title">Doświadczenie</h3>
              <p className="value-description">
                Wieloletnie doświadczenie w branży wulkanizacyjnej oraz ciągłe doskonalenie umiejętności.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12A10 10 0 1 1 5.93 18.5"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="value-title">Jakość</h3>
              <p className="value-description">
                Wykorzystujemy tylko sprawdzone materiały i nowoczesny sprzęt, gwarantując najwyższą jakość usług.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21V19A4 4 0 0 0 13 15H5A4 4 0 0 0 1 19V21"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21V19A4 4 0 0 0 19.5 15.5"/>
                  <path d="M16 3.13A4 4 0 0 1 16 10.87"/>
                </svg>
              </div>
              <h3 className="value-title">Zespół</h3>
              <p className="value-description">
                Wykwalifikowany zespół specjalistów, gotowy zapewnić profesjonalną obsługę na każdym etapie.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="value-title">Terminowość</h3>
              <p className="value-description">
                Szanujemy czas naszych klientów i realizujemy zlecenia terminowo, bez niepotrzebnych opóźnień.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

