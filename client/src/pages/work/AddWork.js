import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
export default function AddWork() {
  const navigate = useNavigate();
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ pb: 2 }}>
          Them cong tac
        </Typography>
        <Grid container spacing={4}>
          <Grid item lg={12}>
            <FormControl fullWidth size="small">
              <InputLabel>Chon nhan su</InputLabel>
              <Select
                // value={age}
                label="Chon nhan su"
                // onChange={handleChange}
              >
                <MenuItem value={""}>Ten</MenuItem>
                <MenuItem value={""}>Twenty</MenuItem>
                <MenuItem value={""}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  format="DD/MM/YYYY"
                  minDate={dayjs()}
                  sx={{ width: "100%" }}
                  label="Ngay bat dau"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item lg={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  format="DD/MM/YYYY"
                  minDate={dayjs()}
                  sx={{ width: "100%" }}
                  label="Ngay ket thuc"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item lg={12}>
            <TextField size="small" label="Nam hoc" fullWidth />
          </Grid>
          <Grid item lg={12}>
            <TextField size="small" label="Hoc ky" type="number" fullWidth />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ marginTop: 2 }}>
          them
        </Button>
        <Button
          onClick={() => navigate("/cong-tac")}
          variant="contained"
          sx={{ marginTop: 2, ml: 2 }}
          color="error"
        >
          thoat
        </Button>
      </Paper>
    </Box>
  );
}
