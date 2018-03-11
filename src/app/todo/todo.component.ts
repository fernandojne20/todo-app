import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  cards:Array<string>;

  constructor() {
    this.cards = ['To Do', 'Doing', 'Done'];
   }
    
  ngOnInit() {
  }

  suma(a:number, b:number) {
    return a + b;
  }

}
