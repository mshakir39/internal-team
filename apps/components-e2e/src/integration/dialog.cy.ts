describe("components", () => {
  it("should display Dialog", () => {
    
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=simple-dialog-dialog--primary`
    );
    cy.get('[data-testid="delete-modal-testId"]').contains("Want to Delete ?");
   

  });
});
