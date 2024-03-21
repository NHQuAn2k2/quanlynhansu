import React from "react";
import Card from "../../components/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function AddDepartment() {
  const navigate = useNavigate();
  return (
    <Card title="Them phong ban">
      <TextField
        fullWidth
        size="small"
        placeholder="Ten phong ban"
        sx={{ mb: 2 }}
      />
      <Button size="small" variant="outlined">
        them
      </Button>
      <Button
        onClick={() => navigate("/phong-ban")}
        size="small"
        variant="outlined"
        sx={{ ml: 2 }}
      >
        thoat
      </Button>
    </Card>
  );
}
