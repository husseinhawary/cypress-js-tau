class TodoPage {
  //Locators
  locators = {
    todoTxtBox: () => cy.get(".new-todo"),
    todoCheckBox: (todoIndex) =>
      cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`),
    getCompleted: () => cy.contains("Completed"),
    getActive: () => cy.contains("Active"),
    getAll: () => cy.contains("All"),
    clearCompleted: () => cy.contains("Clear completed"),
  };
  navigate() {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
  }

  addTodo(todoText) {
    this.locators.todoTxtBox().type(todoText + "{enter}");
  }

  toggleTodo(todoIndex) {
    this.locators.todoCheckBox(todoIndex).click();
  }

  showOnlyCompletedTodos() {
    this.locators.getCompleted().click();
  }

  showOnlyActiveTodos() {
    this.locators.getActive().click();
  }
  showAllTodos() {
    this.locators.getAll().click();
  }

  clearCompleted() {
    this.locators.clearCompleted().click();
  }

  validateNumberOfTodosShown(expectedNumberOfTodos) {
    cy.get(".todo-list li").should("have.length", expectedNumberOfTodos);
  }

  validateTodoCompletedState(todoIndex, shouldBeCompleted) {
    const l = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`);

    l.should(
      `${shouldBeCompleted ? "" : "not."}have.css`,
      "text-decoration-line",
      "line-through"
    );
  }

  validateTodoText(todoIndex, expectedText) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should(
      "have.text",
      expectedText
    );
  }

  validateToggleState(todoIndex, shouldBeToggled) {
    const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`);

    label.should(`${shouldBeToggled ? "" : "not."}be.checked`);
  }
}

export default TodoPage;
