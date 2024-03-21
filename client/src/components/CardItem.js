import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
export default function CardItem({ title, quantity, onClick = () => {} }) {
  return (
    <Paper sx={{ p: 2, bgcolor: "Highlight", color: "white" }}>
      <Typography sx={{ fontSize: "18px" }}>{title}</Typography>
      <Typography sx={{ my: 2 }} variant="body2">
        so luong nhan vien: {quantity}
      </Typography>
      <Button
        onClick={onClick}
        sx={{
          color: "white",
          "&.MuiButton-root": {
            borderColor: "white",
          },
        }}
        variant="outlined"
        size="small"
      >
        xem chi tiet
      </Button>
    </Paper>
  );
}
