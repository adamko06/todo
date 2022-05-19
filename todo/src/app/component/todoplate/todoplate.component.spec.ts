import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoplateComponent } from "./todoplate.component";

describe("TodoplateComponent", () => {
  let component: TodoplateComponent;
  let fixture: ComponentFixture<TodoplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
