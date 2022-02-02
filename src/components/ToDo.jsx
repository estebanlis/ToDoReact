import React from 'react';

function ToDo ({description,index,complete,completeToDo}){

    return(
        <div className ='toDoShell' onClick={completeToDo}>
           <span className={complete} id={index}>{description}</span> 
        </div>
    );
};

export default ToDo;