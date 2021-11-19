import { Component, OnInit } from '@angular/core';
import { InputChatService } from '../../input-chat.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(private chat: InputChatService) {}
  text = '';
  ngOnInit(): void {}

  onClick() {
    this.chat.emit(this.text);
  }
}
