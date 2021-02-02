import React from 'react';
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import Note from './Note';
import Notes from '../notes';


function App(){
    return <div>
        <PageHeader/>
        {Notes.map((item) => {
                return (<Note
                    key={item.key}
                    title = {item.title}
                    content = {item.content}
                />);
            })}
        <PageFooter/>
    </div>
}

export default App;