import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteCard } from '../note-card/note-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  imports: [ NoteCard, CommonModule ],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css',
})
export class NoteList {
  @Input({ required: true })
  notes!: string[];

  @Output()
  search = new EventEmitter<string>();

  @Output()
  delete = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
  }

  onDelete(note: string) {
    this.delete.emit(note);
  }
}
