import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
  // using multiple states
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // using only one state by passing in an object
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    // single state usage
    // setEnteredTitle(event.target.value);
    // prints the value - aka what's typed - into the title text box
    // console.log(event.target.value)

    setUserInput({
      // ... pulls out all the key value pairs and returns the values. Title is overridden because it's specifically mentioned here
      // If you dont do this and just have enteredTitle, enteredAmount and enteredDate just get dropped
      ...userInput,
      enteredTitle: event.target.value
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    });
  };
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
      </div>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' onChange={amountChangeHandler} min='0.1' step='0.01' />
        </div>
      </div>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
