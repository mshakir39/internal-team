import * as React from "react";
import { PropsWithChildren } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { TeamMemberForm } from "../../Team Member Form/TeamMemberForm";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import { IinternalTeam } from "../../../Interface/IInternalTeam";

interface DialogProps extends PropsWithChildren {
  openModal: boolean;
  onCloseCallback: () => void;
  title?: string;
  getDataFormChild?: any;
  type?: string;
  data?: IinternalTeam;
}
export default function AlertDialog({
  openModal,
  title = "",
  type = "",
  onCloseCallback,
  getDataFormChild,
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
    >
      {title !== "" ? (
        <DialogTitle style={{ fontWeight: "600" }}>
          {type} {title}
        </DialogTitle>
      ) : (
        ""
      )}
      <DialogContent>
        {children ? (
          children
        ) : (
          <TeamMemberForm
            type={type}
            data={data}
            getDataFormChild={getDataFormChild}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
