import { Link } from "react-router-dom";

import FormInput from "../components/Form/FormInput";
import Button from "../components/Form/Button";

import "./MyAccountPage.css";

import avatarImage from "../assets/account-avatar.png";

function MyAccountPage() {
  return (
    <>
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
                  <button type="button" className="remove-avatar">
                    Remove
                  </button>
                </div>

                <p>JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            <form className="profile-form">
              <FormInput
                label="FIRST NAME"
                type="text"
                value="Julian"
                readOnly
              />

              <FormInput
                label="LAST NAME"
                type="text"
                value="Vance"
                readOnly
              />

              <FormInput
                label="EMAIL ADDRESS"
                type="email"
                value="julian.vance@studio.com"
                readOnly
              />

              <FormInput
                label="PHONE NUMBER"
                type="text"
                value="+1 (555) 012-3456"
                readOnly
              />

              <FormInput
                className="full-width"
                label="CITY / LOCATION"
                type="text"
                value="San Francisco, CA"
                readOnly
              />
            </form>
          </section>

          <section className="account-card security-card">
            <h2>Security</h2>

            <form className="security-form">
              <FormInput
                className="full-width"
                label="CURRENT PASSWORD"
                type="password"
                value="password123"
                readOnly
              />

              <FormInput
                label="NEW PASSWORD"
                type="password"
                placeholder="Enter new password"
              />

              <FormInput
                label="CONFIRM NEW PASSWORD"
                type="password"
                placeholder="Confirm new password"
              />
            </form>
          </section>

          <Button type="button" className="save-account-btn">
            Save Changes
          </Button>
        </div>

        <aside className="account-card preferences-summary">
          <div className="preferences-summary-header">
            <h2>Preferences</h2>

            <button type="button" aria-label="Edit preferences">
              ✎
            </button>
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

          <Link to="/preferences" className="edit-preferences-btn">
            EDIT PREFERENCES
          </Link>
        </aside>
      </section>
    </>
  );
}

export default MyAccountPage;