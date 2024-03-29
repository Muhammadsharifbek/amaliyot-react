const Title = ({ title, subtitle }) => {
  return (
    <div className="wrapper">
      <h2 className="title">{title} </h2>

      <p className="subtitle">{subtitle} </p>
    </div>
  );
};

export default Title;
