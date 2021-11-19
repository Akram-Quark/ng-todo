import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: any;
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  delete(event: any) {
    this.deleted.emit(event);
  }
}
