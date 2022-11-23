import { act, fireEvent, render } from "@testing-library/react";

import AddTeamMember from "./addTeamMember";

describe("AcceptButton", () => {
    const mockChangeValue = jest.fn();
  it("should render successfully", () => {
    const { baseElement } = render(<AddTeamMember />);
    expect(baseElement).toBeTruthy();
  });
  it("shows all required input fields with empty values", () => {
    const { getByTestId } = render(
      <AddTeamMember
   
      />
    );

    const employeeInput=getByTestId("employeeName-testId").querySelector('input') as HTMLInputElement
    // const roleInput=getByTestId("role-testId").querySelector('select')  as any
    const emailInput=getByTestId("email-testId").querySelector('input') as HTMLInputElement
    const phoneNumberInput=getByTestId("phoneNumber-testId").querySelector('input')  as HTMLInputElement
    const weeklyTargetBillingHoursInput=getByTestId("weeklyTargetBillingHours-testId").querySelector('input')  as HTMLInputElement
    const vacationDayAllowanceInput=getByTestId("vacationDayAllowance-testId").querySelector('input')  as HTMLInputElement
    const sickDayAllowanceInput=getByTestId("sickDayAllowance-testId").querySelector('input')  as HTMLInputElement
    const billingRateInput=getByTestId("billingRate-testId").querySelector('input')  as HTMLInputElement
    const costRateInput=getByTestId("costRate-testId").querySelector('input')  as HTMLInputElement


    expect (employeeInput.value).toBe("");
    // expect (roleInput.value).toBe("");
    expect (emailInput.value).toBe("");
    expect (phoneNumberInput.value).toBe("");
    expect (weeklyTargetBillingHoursInput.value).toBe("");
    expect (vacationDayAllowanceInput.value).toBe("");
    expect (sickDayAllowanceInput.value).toBe("");
    expect (billingRateInput.value).toBe("");
    expect (costRateInput.value).toBe("");
  });
  
  it("triggers event handler on input change of name and Validate All Input Fields",()=>{
    const { getByTestId,rerender  } = render(
        <AddTeamMember
     
        />
      );

      const employeeInput=getByTestId("employeeName-testId").querySelector('input') as HTMLInputElement
      // const roleInput=getByTestId("role-testId").querySelector('select')  as any
      const emailInput=getByTestId("email-testId").querySelector('input') as HTMLInputElement
      const phoneNumberInput=getByTestId("phoneNumber-testId").querySelector('input')  as HTMLInputElement
      const weeklyTargetBillingHoursInput=getByTestId("weeklyTargetBillingHours-testId").querySelector('input')  as HTMLInputElement
      const vacationDayAllowanceInput=getByTestId("vacationDayAllowance-testId").querySelector('input')  as HTMLInputElement
      const sickDayAllowanceInput=getByTestId("sickDayAllowance-testId").querySelector('input')  as HTMLInputElement
      const billingRateInput=getByTestId("billingRate-testId").querySelector('input')  as HTMLInputElement
      const costRateInput=getByTestId("costRate-testId").querySelector('input')  as HTMLInputElement

    act(() => {

        fireEvent.change(employeeInput, {
          target: { value: "Muzamil" },
        });
        fireEvent.change(emailInput, {
            target: { value: "mshakir39@gmail.com" },
          });
          fireEvent.change(phoneNumberInput, {
            target: { value: "222-221-1212-1212" },
          });
          fireEvent.change(weeklyTargetBillingHoursInput, {
            target: { value: "40" },
          });
          fireEvent.change(vacationDayAllowanceInput, {
            target: { value: "2" },
          });
          fireEvent.change(sickDayAllowanceInput, {
            target: { value: "3" },
          });
          fireEvent.change(billingRateInput, {
            target: { value: "32" },
          });
          fireEvent.change(costRateInput, {
            target: { value: "22" },
          });
      });
      rerender(
        <AddTeamMember
        
        />
      );

  
      expect(employeeInput.value).toBe("Muzamil");
      expect(emailInput.value).toBe("mshakir39@gmail.com");
      expect(phoneNumberInput.value).toBe("222-221-1212-1212");
      expect(weeklyTargetBillingHoursInput.value).toBe("40");
      expect(vacationDayAllowanceInput.value).toBe("2");
      expect(sickDayAllowanceInput.value).toBe("3");
      expect(billingRateInput.value).toBe("32");
      expect(costRateInput.value).toBe("22");

      expect(employeeInput.value).not.toBe("");
      expect(weeklyTargetBillingHoursInput.value).toBe("40");


  })

});
