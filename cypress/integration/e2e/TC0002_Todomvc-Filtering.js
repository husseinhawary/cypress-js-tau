describe("Todomvc Filtering Suite", () => {
  beforeEach("Setup", () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
    cy.get("input.new-todo").clear().type("Learing Typescript {enter}");
    cy.get("input.new-todo").clear().type("Learing Javascript {enter}");
    cy.get("input.new-todo").clear().type("Learing Cypress {enter}");

    cy.get("ul.todo-list li:nth-child(2) .toggle").click();
  });

  it("should filter active todos", () => {
    cy.contains("Active").click();
    cy.get(".todo-list li").should("have.length", 2);
  });

  it("should filter completed todos", () => {
    cy.contains("Completed").click();
    cy.get(".todo-list li").should("have.length", 1);
  });

  it("should filter all todos", () => {
    cy.contains("All").click();
    cy.get(".todo-list li").should("have.length", 3);
  });
});
