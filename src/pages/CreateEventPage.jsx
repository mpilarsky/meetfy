import FormInput from "../components/Form/FormInput";
import FormTextarea from "../components/Form/FormTextarea";
import Button from "../components/Form/Button";

import "./CreateEventPage.css";

import tipImage from "../assets/create-event-tip.png";

function CreateEventPage() {
  return (
    <>
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
            <small>Recommended: 1600x900px, PNG or JPG</small>
          </div>
        </label>

        <FormInput
          className="form-line full-width"
          label="EVENT TITLE"
          type="text"
          placeholder="e.g. Minimalist Ceramic Workshop"
        />

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

          <FormInput
            className="form-line"
            label="LOCATION"
            type="text"
            placeholder="♙   Add a city or venue"
          />

          <FormInput
            className="form-line"
            label="DATE"
            type="text"
            placeholder="mm/dd/yyyy"
          />

          <FormInput
            className="form-line"
            label="TIME"
            type="text"
            placeholder="--:-- --"
          />

          <FormInput
            className="form-line"
            label="PRICE (USD)"
            type="text"
            placeholder="$    0.00"
          />

          <FormInput
            className="form-line"
            label="PARTICIPANTS LIMIT"
            type="text"
            placeholder="No limit"
          />
        </div>

        <FormTextarea
          className="form-line full-width"
          label="SHORT DESCRIPTION"
          placeholder="Describe the vibe and what attendees should expect..."
        />

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