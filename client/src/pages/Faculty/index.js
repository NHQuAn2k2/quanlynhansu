import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "../../components/Card";
import { AddIcon } from "../../icon";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
export default function Faculties() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Card title="Thao tac">
          <Button
            onClick={() => navigate("/khoa/them")}
            size="small"
            variant="outlined"
            startIcon={<AddIcon />}
          >
            them khoa
          </Button>
        </Card>
      </Grid>
      <Grid item lg={12}>
        <Card title="Danh sach khoa">
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <CardItem
                onClick={() => navigate("/khoa/chi-tiet/123")}
                title="Khoa Cong Nghe Thong Tin"
                quantity={12}
              />
            </Grid>
            <Grid item lg={4}>
              <CardItem title="Khoa Ky Thuat Cong Trinh" quantity={10} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
