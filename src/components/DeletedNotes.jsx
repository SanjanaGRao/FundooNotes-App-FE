import { Grid, Card, Typography, Button, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { useDispatch } from "react-redux";
import { updateOneNote, deleteOneNote } from "../reduxActions/actionsOnNotes";
import { deleteNotes, updateNotes } from "../service/notesIntegration";
import "../css/dashboard/deleteNotes.css";

export default function DeletedNotes() {
  const dispatch = useDispatch();
  const viewList = useSelector((state) => state.allNotes.viewList);

  const handleRestore = (item) => {
    const data = {
      title: item.title,
      content: item.content,
      isTrash: false,
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
        dispatch(deleteOneNote(item._id));
      })
      .catch((err) => {
        console.log(err);
      });
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
          <span>Notes in trash are deleted after 7 days.</span>
          <br />
          <Button
            variant="text"
            onClick={() => {
              emptyTrash();
            }}
          >
            Empty trash
          </Button>
        </div>
      </div>
      <Box sx={{ mx: "5px", transform: "scale(0.8)" }}>
      <Grid container spacing={3} justifyContent={viewList ? "center" : null}>
        {myNotes.map((item) => {
          if (item.isTrash === true) {
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
                  sx={{ width: 250, height: 130 }}
                  className="notesCardDelete"
                >
                  <CardContent>
                    <Typography variant="h5">{item.title}</Typography>
                    <br />
                    <Typography sx={{ mb: 1.2 }} color="text.secondary">
                      {item.content}
                    </Typography>

                    <DeleteForeverIcon
                      fontSize="small"
                      color="default" 
                      sx={{ padding: "9px" }}
                      onClick={() => {
                        console.log(item);
                        handleDelete(item);
                      }}
                    />
                    <RestoreFromTrashIcon
                      fontSize="small"
                      color="default" 
                      sx={{ padding: "9px" }}
                      onClick={() => {
                        handleRestore(item);
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            );
          }
        })}{" "}
      </Grid>
      </Box>
    </div>
  );
}
