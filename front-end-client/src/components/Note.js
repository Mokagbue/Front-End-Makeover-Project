import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

class Note extends Component {
    constructor() {
        super();
        this.state = {
            note: {
                id: "",
                notes_title: "",
                notes_content: "",
            }
        }
    }
    componentDidMount() {
        const note_Id = this.props.match.params.id;
        this.grabById(note_Id)
    }
    grabById = (id) => {
        axios.get(``)
        .then(response => {
            const note = {
                id: response.data.id,
                notes_title: response.data.notes_title,
                notes_content: response.data.notes_content
            }
            this.setState({
                ...this.state.note,
                note: note
            })
        })
        .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <h1>{this.state.note.notes_title}</h1>
                <p>{this.state.note.notes_content}</p>
            </div>
        )
    }
}
export default Note;