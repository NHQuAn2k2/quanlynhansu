import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
export default function Faculty() {
  const navigate = useNavigate();
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Thao tac
            </Typography>
            <Button
              onClick={() => navigate("/khoa/them-khoa")}
              startIcon={<AddIcon />}
              variant="outlined"
            >
              them khoa
            </Button>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Danh sach Khoa
            </Typography>
            <Grid container spacing={2}>
              <Grid item lg={4}>
                <Paper sx={{ bgcolor: "Highlight", p: 2, color: "white" }}>
                  <Typography variant="h6" gutterBottom>
                    Khoa Cong Nghe Thong Tin
                  </Typography>
                  <Typography variant="body2">
                    So luong nhan vien: 12
                  </Typography>
                  <Button
                    onClick={() =>
                      navigate("/khoa/chi-tiet/khoa-cong-nghe-thong-tin")
                    }
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
