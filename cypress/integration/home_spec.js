beforeEach(() => {
  cy.visit("http://localhost:3000");
});

describe("Testing Image Carousel", () => {
  it("testing clicks", () => {
    cy.get("[data-testid=rightclick]").click();
    cy.get("[data-testid=rightclick]").click();
    cy.get("[data-testid=leftclick]").click();
    cy.get("[data-testid=leftclick]").click();
  });

  it("testing responsiveness", () => {
    cy.get("[data-testid=heading]").contains("Caurosel Test");
    cy.get("[data-testid=slide]").should("have.length", 5);
    cy.viewport(600, 768);
    cy.get("[data-testid=heading]").contains("Caurosel Test");
    cy.get("[data-testid=slide]").should("have.length", 2);
    cy.viewport(360, 640);
    cy.get("[data-testid=heading]").contains("Caurosel Test");
    cy.get("[data-testid=slide]").should("have.length", 1);
    cy.screenshot();
  });
});
