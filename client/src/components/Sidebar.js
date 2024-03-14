import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import GroupIcon from "@mui/icons-material/Group";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import WorkIcon from "@mui/icons-material/Work";
import PaidIcon from "@mui/icons-material/Paid";
import { grey, blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
const heightHeader = "55px";
export default function Sidebar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelected(index);
    switch (index) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/phong-ban");
        break;
      case 3:
        navigate("/khoa");
        break;
      case 4:
        navigate("/luong");
        break;
      case 5:
        navigate("/cong-tac");
        break;
      default:
        break;
    }
  };
  return (
    <Grid container>
      <Grid item lg={12}>
        <Box
          sx={{
            height: heightHeader,
            bgcolor: "Highlight",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 2,
          }}
        >
          <Typography variant="h6" color={"white"}>
            Quan Ly Nhan Su Truong Hoc STU
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
            <Avatar sx={{ width: "30px", height: "30px" }} />
            <Typography sx={{ color: "white" }}>Admin</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={2.5}>
        <Box
          sx={{
            height: `calc(100vh - ${heightHeader})`,
            overflow: "auto",
            bgcolor: blueGrey[900],
            color: "white",
          }}
        >
          <List disablePadding>
            <ListItemButton
              selected={selected === 1}
              onClick={(e) => handleListItemClick(e, 1)}
            >
              <ListItemIcon>
                <GroupIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText>Quan ly nhan vien</ListItemText>
            </ListItemButton>
            <ListItemButton
              selected={selected === 2}
              onClick={(e) => handleListItemClick(e, 2)}
            >
              <ListItemIcon>
                <AccountTreeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText>Quan ly phong ban</ListItemText>
            </ListItemButton>
            <ListItemButton
              selected={selected === 3}
              onClick={(e) => handleListItemClick(e, 3)}
            >
              <ListItemIcon>
                <AccountTreeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText>Quan ly khoa</ListItemText>
            </ListItemButton>
            <ListItemButton
              selected={selected === 4}
              onClick={(e) => handleListItemClick(e, 4)}
            >
              <ListItemIcon>
                <PaidIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText>Quan ly luong</ListItemText>
            </ListItemButton>
            <ListItemButton
              selected={selected === 5}
              onClick={(e) => handleListItemClick(e, 5)}
            >
              <ListItemIcon>
                <WorkIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText>Quan ly cong tac</ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </Grid>
      <Grid item lg={12 - 2.5}>
        <Box
          sx={{
            height: `calc(100vh - ${heightHeader})`,
            overflow: "auto",
            bgcolor: grey[200],
            padding: 2,
          }}
        >
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
}