import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IinternalTeam } from "../../../Interface/IInternalTeam";
// import { getNumber } from "../../../util/getNumber";

export interface IReactTable {
  headers: Array<string>;
  data: Array<object>;
  dataTestId?: string;
  onDeleteRowCallback?: any;
  onEditRowCallback?: any;
}
export const ReactTable: React.FC<IReactTable> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [tableRowIndex, setTableRowIndex] = React.useState<number>();
  const [selectedRowObj, setSelectedRowObj] = React.useState<IinternalTeam>();

  const { headers, data, dataTestId, onDeleteRowCallback, onEditRowCallback } =
    props;

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableContainer
      style={{ boxShadow: "none" }}
      component={Paper}
      sx={{
        [`& .${tableCellClasses.root}`]: {
          borderBottom: "none",
        },
      }}
      data-testid={dataTestId}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" data-cy="table">
        <TableHead style={{ background: "#f7ece2" }}>
          <TableRow data-cy="table-header-row" style={{ whiteSpace: "nowrap" }}>
            {headers.map((headerTitle: string, index: number) => (
              <TableCell data-testid="table-header-cell" key={index}>
                {headerTitle}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((obj: any, indexRow: number) => {
            return (
              <TableRow
                key={indexRow}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                data-testid="table-body-row"
              >
                {Object.entries(obj).map(([key]) => {
                  // let Color = "";

                  return (
                    <TableCell
                      align="left"
                      // sx={{ background: `${Color}` }}
                      key={key}
                    >
                      {obj[key]}
                    </TableCell>
                  );
                })}
                <TableCell align="left">
                  <BsThreeDotsVertical
                    onClick={(e) => {
                      handleClick(e);
                      setTableRowIndex(indexRow);
                      setSelectedRowObj(obj)
                    }}
                    style={{ cursor: "pointer" }}
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
                      onClick={() => {
                        onEditRowCallback && onEditRowCallback(tableRowIndex, selectedRowObj);
                        handleClose();
                      }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        onDeleteRowCallback &&
                          onDeleteRowCallback(tableRowIndex);
                        handleClose();
                      }}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReactTable;
