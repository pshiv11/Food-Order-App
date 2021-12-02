import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

function MealItemForm(props) {
    return (
        
        <form className={classes.form}>
            <Input label="Amount" input={{  //this will be passed as an object to Input component where {...input}  is used, so we dont have to u
                id: 'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }} />
            <button>+ Add</button>
        </form>
       
    )
}

export default MealItemForm
