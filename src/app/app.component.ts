import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  inputToDo: any = '';
  showError: any = '';
  toDoList: any = [
    {
      name: 'First ToDo',
      completed: false
    }
  ];
  removedToDo: any = [];

  addToDo() {
    let isHaveFlag: boolean = false;
    if (this.inputToDo !== ''){
      this.toDoList.forEach((each: any) => {
        if (each.name === this.inputToDo) {
          isHaveFlag = true;
        } else {
          isHaveFlag = false;
        }
      });
      if (isHaveFlag) {
        this.showError = `${this.inputToDo} is alraedy in List.`;
      } else {
        this.toDoList.push({
          name: this.inputToDo,
          completed: false
        });
      }
    } else {
      this.showError = 'Enter to Add ToDo List.';
    }
    this.inputToDo = '';
  }

  onclickDone(id: any) {
    this.toDoList.map((each: any, index: any) => {
      if ( index == id) {
        each.completed = !each.completed;
      }
      return each;
    })
  }

  deleteToDo(id: any) {
    this.removedToDo = this.toDoList.filter((each: any, index: any) => id !== index);
    this.toDoList = this.removedToDo;
    this.removedToDo = [];
  }

  removeParaTag() {
    this.showError = ''
  }
}
