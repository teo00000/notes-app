import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note-card',
  imports: [],
  templateUrl: './note-card.html',
  styleUrl: './note-card.css',
})
export class NoteCard {
  @Input({ required: true })
  note!: string;

  @Output()
  delete = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.note);
  }
}
