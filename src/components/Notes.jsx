import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NotesFunctionIcons from "../components/NotesFunctionIcons";
import "../css/dashboard/addNotes.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { updateNotes } from "../service/notesIntegration";
import { useDispatch } from "react-redux";
import { updateOneNote } from "../reduxActions/actionsOnNotes";
import { styled } from "@mui/material/styles";
import { width } from "@mui/system";

const Notes = () => {
  const myNotes = useSelector((state) => state.allNotes.searchedNotes);
  const viewList = useSelector((state) => state.allNotes.viewList);
  const [mouseHover, setMouseHover] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [noteId, setNoteId] = React.useState("");
  const dispatch = useDispatch();


  const data = {
    title: title,
    content: content
  };

  const handleClickOpen = (item) => {
    setTitle(item.title);
    setContent(item.content);
    setNoteId(item._id);
    setOpen(true);
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
    <Box sx={{ mx: "5px", transform: "scale(0.8)" }}>
      <Grid container spacing={3} justifyContent={viewList ? "center" : null}>
        {myNotes.map((item, singleNote) => {
          return (
            <Grid item xs={12} md={viewList ? 8 : 3} key={item._id} >
              <Card
                variant="outlined"
                justifyContent={viewList ? "center" : null}
                sx={{ width: 300, height: 150 }}
                className="notesCard"
                key={singleNote}
                onMouseOver={() => {
                  setMouseHover({ [singleNote]: true });
                }}
                onMouseLeave={() => {
                  setMouseHover({ [singleNote]: false });
                }}
                onClick={() => {
                  handleClickOpen(item);
                }}
              >
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <br />
                  <Typography sx={{ mb: 1.2 }} color="text.secondary">
                    {item.content}
                  </Typography>
                  {mouseHover[singleNote] ? <NotesFunctionIcons /> : null}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div>
        <Dialog
          fullWidth maxWidth="sm"
          open={open}
          onClose={handleClose}
        >
          <DialogContent>
            <input
              className="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              placeholder="Title"
            />
            <textarea
              className="text-area"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="content"
              placeholder="Take a note..."
            />
          </DialogContent>
          <DialogActions>
            <Button variant="text"
                  id="submitButton"
                  type="submit"
                  onClick={handleClose}
                  style={{ textTransform: "none" }}
                  color="inherit"> 
                  <b>Close</b> 
            </Button>
            <Button  variant="text"
                  id="submitButton"
                  type="submit"
                  onClick={handleUpdate}
                  style={{ textTransform: "none" }}
                  color="inherit">
                  <b> Submit </b> 
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  ) : (
    <span>No matching results.</span>
  );
};

export default Notes;
