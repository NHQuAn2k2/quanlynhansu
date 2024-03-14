import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { randomColor } from "../../utils/randomColor";
import { useNavigate } from "react-router-dom";
export default function FacultyDetail() {
  const navigate = useNavigate();
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Thao tac
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
              <Button
                onClick={() =>
                  navigate(
                    "/khoa/chi-tiet/khoa-cong-nghe-thong-tin/them-nhan-vien"
                  )
                }
                startIcon={<AddIcon />}
                variant="outlined"
              >
                them nhan vien
              </Button>
              <Button startIcon={<DeleteIcon />} variant="outlined">
                xoa khoa
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper>
            <Typography sx={{ p: 2 }} variant="h6">
              Danh sach nhan vien Khoa Cong Nghe Thong Tin
            </Typography>
            <Divider />
            <TableContainer sx={{ height: "450px", overflow: "auto" }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Ma nhan vien</TableCell>
                    <TableCell>Anh</TableCell>
                    <TableCell>Ten nhan vien</TableCell>
                    <TableCell>So dien thoai</TableCell>
                    <TableCell>Gioi tinh</TableCell>
                    <TableCell>Ngay sinh</TableCell>
                    <TableCell>Tuy chinh</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>123</TableCell>
                    <TableCell>
                      <Avatar sx={{ bgcolor: randomColor() }} />
                    </TableCell>
                    <TableCell>Nguyen Van A</TableCell>
                    <TableCell>0123456789</TableCell>
                    <TableCell>Nam</TableCell>
                    <TableCell>12/03/1999</TableCell>
                    <TableCell>
                      <Button color="error" size="small" variant="outlined">
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
    </Box>
  );
}
