import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
export default function Department() {
  const navigate = useNavigate();
  const handleClick = (index) => {
    switch (index) {
      case "phong-dao-tao":
        navigate(`/phong-ban/chi-tiet/${index}`);
        break;
      default:
        break;
    }
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ paddingBottom: 2 }}>
              Thao tac
            </Typography>
            <Box sx={{ display: "flex", columnGap: 2, alignItems: "flex-end" }}>
              <Button
                onClick={() => navigate("/phong-ban/them-phong-ban")}
                startIcon={<AddIcon />}
                variant="outlined"
              >
                them phong ban
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Danh sach Phong Ban
            </Typography>
            <Grid container spacing={2}>
              <Grid item lg={4} key={uuidv4()}>
                <Paper
                  sx={{ padding: 2, bgcolor: "Highlight", color: "white" }}
                >
                  <Typography variant="h6" gutterBottom>
                    Phong Dao Tao
                  </Typography>
                  <Typography variant="body2">
                    So luong nhan vien: 12
                  </Typography>
                  <Button
                    onClick={() => handleClick("phong-dao-tao")}
                    endIcon={<ArrowRightAltIcon />}
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "white",
                      marginTop: 2,
                      "&.MuiButton-root": {
                        border: "1px solid white",
                      },
                    }}
                  >
                    xem chi tiet
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
