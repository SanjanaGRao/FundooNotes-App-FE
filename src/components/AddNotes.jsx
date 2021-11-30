import React, { useState, Fragment } from "react";
import { createNewNotes } from "../service/notesIntegration";
import { Button, Grid, IconButton, CardMedia } from "@mui/material";
import "../css/dashboard/addNotes.css";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { useDispatch } from "react-redux";
import { addNote } from "../reduxActions/actionsOnNotes";
import ColorPalette from "./ColorPalette";
import Popover from "@mui/material/Popover";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ImageIcon from '@mui/icons-material/Image';

export default function AddNotes() {
  const [titleFieldVisible, setTitleFieldVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [color, setColor] = React.useState("White");
  const [file,setFile]=useState('');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const showTitleField = () => {
    setTitleFieldVisible(true);
  };
  const hideTitleField = () => {
    setTitleFieldVisible(false);
  };


  const handleSubmit = (event) => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('color', color)
    formData.append('profileImg', file)
    event.preventDefault();
    console.log(formData);
    createNewNotes(formData)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          dispatch(addNote(res.data.message));
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err.message));
    setTitle("");
    setContent("");
    setColor("White");
    setFile("");
    hideTitleField();
  };

  const handleColor = (colorItem) => {
    setColor(colorItem);
  };

  return (
    <div>
      <div className="create-form" style={{ paddingTop: 110, paddingLeft: 340 }}>
        {titleFieldVisible && (
          <div className="backdrop" onClick={hideTitleField} />
        )}

        <form className="create-note" style={{ background: color }}>
          {file !== "" && { titleFieldVisible } ? (
            <CardMedia
              component="img"
              image={URL.createObjectURL(file)}
              alt="dish"
            />
          ) : null}
          {titleFieldVisible && (
            <input
              className="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              onFocus={showTitleField}
              name="title"
              placeholder="Title"
            />
          )}

          <textarea
            className="text-area"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            onFocus={showTitleField}
            name="content"
            placeholder="Take a note..."
          />
          <div className="iconsAndAddNote">
            <div className="icons">
              <div className="signInNew" align="left">
                {titleFieldVisible && (
                  <div>
                    <IconButton onClick={handleClick}>
                      <ColorLensOutlinedIcon />
                    </IconButton>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      {" "}
                      <Grid container sx={{ p: 1 }}>
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
                                  handleColor(colorItem.colorCode);
                                }}
                              >
                                <Brightness1Icon
                                  style={{ color: colorItem.colorCode }}
                                />
                              </IconButton>
                            </Grid>
                          );
                        })}{" "}
                      </Grid>
                    </Popover>
                    <Fragment>
                      <input
                        accept="image/*"
                        type="file"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                        id="icon-button-file"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="icon-button-file">
                        <Button component="span" size="large">
                          <ImageIcon color="action" />
                        </Button>
                      </label>
                    </Fragment>
                  </div>
                )}
              </div>
            </div>
            <div className="submitAndClose">
              <div className="submit" align="left">
                {titleFieldVisible && (
                  <Button
                    variant="text"
                    id="submitButton"
                    type="submit"
                    onClick={(e) => {handleSubmit(e)} }
                    style={{ textTransform: "none", marginLeft: 250 }}
                    color="inherit"
                  >
                    <b>Submit</b>
                  </Button>
                )}
              </div>
              <div className="createNew" align="right">
                {titleFieldVisible && (
                  <Button
                    variant="text"
                    id="submitButton"
                    type="submit"
                    onClick={hideTitleField}
                    style={{ textTransform: "none" }}
                    color="inherit"
                  >
                    <b>Close</b>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
