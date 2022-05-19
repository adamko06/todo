export class Task {
  id: number = 0;
  task_name: string = "";
  checked: boolean = false;

  constructor(name = "") {
    this.task_name = name;
  }
}
