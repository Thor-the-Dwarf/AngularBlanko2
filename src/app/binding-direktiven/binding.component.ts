import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-direktiven',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  // Interpolation
  text: string = 'Interpolation';
  nummer: number = 42;

  // Property Binding
  inputType = 'text';
  inputValue = 'Property';
  placeholderText = 'Geben Sie hier etwas ein';
  maxInputLength = 10;
  inputSize = 50;

  // Event Binding
  showMessage(eventType: string) {
    this.eventBinding = eventType;
  }
  eventBinding: string = "event";

  // Two-Way Binding (benötigt FormsModule im Modul)
  twoWayData: string = 'twoWayData';
}
