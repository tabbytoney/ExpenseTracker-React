// For rendering expense item data
import './ExpenseItem.css';

function ExpenseItem(props) {
  // months start at 0, so March is month 2

  return (
    // use .toISOString to get the date to show as a string. Otherwise it'll break
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
