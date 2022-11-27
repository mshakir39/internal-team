import React, { useState } from "react";
import ReactTable from "../simple/table/table";
import { GridColDef } from "@mui/x-data-grid";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "../simple/Dialog/dialog";
import AccordionComponent from "../simple/accordion/accordion";
import { MdGroups } from "react-icons/md";
import { IinternalTeam } from "../../Interface/IInternalTeam";
import { v4 as uuidv4 } from "uuid";
/* eslint-disable-next-line */
export interface addTeamMemberProps {}

const dummyData: Array<IinternalTeam> = [
  // {
  //   id: "0",
  //   employeeName: "Muzamil",
  //   role: "Manager",
  //   email: "mshakir39@gmail.com",
  //   phoneNumber: "1212-122-1212",
  //   weeklyTargetBillingHours: "12",
  //   vacationDayAllowance: "21",
  //   sickDayAllowance: "21",
  //   billingRate: "12",
  //   costRate: "32",
  // },
  // {
  //   id: "1",
  //   employeeName: "Muzasasamil",
  //   role: "Manager",
  //   email: "mshakir39@gmail.com",
  //   phoneNumber: "1212-122-1212",
  //   weeklyTargetBillingHours: "12",
  //   vacationDayAllowance: "21",
  //   sickDayAllowance: "21",
  //   billingRate: "12",
  //   costRate: "32",
  // },
];

const internalTeamObj = {
  id: "",
  employeeName: "",
  role: "",
  email: "",
  phoneNumber: "",
  weeklyTargetBillingHours: "",
  vacationDayAllowance: "",
  sickDayAllowance: "",
  billingRate: "",
  costRate: "",
};

export const AddTeamMember: React.FC<addTeamMemberProps> = (
  props: addTeamMemberProps
) => {
  const [tableData, setTableData] = useState<Array<IinternalTeam>>(dummyData);
  const [editData, setEditData] = useState<IinternalTeam>();
  const [rowIndex, setRowIndex] = useState<string>("");
  const [dialogType, setDialogType] = useState<
    "Add" | "Update" | "Delete" | undefined
  >(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [tableRowIndex, setTableRowIndex] = React.useState<string>("");
  const [selectedRowObj, setSelectedRowObj] =
    React.useState<IinternalTeam>(internalTeamObj);

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onCloseCallback = () => {
    setOpenModal(false);
    setEditData(internalTeamObj);
  };

  const getDataFormChild = (data: IinternalTeam) => {
    if (dialogType !== "Update") {
      const uId = uuidv4();
      const dummyData = [...tableData];
      dummyData.push(data);
      dummyData[dummyData.length - 1].id = uId;
      setTableData(dummyData);
      setOpenModal(false);
    } else {
      const dummyData = [...tableData];
      const findIndex = dummyData.findIndex((obj) => obj.id === data.id);
      dummyData[findIndex] = data;
      setTableData(dummyData);
      setOpenModal(false);
    }
  };

  const onDeleteRowCallback = (index: string) => {
    setOpenModal(true);
    setDialogType("Delete");
    setRowIndex(index);
  };

  const onDeleteRow = () => {
    const dummyData = [...tableData];
    const findIndex = dummyData.findIndex((obj) => obj.id === rowIndex);
    dummyData.splice(findIndex, 1);
    setTableData(dummyData);
    setOpenModal(false);
  };

  const onEditRowCallback = (index: string, obj: IinternalTeam) => {
    setEditData(obj);
    setDialogType("Update");
    setRowIndex(index);
    setOpenModal(true);
  };

  const columns: GridColDef[] = [
    {
      field: "employeeName",
      headerName: "Employee Name",
      width: 130,
      renderCell: (row) => (
        <span title={row.row.employeeName}>{row.row.employeeName}</span>
      ),
    },
    {
      field: "role",
      headerName: "Role",
      width: 100,

      renderCell: (row) => <span title={row.row.role}>{row.row.role}</span>,
    },
    {
      field: "email",
      headerName: "Email",
      width: 100,
      renderCell: (row) => <span title={row.row.email}>{row.row.email}</span>,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      type: "number",
      width: 130,
      sortable: true,
      renderCell: (row) => (
        <span title={row.row.phoneNumber}>{row.row.phoneNumber}</span>
      ),
    },
    {
      field: "weeklyTargetBillingHours",
      headerName: "Weekly Target Billing Hours",
      sortable: true,
      width: 160,
    },
    {
      field: "vacationDayAllowance",
      headerName: "Vacation Day Allowance",
      sortable: true,
      width: 160,
    },
    {
      field: "sickDayAllowance",
      headerName: "Sick Day Allowance",
      sortable: true,
      width: 160,
    },
    {
      field: "billingRate",
      headerName: "Billing Rate",
      sortable: true,
      width: 90,
    },
    {
      field: "costRate",
      headerName: "Cost Rate",
      sortable: true,
      width: 90,
    },
    {
      field: "",
      sortable: false,
      width: 70,
      renderCell: (row) => (
        <>
          <BsThreeDotsVertical
            style={{ cursor: "pointer" }}
            data-testid="menu-testId"
            onClick={(e) => {
              handleClick(e);
              setTableRowIndex(row.row.id);
              setSelectedRowObj(row.row);
            }}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              data-testid="menuEdit-testId"
              onClick={() => {
                onEditRowCallback &&
                  onEditRowCallback(tableRowIndex, selectedRowObj);

                handleClose();
              }}
            >
              Edit
            </MenuItem>
            <MenuItem
              data-testid="menuDelete-testId"
              onClick={(e) => {
                onDeleteRowCallback && onDeleteRowCallback(tableRowIndex);
                handleClose();
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </>
      ),
    },
  ];

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
        <ReactTable tableData={tableData} columns={columns} />
        <Dialog
          openModal={openModal}
          onCloseCallback={onCloseCallback}
          type={dialogType}
          data={editData}
          title={"Team Member"}
          getDataFormChild={getDataFormChild}
          onDeleteCallback={onDeleteRow}
        ></Dialog>
      </AccordionComponent>
      <Fab
        color="warning"
        aria-label="add"
        data-cy="fab-button-cyId"
        data-testid="fab-button-testId"
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
