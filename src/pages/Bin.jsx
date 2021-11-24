import React, { useEffect } from "react";
import Appbar from "../components/Appbar";
import MiniDrawer from "../components/MiniDrawer";
import { notes } from "../service/notesIntegration";
import { useDispatch } from "react-redux";
import { setNotes } from "../reduxActions/actionsOnNotes";
import DeletedNotes from "../components/DeletedNotes";

export default function Bin() {
  const dispatch = useDispatch();
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

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("FundooNotes");
  const handleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const handleClick = (title) => {
    setTitle(title);
  };
  return (
    <div>
      <Appbar handleDrawer={handleDrawer} title={title} />
      <MiniDrawer open={open} handleClick={handleClick} />
      <DeletedNotes />
    </div>
  );
}
