import { useState } from "react";
import "./App.css";

function App() {
  const whatsappNumber = "2677491467";

  const instagramLink = "https://instagram.com/YOUR_INSTAGRAM";
  const facebookLink = "https://facebook.com/YOUR_FACEBOOK";
  const tiktokLink = "https://tiktok.com/@YOUR_TIKTOK";

  const portfolio = [
    "/portfolio1.png",
    "/portfolio2.png",
    "/portfolio3.png",
    "/portfolio4.png",
    "/portfolio5.png",
    "/portfolio6.png",
    "/portfolio7.png",
    "/portfolio8.png",
    "/portfolio9.png",
    "/portfolio10.png",
    "/portfolio11.png",
    "/portfolio12.png",
    "/portfolio13.png",
    "/portfolio14.png",
    "/portfolio15.png",
    "/portfolio16.png",
    "/portfolio17.png",
    "/portfolio18.png",
    "/portfolio19.png",
    "/portfolio20.png",
  ];

  const [showAll, setShowAll] = useState(false);

  const visiblePortfolio = showAll ? portfolio : portfolio.slice(0, 5);

  const sendToWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Kreative KayGee Designs, I would like to place an order."
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="site">
      <a
        className="floating-whatsapp"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <header className="hero">
        <nav className="navbar">
          <img
  src="/logo.png"
  alt="Kreative KayGee Designs Logo"
  className="navbar-logo"
/>

          <div className="nav-links">
            <a href="#portfolio">Work</a>
            <a href="#services">Services</a>
            <button onClick={sendToWhatsApp}>Order Now</button>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Graphic Design • Branding • Visual Storytelling</p>

            <h2>
              Designs that make your brand <span>look unforgettable.</span>
            </h2>

            <p className="hero-description">
              Kreative KayGee Designs creates clean, bold and modern visuals for
              flyers, posters, social media campaigns, brand identity and business promotions.
            </p>

            <div className="hero-buttons">
              <button onClick={sendToWhatsApp}>Place WhatsApp Order</button>
              <a href="#portfolio">View Portfolio</a>
            </div>

            <div className="socials">
              <a href={instagramLink} target="_blank" rel="noreferrer">Instagram</a>
              <a href={facebookLink} target="_blank" rel="noreferrer">Facebook</a>
              <a href={tiktokLink} target="_blank" rel="noreferrer">TikTok</a>
            </div>
          </div>

          <div className="hero-card logo-card">
  <img src="/logo.png" alt="Kreative KayGee Logo" />
</div>
        </div>
      </header>

      <section className="stats">
        <div>
          <h3>150+</h3>
          <p>Creative Designs Delivered</p>
        </div>

        <div>
          <h3>15+</h3>
          <p>Returning Clients</p>
        </div>

        <div>
          <h3>100%</h3>
          <p>Creative Energy</p>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <p className="section-badge">Recent Work</p>
        <h2>Portfolio Showcase</h2>

        <div className="portfolio-grid">
          {visiblePortfolio.map((image, index) => (
            <div className="work-card" key={index}>
              <img src={image} alt={`Kreative KayGee design ${index + 1}`} />
            </div>
          ))}
        </div>

        {portfolio.length > 5 && (
          <button className="view-more" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View More Designs"}
          </button>
        )}
      </section>

      <section className="services" id="services">
        <p className="section-badge white">Our Services</p>
        <h2>Creative visuals with purpose.</h2>

        <div className="service-grid">
          <div>
            <h3>Flyer Design</h3>
            <p>Events, parties, business promos, church events and launches.</p>
          </div>

          <div>
            <h3>Poster Design</h3>
            <p>Clean posters for digital sharing, print and campaign promotion.</p>
          </div>

          <div>
            <h3>Brand Identity</h3>
            <p>Logos, brand direction, business cards and visual systems.</p>
          </div>

          <div>
            <h3>Social Media Graphics</h3>
            <p>Facebook, Instagram, TikTok and WhatsApp-ready designs.</p>
          </div>
        </div>
      </section>

      <section className="order">
        <h2>Ready to create something powerful?</h2>
        <p>Send your request straight to WhatsApp and let’s build your next design.</p>
        <button onClick={sendToWhatsApp}>Start Order</button>
      </section>
    </div>
  );
}

export default App;