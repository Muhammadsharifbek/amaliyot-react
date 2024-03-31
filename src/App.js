import { useState } from "react";
import Modal from "./Modal";
import NewEventForm from "./components/NewEventForm";
import EventList from "./components/EventList";
import Title from "./components/Title";
import "./App.css";

function App() {
  const [surname, setSurname] = useState("Name : Sharif");
  const [showContent, setShowContent] = useState(true);
  const [showModal, closeModal] = useState(false);
  const [event, setEvents] = useState([
    { title: "Sharif's birthday", id: 1 },
    { title: "Habib's birthday", id: 2 },
    { title: "Sukhrob's birthday", id: 3 },
  ]);

  const newEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event];
    });
    closeModal(false);
  };

  const changeName = () => {
    setSurname("family: Ahmadov");
  };

  const deleteTitle = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  return (
    <div className="App">
      <Title title="Sharif's Kingdom 👑 Events" subtitle="All event will be here :(" />
      <h2>{surname} </h2>
      <button className="ml-4 bg-black" onClick={changeName}>
        Change Name
      </button>
      {showContent && <button onClick={() => setShowContent(false)}>Hide Content</button>}
      {!showContent && <button onClick={() => setShowContent(true)}>Show Content</button>}
      {showContent && <EventList event={event} deleteTitle={deleteTitle} />}

      {showModal && (
        <Modal>
          <NewEventForm newEvent={newEvent} />
        </Modal>
      )}
      <button onClick={() => closeModal(true)}> Show Modal</button>
    </div>
  );
}

export default App;
