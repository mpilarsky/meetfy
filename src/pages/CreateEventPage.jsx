import "./CreateEventPage.css";

import tipImage from "../assets/create-event-tip.png";

function CreateEventPage() {
  return (
    <div className="create-event-page">
      <header className="create-event-header">
        <a href="/" className="create-event-logo">MEETFY</a>
        <a href="/login" className="create-event-logout">Logout</a>
      </header>

      <div className="create-event-body">
        <aside className="create-event-sidebar">
          <div className="create-event-sidebar-welcome">
            <span>WELCOME BACK</span>
            <h2>Ready for discovery?</h2>
          </div>

          <nav className="create-event-sidebar-nav">
            <a href="/dashboard">⌘ Dashboard</a>
            <a href="/favorites">♡ Favourites</a>
            <a href="/events">⇲ My Events</a>
            <a href="/account">♟ My Account</a>
          </nav>

          <div className="create-event-sidebar-search">
            <span>FIND EXPERIENCES</span>
            <input type="text" placeholder="⌕  Search..." />
            <button type="button">⌕ Search</button>
          </div>
        </aside>

        <main className="create-event-main">
          <section className="create-event-title">
            <h1>Create New Event</h1>
            <p>Share your unique experience with the Meetfy community.</p>
          </section>

          <form className="create-event-form-card">
            <label className="cover-field">
              <span>EVENT COVER IMAGE</span>

              <div className="cover-upload">
                <div className="upload-icon">☁</div>
                <p>Click or drag to upload high-resolution image</p>
                <small>Recommended: 1600×900px, PNG or JPG</small>
              </div>
            </label>

            <label className="form-line full-width">
              <span>EVENT TITLE</span>
              <input type="text" placeholder="e.g. Minimalist Ceramic Workshop" />
            </label>

            <div className="event-form-grid">
              <label className="form-line">
                <span>CATEGORY</span>
                <select defaultValue="">
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option>Music</option>
                  <option>Culture</option>
                  <option>Food</option>
                  <option>Art</option>
                </select>
              </label>

              <label className="form-line">
                <span>LOCATION</span>
                <input type="text" placeholder="♙   Add a city or venue" />
              </label>

              <label className="form-line">
                <span>DATE</span>
                <input type="text" placeholder="mm/dd/yyyy" />
              </label>

              <label className="form-line">
                <span>TIME</span>
                <input type="text" placeholder="--:-- --" />
              </label>

              <label className="form-line">
                <span>PRICE (USD)</span>
                <input type="text" placeholder="$    0.00" />
              </label>

              <label className="form-line">
                <span>PARTICIPANTS LIMIT</span>
                <input type="text" placeholder="No limit" />
              </label>
            </div>

            <label className="form-line full-width">
              <span>SHORT DESCRIPTION</span>
              <textarea placeholder="Describe the vibe and what attendees should expect..." />
            </label>

            <div className="event-switches">
              <label>
                <input type="checkbox" />
                <span>Indoor Event</span>
              </label>

              <label>
                <input type="checkbox" defaultChecked />
                <span>Public Visibility</span>
              </label>
            </div>

            <button type="submit" className="publish-event-btn">
              Publish Event
            </button>
          </form>

          <section className="create-event-bottom">
            <article className="pro-tip-card">
              <div className="tip-icon">☼</div>
              <div>
                <h2>Pro Tip</h2>
                <p>
                  Events with high-quality landscape photos get 3x more engagement.
                  Make sure your lighting is soft and your subjects are centered!
                </p>
              </div>
            </article>

            <article className="host-card">
              <img src={tipImage} alt="Luxury event table" />
              <p>Join the 500+ hosts creating luxury experiences today.</p>
            </article>
          </section>
        </main>
      </div>

      <footer className="create-event-footer">
        <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>

        <div>
          <a href="/contact">CONTACT</a>
          <a href="/terms">TERMS</a>
        </div>
      </footer>
    </div>
  );
}

export default CreateEventPage;