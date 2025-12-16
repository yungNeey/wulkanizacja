import Link from 'next/link';
import Logo from './Logo';
import './logo.css';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section - Company Info & Logo */}
          <div className="footer-left">
            <div className="footer-logo">
              <Logo variant="footer" link={true} />
            </div>
            <p className="footer-description">
              Profesjonalna wulkanizacja w Sycowie. Oferujemy kompleksowe usługi wymiany i naprawy opon.
            </p>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="footer-nav">
            <div className="footer-nav-column">
              <h3 className="footer-nav-title">Menu</h3>
              <ul className="footer-nav-list">
                <li>
                  <Link href="/" className="footer-nav-link">
                    Strona Główna
                  </Link>
                </li>
                <li>
                  <Link href="/o-nas" className="footer-nav-link">
                    O nas
                  </Link>
                </li>
                <li>
                  <Link href="/uslugi" className="footer-nav-link">
                    Usługi
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="footer-nav-link">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h3 className="footer-nav-title">Kontakt</h3>
              <ul className="footer-nav-list">
                <li className="footer-contact-item">ul. Kępińska 8</li>
                <li className="footer-contact-item">56-500 Syców</li>
                <li>
                  <a href="tel:575552835" className="footer-nav-link">
                    575 552 835
                  </a>
                </li>
                <li>
                  <a href="mailto:kinastowskiopony@gmail.com" className="footer-nav-link">
                    kinastowskiopony@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Wulkanizacja. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
