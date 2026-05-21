import "./App.css";

function App() {
  const whatsappNumber = "2677491467";

  const portfolio = [
    "/portfolio1.png",
    "/portfolio2.png",
    "/portfolio3.png",
    "/portfolio4.png",
    "/portfolio5.png",
    "/portfolio6.png",
    "/portfolio7.png",
  ];

  const services = [
    "Flyer Design",
    "Poster Design",
    "Business Branding",
    "Logo Design",
    "Social Media Ads",
    "Event Promotions",
  ];

  const sendToWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Kreative KayGee Designs, I would like to place an order."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="website">
      <a
        className="floating-whatsapp"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
      >
        WhatsApp
      </a>

      <section className="hero">
        <nav className="navbar">
          <h1>Kreative KayGee</h1>
          <button onClick={sendToWhatsApp}>Order Now</button>
        </nav>

        <div className="hero-content">
          <p className="tag">Kreative KayGee Designs™</p>
          <h2>
            Bright designs that make your brand <span>stand out.</span>
          </h2>
          <p className="hero-text">
            Flyers, posters, branding and social media graphics made with clean,
            bold and modern visual style.
          </p>

          <div className="hero-buttons">
            <button onClick={sendToWhatsApp}>Place WhatsApp Order</button>
            <a href="#portfolio">View Recent Work</a>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <p className="section-tag">Recent Work</p>
        <h2>Portfolio Showcase</h2>

        <div className="portfolio-grid">
          {portfolio.map((image, index) => (
            <div className="work-card" key={index}>
              <img src={image} alt={`Kreative KayGee work ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="services">
        <p className="section-tag">What We Do</p>
        <h2>Design Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <span>0{index + 1}</span>
              <h3>{service}</h3>
              <p>Professional, clean and eye-catching designs ready for digital or print use.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="order-section">
        <h2>Ready to order your design?</h2>
        <p>Click below and send your request straight to WhatsApp.</p>
        <button onClick={sendToWhatsApp}>Start Order on WhatsApp</button>
      </section>
    </div>
  );
}

export default App;