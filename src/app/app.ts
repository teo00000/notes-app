import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesPage } from "./notes-page/notes-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotesPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-playground');
}
