import "./Modal.css";

function Modal({ children, setCloseModal }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
      <button onClick={setCloseModal}>Close</button>
    </div>
  );
}
export default Modal;
