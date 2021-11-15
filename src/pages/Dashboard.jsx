import React from 'react';
import { useState, useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import Appbar from "../components/Appbar";
import MiniDrawer from "../components/MiniDrawer";
import Notes from "../components/Notes";
import notes from "../service/notesIntegration"

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState([]);

    useEffect(() => {
      fetchitem();
    }, []);

    const fetchitem = () => {
      notes()
        .then((res) => {
          setNote(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const handleDrawer = () => {
      setOpen(!open);
    };
 
    const handleDrawerOpen = () =>  {
      setOpen(true);
    };

    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Appbar handleDrawer={handleDrawer} />
        <MiniDrawer open={open}  />
        <Box sx={{ flexGrow: 1, p: 3}}>
          <Notes notes={note} />
        </Box>
      </Box>
    );
}