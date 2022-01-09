// For rendering expense item data
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // Card is a custom component - with props.children, everything inside the <Card> tags
  // is available to the Card component in Card.js

  // props gets the current value of the title
  let title = props.title

  const clickHandler = () => {
    title = 'Updated'
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
