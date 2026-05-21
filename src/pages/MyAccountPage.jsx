import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppData } from "../context/AppDataContext";

import FormInput from "../components/Form/FormInput";
import Button from "../components/Form/Button";

import "./MyAccountPage.css";

import avatarImage from "../assets/account-avatar.png";

const MAX_AVATAR_SIZE = 1 * 1024 * 1024;

const defaultAccountData = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  city: "",
  avatar: "",
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

function MyAccountPage() {
  const navigate = useNavigate();
  const { currentUserProfile, updateCurrentUser } = useAppData();

  const avatarInputRef = useRef(null);

  const [accountData, setAccountData] = useState(defaultAccountData);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (currentUserProfile) {
      setAccountData((prevData) => ({
        ...prevData,
        name: currentUserProfile.name || "",
        surname: currentUserProfile.surname || "",
        email: currentUserProfile.email || "",
        phone: currentUserProfile.phone || "",
        city: currentUserProfile.city || "",
        avatar: currentUserProfile.avatar || "",
      }));
    }
  }, [currentUserProfile]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAccountData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarButtonClick = () => {
    avatarInputRef.current?.click();
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      setErrorMessage("Please upload JPG or PNG image.");
      return;
    }

    if (file.size > MAX_AVATAR_SIZE) {
      setErrorMessage("Avatar image is too large. Maximum size is 1 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const avatarDataUrl = reader.result;

      setAccountData((prevData) => ({
        ...prevData,
        avatar: avatarDataUrl,
      }));

      updateCurrentUser({
        avatar: avatarDataUrl,
      });

      setMessage("Avatar updated.");
      setErrorMessage("");
    };

    reader.onerror = () => {
      setErrorMessage("Could not read selected image.");
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    setAccountData((prevData) => ({
      ...prevData,
      avatar: "",
    }));

    updateCurrentUser({
      avatar: "",
    });

    if (avatarInputRef.current) {
      avatarInputRef.current.value = "";
    }

    setMessage("Avatar removed.");
    setErrorMessage("");
  };

  const handleSaveChanges = () => {
    setMessage("");
    setErrorMessage("");

    if (
      accountData.newPassword ||
      accountData.confirmNewPassword ||
      accountData.currentPassword
    ) {
      if (accountData.newPassword !== accountData.confirmNewPassword) {
        setErrorMessage("New passwords do not match.");
        return;
      }

      console.log(
        "Password change is not implemented yet. Firebase password update can be added later."
      );
    }

    updateCurrentUser({
      name: accountData.name,
      surname: accountData.surname,
      phone: accountData.phone,
      city: accountData.city,
      avatar: accountData.avatar,
    });

    setAccountData((prevData) => ({
      ...prevData,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    }));

    setMessage("Account data saved.");
    navigate("/account");
  };

  const preferences = currentUserProfile?.preferences;
  const avatarSource = accountData.avatar || avatarImage;

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
              <img src={avatarSource} alt="User avatar" />

              <div className="avatar-actions">
                <input
                  ref={avatarInputRef}
                  className="avatar-file-input"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleAvatarChange}
                />

                <div>
                  <button type="button" onClick={handleAvatarButtonClick}>
                    Change Avatar
                  </button>

                  <button
                    type="button"
                    className="remove-avatar"
                    onClick={handleRemoveAvatar}
                  >
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
                name="name"
                value={accountData.name}
                onChange={handleChange}
              />

              <FormInput
                label="LAST NAME"
                type="text"
                name="surname"
                value={accountData.surname}
                onChange={handleChange}
              />

              <FormInput
                label="EMAIL ADDRESS"
                type="email"
                name="email"
                value={accountData.email}
                onChange={handleChange}
                readOnly
              />

              <FormInput
                label="PHONE NUMBER"
                type="text"
                name="phone"
                value={accountData.phone}
                onChange={handleChange}
                placeholder="+48 000 000 000"
              />

              <FormInput
                className="full-width"
                label="CITY / LOCATION"
                type="text"
                name="city"
                value={accountData.city}
                onChange={handleChange}
                placeholder="Krakow, Poland"
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

            <p className="security-note">
              Password update can be connected to Firebase later.
            </p>
          </section>

          {errorMessage && <p className="account-error">{errorMessage}</p>}
          {message && <p className="account-message">{message}</p>}

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

            <Link to="/preferences" aria-label="Edit preferences">
              ✎
            </Link>
          </div>

          <div className="summary-block">
            <h3>FAVORITE CATEGORIES</h3>

            <div className="category-tags">
              {preferences?.interests?.length ? (
                preferences.interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))
              ) : (
                <span>No preferences yet</span>
              )}
            </div>
          </div>

          <div className="summary-block">
            <h3>PREFERRED BUDGET</h3>
            <p>{preferences?.budget || "Not selected"}</p>
          </div>

          <div className="summary-block">
            <h3>ATMOSPHERE</h3>
            <p>{preferences?.atmosphere || "Not selected"}</p>
          </div>

          <div className="summary-block">
            <h3>GROUP SIZE</h3>
            <p>{preferences?.groupSize || "Not selected"}</p>
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