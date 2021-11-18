import React, { useState } from "react";
import { createNotes } from "../service/notesIntegration";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import "../css/dashboard/addNotes.css";
import NotesFunctionIcons from "../components/NotesFunctionIcons";

export default function AddNotes() {
  let history = useHistory();
  const [titleFieldVisible, setTitleFieldVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const showTitleField = () => {
    setTitleFieldVisible(true);
  };
  const hideTitleField = () => {
    setTitleFieldVisible(false);
  };

  // submit form
  const data = { title: title, content: content };
  const handleSubmit = (event) => {
    event.preventDefault();
    createNotes(data);
    history.push("/dashboard");
  };

  return (
    <div>
      <div className="create-form" style={{ paddingTop: 100 }}>
        {titleFieldVisible && (
          <div className="backdrop" onClick={hideTitleField} />
        )}

        <form className="create-note">
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
            <div className="signIn" align="left">
              {titleFieldVisible && <NotesFunctionIcons />}
            </div>
            <div className="create" align="right">
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
        </form>
      </div>
    </div>
  );
}
