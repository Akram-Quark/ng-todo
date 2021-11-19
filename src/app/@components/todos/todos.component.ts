import { Component, OnInit } from '@angular/core';
import { InputChatService } from '../../input-chat.service';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = [
    { id: 1, name: 'task one', done: false },
    { id: 2, name: 'task tow', done: false },
    { id: 3, name: 'task three', done: false },
  ];
  newTodo: any;

  constructor(private chat: InputChatService) {}

  ngOnInit(): void {
    this.chat.reciev().subscribe((message) => {
      this.newTodo = {
        id: nanoid(),
        name: message,
        done: false,
      };
      this.todos.push(this.newTodo);
    });
  }

  deletTodo(event: any): void {
    var id = event.target.parentElement.id;
    console.log(id);

    this.todos = this.todos.filter((todo) => {
      return todo.id != id;
    });
  }
}
