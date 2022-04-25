(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          return this.notes.push(note);
        }
        reset() {
          return this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#note-button").addEventListener("click", () => {
            const newNote = document.querySelector("#user-input").value;
            this.addNewNote(newNote);
            document.querySelector("#user-input").value = "";
          });
        }
        displayNotes() {
          const notesToDelete = document.querySelectorAll("div.note");
          notesToDelete.forEach((note) => {
            note.remove();
          });
          let list = this.model.getNotes();
          list.forEach((note) => {
            let div = document.createElement("div");
            div.innerText = note;
            div.className = "note";
            this.mainContainerEl.append(div);
          });
        }
        addNewNote(newNote) {
          this.model.addNote(newNote);
          this.displayNotes();
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  var view = new NotesView(model);
  console.log(model.getNotes());
  console.log("The notes app is running");
  view.displayNotes();
})();
