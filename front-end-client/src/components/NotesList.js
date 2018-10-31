import React from 'react';
import { Link } from 'react-router-dom';

function NotesList(props) {
    return (
        <div>
            <h1>My Notes!</h1>
            <h2>Magic, Sparkle, Ponies!</h2>
            <div>
                {props.notes.map((note, index) => (
                    <div key={index}>
                        <Link to={`/notes/${note.notes_id}`}>
                            <h3>{note.notes_title}</h3>
                        </Link>
                        <p>{note.notes_content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default NotesList;