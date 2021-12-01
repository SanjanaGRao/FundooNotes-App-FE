import {
  Grid,
  Card,
  Typography,
  Button,
  Box,
  IconButton,
  CardMedia,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import { useDispatch } from "react-redux";
import { updateOneNote, deleteOneNote } from "../reduxActions/actionsOnNotes";
import { deleteNotes, updateNotes } from "../service/notesIntegration";
import "../css/dashboard/deleteNotes.css";
import CloseIcon from "@material-ui/icons/Close";

export default function DeletedNotes() {
  const dispatch = useDispatch();
  const viewList = useSelector((state) => state.allNotes.viewList);
  const [hover, setHover] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [itemRemoved, setItemRemoved] = React.useState("");

  const handleRestore = (item) => {
    const data = {
      title: item.title,
      content: item.content,
      isTrash: false,
      color: item.color,
    };
    updateNotes(data, item._id)
      .then((res) => {
        dispatch(updateOneNote(res));
      })
      .catch((err) => console.log(err.message));
  };
  const handleDelete = (item) => {
    deleteNotes(item._id)
      .then((res) => {
        setOpen(true);
        dispatch(deleteOneNote(item._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const undoRestore = (itemRemoved) => {
    const dataRestore = {
      title: itemRemoved.title,
      content: itemRemoved.content,
      isTrash: true,
      color: itemRemoved.color,
    };
    updateNotes(dataRestore, itemRemoved._id)
      .then((res) => {
        dispatch(updateOneNote(res));
        setOpen(true);
      })
      .catch((err) => console.log(err.message));
  };

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const myNotes = useSelector((state) => state.allNotes.searchedNotes);
  console.log(myNotes);
  const emptyTrash = () => {
    myNotes.map((item) => {
      if (item.isTrash === true) {
        handleDelete(item);
      }
    });
  };
  return (
    <div className="mainPage">
      <div className="trash-text-out">
        <div className="trash-text">
          <span>Notes in Recycle Bin are deleted after 7 days.</span>
          <Button
            variant="text"
            style={{ textTransform: "none" }}
            onClick={() => {
              emptyTrash();
            }}
          >
            <b> Empty Bin </b>
          </Button>
        </div>
      </div>
      <Box sx={{ mx: "5px", transform: "scale(0.85)" }}>
        <Grid container spacing={5} justifyContent={viewList ? "center" : null}>
          {myNotes.map((item, index) => {
            if (item.isTrash === true) {
              return (
                <Grid item xs={12} md={viewList ? 8 : 3} key={item._id}>
                  <Card
                    variant="outlined"
                    style={{ background: item.color, borderRadius: "12px" }}
                    justifyContent={viewList ? "center" : null}
                    className="notesCardDelete"
                    onMouseEnter={() => {
                      setHover({ [index]: true });
                    }}
                    onMouseLeave={() => {
                      setHover({ [index]: false });
                    }}
                  >
                    <CardContent>
                      {item.profileImg !== undefined ? (
                        <CardMedia
                          component="img"
                          image={`http://localhost:4000/images/${item.profileImg}`}
                          alt="dish"
                          style={{ height: "150px" }}
                        />
                      ) : null}
                      <Typography variant="h5">{item.title}</Typography>
                      <br />
                      <Typography sx={{ mb: 1.2 }} color="text.secondary">
                        {item.content}
                      </Typography>
                      <div align="left">
                        {hover[index] ? (
                          <div className="delete-icons">
                            <IconButton
                              title="Delete forever"
                              fontSize="large"
                              onClick={() => {
                                handleDelete(item);
                              }}
                            >
                              <DeleteForeverOutlinedIcon fontSize="large" />
                            </IconButton>
                            <IconButton
                              title="Restore"
                              fontSize="large"
                              onClick={() => {
                                handleRestore(item);
                              }}
                            >
                              <RestoreFromTrashOutlinedIcon fontSize="large" />
                            </IconButton>
                            <Snackbar
                              anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                              }}
                              open={open}
                              autoHideDuration={5000}
                              message="Note restored"
                              onClose={handleToClose}
                              action={
                                <div>
                                  <Button
                                    variant="text"
                                    onClick={() => {
                                      undoRestore(itemRemoved);
                                    }}
                                  >
                                    UNDO
                                  </Button>
                                  <CloseIcon
                                    fontSize="small"
                                    onClick={handleToClose}
                                  />
                                </div>
                              }
                            />
                          </div>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
      <Snackbar
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        open={open}
        autoHideDuration={5000}
        message="Note deleted permanently"
        onClose={handleToClose}
      />
    </div>
  );
}
