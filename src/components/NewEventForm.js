import { useState } from "react";
import "../App.js";
import "./NewEventForm.css";

function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetInputs = () => {
    setTitle("");
    setDate("");
  };
  return (
    <form className="new-event-form">
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
      <br />
      <hr />
      <h2> Title: {title}</h2>
      <h2> Date: {date}</h2>
    </form>
  );
}
export default NewEventForm;
