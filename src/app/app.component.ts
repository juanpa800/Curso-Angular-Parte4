import { Component } from '@angular/core';
import { Guest } from './guest.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-Angular-Parte4';
  amount = 0;
  guests: Guest[] = [
    new Guest("Martin", "Fernandez", "Papá", 66)
  ];

  createGuest(number: number): void {
    for (let i = 0; i < number; i++) {
      this.guests.push(new Guest("Juan" + i.toString(), "Garcia" + i.toString(), "Sibling#" + i.toString(), 20 + i))
    }
  }
}
