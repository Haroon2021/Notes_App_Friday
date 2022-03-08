
class NotesView{
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');
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
};


module.exports = NotesView;