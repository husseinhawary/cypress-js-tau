/// <reference types="cypress" />
import TodoPage from "../../page-objects/todo-page";

describe("Todo-MVC Actions", () => {
  const todoPage = new TodoPage();

  beforeEach("Setup", () => {
    todoPage.navigate();
    todoPage.addTodo("Clean Room");
  });

  it("should add new todo to the list", () => {
    todoPage.validateTodoText(0, "Clean Room");
    todoPage.validateToggleState(0, false);
    // cy.get("label").should("have.text", "Clean Room");
    // cy.get("input.toggle").should("not.be.checked");
  });

  it("should mark the todo as completed", () => {
    todoPage.toggleTodo(0);
    todoPage.validateTodoCompletedState(0, true);
    // cy.get("input.toggle").click();
    // cy.get("label").should("have.css", "text-decoration-line", "line-through");
    // cy.get("input.toggle").should("be.checked");
  });

  it("should clear completed todos", () => {
    todoPage.toggleTodo(0);
    todoPage.clearCompleted();
    todoPage.validateNumberOfTodosShown(0);
    // cy.get("input.toggle").click();
    // cy.contains("Clear completed").click();
    // cy.get("ul.todo-list").should("not.have.descendants", "li");
  });
});
