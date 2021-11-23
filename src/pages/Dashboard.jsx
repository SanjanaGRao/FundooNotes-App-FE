import React from 'react';
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Appbar from "../components/Appbar";
import MiniDrawer from "../components/MiniDrawer";
import Notes from "../components/Notes";
import { notes } from "../service/notesIntegration";
import { useDispatch } from "react-redux";
import { setNotes } from "../reduxActions/actionsOnNotes";
import AddNotes from '../components/AddNotes';

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [title,setTitle] = useState('FundooNotes')

    const dispatch = useDispatch();

    const handleTitle = (title) => {
      setTitle(title);
    }

    useEffect(() => {
      fetchitem();
    }, []);

    const fetchitem = () => {
      
      notes()
        .then((res) => {
          dispatch(setNotes(res.data));
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const handleDrawer = () => {
        setOpen((previousState) => {
          return !previousState;
        });
    };



    return (
      <div>
        <Appbar handleDrawer={handleDrawer} title={title}/>
        <MiniDrawer open={open}  handleTitle={handleTitle} />
        <AddNotes />
        <Box component="main" sx={{ flexGrow: 1}}>
          <Notes />
        </Box>
      </div>
    );
}