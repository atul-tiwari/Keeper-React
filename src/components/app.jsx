import React,{ useState } from 'react'; // eslint-disable-next-line
import PageHeader from './Header'
import PageFooter from './PageFooter'
import Note from './Note';
import CreateArea from './CreateArea';
import TempNodes from '../notes';




function App(){
    
    const [Notes , serNotes] = useState(TempNodes);

    function addNote(title,content,id){
        serNotes((prev)=>{
            return [...prev,{title:title,content:content,id:id}]
        })
    }

    function deleteNote(id){
    
        serNotes((prev)=>{
            return prev.filter((item)=> item.id!==id)
        })
       
    }

    return <div>

        <PageHeader/>
        <CreateArea
            onAddNote = {addNote}
        />
        
        {Notes.map((item) => {
                return (<Note
                    key={item.id}
                    title = {item.title}
                    content = {item.content}
                    onDeleteNote ={deleteNote}
                    id={item.id}
                />);
            })}
        <PageFooter/>
    </div>
}

export default App;