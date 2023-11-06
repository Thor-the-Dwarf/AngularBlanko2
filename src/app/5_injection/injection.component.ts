import { Component } from '@angular/core';

@Component({
  selector: 'app-5_injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css']
})
export class StorageService {
  newItem: string = '';

  constructor(public storageService: StorageService) {}

  addItem(): void {
    this.storageService.addItem(this.newItem);
    this.newItem = ''; // Eingabefeld zurücksetzen
  }

  saveItems(): void {
    this.storageService.saveItems();
  }

  loadItems(): void {
    this.storageService.loadItems();
  }

  clearItems(): void {
    this.storageService.clearItems();
  }
}
