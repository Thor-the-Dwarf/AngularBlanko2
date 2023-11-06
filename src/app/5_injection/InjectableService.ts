// storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectableService {
  private items: string[] = [];
  private storageKey = 'myItems';

  saveItems(): void {
    const jsonData = JSON.stringify(this.items);
    localStorage.setItem(this.storageKey, jsonData);
  }

  loadItems(): void {
    const jsonData = localStorage.getItem(this.storageKey);
    this.items = jsonData ? JSON.parse(jsonData) : [];
  }

  clearItems(): void {
    this.items = [];
    localStorage.removeItem(this.storageKey);
  }

  getItems(): string[] {
    return this.items;
  }

  addItem(item: string): void {
    if (item) {
      this.items.push(item);
    }
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
