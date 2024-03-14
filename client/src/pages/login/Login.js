import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { grey } from "@mui/material/colors";
export default function Login() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: grey[200],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper sx={{ width: "400px", padding: 2 }}>
        <Typography
          sx={{ textAlign: "center", marginBottom: 2 }}
          fontWeight={"bold"}
        >
          Dang nhap tai khoan
        </Typography>
        <TextField
          placeholder="Nhap email"
          size="small"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          sx={{ marginBottom: 2 }}
          placeholder="Nhap mat khau"
          size="small"
          fullWidth
          type="password"
        />
        <Button variant="contained" size="small">
          dang nhap
        </Button>
      </Paper>
    </Box>
  );
}
