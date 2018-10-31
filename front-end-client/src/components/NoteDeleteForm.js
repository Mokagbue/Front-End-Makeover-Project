import React, { Component } from 'react';

class NoteDeleteForm extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('delete CDM');
    }
    deleteHandler = () => {
        this.props.deleteNote(this.props.match.params.id);
        this.props.history.push('/notes');
    }
    returnToNote = () => {
        this.props.history.push(`/notes/${this.props.match.params.id}`)
    }
    render() {
        return (
            <div>
                <h2>Are you sure? It's such a lovely note...</h2>
                <div className="deleteButts">
                    <div onClick={() => this.deleteHandler()}>Delete Note!</div>
                    <div onClick={() => this.returnToNote()}>Never Mind!</div>
                </div>
            </div>
        )
    }
}
export default NoteDeleteForm;