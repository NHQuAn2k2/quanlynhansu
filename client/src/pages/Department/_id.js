import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Card from "../../components/Card";
import { AddIcon } from "../../icon";
import CardTable from "../../components/CardTable";
import { useNavigate } from "react-router-dom";

export default function Department() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <CardTable title="Danh sach nhan vien Phong Dao Tao">
          <TableContainer sx={{ height: "450px" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Ma nhan vien</TableCell>
                  <TableCell>Ho va Ten</TableCell>
                  <TableCell>Nam sinh</TableCell>
                  <TableCell>Gioi tinh</TableCell>
                  <TableCell>So CMND/CCCD</TableCell>
                  <TableCell>Dien thoai</TableCell>
                  <TableCell>Tuy chinh</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>123</TableCell>
                  <TableCell>123</TableCell>
                  <TableCell>123</TableCell>
                  <TableCell>123</TableCell>
                  <TableCell>123</TableCell>
                  <TableCell>123</TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <Button size="small" variant="outlined">
                        xem
                      </Button>
                      <Button size="small" variant="outlined">
                        xoa
                      </Button>
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
