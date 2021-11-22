import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NotesFunctionIcons from "../components/NotesFunctionIcons";

const Notes = () => {
  const myNotes = useSelector((state) => state.allNotes.searchedNotes);
  const [mouseHover, setMouseHover] = React.useState(false);
  return (
    <Box sx={{ mx: '2px', transform: 'scale(0.8)' }}>
      <Grid container spacing={4}>
        {myNotes.map((item, singleNote) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={item._id}>
              <Card variant="outlined" sx={{ width: 250, height: 170 }} key= {singleNote} onMouseOver={() => {setMouseHover({[singleNote]:true});}} onMouseLeave={() => {setMouseHover({[singleNote]:false}); }}>
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <br />
                  <Typography sx={{ mb: 1.2 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
                {mouseHover[singleNote] ? <NotesFunctionIcons /> : null}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Notes;
