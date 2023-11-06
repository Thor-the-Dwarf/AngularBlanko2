import { Component } from '@angular/core';

@Component({
  selector: 'app-struktur-direktiven',
  templateUrl: './direktiven.component.html',
  styleUrls: ['./direktiven.component.css']
})
export class DirektivenComponent {
  bedingung = true;
  items = ['Apfel', 'Banane', 'Kirsche'];
  auswahl = 'ersterFall';
  text = '';
}
