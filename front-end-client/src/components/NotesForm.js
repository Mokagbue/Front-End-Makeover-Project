import React, { Component } from 'react';

class NotesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes_title: "",
            notes_content: "",
        }
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        console.log('handler in notes form', event.target.value)
    }
    makingNewNote = event => {
        const newNote = {
            notes_title: this.state.notes_title,
            notes_content: this.state.notes_content,
        }
        this.props.makeNewNote(newNote)
        this.props.history.push('/notes');
    }
    render() {
        return (
            <div>
                <h2>Making A New Note?</h2>
                <form onSubmit={this.makingNewNote}>
                    <input type="text" placeholder="add a title!" name="notes_title"
                        onChange={this.handleChange}
                        value={this.state.notes_title} />
                    <textarea type="text" placeholder="what's on your mind?" name="notes_content"
                        onChange={this.handleChange}
                        value={this.state.notes_content} />
                    <button type="submit">Ready to Post?</button>
                </form>
            </div>
        )

    }
}
export default NotesForm;