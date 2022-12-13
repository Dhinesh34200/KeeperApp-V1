import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [zoom,setZoom]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function zooming(){
    setZoom(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
        <form className="create-note">
        {
          zoom && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        }
        
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={zooming}
          placeholder="Take a note..."
          rows={zoom ? 3 : 1}
        />
        <Zoom in={zoom}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
      
     
      
        

      
      
    </div>
  );
}

export default CreateArea;
