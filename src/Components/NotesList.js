import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = (props) => {
    return (
        <div className="notes-list">
           {props.notes.map((note)=>(
            <Note note={note} />
           ))}
           <AddNote handleAddNote={props.handleAddNote}/>
        </div>
    )
}

export default NotesList;