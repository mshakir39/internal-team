import React, { ChangeEvent, useEffect, useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number-2";
import TextInput from "../simple/text-input/text-input";
import SelectInput from "../simple/select-input/select-input";
import AcceptButton from "../simple/accept-button/accept-button";
import CustomRequired from "../CustomRequired/CustomRequired";
/* eslint-disable-next-line */
export interface TeamMemberFormProps {
  title?: string;
  type: string;
  getDataFormChild?: any;
  data:any;
}

export const TeamMemberForm = ({
  title = "",
  type,
  getDataFormChild,
  data,
}: TeamMemberFormProps) => {
  const [inputData, setInputData] = useState({
    employeeName: "",
    role: "",
    email: "",
    phoneNumber: "",
    weeklyTargetBillingHours: "",
    vacationDayAllowance: "",
    sickDayAllowance: "",
    billingRate: "",
    costRate: "",
  });

  useEffect(()=>{
    setInputData(data)
  },[data])

  const handleChange = (
    newValue: string | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputData((prev: any) => ({
      ...prev,
      phoneNumber: newValue as string,
    }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("inputData", inputData);
  }, [inputData]);

  const onSelect = (e: any, value: string) => {
    setInputData((prev: any) => ({
      ...prev,
      role: value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getDataFormChild(inputData);
  };

  return (
    <form
      data-testid="form-testId"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "368px",
        height: "711px",
        position: "relative",
        //   gap: "16px",
      }}
      onSubmit={onSubmit}
    >
      <h2>{title}</h2>

      <TextInput
        dataTestId="employeeName-testId"
        required
        name="employeeName"
        type="text"
        label="Employee Name"
        value={inputData&&inputData.employeeName}
        onChange={onChange}
      />
      <SelectInput
        dataTestId="role-testId"
        isOptionEqualToValue={(option:any, value:any) => option.value ===value&&value}
        required
        name="role"
        label="Role"
        options={["Project Manager", "Caterer", "Box filler", "Cook"]}
        value={inputData&&inputData.role}
        onChange={(e: any, v: any) => onSelect(e, v)}
      />
      <TextInput
        dataTestId="email-testId"
        required
        name="email"
        type="email"
        label="Email"
        value={inputData&&inputData.email}
        onChange={onChange}
      />
      <CustomRequired
        requiredCondition={inputData&&inputData.phoneNumber!==""}
        value={inputData&&inputData.phoneNumber}
      >
        <MuiPhoneNumber
          onChange={handleChange}
          value={inputData&&inputData.phoneNumber}
          data-testid="phoneNumber-testId"
          required
          autoFormat={true}
          name="phoneNumber"
          fullWidth
          style={{ marginTop: "16px" }}
          defaultCountry="us"
          label="Phone number"
          margin="dense"
          size="small"
          variant="standard"
        />
      </CustomRequired>
      <TextInput
        dataTestId="weeklyTargetBillingHours-testId"
        required
        name="weeklyTargetBillingHours"
        type="number"
        label="Weekly Target Billing Hours"
        min="0"
        max="168"
        value={inputData&&inputData.weeklyTargetBillingHours}
        onChange={onChange}
      />

      <TextInput
        required
        dataTestId="vacationDayAllowance-testId"
        type="number"
        name="vacationDayAllowance"
        label="Vacation Day Allowance"
        min="0"
        max="8760"
        value={inputData&&inputData.vacationDayAllowance}
        onChange={onChange}
      />
      <TextInput
        dataTestId="sickDayAllowance-testId"
        required
        type="number"
        name="sickDayAllowance"
        label="Sick Day Allowance"
        min="0"
        max="8760"
        value={inputData&&inputData.sickDayAllowance}
        onChange={onChange}
      />
      <TextInput
        required
        dataTestId="billingRate-testId"
        type="number"
        name="billingRate"
        label="Billng Rate"
        min="0"
        max="1000000"
        value={inputData&&inputData.billingRate}
        onChange={onChange}
      />
      <TextInput
        required
        name="costRate"
        type="number"
        label="Cost Rate"
        dataTestId="costRate-testId"
        min="0"
        max="1000000"
        value={inputData&&inputData.costRate}
        onChange={onChange}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          paddingBottom: "5px",
          paddingRight: "25px",
        }}
      >
        <AcceptButton
          type="submit"
          name="save"
          text="Save"
          color_="warning"
          fullWidth={false}
          style={{
            color: "black",
            borderRadius: "7px",
            fontWeight: "800",
            marginRight: "7px",
          }}
        />
        <AcceptButton
          type="button"
          name="cancel"
          text="Cancel"
          fullWidth={false}
          style={{ background: "#323643", borderRadius: "7px" }}
        />
      </div>
    </form>
  );
};

export default TeamMemberForm;
