import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home.js';
import Note from './components/Note.js';
import NotesList from './components/NotesList.js';
import NoteDeleteForm from './components/NoteDeleteForm.js';
import NotesForm from './components/NotesForm.js';
import NoteUpdateForm from './components/NoteUpdateForm.js';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }
  };

  componentDidMount() {
    this.grabAllNotes();
  }

  grabAllNotes = () => {
    axios.get('https://localhost:9000/api/notes')
    .then(response => this.setState({ ...this.state, notes: response.data }))
    .catch(error => console.log(error));
  }

  makeNewNote = (note) => {
    axios.post('https://localhost:9000/api/notes', note)
    .then(response => this.grabAllNotes())
    .catch(error => console.log(error));
  }

  deleteNote = (id) => {
    axios.delete(`https://localhost:9000/api/notes/${id}`)
    .then(response => this.grabAllNotes())
    .catch(error => console.log(error));
  }

  updateNote = (id, updatedNote) => {
    axios.put(`https://localhost:9000/api/notes/${id}`, updatedNote)
    .then(response => this.grabAllNotes())
    .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Lambda Notes</h1>
          <nav>
            <NavLink exact to="/"> Home</NavLink>
            <NavLink  to="/notes"> Notes</NavLink>
            <NavLink  to="/newNote">Make New Note</NavLink>
          </nav>
          <main>
            <Route exact path="/" component={Home}></Route>
            <Route path="/notes" render={(props) =>
              (<NotesList {...props} notes={this.state.notes} />)} />
            <Route path="/newNotes" render={(props) =>
              (<NotesForm {...props} makeNewNote={this.makeNewNote} />)} />  
            <Route path="/notes/:id" render={(props) =>
              (<Note {...props} />)} />
            <Route path="/deleteNote/:id" render={(props) =>
              (<NoteDeleteForm {...props} deleteNote={this.deleteNote} />)} />
            <Route path="/updateNote/:id" render={(props) =>
              (<NoteUpdateForm {...props} updateNote={this.updateNote} />)} />
          </main>
        </header>
      </div>
    );
  }
}

export default App;
