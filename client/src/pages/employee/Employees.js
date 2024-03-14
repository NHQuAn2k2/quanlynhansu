import React from "react";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Divider from "@mui/material/Divider";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { randomColor } from "../../utils/randomColor";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
export default function Employees() {
  const navigate = useNavigate();
  return (
    <Grid container rowSpacing={2}>
      <Grid item lg={12}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Thao tac
          </Typography>
          <Button
            onClick={() => navigate("/nhan-vien/them-nhan-vien")}
            startIcon={<AddIcon />}
            variant="outlined"
          >
            them nhan vien
          </Button>
        </Paper>
      </Grid>
      <Grid item lg={12}>
        <Paper>
          <Typography sx={{ padding: 2 }} variant="h6">
            Danh sach nhan vien
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
                <TableRow>
                  <TableCell>123</TableCell>
                  <TableCell>
                    <Avatar sx={{ bgcolor: randomColor() }} />
                  </TableCell>
                  <TableCell>Nguyen Van A</TableCell>
                  <TableCell>0123456789</TableCell>
                  <TableCell>Nam</TableCell>
                  <TableCell>21/03/1999</TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <Button size="small" color="error">
                        xoa
                      </Button>
                      <Button
                        onClick={() =>
                          navigate(`/nhan-vien/sua-nhan-vien/${123}`)
                        }
                        size="small"
                      >
                        sua
                      </Button>
                    </ButtonGroup>
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
