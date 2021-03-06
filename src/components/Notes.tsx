import React from "react";
import "./Notes.css";
interface props1 {
  key: string;
  id: string;
  txt: string;
  cur: { current: string };
}
interface note {
  _id: string;
  payload: string;
}
function Note(props: props1) {
  async function handleDelete(id: string) {
    console.log("Should delete: " + id + "from" + props.cur.current);
    const response = await fetch(
      `http://localhost:4000/removenote/${props.cur.current}/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.text();
    console.log(data);
  }
  return (
    <div className="note">
      <div className="nTxt">{props.txt}</div>
      <div className="nX">
        <button className="deleteNote" onClick={() => handleDelete(props.id)}>
          X
        </button>
      </div>
    </div>
  );
}
interface props2 {
  notes: note[];
  currentTab: { current: string };
}
function Notes(props: props2) {
  //temp notes should be the App's prop or maybe even move the whole future fetch request into this element.

  return (
    <div className="Notes">
      {props.notes.map((element: note) => {
        return (
          <Note
            key={element._id}
            id={element._id}
            txt={element.payload}
            cur={props.currentTab}
          />
        );
      })}
    </div>
  );
}
export default Notes;
