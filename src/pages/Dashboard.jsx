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
import DeletedNotes from '../components/DeletedNotes';

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [title,setTitle] = useState('FundooNotes');
    const [path,setPath] = useState("");

    const dispatch = useDispatch();

    const handleClick=(title)=>{
      setTitle(title) ;
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

    const handleDrawerOpen = () => {
      setOpen(!open);
      console.log(open);
    };

    return (
      <Box>
        <Appbar handleDrawerOpen={handleDrawerOpen} title={title}/>
        <Box sx={{ display: "flex"}}>
        <MiniDrawer open={open}  handleDrawerOpen={handleDrawerOpen} setOpen = {setOpen} handleClick={handleClick} path={path} setPath={setPath}/>
        {(path==="trash") ? <DeletedNotes /> :
        <Box> 
         <AddNotes />
        <Box component="main" sx={{ flexGrow: 1}}>
          <Notes value={false}/>
        </Box>
        </Box>
       }
       </Box>
      </Box>
    );
}