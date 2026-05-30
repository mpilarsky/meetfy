import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppData } from "../context/AppDataContext";

import Button from "../components/Form/Button";

import "./PreferencesCreator.css";

import preferencesMoment from "../assets/preferences-moment.png";

import { 
  Music, Activity, Landmark, Network, Utensils, Gamepad2, Palette, BookOpen, 
  Wind, MessageCircle, Zap, Heart, User, Users, UsersRound, MapPin, 
  Wallet, CalendarDays, Sun, Moon, Compass, Home, TreePine, Star, Sparkles 
} from "lucide-react";


const defaultPreferences = {
  interests: ["Culture", "Food", "Art"],
  atmosphere: "Social",
  groupSize: "Intimate Pair",
  proximity: 15,
  budget: "Cheap",
  targetDate: "11/20/2024",
  timeOfDay: "Evening",
  environment: "Indoor",
};

function mergePreferences(savedPreferences) {
  if (!savedPreferences) {
    return defaultPreferences;
  }

  return {
    interests: savedPreferences.interests?.length
      ? savedPreferences.interests
      : defaultPreferences.interests,

    atmosphere:
      savedPreferences.atmosphere || defaultPreferences.atmosphere,

    groupSize:
      savedPreferences.groupSize || defaultPreferences.groupSize,

    proximity:
      savedPreferences.proximity || defaultPreferences.proximity,

    budget:
      savedPreferences.budget || defaultPreferences.budget,

    targetDate:
      savedPreferences.targetDate || defaultPreferences.targetDate,

    timeOfDay:
      savedPreferences.timeOfDay || defaultPreferences.timeOfDay,

    environment:
      savedPreferences.environment || defaultPreferences.environment,
  };
}

function PreferencesCreator() {
  const navigate = useNavigate();
  const { currentUserProfile, updateCurrentUserPreferences } = useAppData();

  const dateInputRef = useRef(null);
  const openDatePicker = () => {
    if (dateInputRef.current && dateInputRef.current.showPicker) {
      dateInputRef.current.showPicker();
    }
  };

  const [preferences, setPreferences] = useState(() =>
    mergePreferences(currentUserProfile?.preferences)
  );

  useEffect(() => {
    setPreferences(mergePreferences(currentUserProfile?.preferences));
  }, [currentUserProfile]);

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

  const handleSavePreferences = () => {
    updateCurrentUserPreferences(preferences);

    console.log("Saved preferences:", preferences);

    navigate("/dashboard");
  };
  
  const iconStyle = { marginRight: '6px', verticalAlign: 'middle' };

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
              <h2><Star size={20} style={iconStyle} /> Your Interests</h2>

              <div className="interest-grid">
                <Button
                  className={
                    preferences.interests.includes("Music") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Music")}
                >
                  <Music size={16} style={iconStyle} /> Music
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Sport") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Sport")}
                >
                  <Activity size={16} style={iconStyle} /> Sport
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Culture") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Culture")}
                >
                  <Landmark size={16} style={iconStyle} /> Culture
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Networking")
                      ? "active"
                      : ""
                  }
                  onClick={() => toggleInterest("Networking")}
                >
                  <Network size={16} style={iconStyle} /> Networking
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Food") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Food")}
                >
                  <Utensils size={16} style={iconStyle} /> Food
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Gaming") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Gaming")}
                >
                  <Gamepad2 size={16} style={iconStyle} /> Gaming
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Art") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Art")}
                >
                  <Palette size={16} style={iconStyle} /> Art
                </Button>

                <Button
                  className={
                    preferences.interests.includes("Education") ? "active" : ""
                  }
                  onClick={() => toggleInterest("Education")}
                >
                  <BookOpen size={16} style={iconStyle} /> Education
                </Button>
              </div>
            </section>

            <div className="preferences-two-columns">
              <section className="pref-card atmosphere-card">
                <h2><Sparkles size={20} style={iconStyle} /> Atmosphere</h2>

                <div className="atmosphere-grid">
                  <Button
                    className={
                      preferences.atmosphere === "Chill" ? "selected" : ""
                    }
                    onClick={() => setPreferenceValue("atmosphere", "Chill")}
                  >
                    <Wind size={16} style={iconStyle} /> <span>Chill</span>
                  </Button>

                  <Button
                    className={
                      preferences.atmosphere === "Social" ? "selected" : ""
                    }
                    onClick={() => setPreferenceValue("atmosphere", "Social")}
                  >
                    <MessageCircle size={16} style={iconStyle} /> <span>Social</span>
                  </Button>

                  <Button
                    className={
                      preferences.atmosphere === "Energetic" ? "selected" : ""
                    }
                    onClick={() =>
                      setPreferenceValue("atmosphere", "Energetic")
                    }
                  >
                    <Zap size={16} style={iconStyle} /> <span>Energetic</span>
                  </Button>

                  <Button
                    className={
                      preferences.atmosphere === "Romantic" ? "selected" : ""
                    }
                    onClick={() =>
                      setPreferenceValue("atmosphere", "Romantic")
                    }
                  >
                    <Heart size={16} style={iconStyle} /> <span>Romantic</span>
                  </Button>
                </div>
              </section>

              <section className="pref-card group-card">
                <h2><Users size={20} style={iconStyle} /> Group Size</h2>

                <div className="radio-list">
                  <label
                    className={
                      preferences.groupSize === "Solo" ? "selected" : ""
                    }
                  >
                    <span><User size={16} style={iconStyle} /> Solo</span>
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
                    <span><Users size={16} style={iconStyle} /> Intimate Pair</span>
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
                    <span><UsersRound size={16} style={iconStyle} /> Vibrant Group</span>
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
                <h2><MapPin size={20} style={iconStyle} /> Proximity</h2>
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
              <h2><Wallet size={20} style={iconStyle} /> Budget</h2>

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
              <h2><CalendarDays size={20} style={iconStyle} /> Schedule</h2>

              <label>
                <span>TARGET DATE</span>
                <style>
                {` .hide-calendar-icon::-webkit-calendar-picker-indicator {
                    display: none !important;
                    -webkit-appearance: none !important;
                  } 
                `}
                </style>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f5f5f5", padding: "8px 12px", borderRadius: "8px", marginTop: "4px" }}>
                  <CalendarDays 
                    size={18} 
                    color="#666" 
                    onClick={openDatePicker} 
                    style={{ cursor: "pointer", flexShrink: 0 }} 
                  />

                  <input
                    ref={dateInputRef}
                    type="date"
                    name="targetDate"
                    className="hide-calendar-icon"
                    value={
                      preferences.targetDate?.includes("/") 
                        ? `${preferences.targetDate.split("/")[2]}-${preferences.targetDate.split("/")[0].padStart(2, '0')}-${preferences.targetDate.split("/")[1].padStart(2, '0')}`
                        : preferences.targetDate
                    }
                    onChange={(event) => {
                      const rawValue = event.target.value; 
                      if (rawValue) {
                        const [year, month, day] = rawValue.split("-");
                        setPreferenceValue("targetDate", `${month}/${day}/${year}`);
                      } else {
                        setPreferenceValue("targetDate", "");
                      }
                    }}
                    style={{ border: "none", outline: "none", background: "transparent", width: "100%", cursor: "text", fontFamily: "inherit" }}
                  />
                </div>
              </label>

              <div className="time-buttons">
                <Button
                  className={
                    preferences.timeOfDay === "Afternoon" ? "active" : ""
                  }
                  onClick={() => setPreferenceValue("timeOfDay", "Afternoon")}
                >
                  {/* TUTAJ: Ikona zamiast krzaczka */}
                  <Sun size={16} style={iconStyle} /> Afternoon
                </Button>

                <Button
                  className={
                    preferences.timeOfDay === "Evening" ? "active" : ""
                  }
                  onClick={() => setPreferenceValue("timeOfDay", "Evening")}
                >
                  {/* TUTAJ: Ikona zamiast krzaczka */}
                  <Moon size={16} style={iconStyle} /> Evening
                </Button>
              </div>
            </section>

            <section className="pref-card environment-card">
              <h2><Compass size={20} style={iconStyle} /> Environment</h2>

              <div className="environment-buttons">
                <Button
                  className={
                    preferences.environment === "Indoor" ? "active" : ""
                  }
                  onClick={() => setPreferenceValue("environment", "Indoor")}
                >
                  <Home size={16} style={iconStyle} /> Indoor
                </Button>

                <Button
                  className={
                    preferences.environment === "Outdoor" ? "active" : ""
                  }
                  onClick={() => setPreferenceValue("environment", "Outdoor")}
                >
                  <TreePine size={16} style={iconStyle} /> Outdoor
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