import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function EditEmployee() {
  const navigate = useNavigate();
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ paddingBottom: 2 }}>
        Sua nhan vien
      </Typography>
      <Grid container spacing={4}>
        <Grid item lg={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Ma nhan vien(*)"
            size="small"
          />
        </Grid>
        <Grid item lg={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Ten nhan vien(*)"
            size="small"
          />
        </Grid>
        <Grid item lg={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="So dien thoai(*)"
            size="small"
          />
        </Grid>
        <Grid item lg={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Gioi tinh(*)"
            size="small"
          />
        </Grid>
        <Grid item lg={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Ngay sinh(*)"
            size="small"
          />
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ marginTop: 2 }}>
        sua
      </Button>
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{ marginTop: 2, ml: 2 }}
        color="error"
      >
        thoat
      </Button>
    </Paper>
  );
}
