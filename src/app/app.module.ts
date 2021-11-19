import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './@components/todos/todos.component';
import { TodoComponent } from './@components/todo/todo.component';
import { InputComponent } from './@components/input/input.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoComponent, InputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
