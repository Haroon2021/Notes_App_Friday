
class NotesView{
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');
        // Event listners
        document.querySelector('#note-button').addEventListener('click', () => {
        const newNote = document.querySelector('#note-button').value;
        this.addNewNote(newNote);

    });
    };

    displayNotes(){
       let list =  this.model.getNotes();
       list.forEach(note => {
           let div = document.createElement('div');
           div.innerText = note;
           div.className = 'note';
           this.mainContainerEl.append(div);
       });
    };

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
  
    };


};


module.exports = NotesView;