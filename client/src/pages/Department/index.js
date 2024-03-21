import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "../../components/Card";
import { AddIcon } from "../../icon";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
export default function Departments() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Card title="Thao tac">
          <Button
            onClick={() => navigate("/phong-ban/them")}
            size="small"
            variant="outlined"
            startIcon={<AddIcon />}
          >
            them phong ban
          </Button>
        </Card>
      </Grid>
      <Grid item lg={12}>
        <Card title="Danh sach phong ban">
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <CardItem
                onClick={() => navigate("/phong-ban/chi-tiet/123")}
                title="Phong Dao Tao"
                quantity={12}
              />
            </Grid>
            <Grid item lg={4}>
              <CardItem title="Phong Quan tri" quantity={10} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
