import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
export default function AddFaculty() {
  const navigate = useNavigate();
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography sx={{ pb: 2 }} variant="h6">
          Them khoa
        </Typography>
        <Grid container spacing={4}>
          <Grid item lg={12}>
            <TextField size="small" label="ten khoa(*)" fullWidth />
          </Grid>
        </Grid>
        <Button sx={{ mt: 2 }} variant="contained">
          them
        </Button>
        <Button
          onClick={() => navigate("/khoa")}
          sx={{ mt: 2, ml: 2 }}
          variant="contained"
          color="error"
        >
          thoat
        </Button>
      </Paper>
    </Box>
  );
}
