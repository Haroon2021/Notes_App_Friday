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

    it('Should add a new note title', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const notesmodel = new NotesModel();
    const notesView = new NotesView(notesmodel);

    const input = document.querySelector('#user-input');
    input.value = "My new amazing test note";
    const button = document.querySelector('#note-button');
    button.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');

    });

    //Note the test below is trying to mimic how the user would put the input in one at a time as opposed to how the notes model currently works on the backensd and is able to take in multiple notes
    it('should display notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const notesmodel = new NotesModel;
        const notesView = new NotesView(notesmodel);
    
        notesmodel.addNote('Buy bread');
        notesView.displayNotes();

        notesmodel.addNote('Buy sugar');
        
        notesView.displayNotes();
    
        expect(document.querySelectorAll('div.note').length).toEqual(2);
        });
});