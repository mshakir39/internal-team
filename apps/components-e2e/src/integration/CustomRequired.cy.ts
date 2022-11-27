describe("components", () => {
  it("should work properly Custom Required", () => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=simple-customrequired--primary`
    );
    //form will not submit with due to validation

    cy.get('[data-testid="form-testid"]').submit();
    cy.get('[data-testid="isSubmit-testid"]').should(
      "not.have.value",
      "submitted"
    );
    //form submition check
    cy.get('[data-testid="phoneInput-testId"]')
      .find("input")
      .focus()
      .should("exist")
      .type("2123123123")
      .should("have.value", "+1 (212) 312-3123");
    cy.get('[data-testid="form-testid"]').submit();
    cy.get('[data-testid="isSubmit-testid"]').should("contain", "submitted");
    cy.get('[data-testid="phoneInput-testId"]')
      .find("input")
      .focus()
      .should("exist")
      .type("{backspace}")
      .should("have.value", "+1 (212) 312-312");

    //form submitted with out validation
    cy.get('[data-testid="withoutCR-checkbox-testId"]').click();
    cy.get('[data-testid="form-testid"]').submit();
    cy.get('[data-testid="isSubmit-testid"]').should("contain", "submitted");
  });
});
