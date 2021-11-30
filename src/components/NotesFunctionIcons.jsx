import * as React from "react";
import { useState, Fragment } from "react";
import { Grid, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import Popover from "@mui/material/Popover";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { updateNotes } from "../service/notesIntegration";
import { updateOneNote } from "../reduxActions/actionsOnNotes";
import ColorPalette from "./ColorPalette";

export default function NotesFunctionIcons(props) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState("White");
  const [image,setImage]=React.useState("");

  const dispatch = useDispatch();

  const handleDelete = (item) => {
    const dataDelete = {
      title: props.item.title,
      content: props.item.content,
      isTrash: true,
      color: props.item.color,
      profileImg:props.item.image,
    };
    updateNotes(dataDelete, props.item._id)
      .then((res) => {
        dispatch(updateOneNote(res));
        setOpenSnackbar(true);
      })
      .catch((err) => console.log(err.message));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = (colorNote, image) => {
    const dataNotes = {
      title: props.item.title,
      content: props.item.content,
      isTrash: false,
      color: colorNote,
      profileImg:image,
    };
    console.log(dataNotes);
    console.log(props.item._id);
    updateNotes(dataNotes, props.item._id)
      .then((res) => {
        dispatch(updateOneNote(res));
      })
      .catch((err) => console.log(err.message));
    handleClose();
  };

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpenSnackbar(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePClose = () => {
    setAnchorEl(null);
  };
  const openA = Boolean(anchorEl);
  const id = openA ? "simple-popover" : undefined;

  const handleImage = (imagef) => {
    const formData = new FormData();
    formData.append('title', props.item.title);
    formData.append('content', props.item.content);
    formData.append('color', props.item.color);
    formData.append('profileImg', imagef);
    updateNotes(formData, props.item._id).then((res) => {
        dispatch(updateOneNote(res))
    }).catch((err) => console.log(err.message));
}

  return (
    <Box>
      <Grid>
        <IconButton size="small" color="default" sx={{ padding: "8px" }}>
          <AddAlertOutlinedIcon />
        </IconButton>
        <IconButton size="small" color="default" sx={{ padding: "8px" }}>
          <PersonAddOutlinedIcon />
        </IconButton>
        <IconButton
          size="small"
          color="default"
          sx={{ padding: "8px" }}
          onClick={handleClick}
        >
          <ColorLensOutlinedIcon />
        </IconButton>
        <Popover
          id={id}
          open={openA}
          anchorEl={anchorEl}
          onClose={handlePClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Grid container >
            {ColorPalette.map((colorItem, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  sx={{ width: "11px" }}
                  key={index}
                >
                  <IconButton
                    onClick={() => {
                      setColor(colorItem.colorCode);
                      handleUpdate(colorItem.colorCode);
                    }}
                  >
                    <Brightness1Icon style={{ color: colorItem.colorCode }} />
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
        </Popover>
        <Fragment>
        <input
          accept="image/*"
          type="file"
          onChange={(e)=>{
              console.log(image)
            handleImage(e.target.files[0],props.item)}}
          id="icon-button-file"
          style={{ display: 'none', }}
        />
        <label htmlFor="icon-button-file">
        <IconButton size="small" color="default" component="span" sx={{ padding: "8px" }} >
          <InsertPhotoOutlinedIcon color="action" />
        </IconButton>
        </label>
      </Fragment>
        <IconButton size="small" color="default" sx={{ padding: "8px" }}>
          <ArchiveOutlinedIcon />
        </IconButton>
        <IconButton
          size="small"
          color="default"
          sx={{ padding: "8px" }}
          onClick={handleDelete}
        >
          <DeleteOutlinedIcon />
          
        </IconButton>
        <Snackbar
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        open={openSnackbar}
        autoHideDuration={5000}
        message="Note moved to Recycle Bin"
        onClose={handleToClose}
        action={<CloseIcon fontSize="small" onClick={handleToClose} />}
      />
      </Grid>
    </Box>
  );
}
