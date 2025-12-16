import Image from 'next/image';
import Link from 'next/link';
import '../services.css';

export default function ServicesPage() {
  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6V12L16 14"/>
        </svg>
      ),
      title: 'Wymiana opon',
      description: 'Profesjonalna wymiana opon dla wszystkich typów pojazdów. Obsługujemy samochody osobowe, pojazdy dostawcze oraz motocykle. Zapewniamy precyzyjny montaż i wyważanie kół.',
      details: [
        'Samochody osobowe',
        'Pojazdy dostawcze',
        'Motocykle',
        'Wyważanie kół',
        'Sprawdzenie ciśnienia'
      ]
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: 'Naprawa opon (wulkanizacja)',
      description: 'Specjalistyczna naprawa opon metodą wulkanizacji. Przywracamy opony do pełnej sprawności, naprawiając przebicia i inne uszkodzenia. Wykorzystujemy nowoczesne metody naprawy.',
      details: [
        'Naprawa przebić',
        'Wulkanizacja',
        'Naprawa bocznych uszkodzeń',
        'Sprawdzenie stanu opony',
        'Gwarancja naprawy'
      ]
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="8" width="18" height="12" rx="2"/>
          <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
          <circle cx="12" cy="14" r="2"/>
        </svg>
      ),
      title: 'Sprzedaż opon',
      description: 'Szeroki wybór opon w konkurencyjnych cenach. Pomagamy dobrać odpowiednie opony do Twojego pojazdu, stylu jazdy i budżetu. Oferujemy opony letnie, zimowe i całoroczne.',
      details: [
        'Opony letnie',
        'Opony zimowe',
        'Opony całoroczne',
        'Wszystkie rozmiary',
        'Doradztwo przy wyborze'
      ]
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: 'Sprzedaż felg aluminiowych',
      description: 'Oferujemy szeroki wybór felg aluminiowych oraz akcesoriów. Dystanse, śruby, pierścienie centrujące - wszystko czego potrzebujesz do kompleksowego wyposażenia swojego pojazdu.',
      details: [
        'Felgi aluminiowe',
        'Dystanse',
        'Śruby',
        'Pierścienie centrujące',
        'Doradztwo techniczne'
      ]
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>
      ),
      title: 'Kompleksowa usługa czujników ciśnienia TPMS',
      description: 'Pełna obsługa systemów TPMS (Tire Pressure Monitoring System). Oferujemy montaż, kalibrację, naprawę i wymianę czujników ciśnienia w oponach. Zapewniamy bezpieczeństwo i komfort jazdy.',
      details: [
        'Montaż czujników',
        'Kalibracja systemu',
        'Naprawa czujników',
        'Diagnostyka TPMS',
        'Kompleksowa obsługa'
      ]
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9 12L11 14L15 10"/>
        </svg>
      ),
      title: 'Sprzedaż czujników TPMS',
      description: 'Oferujemy sprzedaż oryginalnych i zamiennych czujników TPMS dla wszystkich popularnych marek pojazdów. Pomagamy dobrać odpowiedni model do Twojego samochodu.',
      details: [
        'Oryginalne czujniki',
        'Zamienniki',
        'Wszystkie marki',
        'Doradztwo',
        'Gwarancja jakości'
      ]
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z"/>
          <path d="M7 10H7.01"/>
          <path d="M7 14H7.01"/>
        </svg>
      ),
      title: 'Prostowanie felg aluminiowych',
      description: 'Specjalistyczne prostowanie felg aluminiowych przywraca ich pierwotny kształt po uszkodzeniach. Wykorzystujemy profesjonalny sprzęt do precyzyjnej naprawy geometrycznej felg.',
      details: [
        'Prostowanie felg',
        'Naprawa uszkodzeń',
        'Regeneracja',
        'Sprawdzenie geometrii',
        'Gwarancja naprawy'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <div className="section-badge">
              <span className="badge-icon">⚙</span>
              <span>NASZE USŁUGI</span>
            </div>
            <h1 className="services-hero-title">
              Kompleksowa obsługa
              <br />
              opon i felg
            </h1>
            <p className="services-hero-description">
              Oferujemy pełen zakres usług wulkanizacyjnych - od wymiany opon, przez naprawy, aż po kompleksową obsługę TPMS i prostowanie felg.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list">
        <div className="container">
          <div className="services-list-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-item-icon">
                  {service.icon}
                </div>
                <h3 className="service-item-title">{service.title}</h3>
                <p className="service-item-description">{service.description}</p>
                <ul className="service-item-details">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="services-image-section">
        <div className="container">
          <div className="services-image-content">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
              alt="Profesjonalna wulkanizacja"
              width={1200}
              height={600}
              className="services-section-img"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-content">
            <h2 className="services-cta-title">Potrzebujesz pomocy?</h2>
            <p className="services-cta-description">
              Skontaktuj się z nami, a pomożemy dobrać odpowiednie rozwiązanie dla Twojego pojazdu.
            </p>
            <Link href="/kontakt" className="btn-primary">
              Skontaktuj się
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

