import React, { useState } from "react";
import ReactTable from "../simple/table/table";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "../simple/Dialog/dialog";
import AccordionComponent from "../simple/accordion/accordion";
import { MdGroups } from "react-icons/md";
import { IinternalTeam } from '../../Interface/IInternalTeam';
/* eslint-disable-next-line */
export interface addTeamMemberProps {}

const dummyData = [
  {
    employeeName: "Muzamil",
    role: "Manager",
    email: "mshakir39@gmail.com",
    phoneNumber: "1212-122-1212",
    weeklyTargetBillingHours: "12",
    vacationDayAllowance: "21",
    sickDayAllowance: "21",
    billingRate: "12",
    costRate: "32",
  },
  {
    employeeName: "Muzasasamil",
    role: "Manager",
    email: "mshakir39@gmail.com",
    phoneNumber: "1212-122-1212",
    weeklyTargetBillingHours: "12",
    vacationDayAllowance: "21",
    sickDayAllowance: "21",
    billingRate: "12",
    costRate: "32",
  },
];

export const AddTeamMember: React.FC<addTeamMemberProps> = () => {
  const [tableData, setTableData] = useState(dummyData);
  const [editData, setEditData] = useState<IinternalTeam>();
  const [editDataIndex, setEditDataIndex] = useState(0);
  const [dialogType, setDialogType] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const onCloseCallback = () => {
    setOpenModal(false);
  };

  const getDataFormChild = (data: IinternalTeam) => {
    if (dialogType !== "Update") {
      const dummyData = [...tableData];
      dummyData.push(data);
      setTableData(dummyData);
      setOpenModal(false);
    } else {
      const dummyData = [...tableData];
      dummyData[editDataIndex] = data;
      setTableData(dummyData);
      setOpenModal(false);
    }
  };

  const onDeleteRowCallback = (index: number) => {
    const dummyData = [...tableData];
    dummyData.splice(index, 1);
    setTableData(dummyData);
  };

  const onEditRowCallback = (index: number, obj: IinternalTeam) => {
    setEditData(obj);
    setDialogType("Update");
    setEditDataIndex(index);
    setOpenModal(true);
  };

  return (
    <div>
      <AccordionComponent
        label="Internal Team"
        typographyStyle={{
          fontWeight: "600",
          display: "flex",
          alignItems: "flex-end",
        }}
        Icon={<MdGroups style={{ fontSize: "1.6rem", marginRight: "46px" }} />}
      >
        <ReactTable
          onDeleteRowCallback={onDeleteRowCallback}
          onEditRowCallback={onEditRowCallback}
          headers={[
            "Employee Name",
            "Role",
            "Email",
            "Phone Number",
            "Weekly Target Billing Hours",
            "Vacation Day Allowance",
            "Sick Day Allowance",
            "Billing Rate",
            "Cost Rate",
            " ",
          ]}
          data={tableData}
          dataTestId="react-table"
        />

        <Dialog
          openModal={openModal}
          onCloseCallback={onCloseCallback}
          type={dialogType}
          data={editData}
          title={"Team Member"}
          getDataFormChild={getDataFormChild}
        ></Dialog>
      </AccordionComponent>
      <Fab
        color="warning"
        aria-label="add"
        style={{ position: "absolute", top: "80%", left: "46%" }}
        onClick={() => {
          setOpenModal(true);
          setDialogType("Add");
        }}
      >
        <AddIcon style={{ color: "black" }} />
      </Fab>
    </div>
  );
};
export default AddTeamMember;
