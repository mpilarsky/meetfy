import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormInput from "../components/Form/FormInput";
import Button from "../components/Form/Button";

import "./MyAccountPage.css";

import avatarImage from "../assets/account-avatar.png";

function MyAccountPage() {
  const navigate = useNavigate();

  const [accountData, setAccountData] = useState({
    firstName: "Julian",
    lastName: "Vance",
    email: "julian.vance@studio.com",
    phone: "+1 (555) 012-3456",
    city: "San Francisco, CA",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAccountData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    if (accountData.newPassword !== accountData.confirmNewPassword) {
      console.log("New passwords do not match");
      return;
    }

    console.log("Account data:", accountData);

    navigate("/account");
  };

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
                name="firstName"
                value={accountData.firstName}
                onChange={handleChange}
              />

              <FormInput
                label="LAST NAME"
                type="text"
                name="lastName"
                value={accountData.lastName}
                onChange={handleChange}
              />

              <FormInput
                label="EMAIL ADDRESS"
                type="email"
                name="email"
                value={accountData.email}
                onChange={handleChange}
              />

              <FormInput
                label="PHONE NUMBER"
                type="text"
                name="phone"
                value={accountData.phone}
                onChange={handleChange}
              />

              <FormInput
                className="full-width"
                label="CITY / LOCATION"
                type="text"
                name="city"
                value={accountData.city}
                onChange={handleChange}
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
                name="currentPassword"
                value={accountData.currentPassword}
                onChange={handleChange}
                placeholder="Enter current password"
              />

              <FormInput
                label="NEW PASSWORD"
                type="password"
                name="newPassword"
                value={accountData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
              />

              <FormInput
                label="CONFIRM NEW PASSWORD"
                type="password"
                name="confirmNewPassword"
                value={accountData.confirmNewPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
              />
            </form>
          </section>

          <Button
            type="button"
            className="save-account-btn"
            onClick={handleSaveChanges}
          >
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