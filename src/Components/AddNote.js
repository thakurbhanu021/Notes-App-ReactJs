import { useState } from "react";

const AddNote = (props) => {
  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;

  const handleChange = (event)=>{
    if(characterLimit- event.target.value.length >= 0 ){
        setNoteText(event.target.value)
    }
  }

  const handleSaveClick = ()=>{
    if(noteText.trim().length >= 0){
        props.handleAddNote(noteText);
        setNoteText('');
    }
    else {
        alert('Please enter something to add')
    }
  }

  return (
    <div className="note new">
      <textarea
       value={noteText}
       onChange={handleChange}
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
