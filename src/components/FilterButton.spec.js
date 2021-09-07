
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterButton from './FilterButton';



describe("FilterButton",()=>{

    let filterButton;
    let setFilter;


    describe('clicking the All filter button',()=>{
        beforeEach(async()=>{
            
            setFilter=jest.fn().mockName("setFilter")
            ({filterButton}=render(<FilterButton
                            name="ALL"
                            ispressed={true} 
                            setFilter ={setFilter} />


            ))

        })

        it("All filter should be called",()=>{

            userEvent.click(document.querySelector("button#toggle-button"))
            expect(filterButton).toHaveBeenCalledWith("All")

        })


})

})

