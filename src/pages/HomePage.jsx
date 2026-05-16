import { Link } from "react-router-dom";

import "./HomePage.css";

import heroImage from "../assets/home-hero.png";
import missionImage from "../assets/mission-photo.png";

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <Link to="/" className="home-logo">
          MEETFY
        </Link>

        <nav className="home-nav">
          <Link to="/login">Login</Link>
          <Link to="/register" className="register-button">
            Register
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <p className="section-label">A NEW ERA OF CONNECTION</p>
            <h1>Redefining the Art of Gathering</h1>
            <p className="hero-description">
              Discover how Meetfy is restoring sophistication to our social lives
              through curated experiences and intentional connection.
            </p>
          </div>

          <img src={heroImage} alt="People enjoying a conversation" />
        </section>

        <section className="story-section">
          <div className="story-text">
            <p className="section-label">THE HERITAGE</p>
            <h2>Our Story</h2>

            <p>
              Meetfy began with a simple observation: in an increasingly digital
              world, the art of physical social gathering was becoming a lost
              craft. Founded in 2019, we set out to reclaim the sophistication of
              high-society salons while infusing them with modern accessibility.
            </p>

            <p>
              We identified a growing void - a world full of "connections" but
              starving for community. The sophisticated social craft, once
              practiced in literary salons and purposeful dinners, had been
              replaced by transient, digital-first interactions.
            </p>

            <p>
              Today, we stand as the premier platform for those who seek more than
              just networking. We offer a gateway to experiences that linger in
              the memory - a symphony of curated moments designed to elevate the
              human spirit.
            </p>
          </div>

          <div className="stats-list">
            <div className="stat-card">
              <span className="stat-icon">♙</span>
              <strong>5+</strong>
              <p>YEARS OF CURATION</p>
            </div>

            <div className="stat-card">
              <span className="stat-icon">♟</span>
              <strong>10k+</strong>
              <p>MEMBERS GLOBALLY</p>
            </div>

            <div className="stat-card">
              <span className="stat-icon">✦</span>
              <strong>500+</strong>
              <p>EXCLUSIVE EVENTS</p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-image-wrap">
            <img src={missionImage} alt="Meetfy members talking together" />
          </div>

          <div className="mission-text">
            <p className="section-label">OUR PURPOSE</p>
            <h2>Our Mission</h2>

            <h3>
              To foster authentic, intentional human connection by curating
              environments that spark inspiration and meaningful dialogue.
            </h3>

            <p>
              We believe that the environment dictates the quality of conversation.
              By carefully selecting each venue, theme, and guest list, we create
              safe harbors for depth in a world of shallows.
            </p>

            <p>
              Our goal is to build a global tapestry of interconnected souls who
              value substance over status, and presence over performance. Every
              Meetfy event is a step toward a more connected and empathetic world.
            </p>
          </div>
        </section>

        <section className="process-section">
          <div className="process-heading">
            <p className="section-label">THE PROCESS</p>
            <h2>How it Works</h2>
            <p>An ecosystem built on three pillars of sophistication.</p>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <div className="process-icon">⚙</div>
              <h3>Curation</h3>
              <p>
                Every space and experience is hand-selected by our global team of
                curators to ensure the highest standards of aesthetic and
                intellectual stimulation.
              </p>
            </article>

            <article className="process-card">
              <div className="process-icon">⊙</div>
              <h3>Discovery</h3>
              <p>
                Venture beyond your comfort zone. Our platform connects you with
                hidden gems and like-minded individuals you would not otherwise
                meet.
              </p>
            </article>

            <article className="process-card">
              <div className="process-icon">♣</div>
              <h3>Connection</h3>
              <p>
                Experience the magic of intentional interaction. We facilitate the
                transition from digital interest to meaningful physical presence.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>

        <div>
          <Link to="/contact">CONTACT</Link>
          <Link to="/terms">TERMS</Link>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;