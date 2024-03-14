import React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Avatar from "@mui/material/Avatar";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import { randomColor } from "../../utils/randomColor";
import { useNavigate } from "react-router-dom";
export default function Work() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Thao tac
          </Typography>
          <Button
            onClick={() => navigate("/cong-tac/them-cong-tac")}
            startIcon={<AddIcon />}
            variant="outlined"
          >
            them cong tac
          </Button>
        </Paper>
      </Grid>
      <Grid item lg={12}>
        <Paper>
          <Typography sx={{ p: 2 }} variant="h6">
            Danh sach cong tac nhan vien
          </Typography>
          <Divider />
          <TableContainer sx={{ height: "450px", overflow: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Ma nhan vien</TableCell>
                  <TableCell>Anh</TableCell>
                  <TableCell>Ten nhan vien</TableCell>
                  <TableCell>Ngay bat dau</TableCell>
                  <TableCell>Ngay ket thuc</TableCell>
                  <TableCell>Nam hoc</TableCell>
                  <TableCell>Hoc ky</TableCell>
                  <TableCell>Tinh trang</TableCell>
                  <TableCell>Tuy chinh</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>123</TableCell>
                  <TableCell>
                    <Avatar sx={{ bgcolor: randomColor() }} />
                  </TableCell>
                  <TableCell>Nguyen Van B</TableCell>
                  <TableCell>01/02/2024</TableCell>
                  <TableCell>01/05/2024</TableCell>
                  <TableCell>2024 - 2025</TableCell>
                  <TableCell>hoc ky 1</TableCell>
                  <TableCell>
                    <Chip
                      color="success"
                      size="small"
                      variant="outlined"
                      label="dang cong tac"
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small" color="error">
                      xoa
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}
