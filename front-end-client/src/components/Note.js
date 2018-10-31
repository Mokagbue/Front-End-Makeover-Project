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
        const noteId = this.props.match.params.id;
        this.grabById(noteId)
    }
    grabById = (id) => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
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
    deleteButton = () => {
        const id = this.props.match.params.id;
        this.props.history.push(`/deleteNote/${id}`)
    }
    updateButton = () => {
        const id = this.props.match.params.id;
        this.props.history.push(`/updateNote/${id}`)
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.note.notes_title}</h1>
                <p>{this.state.note.notes_content}</p>
                <div>
                    <div onClick={() => this.deleteButton()}>Delete Note?</div>
                    <div onClick={() => this.updateButton()}>Update Note?</div>
                </div>
            </div>
        )
    }
}
export default Note;