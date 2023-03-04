/// <reference types="cypress" />
import TodoPage from "../../page-objects/todo-page";

describe("Visual Validation", () => {
  const todoPage = new TodoPage();

  before("Setup", () => {
    todoPage.navigate();
  });

  beforeEach("Open Applitools", () => {
    cy.eyesOpen({
      appName: "TAU TodoMVC",
      batchName: "TAU TodoMVC Hey!",
      //   browser: [
      //     { name: "chrome", width: 1024, height: 768 },
      //     { name: "chrome", width: 800, height: 600 },
      //     { name: "firefox", width: 1024, height: 768 },
      //     { deviceName: "iPhone X" },
      //   ],
    });
  });

  it("should look good", () => {
    cy.eyesCheckWindow("empty todo list");

    todoPage.addTodo("Clean Room");
    todoPage.addTodo("Learn Javascript");
    cy.eyesCheckWindow("two todos");

    todoPage.toggleTodo(0);
    cy.eyesCheckWindow("mark as completed");
  });

  afterEach("Close Applitools", () => {
    cy.eyesClose();
  });
});
