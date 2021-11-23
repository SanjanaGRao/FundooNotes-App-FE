import * as React from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Image from "../components/UploadImage";

export default function NotesFunctionIcons() {
  const addImage = (event) => {
    event.preventDefault();
    <Image />
  }

  return (
    <div>
      <Grid>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <AddAlertOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <PersonAddOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <ColorLensOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "9px" }} >
          <InsertPhotoOutlinedIcon onClick={addImage}/>
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <ArchiveOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "9px" }}>
          <MoreVertOutlinedIcon />
        </IconButton>
      </Grid>
    </div>
  );
}