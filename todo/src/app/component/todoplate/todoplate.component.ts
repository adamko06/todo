import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/task/task";
import { CrudService } from "src/app/service/crud.service";
import { observable } from "rxjs";

@Component({
  selector: "app-todoplate",
  templateUrl: "./todoplate.component.html",
  styleUrls: ["./todoplate.component.css"],
})
export class TodoplateComponent implements OnInit {
  taskObj: Task = new Task();
  taskArr: Task[] = [];
  addTaskValue: string = "";
  editTaskValue: string = "";

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getAllTask();
  }
  getAllTask() {
    this.crudService.getAllTask().subscribe(
      (res) => {
        this.taskArr = res;
      },
      (err) => {
        alert("List of tasks are unable");
      }
    );
  }

  addTask() {
    if (this.addTaskValue.trim().length >= 1) {
      this.taskObj = new Task(this.addTaskValue);
      this.crudService.addTask(this.taskObj).subscribe(
        (res) => {
          this.taskArr = [...this.taskArr, res];
          // this.taskArr.push(res);
          this.addTaskValue = "";
        },
        (err) => {
          alert(err);
        }
      );
    }
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(
      (res) => {
        this.taskArr = this.taskArr.map(function (item) {
          if (res.id === item.id) {
            return { ...item, task_name: res.task_name };
          } else {
            return item;
          }
        });
      },
      (err) => {
        alert("Failed to update task");
      }
    );
  }

  deleteTask(task: Task) {
    this.crudService.deleteTask(task).subscribe(
      (res) => {
        this.taskArr = this.taskArr.filter((item) => item.id !== task.id);
      },
      (err) => {
        alert("Failed to delete task");
      }
    );
  }

  call(task: Task) {
    this.taskObj = task;
    this.editTaskValue = task.task_name;
  }

  checkTask(task: Task) {
    task.checked = !task.checked;
    this.crudService.editTask(task).subscribe(
      (res) => {},
      (err) => {
        alert("Failed to check task");
      }
    );
  }
}
