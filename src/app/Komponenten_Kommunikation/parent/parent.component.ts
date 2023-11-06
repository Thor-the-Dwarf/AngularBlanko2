import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  inputText: string = '';
  messageToSend: string = '';
  messageFromChild: string = '';

  sendMessage() {
    this.messageToSend = this.inputText;
  }

  receiveMessage(event: string) {
    this.messageFromChild = event;
  }
}
