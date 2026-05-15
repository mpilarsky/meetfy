import "./MyAccountPage.css";

import avatarImage from "../assets/account-avatar.png";

function MyAccountPage() {
  return (
    <div className="account-page">
      <header className="account-header">
        <a href="/" className="account-logo">MEETFY</a>
        <a href="/login" className="account-logout">Logout</a>
      </header>

      <div className="account-body">
        <aside className="account-sidebar">
          <div className="account-sidebar-welcome">
            <span>WELCOME BACK</span>
            <h2>Ready for discovery?</h2>
          </div>

          <nav className="account-sidebar-nav">
            <a href="/dashboard">⌘ Dashboard</a>
            <a href="/favorites">♡ Favourites</a>
            <a href="/events">⇲ My Events</a>
            <a href="/account">♟ My Account</a>
          </nav>

          <div className="account-sidebar-search">
            <span>FIND EXPERIENCES</span>
            <input type="text" placeholder="⌕  Search..." />
            <button type="button">⌕ Search</button>
          </div>

          <a href="/create-event" className="account-create-event">
            + Create Event
          </a>
        </aside>

        <main className="account-main">
          <section className="account-title">
            <h1>My Account</h1>
            <p>Manage your profile information and account preferences.</p>
          </section>

          <section className="account-grid">
            <div className="account-left-column">
              <section className="account-card profile-card">
                <h2>Profile Information</h2>

                <div className="avatar-row">
                  <img src={avatarImage} alt="User avatar" />

                  <div className="avatar-actions">
                    <div>
                      <button type="button">Change Avatar</button>
                      <button type="button" className="remove-avatar">Remove</button>
                    </div>
                    <p>JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>

                <form className="profile-form">
                  <label>
                    <span>FIRST NAME</span>
                    <input type="text" value="Julian" readOnly />
                  </label>

                  <label>
                    <span>LAST NAME</span>
                    <input type="text" value="Vance" readOnly />
                  </label>

                  <label>
                    <span>EMAIL ADDRESS</span>
                    <input type="email" value="julian.vance@studio.com" readOnly />
                  </label>

                  <label>
                    <span>PHONE NUMBER</span>
                    <input type="text" value="+1 (555) 012-3456" readOnly />
                  </label>

                  <label className="full-width">
                    <span>CITY / LOCATION</span>
                    <input type="text" value="San Francisco, CA" readOnly />
                  </label>
                </form>
              </section>

              <section className="account-card security-card">
                <h2>Security</h2>

                <form className="security-form">
                  <label className="full-width">
                    <span>CURRENT PASSWORD</span>
                    <input type="password" value="password123" readOnly />
                  </label>

                  <label>
                    <span>NEW PASSWORD</span>
                    <input type="password" placeholder="Enter new password" />
                  </label>

                  <label>
                    <span>CONFIRM NEW PASSWORD</span>
                    <input type="password" placeholder="Confirm new password" />
                  </label>
                </form>
              </section>

              <button type="button" className="save-account-btn">
                Save Changes
              </button>
            </div>

            <aside className="account-card preferences-summary">
              <div className="preferences-summary-header">
                <h2>Preferences</h2>
                <button type="button" aria-label="Edit preferences">✎</button>
              </div>

              <div className="summary-block">
                <h3>FAVORITE CATEGORIES</h3>
                <div className="category-tags">
                  <span>Jazz Night</span>
                  <span>Art Gallery</span>
                  <span>Architecture</span>
                  <span>Wine Tasting</span>
                </div>
              </div>

              <div className="summary-block">
                <h3>PREFERRED BUDGET</h3>
                <p>Mid-Range to Premium ($$-$$$)</p>
              </div>

              <div className="summary-block">
                <h3>EVENT TYPE</h3>
                <p>Intimate Gatherings, Party</p>
              </div>

              <div className="summary-block">
                <h3>GROUP SIZE</h3>
                <p>4 - 8 People</p>
              </div>

              <a href="/preferences" className="edit-preferences-btn">
                EDIT PREFERENCES
              </a>
            </aside>
          </section>
        </main>
      </div>

      <footer className="account-footer">
        <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>

        <div>
          <a href="/contact">CONTACT</a>
          <a href="/terms">TERMS</a>
        </div>
      </footer>
    </div>
  );
}

export default MyAccountPage;