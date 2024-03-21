import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "../../components/Card";
import { AddIcon } from "../../icon";
import { useNavigate } from "react-router-dom";
import CardTable from "../../components/CardTable";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ButtonGroup from "@mui/material/ButtonGroup";
import Chip from "@mui/material/Chip";

export default function Work() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Card title="Thao tac">
          <Button
            onClick={() => navigate("/cong-tac/them")}
            startIcon={<AddIcon />}
            size="small"
            variant="outlined"
          >
            them cong tac
          </Button>
        </Card>
      </Grid>
      <Grid item lg={12}>
        <CardTable title="Danh sach cong tac">
          <TableContainer sx={{ height: "450px" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Ma nhan vien</TableCell>
                  <TableCell>Ho va Ten</TableCell>
                  <TableCell>Nam sinh</TableCell>
                  <TableCell>Ngay bat dau</TableCell>
                  <TableCell>Ngay ket thuc</TableCell>
                  <TableCell>Nam hoc</TableCell>
                  <TableCell>Hoc ky</TableCell>
                  <TableCell>Trang thai</TableCell>
                  <TableCell>Tuy chinh</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>123</TableCell>
                  <TableCell>Nguyen Van A</TableCell>
                  <TableCell>10/10/1999</TableCell>
                  <TableCell>10/10/1999</TableCell>
                  <TableCell>10/12/1999</TableCell>
                  <TableCell>2024 - 2025</TableCell>
                  <TableCell>hoc ky 1</TableCell>
                  <TableCell>
                    <Chip size="small" color="success" label="dang lam viec" />
                  </TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <Button size="small">xem</Button>
                      <Button size="small">sua</Button>
                      <Button size="small">xoa</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardTable>
      </Grid>
    </Grid>
  );
}
