import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note-input',
  imports: [],
  templateUrl: './note-input.html',
  styleUrl: './note-input.css',
})
export class NoteInput {
  @Output()
  search = new EventEmitter<string>();

  @Output()
  addNote = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
  }

  onAddNote(value: string) {
    this.addNote.emit(value);
  }

}