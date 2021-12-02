import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography, Button, CardMedia, InputBase } from "@mui/material";
import { useSelector } from "react-redux";
import NotesFunctionIcons from "../components/NotesFunctionIcons";
import "../css/dashboard/addNotes.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { updateNotes } from "../service/notesIntegration";
import { useDispatch } from "react-redux";
import { updateOneNote } from "../reduxActions/actionsOnNotes";
import "../css/dashboard/addNotes.css";

const Notes = () => {
  const myNotes = useSelector((state) => state.allNotes.searchedNotes);
  const viewList = useSelector((state) => state.allNotes.viewList);
  const [mouseHover, setMouseHover] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [noteId, setNoteId] = React.useState("");
  const dispatch = useDispatch();
  const [color, setColor] = React.useState("White");
  const [image,setImage]=React.useState("");

  const data = {
    title: title,
    content: content,
    isTrash: false,
    color: color,
    profileImg:image,
  };

  const handleClickOpen = (item) => {
    setTitle(item.title);
    setContent(item.content);
    setNoteId(item._id);
    setOpen(true);
    setColor(item.color);
    setImage(item.profileImg);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    updateNotes(data, noteId)
      .then((res) => {
        dispatch(updateOneNote(res));
      })
      .catch((err) => console.log(err.message));
    handleClose();
  };

  return myNotes.length > 0 ? (
      <Box sx={{ mx: "5px", transform: "scale(0.85)", flexGrow: 1 }}>
        <Grid container spacing={3} justifyContent={viewList ? "center" : null}>
          {myNotes.map((item, singleNote) => {
            if (item.isTrash === false) {
              return (
                <Grid
                  position="relative"
                  item
                  xs={12}
                  md={viewList ? 8 : 3}
                  key={item._id}
                >
                  <Card
                    variant="outlined"
                    justifyContent={viewList ? "center" : null}
                    style={{ background: item.color, borderRadius: "9px" }}
                    className="notesCard"
                    key={singleNote}
                    onMouseOver={() => {
                      setMouseHover({ [singleNote]: true });
                    }}
                    onMouseLeave={() => {
                      setMouseHover({ [singleNote]: false });
                    }}
                  >
                   
                    <CardContent>
                      <div
                        onClick={() => {
                          handleClickOpen(item);
                        }}
                      >
                         {(item.profileImg !== undefined ) ? (
                    <CardMedia
                      component="img"
                      image={`http://localhost:4000/images/${item.profileImg}`}
                      alt="dish"style={{  maxwidth: 238,
                        maxHeight: 238, paddingBottom: 15 }}
                    />
                  ) : null}
                        <Typography variant="h5">{item.title}</Typography>
                        <br />
                        <Typography className="item-content" sx={{ mb: 1.2 }} color="text.secondary">
                          {item.content}
                        </Typography>
                      </div>
                      {mouseHover[singleNote] ? (
                        <div className="noteIcons">
                          <div align="left">
                            <NotesFunctionIcons item={item}/>
                          </div>
                        </div>
                      ) :<div style={{ height: "40px" }}></div>}
                    </CardContent>
                  </Card>
                </Grid>
                );
            }
          })}
        </Grid>
        <div>
          <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
            <DialogTitle style={{ background: color }}>
          <InputBase
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            inputProps={{
              style: {
                minHeight: "36px",
                width: "40vw",
                fontWeight: "bold",
                fontSize: "25px",
              },
            }}
          />
        </DialogTitle>
            <DialogContent style={{ background: color }}>
              <InputBase
                className="text-area"
                type="text"
                fullWidth
                multiline={true}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                name="content"
                placeholder="Take a note..."
                inputProps={{
                  style: { minHeight: "36px" }} }
              />
            </DialogContent>
            <DialogActions style={{ background: color }}>
            {myNotes.map((item) => {
               <NotesFunctionIcons item={item} /> 
            })}
              <Button
                variant="text"
                id="submitButton"
                type="submit"
                onClick={handleUpdate}
                style={{ textTransform: "none" }}
                color="inherit"
              >
                <b> Submit </b>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        
      </Box>
  ) : (
    null
  );
};

export default Notes;
