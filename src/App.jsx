import { useState } from "react";

import UserList from "./component/USERLIST/UserList";
import NewEventForm from "./component/NEWEVENT/NewEvent";
import Navbar from "./component/NAVBAR/Navbar";
import Footer from "./component/FOOTER/Footer";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        {users.length === 0 && (
          <div className="no-users">
            <h3>No User</h3>
          </div>
        )}
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      <Footer />
      {showModal && <NewEventForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create user
      </button>
    </div>
  );
}

export default App;
