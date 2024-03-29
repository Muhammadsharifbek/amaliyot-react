import { useState } from "react";
import "./NewEventForm.css";

function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  return (
    <form className="new-event-form">
      <label>
        <span>Event Title</span>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>

      <label>
        <span>Event Date</span>
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <button>submit</button>
      <br />

      <h2> Title: {title}</h2>
      <h2> Date: {date}</h2>
    </form>
  );
}
export default NewEventForm;
