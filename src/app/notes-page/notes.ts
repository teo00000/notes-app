import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Notes {
  private notes = ['Buy groceries', 'Take out the trash', 'Clean the house'];

  private notesSubject = new BehaviorSubject<string[]>(this.notes);

  notes$ = this.notesSubject.asObservable();

  addNote(value: string) {
    this.notesSubject.next([...this.notesSubject.value, value]);
  }

  delete(note: string) {
    this.notesSubject.next(this.notesSubject.value.filter((n) => n !== note));
  }

  searchNotes(term: string) {
    if (term === '') {
      this.notesSubject.next(this.notes);
    } else {
      this.notesSubject.next(
        this.notesSubject.value.filter((n) => n.toLowerCase().includes(term.toLowerCase())),
      );
    }
  }
}
