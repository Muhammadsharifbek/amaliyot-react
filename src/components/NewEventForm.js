import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewEventForm.css";
import "../App.js";

function NewEventForm({ newEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Bukhara");

  const resetInputs = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: uuidv4,
    };
    newEvent(event);
    resetInputs();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title</span>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </label>

      <label>
        <span>Event Date</span>
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
      </label>
      <button type="button" onClick={resetInputs}>
        Reset Inputs
      </button>
      <br />
      <br />
      <button>submit</button>
      <label>
        <span>CHange Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="bukhara">Bukhara</option>
          <option value="tashkent">Tashkent</option>
          <option value="london">London</option>
        </select>
      </label>
    </form>
  );
}
export default NewEventForm;
