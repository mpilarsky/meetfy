import "./PreferencesCreator.css";
import preferencesMoment from "../assets/preferences-moment.png";

function PreferencesCreator() {
  return (
    <div className="preferences-page">
      <header className="preferences-header">
        <a href="/" className="preferences-logo">MEETFY</a>
        <a href="/dashboard" className="preferences-dashboard-btn">Dashboard</a>
      </header>

      <main className="preferences-main">
        <section className="preferences-title">
          <h1>Curate Your Experience</h1>
          <p>
            Define your ideal social landscape. We'll tailor discovery to your mood, pace,
            and lifestyle.
          </p>
        </section>

        <section className="preferences-layout">
          <div className="preferences-left">
            <section className="pref-card interests-card">
              <h2>⌘ Your Interests</h2>

              <div className="interest-grid">
                <button>♪ Music</button>
                <button>⚒ Sport</button>
                <button className="active">☞ Culture</button>
                <button>♟ Networking</button>
                <button className="active">♜ Food</button>
                <button>⌘ Gaming</button>
                <button className="active">☯ Art</button>
                <button>✧ Education</button>
              </div>
            </section>

            <div className="preferences-two-columns">
              <section className="pref-card atmosphere-card">
                <h2>✦ Atmosphere</h2>

                <div className="atmosphere-grid">
                  <button>◒<span>Chill</span></button>
                  <button className="selected">◢<span>Social</span></button>
                  <button>ϟ<span>Energetic</span></button>
                  <button>♡<span>Romantic</span></button>
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

            <button className="save-preferences-btn">
              Save preferences <span>→</span>
            </button>
          </div>

          <aside className="preferences-right">
            <section className="pref-card budget-card">
              <h2>▣ Budget</h2>

              <div className="segmented-control">
                <button>Free</button>
                <button className="active">Cheap</button>
                <button>Premium</button>
              </div>
            </section>

            <section className="pref-card schedule-card">
              <h2>▦ Schedule</h2>

              <label>
                <span>TARGET DATE</span>
                <input type="text" value="11/20/2024" readOnly />
              </label>

              <div className="time-buttons">
                <button>☼ Afternoon</button>
                <button className="active">☾ Evening</button>
              </div>
            </section>

            <section className="pref-card environment-card">
              <h2>♙ Environment</h2>

              <div className="environment-buttons">
                <button className="active">⌂ Indoor</button>
                <button>♤ Outdoor</button>
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
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default PreferencesCreator;