import React,{useState} from "react";
import uuid from 'react-uuid'

function CreateArea(props) {

    const [data, setData] = useState({title:"",content:""});

    function onTextChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setData((prev) =>{
            return {...prev,[name]:value}
        })
    }

    function onClicked(event){
        event.preventDefault();
        props.onAddNote(data.title,data.content,uuid())
        setData({title:"",content:""});
    }

  return (
    <div>
      <form>
        <input onChange={onTextChange} name="title" placeholder="Title" value = {data.title}/>
        <textarea onChange={onTextChange} name="content" placeholder="Take a note..." rows="3" value = {data.content}/>
        <button onClick={onClicked}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
//
//