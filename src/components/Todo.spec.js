

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';



describe('<Todo/>',()=>{

    let todo;
    let toggleTaskCompleted;
    let deleteTask;
    let editTask;


    beforeEach(async() =>{

        toggleTaskCompleted=jest.fn().mockName("toggleTaskCompleted");
        editTask=jest.fn().mockName("editTask");
        deleteTask=jest.fn().mockName("deleteTask");
        ({todo}=render(<Todo
            id='task-0'
            name='text'
            completed={true}
            key= 'task-0'
            editTask={editTask}
            deleteTask={deleteTask}
            toggleTaskCompleted={toggleTaskCompleted}/>
            )


        );
    });

        it("Toggle Event Completed",()=>{
            
            userEvent.click(document.querySelector('input[type=checkbox]'))
            expect(toggleTaskCompleted).toBeCalledWith("task-0");

        })


        it("editTask ",()=>{

            userEvent.click(document.querySelector("button.btn-edit"));
            userEvent.type(document.querySelector("input.todo-text"),"New-edited-task");
            userEvent.click(document.querySelector("button#save-button"));
            expect(editTask).toHaveBeenCalledWith('task-0',"New-edited-task");

        
        })


        it("DeleteTask ",()=>{

            userEvent.click(document.querySelector("button#btn-delete"));
            
            expect(deleteTask).toHaveBeenCalledWith('task-0');






    })




})


