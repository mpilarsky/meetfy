import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, Lightbulb } from "lucide-react";
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

    const createdEvent = createEvent(eventData);

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
          <label className="form-line">
            <span>CATEGORY</span>

            <select
              name="category"
              value={eventData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Music">Music</option>
              <option value="Culture">Culture</option>
              <option value="Food">Food</option>
              <option value="Art">Art</option>
              <option value="Sport">Sport</option>
              <option value="Networking">Networking</option>
              <option value="Gaming">Gaming</option>
              <option value="Education">Education</option>
            </select>
          </label>

          <FormInput
            className="form-line"
            label="LOCATION"
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            placeholder="♙   Add a city or venue"
            required
          />

          <FormInput
            className="form-line"
            label="DATE"
            type="text"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
            required
          />

          <FormInput
            className="form-line"
            label="TIME"
            type="text"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            placeholder="--:-- --"
            required
          />

          <FormInput
            className="form-line"
            label="PRICE (USD)"
            type="text"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            placeholder="$    0.00"
          />

          <FormInput
            className="form-line"
            label="PARTICIPANTS LIMIT"
            type="text"
            name="participantsLimit"
            value={eventData.participantsLimit}
            onChange={handleChange}
            placeholder="No limit"
          />
        </div>

        <FormTextarea
          className="form-line full-width"
          label="SHORT DESCRIPTION"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          placeholder="Describe the vibe and what attendees should expect..."
        />

        <div className="event-switches">
          <label>
            <input
              type="checkbox"
              name="indoor"
              checked={eventData.indoor}
              onChange={handleChange}
            />
            <span>Indoor Event</span>
          </label>

          <label>
            <input
              type="checkbox"
              name="publicVisibility"
              checked={eventData.publicVisibility}
              onChange={handleChange}
            />
            <span>Public Visibility</span>
          </label>
        </div>

        {errorMessage && (
          <p className="create-event-error-message">{errorMessage}</p>
        )}

        <Button type="submit" className="publish-event-btn">
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