import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, Lightbulb, CalendarDays, MapPin } from "lucide-react"; 
import { useAppData } from "../context/AppDataContext";

import FormInput from "../components/Form/FormInput";
import FormTextarea from "../components/Form/FormTextarea";
import Button from "../components/Form/Button";

import "./CreateEventPage.css";

import tipImage from "../assets/create-event-tip.png";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

function CreateEventPage() {
  const navigate = useNavigate();
  const { createEvent } = useAppData();

  const fileInputRef = useRef(null);
  const dateInputRef = useRef(null);

  const [eventData, setEventData] = useState({
    title: "",
    category: "",
    location: "",
    date: "",
    time: "",
    price: "",
    participantsLimit: "",
    description: "",
    indoor: false,
    publicVisibility: true,
    image: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [imageFileName, setImageFileName] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setEventData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCoverClick = () => {
    fileInputRef.current?.click();
  };

  const openDatePicker = () => {
    if (dateInputRef.current && dateInputRef.current.showPicker) {
      dateInputRef.current.showPicker();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      setErrorMessage("Please upload JPG or PNG image.");
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setErrorMessage("Image is too large. Maximum size is 2 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setEventData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));

      setImageFileName(file.name);
      setErrorMessage("");
    };

    reader.onerror = () => {
      setErrorMessage("Could not read selected image.");
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setEventData((prevData) => ({
      ...prevData,
      image: "",
    }));

    setImageFileName("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMessage("");

    if (!eventData.title.trim()) {
      setErrorMessage("Event title is required.");
      return;
    }
    if (!eventData.category.trim()) {
      setErrorMessage("Please select a category.");
      return;
    }
    if (!eventData.location.trim()) {
      setErrorMessage("Location is required.");
      return;
    }
    if (!eventData.date.trim()) {
      setErrorMessage("Date is required.");
      return;
    }
    if (!eventData.time.trim()) {
      setErrorMessage("Time is required.");
      return;
    }

    const dateObj = new Date(eventData.date);
    const currentYear = new Date().getFullYear();
    const eventYear = dateObj.getFullYear();
    
    const options = { month: 'short', day: 'numeric' };
    if (currentYear !== eventYear) {
      options.year = 'numeric';
    }
    
    const formattedDate = dateObj.toLocaleDateString('en-US', options);

    const eventToCreate = {
      ...eventData,
      date: formattedDate
    };

    const createdEvent = createEvent(eventToCreate);
    console.log("Created event:", createdEvent);

    navigate("/events");
  };

  return (
    <>
      <section className="create-event-title">
        <h1>Create New Event</h1>
        <p>Share your unique experience with the Meetfy community.</p>
      </section>

      <form className="create-event-form-card" onSubmit={handleSubmit}>
        <label className="cover-field">
          <span>EVENT COVER IMAGE</span>

          <input
            ref={fileInputRef}
            className="cover-file-input"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`cover-upload ${eventData.image ? "has-image" : ""}`}
            onClick={handleCoverClick}
          >
            {eventData.image ? (
              <>
                <img src={eventData.image} alt="Selected event cover" />
                <div className="cover-preview-overlay">
                  <strong>Change cover image</strong>
                  <small>{imageFileName}</small>
                </div>
              </>
            ) : (
              <>
                <div className="upload-icon">
                  <UploadCloud size={32} color="#666" strokeWidth={1.5} />
                </div>
                <p>Click or drag to upload high-resolution image</p>
                <small>Recommended: 1600x900px, PNG or JPG</small>
              </>
            )}
          </button>

          {eventData.image && (
            <button
              type="button"
              className="remove-cover-btn"
              onClick={handleRemoveImage}
            >
              Remove selected image
            </button>
          )}
        </label>

        <FormInput
          className="form-line full-width"
          label="EVENT TITLE"
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          placeholder="e.g. Minimalist Ceramic Workshop"
          required
        />

        <div className="event-form-grid">
          <div className="form-line">
            <label htmlFor="category" style={{ display: "block", marginBottom: "8px", fontSize: "12px", fontWeight: "700", color: "#9b6a63", letterSpacing: "0.08em" }}>
              CATEGORY
            </label>
            <select
              id="category"
              name="category"
              value={eventData.category}
              onChange={handleChange}
              required
              className="category-select"
            >
              <option value="" disabled>Select a category</option>
              <option value="Music">MUSIC</option>
              <option value="Culture">CULTURE</option>
              <option value="Food">FOOD</option>
              <option value="Art">ART</option>
              <option value="Sport">SPORT</option>
              <option value="Networking">NETWORKING</option>
              <option value="Gaming">GAMING</option>
              <option value="Education">EDUCATION</option>
            </select>
          </div>

          <div className="form-line">
            <label htmlFor="location" style={{ display: "block", marginBottom: "8px", fontSize: "12px", fontWeight: "700", color: "#9b6a63", letterSpacing: "0.08em" }}>
              LOCATION
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fffdf9", padding: "0 14px", height: "46px", borderRadius: "8px", border: "1px solid #d8c9be", transition: "border-color 0.2s ease" }}>
              <MapPin 
                size={18} 
                color="#cdcdcd"
                style={{ flexShrink: 0 }} 
              />
              <input
                id="location"
                type="text"
                name="location"
                value={eventData.location}
                onChange={handleChange}
                placeholder="Add a city or venue" 
                required
                tabIndex={0}
                style={{ border: "none", background: "transparent", width: "100%", fontFamily: "inherit", color: "#2b2118", fontSize: "16px", outlineColor: "#9b6a63" }}
              />
            </div>
          </div>

          <div className="form-line">
            <label htmlFor="eventDate" style={{ display: "block", marginBottom: "8px", fontSize: "12px", fontWeight: "700", color: "#9b6a63", letterSpacing: "0.08em" }}>
              DATE
            </label>
            <style>
            {` .hide-calendar-icon::-webkit-calendar-picker-indicator {
                display: none !important;
                -webkit-appearance: none !important;
              } 
            `}
            </style>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fffdf9", padding: "0 14px", height: "46px", borderRadius: "8px", border: "1px solid #d8c9be" }}>
              
              <button 
                type="button" 
                onClick={openDatePicker}
                tabIndex={0}
                style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", display: "flex", alignItems: "center", outlineColor: "#9b6a63" }}
              >
                <CalendarDays 
                  size={18} 
                  color="#6f6258" 
                  style={{ flexShrink: 0 }} 
                />
              </button>

              <input
                id="eventDate"
                ref={dateInputRef}
                type="date"
                name="date"
                className="hide-calendar-icon"
                value={eventData.date}
                onChange={handleChange}
                required
                tabIndex={0}
                style={{ border: "none", background: "transparent", width: "100%", fontFamily: "inherit", color: "#2b2118", fontSize: "16px", outlineColor: "#9b6a63" }}
              />
            </div>
          </div>

          <FormInput
            className="form-line"
            label="TIME"
            type="text"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            placeholder="--:-- --"
            required
            tabIndex={0}
          />

          <FormInput
            className="form-line"
            label="PRICE (USD)"
            type="text"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            placeholder="$    0.00"
            tabIndex={0}
          />

          <FormInput
            className="form-line"
            label="PARTICIPANTS LIMIT"
            type="text"
            name="participantsLimit"
            value={eventData.participantsLimit}
            onChange={handleChange}
            placeholder="No limit"
            tabIndex={0}
          />
        </div>

        <FormTextarea
          className="form-line full-width"
          label="SHORT DESCRIPTION"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          placeholder="Describe the vibe and what attendees should expect..."
          tabIndex={0}
        />

        <div className="event-switches">
          <label>
            <input
              type="checkbox"
              name="indoor"
              checked={eventData.indoor}
              onChange={handleChange}
              tabIndex={0}
            />
            <span>Indoor Event</span>
          </label>

          <label>
            <input
              type="checkbox"
              name="publicVisibility"
              checked={eventData.publicVisibility}
              onChange={handleChange}
              tabIndex={0}
            />
            <span>Public Visibility</span>
          </label>
        </div>

        {errorMessage && (
          <p className="create-event-error-message">{errorMessage}</p>
        )}

        <Button type="submit" className="publish-event-btn" tabIndex={0}>
          Publish Event
        </Button>
      </form>

      <section className="create-event-bottom">
        <article className="pro-tip-card">
          <div className="tip-icon">
            <Lightbulb size={24} color="#666" />
          </div>

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
    </>
  );
}

export default CreateEventPage;