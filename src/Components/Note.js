import {MdDeleteForever} from 'react-icons/md';

const Note = (props) => {
    return (
        <div className="note">
            <span>{props.note.text}</span>
            <div className="note-footer">
                <small>{props.note.date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
}

export default Note;