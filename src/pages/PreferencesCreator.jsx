import { Link } from "react-router-dom";

import Button from "../components/Form/Button";

import "./PreferencesCreator.css";

import preferencesMoment from "../assets/preferences-moment.png";

function PreferencesCreator() {
  return (
    <div className="preferences-page">
      <header className="preferences-header">
        <Link to="/" className="preferences-logo">
          MEETFY
        </Link>

        <Link to="/dashboard" className="preferences-dashboard-btn">
          Dashboard
        </Link>
      </header>

      <main className="preferences-main">
        <section className="preferences-title">
          <h1>Curate Your Experience</h1>
          <p>
            Define your ideal social landscape. We'll tailor discovery to your
            mood, pace, and lifestyle.
          </p>
        </section>

        <section className="preferences-layout">
          <div className="preferences-left">
            <section className="pref-card interests-card">
              <h2>⌘ Your Interests</h2>

              <div className="interest-grid">
                <Button>♪ Music</Button>
                <Button>⚒ Sport</Button>
                <Button className="active">☞ Culture</Button>
                <Button>♟ Networking</Button>
                <Button className="active">♜ Food</Button>
                <Button>⌘ Gaming</Button>
                <Button className="active">☯ Art</Button>
                <Button>✧ Education</Button>
              </div>
            </section>

            <div className="preferences-two-columns">
              <section className="pref-card atmosphere-card">
                <h2>✦ Atmosphere</h2>

                <div className="atmosphere-grid">
                  <Button>
                    ◒<span>Chill</span>
                  </Button>

                  <Button className="selected">
                    ◢<span>Social</span>
                  </Button>

                  <Button>
                    ϟ<span>Energetic</span>
                  </Button>

                  <Button>
                    ♡<span>Romantic</span>
                  </Button>
                </div>
              </section>

              <section className="pref-card group-card">
                <h2>☻ Group Size</h2>

                <div className="radio-list">
                  <label>
                    <span>♙ Solo</span>
                    <input type="radio" name="group" />
                  </label>

                  <label className="selected">
                    <span>▣ Intimate Pair</span>
                    <input type="radio" name="group" defaultChecked />
                  </label>

                  <label>
                    <span>♟ Vibrant Group</span>
                    <input type="radio" name="group" />
                  </label>
                </div>
              </section>
            </div>

            <section className="pref-card proximity-card">
              <div className="proximity-heading">
                <h2>♙ Proximity</h2>
                <span>15 km</span>
              </div>

              <div className="range-line">
                <div className="range-fill" />
                <div className="range-dot" />
              </div>

              <div className="range-labels">
                <p>Nearby (1km)</p>
                <p>Distant (50km)</p>
              </div>
            </section>

            <Button className="save-preferences-btn">
              Save preferences <span>→</span>
            </Button>
          </div>

          <aside className="preferences-right">
            <section className="pref-card budget-card">
              <h2>▣ Budget</h2>

              <div className="segmented-control">
                <Button>Free</Button>
                <Button className="active">Cheap</Button>
                <Button>Premium</Button>
              </div>
            </section>

            <section className="pref-card schedule-card">
              <h2>▦ Schedule</h2>

              <label>
                <span>TARGET DATE</span>
                <input type="text" value="11/20/2024" readOnly />
              </label>

              <div className="time-buttons">
                <Button>☼ Afternoon</Button>
                <Button className="active">☾ Evening</Button>
              </div>
            </section>

            <section className="pref-card environment-card">
              <h2>♙ Environment</h2>

              <div className="environment-buttons">
                <Button className="active">⌂ Indoor</Button>
                <Button>♤ Outdoor</Button>
              </div>
            </section>

            <div className="moment-card">
              <img src={preferencesMoment} alt="Elegant dinner moment" />
              <p>Finding your next perfect moment.</p>
            </div>
          </aside>
        </section>
      </main>

      <footer className="preferences-footer">
        <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>

        <div>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </footer>
    </div>
  );
}

export default PreferencesCreator;