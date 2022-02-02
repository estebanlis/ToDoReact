import React from 'react';
import ToDo from './ToDo.jsx';

function ToDos ({todos,completeToDo}){
    function complText(text){
        if (text){
            return 'completeText';
        }else{return '';}
    }

    return(
        <div id ='toDoContainer'>
            {todos.map((t,index) => 
            <ToDo 
            description={t.description}
            complete={complText(t.complete)}
            index={index}
            completeToDo={() => completeToDo(index)}
            key={index}

            /> 
                )}
           
        </div>
    );
};

export default ToDos;