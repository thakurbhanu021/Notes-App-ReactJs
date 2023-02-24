import {MdDeleteForever} from 'react-icons/md';

const Note = () => {
    return (
        <div className="note">
            <span>this is my first note</span>
            <div className="note-footer">
                <small>13/02/2020</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
}

export default Note;