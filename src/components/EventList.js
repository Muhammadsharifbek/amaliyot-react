import style from "./EvenList.module.css";

console.log(style);

function EventList({ event, deleteTitle }) {
  return (
    <div>
      {event.length === 0 && <h3>Now content yet :( </h3>}
      {event.map((event) => {
        return (
          <div className={style.card} key={event.id}>
            <h2>{event.title}</h2>
            <p>
              {event.location} {event.date}
            </p>
            <button onClick={() => deleteTitle(event.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default EventList;
