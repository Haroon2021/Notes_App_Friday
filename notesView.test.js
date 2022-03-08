/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const NotesModel = require("./notesModel");
const fs = require('fs');

describe('NotesView', () => {
    it('should display notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesmodel = new NotesModel;

    notesmodel.addNote('Buy bread');
    notesmodel.addNote('Buy sugar');

    const notesView = new NotesView(notesmodel);
    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
});