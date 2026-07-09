import { Component, inject, OnInit } from '@angular/core';
import { NoteList } from './note-list/note-list';
import { NoteInput } from './note-input/note-input';
import { Notes } from './notes';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-notes-page',
  imports: [ NoteList, NoteInput, AsyncPipe ],
  templateUrl: './notes-page.html',
  styleUrl: './notes-page.css',
})
export class NotesPage {
  public notes = inject(Notes);

  notes$ = this.notes.notes$;

  onSearch(term: string) {
    this.notes.searchNotes(term);
  }

  onAddNote(note: string) {
    this.notes.addNote(note);
  }

  onDelete(note: string) {
    this.notes.delete(note);
  }
}
