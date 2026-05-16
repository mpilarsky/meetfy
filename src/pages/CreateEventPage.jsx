import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../components/Form/FormInput";
import FormTextarea from "../components/Form/FormTextarea";
import Button from "../components/Form/Button";

import "./CreateEventPage.css";

import tipImage from "../assets/create-event-tip.png";

function CreateEventPage() {
  const navigate = useNavigate();

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
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setEventData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Created event:", eventData);

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

          <div className="cover-upload">
            <div className="upload-icon">☁</div>
            <p>Click or drag to upload high-resolution image</p>
            <small>Recommended: 1600x900px, PNG or JPG</small>
          </div>
        </label>

        <FormInput
          className="form-line full-width"
          label="EVENT TITLE"
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          placeholder="e.g. Minimalist Ceramic Workshop"
        />

        <div className="event-form-grid">
          <label className="form-line">
            <span>CATEGORY</span>

            <select
              name="category"
              value={eventData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Music">Music</option>
              <option value="Culture">Culture</option>
              <option value="Food">Food</option>
              <option value="Art">Art</option>
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
          />

          <FormInput
            className="form-line"
            label="DATE"
            type="text"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
          />

          <FormInput
            className="form-line"
            label="TIME"
            type="text"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            placeholder="--:-- --"
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

        <Button type="submit" className="publish-event-btn">
          Publish Event
        </Button>
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
    </>
  );
}

export default CreateEventPage;