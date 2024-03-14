import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { randomColor } from "../../utils/randomColor";
export default function DepartmentDetail() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Thao tac
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-end", columnGap: 2 }}>
            <Button
              onClick={() =>
                navigate("/phong-ban/chi-tiet/phong-dao-tao/them-nhan-vien")
              }
              variant="outlined"
              startIcon={<AddIcon />}
            >
              them nhan vien
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              xoa phong ban
            </Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item lg={12}>
        <Paper>
          <Typography variant="h6" sx={{ padding: 2 }}>
            Danh sach nhan vien Phong Dao Tao
          </Typography>
          <Divider />
          <TableContainer sx={{ height: "450px" }}>
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
                <TableRow key={uuidv4()}>
                  <TableCell>123</TableCell>
                  <TableCell>
                    <Avatar sx={{ bgcolor: randomColor() }} />
                  </TableCell>
                  <TableCell>Nguyen Van A</TableCell>
                  <TableCell>0123456789</TableCell>
                  <TableCell>Nam</TableCell>
                  <TableCell>12/03/1999</TableCell>
                  <TableCell>
                    <Button size="small" color="error" variant="outlined">
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
