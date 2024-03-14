import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
export default function AddEmployeeDepartment() {
  const navigate = useNavigate();
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ pb: 2 }}>
          Them nhan vien vao Phong Dao Tao
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel>Chon nhan vien</InputLabel>
          <Select
            // value={age}
            label="Chon nhan vien"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Box mt={2}>
          <Button variant="contained">them</Button>
          <Button
            onClick={() => navigate("/phong-ban/chi-tiet/phong-dao-tao")}
            variant="contained"
            sx={{ ml: 2 }}
            color="error"
          >
            thoat
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
