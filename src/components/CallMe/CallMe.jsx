import * as React from "react";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import "./callMe.css";
export default function CallMe() {
  return (
    <div className="CallMe">
      <a href="tel:+7(951)560-11-22" className="callMeText">
        <Button
          variant="outlined"
          endIcon={<CallIcon />}
          color="error"
          style={{ cursor: "pointer" }}
        >
          Позвоните
        </Button>
      </a>
    </div>
  );
}
