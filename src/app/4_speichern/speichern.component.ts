import { Component } from '@angular/core';

@Component({
  selector: 'app-4_speichern',
  templateUrl: './speichern.component.html',
  styleUrls: ['./speichern.component.css']
})
export class SpeichernComponent {
  newItem: string = '';
  items: string[] = [];

  addItem(): void {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = ''; // Eingabefeld zurücksetzen
    }
  }

  saveItems(): void {
    const jsonData = JSON.stringify(this.items);
    localStorage.setItem('keyUmEsImStorageZuFinden', jsonData);
  }

  loadItems(): void {
    const jsonData = localStorage.getItem('keyUmEsImStorageZuFinden');
    try {
      this.items = jsonData ? JSON.parse(jsonData) : [];
    } catch (error) {
      alert('Ein Fehler beim Laden der Daten');
      this.items = [];
    }
  }


  cleartems(): void {
    this.items = [];
    this.saveItems();
  }
}
