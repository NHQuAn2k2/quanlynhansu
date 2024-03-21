import React from "react";
import Card from "../../components/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function AddFaculty() {
  const navigate = useNavigate();
  return (
    <Card title="Them khoa">
      <TextField fullWidth size="small" placeholder="Ten khoa" sx={{ mb: 2 }} />
      <Button size="small" variant="outlined">
        them
      </Button>
      <Button
        onClick={() => navigate("/khoa")}
        size="small"
        variant="outlined"
        sx={{ ml: 2 }}
      >
        thoat
      </Button>
    </Card>
  );
}
