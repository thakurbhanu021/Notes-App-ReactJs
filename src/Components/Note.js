import { MdDeleteForever } from "react-icons/md";

const Note = (props) => {
  const handleDeleteNote = () => {
    props.handleDeleteNote(props.note.id);
  };
  return (
    <div className="note">
      <span>{props.note.text}</span>
      <div className="note-footer">
        <small>{props.note.date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={handleDeleteNote}
        />
      </div>
    </div>
  );
};

export default Note;
