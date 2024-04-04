import "./navbar.css";

function Navbar({ usersLength }) {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">CUser</h2>
        <h3 className="navbar-counter">{usersLength > 0 ? `You have: + ${usersLength}` : `No content yet :(`} </h3>
      </div>
    </div>
  );
}
export default Navbar;
