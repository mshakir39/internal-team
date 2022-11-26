describe("components", () => {
  it("should visit the page successfully", () => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=internal-team-internalteam--primary`
    );
  });

  it("should diplay the Elements on Page ", () => {
    cy.get('[data-testid="accordion-testId"]').should("exist");
    cy.get('[data-cy="fab-button-cyId"]').should("exist");
    cy.get("table").should("exist");
  });

  it.only("should add Team Member successfully ", () => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=internal-team-internalteam--primary`
    );

    cy.get(".MuiDataGrid-row").should("not.exist");
    cy.get("table").should("exist");
    cy.get('[data-cy="fab-button-cyId"]').should("exist").click();
    cy.get('[data-testid="dialog-container"]').should("exist");
    // cy.get('[data-cy="text-input"]').get("input").should("have.length",9);

    //< Start type text to all input fields>
    cy.get('[data-testid="employeeName-testId"]')
      .find("input")
      .should("exist")
      .type("From Test Name")
      .should("have.value", "From Test Name");

    cy.get('[data-testid="role-testId"]')
      .find("input")
      .should("exist")
      .type("Caterer")
      .type("{downarrow}")
      .type("{enter}")
      .should("have.value", "Caterer");

    cy.get('[data-testid="email-testId"]')
      .find("input")
      .focus()
      .should("exist")
      .type("mshakir39@gmail.com")
      .should("have.value", "mshakir39@gmail.com");

    cy.get('[data-testid="phoneNumber-testId"]')
      .find("input")
      .focus()
      .should("exist")
      .type("2123123123")
      .should("have.value", "+1 (212) 312-3123");

    cy.get('[data-testid="weeklyTargetBillingHours-testId"]')
      .find("input")
      .focus()
      .should("exist")
      .type("22")
      .should("have.value", "22");

    cy.get('[data-testid="vacationDayAllowance-testId"]')
      .find("input")
      .focus()
      .should("exist")
      .type("22")
      .should("have.value", "22");

    cy.get('[data-testid="sickDayAllowance-testId"]')
      .find("input")
      .focus()
      .should("exist")
      .type("22")
      .should("have.value", "22");

    cy.get('[data-testid="billingRate-testId"]')
      .find("input")
      .focus()
      .should("exist")
      .type("22")
      .should("have.value", "22");

    cy.get('[data-testid="costRate-testId"]')
      .find("input")
      .focus()
      .should("exist")
      .type("22")
      .should("have.value", "22");
    //< End type text to all input fields>

    cy.get('[data-testid="form-testId"]').submit(); //submit form
    cy.get(".MuiDataGrid-row").should("have.length", "1"); //check data have been added in table
    cy.get(".MuiDataGrid-row").eq(0).should("contain", "From Test Name"); //before update data
    cy.get('[data-testid="menu-testId"]').click(); //open menu on click 3 dots
    cy.get('[data-testid="menuEdit-testId"]').click(); //click on edit in menu
    cy.get('[data-testid="dialog-container"]').should("exist");

    cy.get('[data-testid="employeeName-testId"]')
      .find("input")
      .should("exist")
      .clear()
      .type("Updated Text")
      .should("have.value", "Updated Text");

    cy.get('[data-testid="form-testId"]').submit();
    cy.get(".MuiDataGrid-row").eq(0).should("not.contain", "From Test Name"); //check old value does exist
    cy.get(".MuiDataGrid-row").eq(0).should("contain", "Updated Text"); //check value have been updated
    cy.get('[data-testid="menu-testId"]').click();
    cy.get('[data-testid="menuDelete-testId"]').click();
    cy.get('[data-testid="delete-modal-testId"]') //check modal exist and click on delete button
      .should("exist")
      .find("button")
      .eq(0)
      .should("exist")
      .click();

    cy.get(".MuiDataGrid-row").should("not.exist"); //check row data have been deleted.
  });
});
