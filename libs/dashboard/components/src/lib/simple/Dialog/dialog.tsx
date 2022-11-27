import * as React from "react";
import { PropsWithChildren } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { TeamMemberForm } from "../Team Member Form/TeamMemberForm";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import { IinternalTeam } from "../../../Interface/IInternalTeam";
import AcceptButton from "../accept-button/accept-button";

interface DialogProps extends PropsWithChildren {
  openModal: boolean;
  onCloseCallback: () => void;
  title?: string;
  getDataFormChild?: any;
  type?: "Add" | "Update" | "Delete" | "" | undefined;
  data?: IinternalTeam;
  onDeleteCallback?: () => void;
}
export default function AlertDialog({
  openModal,
  title = "",
  type = "",
  onCloseCallback,
  getDataFormChild,
  onDeleteCallback,
  data,
  children,
}: DialogProps) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const handleClose = () => {
    setOpen(false);
    onCloseCallback();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      data-testid="dialog-container"
    >
      {type !== "Delete" && title !== "" ? (
        <DialogTitle
          style={{ fontWeight: "600" }}
          data-testid="dialog-title-testId"
        >
          {type + title}
        </DialogTitle>
      ) : null}

      <DialogContent>
        {children && type !== "Delete" ? (
          children
        ) : type === "Add" || type === "Update" ? (
          <TeamMemberForm
            type={type}
            data={data}
            getDataFormChild={getDataFormChild}
          />
        ) : null}

        {type === "Delete" ? (
          <div
            data-testid="delete-modal-testId"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>Want to Delete ?</h4>
            <span> You wont be able to revert it !</span>
            <div
              data-testid="button-wrapper-testId"
              style={{
                display: "flex",
                justifyContent: "end",
                paddingTop: "10px",
              }}
            >
              <AcceptButton
                type="button"
                data-testid="delete-testId"
                name="Delete"
                text="Delete"
                color_="warning"
                fullWidth={false}
                style={{
                  color: "black",
                  borderRadius: "7px",
                  fontWeight: "800",
                  width: "70px",
                  fontSize: "0.6rem",
                  marginRight: "7px",
                }}
                onClick={onDeleteCallback}
              />
              <AcceptButton
                type="button"
                name="cancel"
                text="Cancel"
                fullWidth={false}
                style={{
                  background: "#323643",
                  borderRadius: "7px",
                  width: "70px",
                  fontSize: "0.6rem",
                }}
                onClick={() => handleClose()}
              />
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
