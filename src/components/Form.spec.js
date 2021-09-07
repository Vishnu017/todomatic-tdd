import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';


describe('<Form/>',()=>{
    let form;
    let AddNewTask;


    describe('clicking the add button',()=>{
        beforeEach(async () => {
            AddNewTask=jest.fn().mockName('AddNewTask');
            ({form} = render(<Form addTask={AddNewTask}/>));
            userEvent.type(document.querySelector("input#new-todo-input"),"New Task");
            userEvent.click(document.querySelector("button#button-form"));
            
        });
        
        it('clears the text field',()=>{
            expect(document.querySelector("input#new-todo-input").value).toEqual("");
        });
        it("calls the add task correctly",()=>{
            expect(AddNewTask).toHaveBeenCalledWith('New Task');
        });
    });
})
