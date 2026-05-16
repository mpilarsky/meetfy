import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/Form/Button";

import "./PreferencesCreator.css";

import preferencesMoment from "../assets/preferences-moment.png";

function PreferencesCreator() {
  const navigate = useNavigate();

  const [preferences, setPreferences] = useState({
    interests: ["Culture", "Food", "Art"],
    atmosphere: "Social",
    groupSize: "Intimate Pair",
    proximity: 15,
    budget: "Cheap",
    targetDate: "11/20/2024",
    timeOfDay: "Evening",
    environment: "Indoor",
  });

  const toggleInterest = (interest) => {
    setPreferences((prevData) => {
      const isSelected = prevData.interests.includes(interest);

      return {
        ...prevData,
        interests: isSelected
          ? prevData.interests.filter((item) => item !== interest)
          : [...prevData.interests, interest],
      };
    });
  };

  const setPreferenceValue = (name, value) => {
    setPreferences((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (event) => {
    setPreferenceValue("targetDate", event.target.value);
  };

  const handleSavePreferences = () => {
    console.log("Preferences:", preferences);

    navigate("/dashboard");
  };

  return (
    <div className="preferences-page">
      <header className="preferences-header">
        <Link to="/dashboard" className="preferences-logo">
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
                <Button
                  className={
                    preferences.interests.includes("Music") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Music")}
                >
                  ♪ Music
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Sport") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Sport")}
                >
                  ⚒ Sport
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Culture") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Culture")}
                >
                  ☞ Culture
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Networking")
                      ? "active"
                      : ""
                  }
                  onClick={() => toggleInterest("Networking")}
                >
                  ♟ Networking
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Food") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Food")}
                >
                  ♜ Food
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Gaming") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Gaming")}
                >
                  ⌘ Gaming
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Art") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Art")}
                >
                  ☯ Art
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Education") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Education")}
                >
                  ✧ Education
                </Button>
              </div>
            </section>

            <div className="preferences-two-columns">
              <section className="pref-card atmosphere-card">
                <h2>✦ Atmosphere</h2>

                <div className="atmosphere-grid">
                  <Button
                    className={
                      preferences.atmosphere === "Chill" ? "selected" : ""
                    }
                    onClick={() => setPreferenceValue("atmosphere", "Chill")}
                  >
                    ◒<span>Chill</span>
                  </Button>

                  <Button
                    className={
                      preferences.atmosphere === "Social" ? "selected" : ""
                    }
                    onClick={() => setPreferenceValue("atmosphere", "Social")}
                  >
                    ◢<span>Social</span>
                  </Button>

                  <Button
                    className={
                      preferences.atmosphere === "Energetic" ? "selected" : ""
                    }
                    onClick={() =>
                      setPreferenceValue("atmosphere", "Energetic")
                    }
                  >
                    ϟ<span>Energetic</span>
                  </Button>

                  <Button
                    className={
                      preferences.atmosphere === "Romantic" ? "selected" : ""
                    }
                    onClick={() =>
                      setPreferenceValue("atmosphere", "Romantic")
                    }
                  >
                    ♡<span>Romantic</span>
                  </Button>
                </div>
              </section>

              <section className="pref-card group-card">
                <h2>☻ Group Size</h2>

                <div className="radio-list">
                  <label
                    className={
                      preferences.groupSize === "Solo" ? "selected" : ""
                    }
                  >
                    <span>♙ Solo</span>
                    <input
                      type="radio"
                      name="groupSize"
                      checked={preferences.groupSize === "Solo"}
                      onChange={() => setPreferenceValue("groupSize", "Solo")}
                    />
                  </label>

                  <label
                    className={
                      preferences.groupSize === "Intimate Pair"
                        ? "selected"
                        : ""
                    }
                  >
                    <span>▣ Intimate Pair</span>
                    <input
                      type="radio"
                      name="groupSize"
                      checked={preferences.groupSize === "Intimate Pair"}
                      onChange={() =>
                        setPreferenceValue("groupSize", "Intimate Pair")
                      }
                    />
                  </label>

                  <label
                    className={
                      preferences.groupSize === "Vibrant Group"
                        ? "selected"
                        : ""
                    }
                  >
                    <span>♟ Vibrant Group</span>
                    <input
                      type="radio"
                      name="groupSize"
                      checked={preferences.groupSize === "Vibrant Group"}
                      onChange={() =>
                        setPreferenceValue("groupSize", "Vibrant Group")
                      }
                    />
                  </label>
                </div>
              </section>
            </div>

            <section className="pref-card proximity-card">
              <div className="proximity-heading">
                <h2>♙ Proximity</h2>
                <span>{preferences.proximity} km</span>
              </div>

              <div className="range-control">
                <input
                  type="range"
                  name="proximity"
                  min="1"
                  max="50"
                  value={preferences.proximity}
                  onChange={(event) =>
                    setPreferenceValue("proximity", Number(event.target.value))
                  }
                />
              </div>

              <div className="range-labels">
                <p>Nearby (1km)</p>
                <p>Distant (50km)</p>
              </div>
            </section>

            <Button
              className="save-preferences-btn"
              onClick={handleSavePreferences}
            >
              Save preferences <span>→</span>
            </Button>
          </div>

          <aside className="preferences-right">
            <section className="pref-card budget-card">
              <h2>▣ Budget</h2>

              <div className="segmented-control">
                <Button
                  className={preferences.budget === "Free" ? "active" : ""}
                  onClick={() => setPreferenceValue("budget", "Free")}
                >
                  Free
                </Button>

                <Button
                  className={preferences.budget === "Cheap" ? "active" : ""}
                  onClick={() => setPreferenceValue("budget", "Cheap")}
                >
                  Cheap
                </Button>

                <Button
                  className={preferences.budget === "Premium" ? "active" : ""}
                  onClick={() => setPreferenceValue("budget", "Premium")}
                >
                  Premium
                </Button>
              </div>
            </section>

            <section className="pref-card schedule-card">
              <h2>▦ Schedule</h2>

              <label>
                <span>TARGET DATE</span>
                <input
                  type="text"
                  name="targetDate"
                  value={preferences.targetDate}
                  onChange={handleDateChange}
                />
              </label>

              <div className="time-buttons">
                <Button
                  className={
                    preferences.timeOfDay === "Afternoon" ? "active" : ""
                  }
                  onClick={() => setPreferenceValue("timeOfDay", "Afternoon")}
                >
                  ☼ Afternoon
                </Button>

                <Button
                  className={
                    preferences.timeOfDay === "Evening" ? "active" : ""
                  }
                  onClick={() => setPreferenceValue("timeOfDay", "Evening")}
                >
                  ☾ Evening
                </Button>
              </div>
            </section>

            <section className="pref-card environment-card">
              <h2>♙ Environment</h2>

              <div className="environment-buttons">
                <Button
                  className={
                    preferences.environment === "Indoor" ? "active" : ""
                  }
                  onClick={() => setPreferenceValue("environment", "Indoor")}
                >
                  ⌂ Indoor
                </Button>

                <Button
                  className={
                    preferences.environment === "Outdoor" ? "active" : ""
                  }
                  onClick={() => setPreferenceValue("environment", "Outdoor")}
                >
                  ♤ Outdoor
                </Button>
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