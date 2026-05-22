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
  ];

  const sendToWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Kreative KayGee Designs, I would like to place an order."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
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

      <section className="hero">

        <div className="overlay"></div>

        <nav>
          <h1>KREATIVE KAYGEE DESIGNS</h1>

          <button onClick={sendToWhatsApp}>
            Order Now
          </button>
        </nav>

        <div className="hero-content">

          <div className="hero-buttons">
            <button onClick={sendToWhatsApp}>
              Place WhatsApp Order
            </button>

            <a href="#portfolio">
              View Portfolio
            </a>
          </div>

          <div className="socials">
            <a href={instagramLink} target="_blank" rel="noreferrer">
              Instagram
            </a>

            <a href={facebookLink} target="_blank" rel="noreferrer">
              Facebook
            </a>

            <a href={tiktokLink} target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>

        </div>
      </section>

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

        <p className="section-badge">
          Recent Work
        </p>

        <h2>
          Portfolio Showcase
        </h2>

        <div className="featured-work">
          <img src={portfolio[0]} alt="" />
          <img src={portfolio[1]} alt="" />
        </div>

        <div className="portfolio-grid">

          {portfolio.slice(2).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
            />
          ))}

        </div>

      </section>

      <section className="services">

        <p className="section-badge">
          Our Services
        </p>

        <h2>
          Clean, modern and impactful visuals.
        </h2>

        <div className="service-grid">

          <div>
            <h3>Flyer Design</h3>
            <p>Events, parties and business promotions.</p>
          </div>

          <div>
            <h3>Poster Design</h3>
            <p>Modern poster designs for print and social media.</p>
          </div>

          <div>
            <h3>Brand Identity</h3>
            <p>Logos, branding systems and visual identity.</p>
          </div>

          <div>
            <h3>Social Media Graphics</h3>
            <p>Instagram, TikTok, Facebook and WhatsApp visuals.</p>
          </div>

        </div>

      </section>

      <section className="order">

        <h2>
          Ready to build your brand?
        </h2>

        <p>
          Send your design request directly on WhatsApp.
        </p>

        <button onClick={sendToWhatsApp}>
          Start Order
        </button>

      </section>

    </div>
  );
}

export default App;