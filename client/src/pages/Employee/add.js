import React, { useState } from "react";
import Card from "../../components/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function AddEmployee() {
  const [data, setData] = useState({
    hoten: "",
    namsinh: "",
    gioitinh: "",
    cccd: "",
    diachi: "",
    dienthoai: "",
    email: "",
    vitri: "",
    bangcap: "",
    trinhdohocvan: "",
    kinhnghiem: "",
    trinhdochuyenmon: "",
    donvi: "",
    linhvuc: "",
  });
  return (
    <Card title="Them nhan vien">
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Typography>Thong tin:</Typography>
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Ho va Ten" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Nam sinh" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Gioi tinh" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="So CMND/CCCD" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Dia chi" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Dien thoai" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Dia chi email" size="small" />
        </Grid>
      </Grid>
      <Grid container spacing={2} pt={2}>
        <Grid item lg={12}>
          <Typography>Cong viec, dao tao va ky nang:</Typography>
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Vi tri" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Bang cap" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Trinh do hoc van" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Kinh nghiem" size="small" />
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Trinh do chuyen mon" size="small" />
        </Grid>
        <Grid item lg={6}>
          <FormControl fullWidth size="small">
            <Select
              displayEmpty
              defaultValue={""}
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem disabled value="">
                Don vi
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={6}>
          <TextField fullWidth placeholder="Linh vuc" size="small" />
        </Grid>
      </Grid>
      <Box sx={{ pt: 2 }}>
        <Button sx={{ mr: 2 }} size="small" variant="outlined">
          them
        </Button>
        <Button size="small" variant="outlined">
          thoat
        </Button>
      </Box>
    </Card>
  );
}
